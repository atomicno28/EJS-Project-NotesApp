// GET-DASHBOARD
exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard",
    description: "The Dashboard Page",
  };
  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
