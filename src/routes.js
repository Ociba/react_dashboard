import Dashboard from "views/Dashboard.js";
import Category from "views/Category.js";
//import Upgrade from "views/Upgrade.js";
import Admin from "views/Admin.js";
import Property from "views/Property.js";
import Owner from "views/Owner.js";
import UserPage from "views/User.js";
import Agent from "views/Agent.js";
import Client from "views/Client.js";
import AgentForm from "views/AgentForm.js";
import AddProperty from "views/AddProperty.js";
import EditAgent from "views/EditAgent.js";
import EditProperty from "views/EditProperty.js";
import EditOwner from "views/EditOwner.js";
import AddCategory from "views/AddCategory.js";
import EditCategory from "views/EditCategory.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/agent",
    name: "Agent",
    icon: "nc-icon nc-circle-10",
    component: Agent,
    layout: "/admin",
  },
  {
    path: "/owner",
    name: "Owner",
    icon: "nc-icon nc-single-02",
    component: Owner,
    layout: "/admin",
  },
  {
    path: "/client",
    name: "Client",
    icon: "nc-icon nc-tap-01",
    component: Client,
    layout: "/admin",
  },
  {
    path: "/category",
    name: "Category",
    icon: "nc-icon nc-bell-55",
    component: Category,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/property",
    name: "Property",
    icon: "nc-icon nc-tile-56",
    component: Property,
    layout: "/admin",
  },
  {
    path: "/superadmin",
    name: "Admin",
    icon: "nc-icon nc-caps-small",
    component: Admin,
    layout: "/admin",
  },
  {
    path: "/addagent",
    component: AgentForm,
    layout: "/admin"
  },
  {
    path :"/addproperty",
    component: AddProperty,
    layout: "/admin"
  },
  {
    path: "/editagent",
    component: EditAgent,
    layout: "/admin"
  },
  {
    path: "/editproperty",
    component: EditProperty,
    layout: "/admin"
  },
  {
    path: "/editowner",
    component:EditOwner,
    layout: "/admin"
  },
  {
    path: "/addcategory",
    component: AddCategory,
    layout: "/admin"
  },
  {
    path: "/editcategory",
    component:EditCategory,
    layout:"/admin"
  }
  
];
export default routes;
