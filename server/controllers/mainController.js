// GET-----HOMEPAGE
exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs Project",
    description: "Creating EJS project with NodeJs and MongoDB",
  };

  res.render("index", { locals, layout: "../views/layouts/front-page" });
};

// GET-----ABOUT
exports.about = async (req, res) => {
  const locals = {
    title: "About Page",
    description: "About the project",
  };
  res.render("about", locals);
};
