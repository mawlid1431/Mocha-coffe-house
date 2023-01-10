const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const i18n = require("i18n-express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
// qaybta websitekayga  
const homeroutes = require(`./routes/web/home`)
const aboutroutes = require(`./routes/web/about`)
const contactroutes = require(`./routes/web/contact`)
const serviceroutes = require(`./routes/web/service`)
const menueroutes = require(`./routes/web/menu`)
const dashboardRoutes = require("./routes/admin/dashboard");
const loginRoutes = require("./routes/auth/login");
const userRoutes = require("./routes/admin/users")
const menuRoutes = require("./routes/admin/menu")
const ordersRoutes = require("./routes/admin/orders")
const contactRoutes = require("./routes/admin/contacts")
//making exoress server
const app = express()

//setting view engine

const port = 1000
app.listen(port)
console.log(`running mocha house..................`);
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./web/layout/websitelayout"); // Default Layout

// Middlwares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`)) //making assets piblic
app.use(express.urlencoded({ extended: true }))   //making client dat understandable server
app.use(express.json()); //making data understable data

app.use(
  i18n({
    translationsPath: path.join(__dirname, "i18n"), // <--- use here. Specify translations files path.
    siteLangs: ["es", "en", "de", "ru", "it", "fr"],
    textsVarName: "translation",
  })
);

// Middlware for authentication 
app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 3200000,
    },
  })
);
app.use(
  session({ resave: false, saveUninitialized: true, secret: "nodedemo" })
);

// Middlware for errors
app.use(flash());


// WEB ROUTES
app.use(`/`, homeroutes)
app.use(`/menu`, menueroutes)
app.use(`/about`, aboutroutes)
app.use(`/contact`, contactroutes)
app.use(`/service`, serviceroutes)

// ADMIN ROUTES
app.use("/admin", dashboardRoutes);
app.use("/admin/users", userRoutes),
  app.use("/admin/", menuRoutes),
  app.use("/admin/", ordersRoutes),
  app.use("/admin/contacts", contactRoutes),
  // AUTH ROUTES
  app.use("/auth/login", loginRoutes);

