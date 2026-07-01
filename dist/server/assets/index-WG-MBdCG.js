import { jsxs, jsx } from "react/jsx-runtime";
import { R as Route } from "./router-eICKuOM2.js";
import "@tanstack/react-router";
import "../server.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router/ssr/server";
function Home() {
  const businessName = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("main", { className: "flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center", children: [
    /* @__PURE__ */ jsx("span", { className: "rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300", children: "Coming soon" }),
    /* @__PURE__ */ jsx("h1", { className: "max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl", children: businessName || "Something new is on the way" }),
    /* @__PURE__ */ jsx("p", { className: "max-w-md text-lg text-gray-600 dark:text-gray-400", children: businessName ? `${businessName} is building something. Check back soon.` : "We're building something. Check back soon." }),
    /* @__PURE__ */ jsxs("footer", { className: "absolute bottom-6 text-sm text-gray-400 dark:text-gray-600", children: [
      "Built with",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://cto.new", className: "underline hover:text-gray-600 dark:hover:text-gray-400", children: "cto.new" })
    ] })
  ] });
}
export {
  Home as component
};
