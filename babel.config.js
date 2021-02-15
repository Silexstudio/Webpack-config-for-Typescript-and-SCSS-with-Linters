module.exports = function (api) {
    const presets = [
        ['@babel/preset-typescript'],
        [
            '@babel/preset-env',
            {
                corejs: { 'version': 3 },
                useBuiltIns: 'entry',
            }
        ]
    ];

    let plugins = [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
        ['@babel/plugin-proposal-class-properties'],
        ['@babel/transform-runtime', { corejs: 3 }],
    ];

	if(api.env('production')){
		plugins.push(['transform-remove-console', { exclude: [ 'error', 'warn'] }]);
	}

	api.cache.forever();

    return {
        presets,
        plugins
    };
};