"use strict";
exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 2948:
/***/ ((module) => {


module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 5315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const os = __webpack_require__(2037);
const tty = __webpack_require__(6224);
const hasFlag = __webpack_require__(2948);
const { env } = process;
let forceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    forceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = 1;
}
if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
        forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
    }
    if (hasFlag("color=256")) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
        return min;
    }
    if (process.platform === "win32") {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    if ("CI" in env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE"
        ].some((sign)=>sign in env) || env.CI_NAME === "codeship") {
            return 1;
        }
        return min;
    }
    if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
        return 3;
    }
    if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch(env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ("COLORTERM" in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 6742:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ 
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (false) {}
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
     false && (0) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === "%%") {
            return;
        }
        index++;
        if (match === "%c") {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem("debug", namespaces);
        } else {
            exports.storage.removeItem("debug");
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __webpack_require__(9834)(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};


/***/ }),

/***/ 9834:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ 
function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __webpack_require__(5435);
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
                // Anything else let's inspect with %O
                args.unshift("%O");
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") {
                    return "%";
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split){
            if (ns[0] === "-") {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === "*") {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === "*"){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;


/***/ }),

/***/ 6496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ 
if (typeof process === "undefined" || process.type === "renderer" || false === true || process.__nwjs) {
    module.exports = __webpack_require__(6742);
} else {
    module.exports = __webpack_require__(160);
}


/***/ }),

