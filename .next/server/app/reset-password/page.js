(() => {
var exports = {};
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 1695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'reset-password',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8686)), "C:\\Users\\Yevhenii\\Desktop\\react projects\\password-generator\\app\\reset-password\\page.tsx"],
          
        }]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "C:\\Users\\Yevhenii\\Desktop\\react projects\\password-generator\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["C:\\Users\\Yevhenii\\Desktop\\react projects\\password-generator\\app\\reset-password\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/reset-password/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/reset-password/page",
        pathname: "/reset-password",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 946:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7500))

/***/ }),

/***/ 7500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8035);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6728);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_AuthForm_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8920);
/* harmony import */ var _styles_AuthForm_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_AuthForm_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4550);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const page = ()=>{
    const token = (0,_redux_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((state)=>state.authReducer.value.token);
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const loadToken = async ()=>{
            await dispatch((0,_redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_1__/* .loadTokenFromStorage */ .qb)());
            setLoaded(true);
        };
        loadToken();
    }, [
        dispatch
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        if (confirmPassword !== newPassword) {
            setError("Passwords doesn't match");
            return;
        }
        const url = `${"https://password-gen-backend.onrender.com"}/api/auth/reset-password`;
        try {
            setIsFetching(true);
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newPassword: newPassword,
                    token: searchParams.get("token")
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setIsFetching(false);
                throw new Error(data.error || "Something went wrong");
            }
            console.log(data);
            if (data.error) {
                setIsFetching(false);
                setError(data.error);
                return;
            }
            setSuccessMessage("Password successfully changed. You can now log in");
            setTimeout(()=>router.push("/login"), 4000);
        } catch (err) {
            setError(err.message);
        } finally{
            setIsFetching(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !loaded ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "d-flex justify-content-center align-items-center",
            style: {
                height: "100vh"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__.Oval, {
                    visible: true,
                    height: "80",
                    width: "80",
                    color: "#4fa94d",
                    ariaLabel: "oval-loading",
                    wrapperStyle: {},
                    wrapperClass: ""
                }),
                " "
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                height: "100vh"
            },
            className: "d-flex align-items-center justify-content-center flex-column gap-4 mb-3",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "auth-form d-flex align-items-center justify-content-center flex-column gap-4 mb-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Reset password"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "input",
                        type: "password",
                        placeholder: "Enter password",
                        value: newPassword,
                        onChange: (e)=>setNewPassword(e.target.value),
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "password",
                        placeholder: "Confirm password",
                        value: confirmPassword,
                        onChange: (e)=>setConfirmPassword(e.target.value),
                        required: true
                    }),
                    successMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-success text-center",
                        children: successMessage
                    }) : "",
                    error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-danger text-center",
                        children: error
                    }) : "",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-lg btn-primary",
                        type: "submit",
                        children: "Submit"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ }),

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Yevhenii\Desktop\react projects\password-generator\app\reset-password\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 8920:
/***/ (() => {



/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(696)


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,746,550,661], () => (__webpack_exec__(3566)));
module.exports = __webpack_exports__;

})();