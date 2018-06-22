
/*
 * (c) 2018 by Georg Großberger <contact@grossberger-ge.org>
 *
 * This is free software; you can redistribute it and/or
 * modify it under the terms of the Apache License 2.0
 *
 * For the full copyright and license information see
 * <https://www.apache.org/licenses/LICENSE-2.0>
 */

module.exports = (opts) => {
    const merge = require("merge");
    opts = merge({
        php: "php",
        partialPaths: [],
        layoutPaths: [],
        variables: {}
    }, opts)

    const through = require("through2");
    const Fluid = require("node-fluid");

    Fluid.php = opts.php

    return through.obj(function (file, encoding, callback) {
        const PluginError = require("plugin-error");

        if (file.isStream()) {
            return this.emit('error', new PluginError("gulp-fluid", "Streams are not supported"));
        }

        const view = new Fluid();

        view.partialPaths = opts.partialPaths
        view.layoutPaths = opts.layoutPaths
        view.variables = opts.variables

        view.renderData(file.content, (err, result) => {
            if (err) {
                this.emit('error', new PluginError("gulp-fluid", "Fluid processing error"));
                return callback(err, null)
            }

            file.contents = result

            callback(null, file)
        })
    });
};