/***/ 160:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */ 
const tty = __webpack_require__(6224);
const util = __webpack_require__(3837);
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __webpack_require__(5315);
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === "null") {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = "\x1b[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1b[0m");
    } else {
        args[0] = getDate() + name + " " + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return "";
    }
    return new Date().toISOString() + " ";
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + "\n");
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __webpack_require__(9834)(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split("\n").map((str)=>str.trim()).join(" ");
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 5098:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * depd
 * Copyright(c) 2014-2018 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 */ 
var relative = (__webpack_require__(1017).relative);
/**
 * Module exports.
 */ module.exports = depd;
/**
 * Get the path to base files on.
 */ var basePath = process.cwd();
/**
 * Determine if namespace is contained in the string.
 */ function containsNamespace(str, namespace) {
    var vals = str.split(/[ ,]+/);
    var ns = String(namespace).toLowerCase();
    for(var i = 0; i < vals.length; i++){
        var val = vals[i];
        // namespace contained
        if (val && (val === "*" || val.toLowerCase() === ns)) {
            return true;
        }
    }
    return false;
}
/**
 * Convert a data descriptor to accessor descriptor.
 */ function convertDataDescriptorToAccessor(obj, prop, message) {
    var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    var value = descriptor.value;
    descriptor.get = function getter() {
        return value;
    };
    if (descriptor.writable) {
        descriptor.set = function setter(val) {
            return value = val;
        };
    }
    delete descriptor.value;
    delete descriptor.writable;
    Object.defineProperty(obj, prop, descriptor);
    return descriptor;
}
/**
 * Create arguments string to keep arity.
 */ function createArgumentsString(arity) {
    var str = "";
    for(var i = 0; i < arity; i++){
        str += ", arg" + i;
    }
    return str.substr(2);
}
/**
 * Create stack string from stack.
 */ function createStackString(stack) {
    var str = this.name + ": " + this.namespace;
    if (this.message) {
        str += " deprecated " + this.message;
    }
    for(var i = 0; i < stack.length; i++){
        str += "\n    at " + stack[i].toString();
    }
    return str;
}
/**
 * Create deprecate for namespace in caller.
 */ function depd(namespace) {
    if (!namespace) {
        throw new TypeError("argument namespace is required");
    }
    var stack = getStack();
    var site = callSiteLocation(stack[1]);
    var file = site[0];
    function deprecate(message) {
        // call to self as log
        log.call(deprecate, message);
    }
    deprecate._file = file;
    deprecate._ignored = isignored(namespace);
    deprecate._namespace = namespace;
    deprecate._traced = istraced(namespace);
    deprecate._warned = Object.create(null);
    deprecate.function = wrapfunction;
    deprecate.property = wrapproperty;
    return deprecate;
}
/**
 * Determine if event emitter has listeners of a given type.
 *
 * The way to do this check is done three different ways in Node.js >= 0.8
 * so this consolidates them into a minimal set using instance methods.
 *
 * @param {EventEmitter} emitter
 * @param {string} type
 * @returns {boolean}
 * @private
 */ function eehaslisteners(emitter, type) {
    var count = typeof emitter.listenerCount !== "function" ? emitter.listeners(type).length : emitter.listenerCount(type);
    return count > 0;
}
/**
 * Determine if namespace is ignored.
 */ function isignored(namespace) {
    if (process.noDeprecation) {
        // --no-deprecation support
        return true;
    }
    var str = process.env.NO_DEPRECATION || "";
    // namespace ignored
    return containsNamespace(str, namespace);
}
/**
 * Determine if namespace is traced.
 */ function istraced(namespace) {
    if (process.traceDeprecation) {
        // --trace-deprecation support
        return true;
    }
    var str = process.env.TRACE_DEPRECATION || "";
    // namespace traced
    return containsNamespace(str, namespace);
}
/**
 * Display deprecation message.
 */ function log(message, site) {
    var haslisteners = eehaslisteners(process, "deprecation");
    // abort early if no destination
    if (!haslisteners && this._ignored) {
        return;
    }
    var caller;
    var callFile;
    var callSite;
    var depSite;
    var i = 0;
    var seen = false;
    var stack = getStack();
    var file = this._file;
    if (site) {
        // provided site
        depSite = site;
        callSite = callSiteLocation(stack[1]);
        callSite.name = depSite.name;
        file = callSite[0];
    } else {
        // get call site
        i = 2;
        depSite = callSiteLocation(stack[i]);
        callSite = depSite;
    }
    // get caller of deprecated thing in relation to file
    for(; i < stack.length; i++){
        caller = callSiteLocation(stack[i]);
        callFile = caller[0];
        if (callFile === file) {
            seen = true;
        } else if (callFile === this._file) {
            file = this._file;
        } else if (seen) {
            break;
        }
    }
    var key = caller ? depSite.join(":") + "__" + caller.join(":") : undefined;
    if (key !== undefined && key in this._warned) {
        // already warned
        return;
    }
    this._warned[key] = true;
    // generate automatic message from call site
    var msg = message;
    if (!msg) {
        msg = callSite === depSite || !callSite.name ? defaultMessage(depSite) : defaultMessage(callSite);
    }
    // emit deprecation if listeners exist
    if (haslisteners) {
        var err = DeprecationError(this._namespace, msg, stack.slice(i));
        process.emit("deprecation", err);
        return;
    }
    // format and write message
    var format = process.stderr.isTTY ? formatColor : formatPlain;
    var output = format.call(this, msg, caller, stack.slice(i));
    process.stderr.write(output + "\n", "utf8");
}
/**
 * Get call site location as array.
 */ function callSiteLocation(callSite) {
    var file = callSite.getFileName() || "<anonymous>";
    var line = callSite.getLineNumber();
    var colm = callSite.getColumnNumber();
    if (callSite.isEval()) {
        file = callSite.getEvalOrigin() + ", " + file;
    }
    var site = [
        file,
        line,
        colm
    ];
    site.callSite = callSite;
    site.name = callSite.getFunctionName();
    return site;
}
/**
 * Generate a default message from the site.
 */ function defaultMessage(site) {
    var callSite = site.callSite;
    var funcName = site.name;
    // make useful anonymous name
    if (!funcName) {
        funcName = "<anonymous@" + formatLocation(site) + ">";
    }
    var context = callSite.getThis();
    var typeName = context && callSite.getTypeName();
    // ignore useless type name
    if (typeName === "Object") {
        typeName = undefined;
    }
    // make useful type name
    if (typeName === "Function") {
        typeName = context.name || typeName;
    }
    return typeName && callSite.getMethodName() ? typeName + "." + funcName : funcName;
}
/**
 * Format deprecation message without color.
 */ function formatPlain(msg, caller, stack) {
    var timestamp = new Date().toUTCString();
    var formatted = timestamp + " " + this._namespace + " deprecated " + msg;
    // add stack trace
    if (this._traced) {
        for(var i = 0; i < stack.length; i++){
            formatted += "\n    at " + stack[i].toString();
        }
        return formatted;
    }
    if (caller) {
        formatted += " at " + formatLocation(caller);
    }
    return formatted;
}
/**
 * Format deprecation message with color.
 */ function formatColor(msg, caller, stack) {
    var formatted = "\x1b[36;1m" + this._namespace + "\x1b[22;39m" + // bold cyan
    " \x1b[33;1mdeprecated\x1b[22;39m" + // bold yellow
    " \x1b[0m" + msg + "\x1b[39m" // reset
    ;
    // add stack trace
    if (this._traced) {
        for(var i = 0; i < stack.length; i++){
            formatted += "\n    \x1b[36mat " + stack[i].toString() + "\x1b[39m" // cyan
            ;
        }
        return formatted;
    }
    if (caller) {
        formatted += " \x1b[36m" + formatLocation(caller) + "\x1b[39m" // cyan
        ;
    }
    return formatted;
}
/**
 * Format call site location.
 */ function formatLocation(callSite) {
    return relative(basePath, callSite[0]) + ":" + callSite[1] + ":" + callSite[2];
}
/**
 * Get the stack as array of call sites.
 */ function getStack() {
    var limit = Error.stackTraceLimit;
    var obj = {};
    var prep = Error.prepareStackTrace;
    Error.prepareStackTrace = prepareObjectStackTrace;
    Error.stackTraceLimit = Math.max(10, limit);
    // capture the stack
    Error.captureStackTrace(obj);
    // slice this function off the top
    var stack = obj.stack.slice(1);
    Error.prepareStackTrace = prep;
    Error.stackTraceLimit = limit;
    return stack;
}
/**
 * Capture call site stack from v8.
 */ function prepareObjectStackTrace(obj, stack) {
    return stack;
}
/**
 * Return a wrapped function in a deprecation message.
 */ function wrapfunction(fn, message) {
    if (typeof fn !== "function") {
        throw new TypeError("argument fn must be a function");
    }
    var args = createArgumentsString(fn.length);
    var stack = getStack();
    var site = callSiteLocation(stack[1]);
    site.name = fn.name;
    // eslint-disable-next-line no-new-func
    var deprecatedfn = new Function("fn", "log", "deprecate", "message", "site", '"use strict"\n' + "return function (" + args + ") {" + "log.call(deprecate, message, site)\n" + "return fn.apply(this, arguments)\n" + "}")(fn, log, this, message, site);
    return deprecatedfn;
}
/**
 * Wrap property in a deprecation message.
 */ function wrapproperty(obj, prop, message) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new TypeError("argument obj must be object");
    }
    var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if (!descriptor) {
        throw new TypeError("must call property on owner object");
    }
    if (!descriptor.configurable) {
        throw new TypeError("property must be configurable");
    }
    var deprecate = this;
    var stack = getStack();
    var site = callSiteLocation(stack[1]);
    // set site name
    site.name = prop;
    // convert data descriptor
    if ("value" in descriptor) {
        descriptor = convertDataDescriptorToAccessor(obj, prop, message);
    }
    var get = descriptor.get;
    var set = descriptor.set;
    // wrap getter
    if (typeof get === "function") {
        descriptor.get = function getter() {
            log.call(deprecate, message, site);
            return get.apply(this, arguments);
        };
    }
    // wrap setter
    if (typeof set === "function") {
        descriptor.set = function setter() {
            log.call(deprecate, message, site);
            return set.apply(this, arguments);
        };
    }
    Object.defineProperty(obj, prop, descriptor);
}
/**
 * Create DeprecationError for deprecation
 */ function DeprecationError(namespace, message, stack) {
    var error = new Error();
    var stackString;
    Object.defineProperty(error, "constructor", {
        value: DeprecationError
    });
    Object.defineProperty(error, "message", {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
    });
    Object.defineProperty(error, "name", {
        enumerable: false,
        configurable: true,
        value: "DeprecationError",
        writable: true
    });
    Object.defineProperty(error, "namespace", {
        configurable: true,
        enumerable: false,
        value: namespace,
        writable: true
    });
    Object.defineProperty(error, "stack", {
        configurable: true,
        enumerable: false,
        get: function() {
            if (stackString !== undefined) {
                return stackString;
            }
            // prepare stack trace
            return stackString = createStackString.call(this, stack);
        },
        set: function setter(val) {
            stackString = val;
        }
    });
    return error;
}


