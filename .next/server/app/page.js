(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
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

/***/ 9185:
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
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2838)), "C:\\Users\\Yevhenii\\Desktop\\react projects\\password-generator\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
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
const pages = ["C:\\Users\\Yevhenii\\Desktop\\react projects\\password-generator\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
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

/***/ 2537:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8562))

/***/ }),

/***/ 8562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./redux/store.ts
var store = __webpack_require__(6728);
// EXTERNAL MODULE: ./node_modules/react-password-strength-bar/dist/index.js
var dist = __webpack_require__(9975);
// EXTERNAL MODULE: ./redux/features/password-slice.ts
var password_slice = __webpack_require__(2314);
// EXTERNAL MODULE: ./redux/features/auth-slice.ts
var auth_slice = __webpack_require__(8035);
;// CONCATENATED MODULE: ./app/components/Generator.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Generator = ()=>{
    const [settingsFetched, setSettingsFetched] = (0,react_.useState)(false);
    const [justGenerated, setJustGenerated] = (0,react_.useState)(false);
    const [length, setLength] = (0,react_.useState)(0);
    const [isUppercase, setIsUppercase] = (0,react_.useState)(false);
    const [isNumbers, setIsNumbers] = (0,react_.useState)(false);
    const [isSymbols, setIsSymbols] = (0,react_.useState)(false);
    const [isSavingToSettings, setSavingToSettings] = (0,react_.useState)(false);
    const dispatch = (0,lib.useDispatch)();
    (0,react_.useEffect)(()=>{
        dispatch((0,auth_slice/* loadTokenFromStorage */.qb)());
    }, [
        dispatch
    ]);
    const result = (0,store/* useAppSelector */.C)((state)=>state.passwordReducer.value.result);
    const token = (0,store/* useAppSelector */.C)((state)=>state.authReducer.value.token);
    const getSettingsUrl = "https://password-gen-backend-production.up.railway.app/api/settings/getSettings";
    // read setting from db
    const fetchSettings = async ()=>{
        if (!token) return;
        try {
            const res = await fetch(getSettingsUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error("Failed to read settings");
            const data = await res.json();
            setIsUppercase(data.data[0].isUpperCase);
            setIsNumbers(data.data[0].isNumbers);
            setIsSymbols(data.data[0].isSymbols);
            setLength(data.data[0].passwordLength);
            setSettingsFetched(true);
        } catch (err) {
            console.error(err);
        }
    };
    (0,react_.useEffect)(()=>{
        fetchSettings();
    }, []);
    (0,react_.useEffect)(()=>{
        if (!isSavingToSettings) {
            fetchSettings();
        }
    }, [
        isSavingToSettings
    ]);
    const saveSettingsUrl = "https://password-gen-backend-production.up.railway.app/api/settings/set";
    // save settings to the db
    (0,react_.useEffect)(()=>{
        if (!settingsFetched || !token) return;
        setSavingToSettings(true);
        try {
            fetch(saveSettingsUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    isSymbols: isSymbols,
                    isUpperCase: isUppercase,
                    isNumbers: isNumbers,
                    passwordLength: length
                })
            }).then((res)=>{
                if (!res.ok) throw new Error("Failed to save settings");
                return res.json();
            }).then((data)=>{
                console.log("Password saved:", data);
            }).catch((err)=>{
                console.error("POST error:", err);
            });
        } catch (err) {
            console.error(err);
        } finally{
            setSavingToSettings(false);
        }
    }, [
        isSymbols,
        isUppercase,
        isNumbers,
        length,
        settingsFetched
    ]);
    const url = "https://password-gen-backend-production.up.railway.app/api/password/save";
    // save password to the history
    (0,react_.useEffect)(()=>{
        const whiteSpaceRegEx = new RegExp(/\s/g);
        if (!justGenerated || !result || result.trim() === "") return;
        setJustGenerated(true);
        dispatch((0,password_slice/* setSavingToHistory */.H4)(true));
        if (!token) return;
        try {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    password: result.replaceAll(whiteSpaceRegEx, "")
                })
            }).then((res)=>{
                if (!res.ok) throw new Error("Failed to save password");
                return res.json();
            }).then((data)=>{
                dispatch((0,password_slice/* setSavingDone */.AS)());
                console.log("Password saved:", data);
            }).catch((err)=>{
                console.error("POST error:", err);
                dispatch((0,password_slice/* setSavingDone */.AS)());
            });
        } catch (err) {
            console.error("JWT decode error:", err);
            dispatch((0,password_slice/* setSavingDone */.AS)());
        }
    }, [
        result
    ]);
    const setPassword = ()=>{
        let password = "";
        let characters = `abcdefghijklmnopqrstuvwxyz${isUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""}${isSymbols ? "!@#$%^&*()<>,.?/[]{}-=_+|/" : ""}${isNumbers ? "0123456789" : ""}
        `;
        while(password.length < length){
            password += characters[Math.floor(Math.random() * characters.replaceAll(/\s/g, "").length)];
        }
        setJustGenerated(true);
        dispatch((0,password_slice/* setResult */.ag)(password));
        console.log(password);
    };
    const copy = async ()=>{
        await navigator.clipboard.writeText(result);
        alert("Text copied");
    };
    const whiteSpaceRegEx = new RegExp(/\s/g);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "d-flex align-items-center justify-content-center flex-column flex-md-row main-container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "generator-container mt-5 shadow p-3 d-block rounded",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "pb-1 ms-3 ms-md-0",
                    children: "Password Generator"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "result-container d-inline-block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "d-inline-block ms-1",
                        type: "text",
                        value: result?.replaceAll(whiteSpaceRegEx, "")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn btn-dark clipboard-btn d-inline ms-2 ",
                    onClick: copy,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-clipboard mb-md-1",
                        viewBox: "0 0 16 16",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(dist/* default */.Z, {
                    password: result
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "settings w-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "setting d-flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "px-3",
                                    children: "Password length"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    value: length,
                                    onChange: (e)=>parseInt(e.target.value) >= 1 || !e.target.value ? setLength(parseInt(e.target.value)) : setLength(4),
                                    id: "length",
                                    min: "1",
                                    max: "20",
                                    className: "ms-3"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "setting ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "px-3",
                                    children: "Include uppercase letters"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    onClick: ()=>setIsUppercase(!isUppercase),
                                    checked: isUppercase,
                                    id: "uppercase",
                                    className: "ms-3"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "setting ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "px-3",
                                    children: "Include numbers"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    onClick: ()=>setIsNumbers(!isNumbers),
                                    checked: isNumbers,
                                    id: "uppercase",
                                    className: "ms-3"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "setting ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "px-3",
                                    children: "Include special symbols"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    onClick: ()=>setIsSymbols(!isSymbols),
                                    checked: isSymbols,
                                    id: "uppercase",
                                    className: "ms-3"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "generate-button btn btn-outline-light btn-lg d-block w-100 text-center",
                    disabled: length >= 4 && length <= 20 ? false : true,
                    onClick: setPassword,
                    children: "Generate"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Generator = (Generator);

;// CONCATENATED MODULE: ./app/components/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Navbar = ({ userData })=>{
    const dispatch = (0,lib.useDispatch)();
    const handleButtonLogOut = ()=>{
        if (confirm("Are you sure you want to logout?")) {
            dispatch((0,password_slice/* setResult */.ag)(""));
            dispatch((0,auth_slice/* logout */.kS)());
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-center d-flex justify-content-between flex-row-reverse text-light shadow-sm p-3 mb-5 rounded",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex align-items-center justify-content-center gap-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "text-dark",
                            children: userData?.email
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-primary",
                            onClick: handleButtonLogOut,
                            children: "Logout"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "mt-2 text-dark fs-1 d-none d-md-inline",
                    children: "Password Generator"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/main.js
var main = __webpack_require__(4550);
// EXTERNAL MODULE: ./node_modules/jwt-decode/build/esm/index.js
var esm = __webpack_require__(8228);
// EXTERNAL MODULE: ./app/styles/PasswordHistory.scss
var PasswordHistory = __webpack_require__(79);
;// CONCATENATED MODULE: ./app/components/PasswordHistory.tsx








const PasswordHistory_PasswordHistory = ()=>{
    const [passwords, setPasswords] = (0,react_.useState)([]);
    const isSaving = (0,store/* useAppSelector */.C)((state)=>state.passwordReducer.value.isSavingToHistory);
    const dispatch = (0,lib.useDispatch)();
    (0,react_.useEffect)(()=>{
        dispatch((0,auth_slice/* loadTokenFromStorage */.qb)());
    }, [
        dispatch
    ]);
    const token = (0,store/* useAppSelector */.C)((state)=>state.authReducer.value.token);
    if (!token) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "d-flex justify-content-center align-items-center",
        style: {
            height: "100vh"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(main.Oval, {
            visible: true,
            height: "80",
            width: "80",
            color: "#4fa94d",
            ariaLabel: "oval-loading",
            wrapperStyle: {},
            wrapperClass: ""
        })
    });
    const url = "https://password-gen-backend-production.up.railway.app/api/password/getHistory";
    // fetchHistory
    const fetchData = async ()=>{
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error("Failed to fetch passwords");
            const data = await res.json();
            setPasswords(data?.data[0]?.passwordsGenerated ?? []);
            console.log("Fetched data:", data?.data[0]?.passwordsGenerated);
        } catch (err) {
            console.error(err);
        }
    };
    // fetch data on mount
    (0,react_.useEffect)(()=>{
        fetchData();
    }, []);
    (0,react_.useEffect)(()=>{
        if (!isSaving) {
            fetchData();
            console.log(isSaving);
        }
    }, [
        isSaving
    ]);
    const deleteUrl = "https://password-gen-backend-production.up.railway.app/api/password/override";
    const handleDelete = async (password)=>{
        try {
            const res = await fetch(deleteUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    passwordForDelete: password
                })
            });
            if (!res.ok) throw new Error("Failed to delete password");
            const updated = passwords.filter((item)=>item !== password);
            setPasswords(updated);
        } catch (err) {
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "password-container dropdown ms-md-5 mt-5 shadow p-3 rounded",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn btn-sm dropdown- mt-1",
                type: "button",
                id: "dropdownMenuButton1",
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "outside",
                "aria-expanded": "false",
                style: {
                    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    fontSize: "1.25rem",
                    border: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    children: "Password History"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "dropdown-menu show",
                "aria-labelledby": "dropdownMenuButton1",
                children: passwords.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "dropdown-item text-muted",
                    children: "No saved passwords"
                }) : passwords.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "dropdown-item d-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                onClick: ()=>{
                                    dispatch((0,password_slice/* changeStrengthCheckerValue */.Zv)(item));
                                },
                                children: item
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn d-inline",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleDelete(item);
                                },
                                children: "\uD83D\uDDD1️"
                            })
                        ]
                    }, `${item}-${index}`))
            })
        ]
    });
};
/* harmony default export */ const components_PasswordHistory = (PasswordHistory_PasswordHistory);