/***/ }),

/***/ 4745:
/***/ ((module) => {


module.exports = isPromise;
module.exports["default"] = isPromise;
function isPromise(obj) {
    return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}


/***/ }),

/***/ 5435:
/***/ ((module) => {

/**
 * Helpers.
 */ 
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
        return parse(val);
    } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + "s";
    }
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}


/***/ }),

/***/ 9144:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TokenData = void 0;
exports.parse = parse;
exports.compile = compile;
exports.match = match;
exports.pathToRegexp = pathToRegexp;
exports.stringify = stringify;
const DEFAULT_DELIMITER = "/";
const NOOP_VALUE = (value)=>value;
const ID_START = /^[$_\p{ID_Start}]$/u;
const ID_CONTINUE = /^[$\u200c\u200d\p{ID_Continue}]$/u;
const DEBUG_URL = "https://git.new/pathToRegexpError";
const SIMPLE_TOKENS = {
    // Groups.
    "{": "{",
    "}": "}",
    // Reserved.
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    "+": "+",
    "?": "?",
    "!": "!"
};
/**
 * Escape text for stringify to path.
 */ function escapeText(str) {
    return str.replace(/[{}()\[\]+?!:*]/g, "\\$&");
}
/**
 * Escape a regular expression string.
 */ function escape(str) {
    return str.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
}
/**
 * Tokenize input string.
 */ function* lexer(str) {
    const chars = [
        ...str
    ];
    let i = 0;
    function name() {
        let value = "";
        if (ID_START.test(chars[++i])) {
            value += chars[i];
            while(ID_CONTINUE.test(chars[++i])){
                value += chars[i];
            }
        } else if (chars[i] === '"') {
            let pos = i;
            while(i < chars.length){
                if (chars[++i] === '"') {
                    i++;
                    pos = 0;
                    break;
                }
                if (chars[i] === "\\") {
                    value += chars[++i];
                } else {
                    value += chars[i];
                }
            }
            if (pos) {
                throw new TypeError(`Unterminated quote at ${pos}: ${DEBUG_URL}`);
            }
        }
        if (!value) {
            throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);
        }
        return value;
    }
    while(i < chars.length){
        const value = chars[i];
        const type = SIMPLE_TOKENS[value];
        if (type) {
            yield {
                type,
                index: i++,
                value
            };
        } else if (value === "\\") {
            yield {
                type: "ESCAPED",
                index: i++,
                value: chars[i++]
            };
        } else if (value === ":") {
            const value = name();
            yield {
                type: "PARAM",
                index: i,
                value
            };
        } else if (value === "*") {
            const value = name();
            yield {
                type: "WILDCARD",
                index: i,
                value
            };
        } else {
            yield {
                type: "CHAR",
                index: i,
                value: chars[i++]
            };
        }
    }
    return {
        type: "END",
        index: i,
        value: ""
    };
}
class Iter {
    constructor(tokens){
        this.tokens = tokens;
    }
    peek() {
        if (!this._peek) {
            const next = this.tokens.next();
            this._peek = next.value;
        }
        return this._peek;
    }
    tryConsume(type) {
        const token = this.peek();
        if (token.type !== type) return;
        this._peek = undefined; // Reset after consumed.
        return token.value;
    }
    consume(type) {
        const value = this.tryConsume(type);
        if (value !== undefined) return value;
        const { type: nextType, index } = this.peek();
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}: ${DEBUG_URL}`);
    }
    text() {
        let result = "";
        let value;
        while(value = this.tryConsume("CHAR") || this.tryConsume("ESCAPED")){
            result += value;
        }
        return result;
    }
}
/**
 * Tokenized path instance.
 */ class TokenData {
    constructor(tokens){
        this.tokens = tokens;
    }
}
exports.TokenData = TokenData;
/**
 * Parse a string for the raw tokens.
 */ function parse(str, options = {}) {
    const { encodePath = NOOP_VALUE } = options;
    const it = new Iter(lexer(str));
    function consume(endType) {
        const tokens = [];
        while(true){
            const path = it.text();
            if (path) tokens.push({
                type: "text",
                value: encodePath(path)
            });
            const param = it.tryConsume("PARAM");
            if (param) {
                tokens.push({
                    type: "param",
                    name: param
                });
                continue;
            }
            const wildcard = it.tryConsume("WILDCARD");
            if (wildcard) {
                tokens.push({
                    type: "wildcard",
                    name: wildcard
                });
                continue;
            }
            const open = it.tryConsume("{");
            if (open) {
                tokens.push({
                    type: "group",
                    tokens: consume("}")
                });
                continue;
            }
            it.consume(endType);
            return tokens;
        }
    }
    const tokens = consume("END");
    return new TokenData(tokens);
}
/**
 * Compile a string to a template function for the path.
 */ function compile(path, options = {}) {
    const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
    const data = path instanceof TokenData ? path : parse(path, options);
    const fn = tokensToFunction(data.tokens, delimiter, encode);
    return function path(data = {}) {
        const [path, ...missing] = fn(data);
        if (missing.length) {
            throw new TypeError(`Missing parameters: ${missing.join(", ")}`);
        }
        return path;
    };
}
function tokensToFunction(tokens, delimiter, encode) {
    const encoders = tokens.map((token)=>tokenToFunction(token, delimiter, encode));
    return (data)=>{
        const result = [
            ""
        ];
        for (const encoder of encoders){
            const [value, ...extras] = encoder(data);
            result[0] += value;
            result.push(...extras);
        }
        return result;
    };
}
/**
 * Convert a single token into a path building function.
 */ function tokenToFunction(token, delimiter, encode) {
    if (token.type === "text") return ()=>[
            token.value
        ];
    if (token.type === "group") {
        const fn = tokensToFunction(token.tokens, delimiter, encode);
        return (data)=>{
            const [value, ...missing] = fn(data);
            if (!missing.length) return [
                value
            ];
            return [
                ""
            ];
        };
    }
    const encodeValue = encode || NOOP_VALUE;
    if (token.type === "wildcard" && encode !== false) {
        return (data)=>{
            const value = data[token.name];
            if (value == null) return [
                "",
                token.name
            ];
            if (!Array.isArray(value) || value.length === 0) {
                throw new TypeError(`Expected "${token.name}" to be a non-empty array`);
            }
            return [
                value.map((value, index)=>{
                    if (typeof value !== "string") {
                        throw new TypeError(`Expected "${token.name}/${index}" to be a string`);
                    }
                    return encodeValue(value);
                }).join(delimiter)
            ];
        };
    }
    return (data)=>{
        const value = data[token.name];
        if (value == null) return [
            "",
            token.name
        ];
        if (typeof value !== "string") {
            throw new TypeError(`Expected "${token.name}" to be a string`);
        }
        return [
            encodeValue(value)
        ];
    };
}
/**
 * Transform a path into a match function.
 */ function match(path, options = {}) {
    const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
    const { regexp, keys } = pathToRegexp(path, options);
    const decoders = keys.map((key)=>{
        if (decode === false) return NOOP_VALUE;
        if (key.type === "param") return decode;
        return (value)=>value.split(delimiter).map(decode);
    });
    return function match(input) {
        const m = regexp.exec(input);
        if (!m) return false;
        const path = m[0];
        const params = Object.create(null);
        for(let i = 1; i < m.length; i++){
            if (m[i] === undefined) continue;
            const key = keys[i - 1];
            const decoder = decoders[i - 1];
            params[key.name] = decoder(m[i]);
        }
        return {
            path,
            params
        };
    };
}
function pathToRegexp(path, options = {}) {
    const { delimiter = DEFAULT_DELIMITER, end = true, sensitive = false, trailing = true } = options;
    const keys = [];
    const sources = [];
    const flags = sensitive ? "" : "i";
    const paths = Array.isArray(path) ? path : [
        path
    ];
    const items = paths.map((path)=>path instanceof TokenData ? path : parse(path, options));
    for (const { tokens } of items){
        for (const seq of flatten(tokens, 0, [])){
            const regexp = sequenceToRegExp(seq, delimiter, keys);
            sources.push(regexp);
        }
    }
    let pattern = `^(?:${sources.join("|")})`;
    if (trailing) pattern += `(?:${escape(delimiter)}$)?`;
    pattern += end ? "$" : `(?=${escape(delimiter)}|$)`;
    const regexp = new RegExp(pattern, flags);
    return {
        regexp,
        keys
    };
}
/**
 * Generate a flat list of sequence tokens from the given tokens.
 */ function* flatten(tokens, index, init) {
    if (index === tokens.length) {
        return yield init;
    }
    const token = tokens[index];
    if (token.type === "group") {
        const fork = init.slice();
        for (const seq of flatten(token.tokens, 0, fork)){
            yield* flatten(tokens, index + 1, seq);
        }
    } else {
        init.push(token);
    }
    yield* flatten(tokens, index + 1, init);
}
/**
 * Transform a flat sequence of tokens into a regular expression.
 */ function sequenceToRegExp(tokens, delimiter, keys) {
    let result = "";
    let backtrack = "";
    let isSafeSegmentParam = true;
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i];
        if (token.type === "text") {
            result += escape(token.value);
            backtrack += token.value;
            isSafeSegmentParam || (isSafeSegmentParam = token.value.includes(delimiter));
            continue;
        }
        if (token.type === "param" || token.type === "wildcard") {
            if (!isSafeSegmentParam && !backtrack) {
                throw new TypeError(`Missing text after "${token.name}": ${DEBUG_URL}`);
            }
            if (token.type === "param") {
                result += `(${negate(delimiter, isSafeSegmentParam ? "" : backtrack)}+)`;
            } else {
                result += `([\\s\\S]+)`;
            }
            keys.push(token);
            backtrack = "";
            isSafeSegmentParam = false;
            continue;
        }
    }
    return result;
}
function negate(delimiter, backtrack) {
    if (backtrack.length < 2) {
        if (delimiter.length < 2) return `[^${escape(delimiter + backtrack)}]`;
        return `(?:(?!${escape(delimiter)})[^${escape(backtrack)}])`;
    }
    if (delimiter.length < 2) {
        return `(?:(?!${escape(backtrack)})[^${escape(delimiter)}])`;
    }
    return `(?:(?!${escape(backtrack)}|${escape(delimiter)})[\\s\\S])`;
}
/**
 * Stringify token data into a path string.
 */ function stringify(data) {
    return data.tokens.map(function stringifyToken(token, index, tokens) {
        if (token.type === "text") return escapeText(token.value);
        if (token.type === "group") {
            return `{${token.tokens.map(stringifyToken).join("")}}`;
        }
        const isSafe = isNameSafe(token.name) && isNextNameSafe(tokens[index + 1]);
        const key = isSafe ? token.name : JSON.stringify(token.name);
        if (token.type === "param") return `:${key}`;
        if (token.type === "wildcard") return `*${key}`;
        throw new TypeError(`Unexpected token: ${token}`);
    }).join("");
}
function isNameSafe(name) {
    const [first, ...rest] = name;
    if (!ID_START.test(first)) return false;
    return rest.every((char)=>ID_CONTINUE.test(char));
}
function isNextNameSafe(token) {
    if ((token === null || token === void 0 ? void 0 : token.type) !== "text") return true;
    return !ID_CONTINUE.test(token.value[0]);
} //# sourceMappingURL=index.js.map


/***/ }),

/***/ 2639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * router
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2022 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module dependencies.
 * @private
 */ const isPromise = __webpack_require__(4745);
const pathRegexp = __webpack_require__(9144);
const debug = __webpack_require__(6496)("router:layer");
const deprecate = __webpack_require__(5098)("router");
/**
 * Module variables.
 * @private
 */ const TRAILING_SLASH_REGEXP = /\/+$/;
const MATCHING_GROUP_REGEXP = /\((?:\?<(.*?)>)?(?!\?)/g;
/**
 * Expose `Layer`.
 */ module.exports = Layer;
function Layer(path, options, fn) {
    if (!(this instanceof Layer)) {
        return new Layer(path, options, fn);
    }
    debug("new %o", path);
    const opts = options || {};
    this.handle = fn;
    this.keys = [];
    this.name = fn.name || "<anonymous>";
    this.params = undefined;
    this.path = undefined;
    this.slash = path === "/" && opts.end === false;
    function matcher(_path) {
        if (_path instanceof RegExp) {
            const keys = [];
            let name = 0;
            let m;
            // eslint-disable-next-line no-cond-assign
            while(m = MATCHING_GROUP_REGEXP.exec(_path.source)){
                keys.push({
                    name: m[1] || name++,
                    offset: m.index
                });
            }
            return function regexpMatcher(p) {
                const match = _path.exec(p);
                if (!match) {
                    return false;
                }
                const params = {};
                for(let i = 1; i < match.length; i++){
                    const key = keys[i - 1];
                    const prop = key.name;
                    const val = decodeParam(match[i]);
                    if (val !== undefined) {
                        params[prop] = val;
                    }
                }
                return {
                    params,
                    path: match[0]
                };
            };
        }
        return pathRegexp.match(opts.strict ? _path : loosen(_path), {
            sensitive: opts.sensitive,
            end: opts.end,
            trailing: !opts.strict,
            decode: decodeParam
        });
    }
    this.matchers = Array.isArray(path) ? path.map(matcher) : [
        matcher(path)
    ];
}
/**
 * Handle the error for the layer.
 *
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */ Layer.prototype.handleError = function handleError(error, req, res, next) {
    const fn = this.handle;
    if (fn.length !== 4) {
        // not a standard error handler
        return next(error);
    }
    try {
        // invoke function
        const ret = fn(error, req, res, next);
        // wait for returned promise
        if (isPromise(ret)) {
            if (!(ret instanceof Promise)) {
                deprecate("handlers that are Promise-like are deprecated, use a native Promise instead");
            }
            ret.then(null, function(error) {
                next(error || new Error("Rejected promise"));
            });
        }
    } catch (err) {
        next(err);
    }
};
/**
 * Handle the request for the layer.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */ Layer.prototype.handleRequest = function handleRequest(req, res, next) {
    const fn = this.handle;
    if (fn.length > 3) {
        // not a standard request handler
        return next();
    }
    try {
        // invoke function
        const ret = fn(req, res, next);
        // wait for returned promise
        if (isPromise(ret)) {
            if (!(ret instanceof Promise)) {
                deprecate("handlers that are Promise-like are deprecated, use a native Promise instead");
            }
            ret.then(null, function(error) {
                next(error || new Error("Rejected promise"));
            });
        }
    } catch (err) {
        next(err);
    }
};
/**
 * Check if this route matches `path`, if so
 * populate `.params`.
 *
 * @param {String} path
 * @return {Boolean}
 * @api private
 */ Layer.prototype.match = function match(path) {
    let match;
    if (path != null) {
        // fast path non-ending match for / (any path matches)
        if (this.slash) {
            this.params = {};
            this.path = "";
            return true;
        }
        let i = 0;
        while(!match && i < this.matchers.length){
            // match the path
            match = this.matchers[i](path);
            i++;
        }
    }
    if (!match) {
        this.params = undefined;
        this.path = undefined;
        return false;
    }
    // store values
    this.params = match.params;
    this.path = match.path;
    this.keys = Object.keys(match.params);
    return true;
};
/**
 * Decode param value.
 *
 * @param {string} val
 * @return {string}
 * @private
 */ function decodeParam(val) {
    if (typeof val !== "string" || val.length === 0) {
        return val;
    }
    try {
        return decodeURIComponent(val);
    } catch (err) {
        if (err instanceof URIError) {
            err.message = "Failed to decode param '" + val + "'";
            err.status = 400;
        }
        throw err;
    }
}
/**
 * Loosens the given path for path-to-regexp matching.
 */ function loosen(path) {
    if (path instanceof RegExp || path === "/") {
        return path;
    }
    return Array.isArray(path) ? path.map(function(p) {
        return loosen(p);
    }) : String(path).replace(TRAILING_SLASH_REGEXP, "");
}


/***/ }),

/***/ 2377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * router
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2022 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module dependencies.
 * @private
 */ const debug = __webpack_require__(6496)("router:route");
const Layer = __webpack_require__(2639);
const { METHODS } = __webpack_require__(8849);
/**
 * Module variables.
 * @private
 */ const slice = Array.prototype.slice;
const flatten = Array.prototype.flat;
const methods = METHODS.map((method)=>method.toLowerCase());
/**
 * Expose `Route`.
 */ module.exports = Route;
/**
 * Initialize `Route` with the given `path`,
 *
 * @param {String} path
 * @api private
 */ function Route(path) {
    debug("new %o", path);
    this.path = path;
    this.stack = [];
    // route handlers for various http methods
    this.methods = Object.create(null);
}
/**
 * @private
 */ Route.prototype._handlesMethod = function _handlesMethod(method) {
    if (this.methods._all) {
        return true;
    }
    // normalize name
    let name = typeof method === "string" ? method.toLowerCase() : method;
    if (name === "head" && !this.methods.head) {
        name = "get";
    }
    return Boolean(this.methods[name]);
};
/**
 * @return {array} supported HTTP methods
 * @private
 */ Route.prototype._methods = function _methods() {
    const methods = Object.keys(this.methods);
    // append automatic head
    if (this.methods.get && !this.methods.head) {
        methods.push("head");
    }
    for(let i = 0; i < methods.length; i++){
        // make upper case
        methods[i] = methods[i].toUpperCase();
    }
    return methods;
};
/**
 * dispatch req, res into this route
 *
 * @private
 */ Route.prototype.dispatch = function dispatch(req, res, done) {
    let idx = 0;
    const stack = this.stack;
    let sync = 0;
    if (stack.length === 0) {
        return done();
    }
    let method = typeof req.method === "string" ? req.method.toLowerCase() : req.method;
    if (method === "head" && !this.methods.head) {
        method = "get";
    }
    req.route = this;
    next();
    function next(err) {
        // signal to exit route
        if (err && err === "route") {
            return done();
        }
        // signal to exit router
        if (err && err === "router") {
            return done(err);
        }
        // no more matching layers
        if (idx >= stack.length) {
            return done(err);
        }
        // max sync stack
        if (++sync > 100) {
            return setImmediate(next, err);
        }
        let layer;
        let match;
        // find next matching layer
        while(match !== true && idx < stack.length){
            layer = stack[idx++];
            match = !layer.method || layer.method === method;
        }
        // no match
        if (match !== true) {
            return done(err);
        }
        if (err) {
            layer.handleError(err, req, res, next);
        } else {
            layer.handleRequest(req, res, next);
        }
        sync = 0;
    }
};
/**
 * Add a handler for all HTTP verbs to this route.
 *
 * Behaves just like middleware and can respond or call `next`
 * to continue processing.
 *
 * You can use multiple `.all` call to add multiple handlers.
 *
 *   function check_something(req, res, next){
 *     next()
 *   }
 *
 *   function validate_user(req, res, next){
 *     next()
 *   }
 *
 *   route
 *   .all(validate_user)
 *   .all(check_something)
 *   .get(function(req, res, next){
 *     res.send('hello world')
 *   })
 *
 * @param {array|function} handler
 * @return {Route} for chaining
 * @api public
 */ Route.prototype.all = function all(handler) {
    const callbacks = flatten.call(slice.call(arguments), Infinity);
    if (callbacks.length === 0) {
        throw new TypeError("argument handler is required");
    }
    for(let i = 0; i < callbacks.length; i++){
        const fn = callbacks[i];
        if (typeof fn !== "function") {
            throw new TypeError("argument handler must be a function");
        }
        const layer = Layer("/", {}, fn);
        layer.method = undefined;
        this.methods._all = true;
        this.stack.push(layer);
    }
    return this;
};
methods.forEach(function(method) {
    Route.prototype[method] = function(handler) {
        const callbacks = flatten.call(slice.call(arguments), Infinity);
        if (callbacks.length === 0) {
            throw new TypeError("argument handler is required");
        }
        for(let i = 0; i < callbacks.length; i++){
            const fn = callbacks[i];
            if (typeof fn !== "function") {
                throw new TypeError("argument handler must be a function");
            }
            debug("%s %s", method, this.path);
            const layer = Layer("/", {}, fn);
            layer.method = method;
            this.methods[method] = true;
            this.stack.push(layer);
        }
        return this;
    };
});


/***/ })

};
;