;// CONCATENATED MODULE: ./app/components/StrentghChecker.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const StrentghChecker = ()=>{
    const dispatch = (0,lib.useDispatch)();
    const strentghCheckerValue = (0,store/* useAppSelector */.C)((state)=>state.passwordReducer.value.strengthCheckerInputValue);
    const copy = async ()=>{
        await navigator.clipboard.writeText(strentghCheckerValue);
        alert("Text copied");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "password-container ms-md-5 mt-5 shadow p-3 rounded",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "pb-1",
                children: "Password Strength Check"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "password-text",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            value: strentghCheckerValue,
                            onChange: (e)=>dispatch((0,password_slice/* changeStrengthCheckerValue */.Zv)(e.target.value))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-dark clipboard ms-1 mb-1",
                        onClick: copy,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            className: "bi bi-clipboard mb-1",
                            viewBox: "0 0 16 16",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* default */.Z, {
                    password: strentghCheckerValue
                })
            })
        ]
    });
};
/* harmony default export */ const components_StrentghChecker = (StrentghChecker);

;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











function Home() {
    const router = (0,navigation.useRouter)();
    const [userData, setUserData] = (0,react_.useState)(null);
    const [isFetching, setFetching] = (0,react_.useState)(false);
    const [isTokenLoaded, setIsTokenLoaded] = (0,react_.useState)(false);
    const dispatch = (0,lib.useDispatch)();
    const token = (0,store/* useAppSelector */.C)((state)=>state.authReducer.value.token);
    (0,react_.useEffect)(()=>{
        const load = async ()=>{
            await dispatch((0,auth_slice/* loadTokenFromStorage */.qb)());
            setIsTokenLoaded(true);
        };
        load();
    }, [
        dispatch
    ]);
    (0,react_.useEffect)(()=>{
        try {
            if (!token && isTokenLoaded) return;
            if (!token) return;
            const decoded = (0,esm/* jwtDecode */.o)(token);
            if (!decoded.exp) {
                console.warn("Decoded token doesnt have expiration date! Logging out");
                dispatch((0,auth_slice/* logout */.kS)());
                router.push("/login");
                return;
            }
            const expire = decoded.exp * 1000;
            const timeout = expire - Date.now() - 10000;
            if (timeout <= 0) {
                dispatch((0,auth_slice/* logout */.kS)());
                router.push("/login");
                return;
            }
            const timer = setTimeout(()=>{
                dispatch((0,auth_slice/* logout */.kS)());
                router.push("/login");
            }, timeout);
            return ()=>clearTimeout(timer);
        } catch (err) {
            console.error("Failed to decode token", err);
            dispatch((0,auth_slice/* logout */.kS)());
            router.push("/login");
        }
    }, [
        token,
        isTokenLoaded
    ]);
    const url = "https://password-gen-backend-production.up.railway.app/api/auth/me";
    (0,react_.useEffect)(()=>{
        setFetching(true);
        const fetchUserData = async ()=>{
            try {
                if (!token || isTokenLoaded) {
                    return;
                }
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!res.ok) {
                    router.push("/login");
                    return;
                }
                const jsonData = await res.json();
                setUserData(jsonData);
                console.log(userData);
            } catch (err) {
                console.error("Failed to fetch data", err);
                router.push("/login");
            } finally{
                setFetching(false);
            }
        };
        fetchUserData();
    }, [
        token,
        isTokenLoaded
    ]);
    (0,react_.useEffect)(()=>{
        if (!token && isTokenLoaded) {
            router.push("/login");
        }
    }, [
        token,
        isTokenLoaded
    ]);
    const isLoggedIn = token && userData;
    if (isFetching || !isLoggedIn) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "d-flex justify-content-center align-items-center",
            style: {
                height: "100vh"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(main.Oval, {
                visible: true,
                height: "80",
                width: "80",
                color: "#4fa94d",
                ariaLabel: "oval-loading",
                wrapperStyle: {},
                wrapperClass: ""
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                userData: userData
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex align-items-center justify-content-center flex-column flex-md-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Generator, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center flex-column justify-content-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_StrentghChecker, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_PasswordHistory, {})
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Yevhenii\Desktop\react projects\password-generator\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 79:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,128,285,661], () => (__webpack_exec__(9185)));
module.exports = __webpack_exports__;

})();