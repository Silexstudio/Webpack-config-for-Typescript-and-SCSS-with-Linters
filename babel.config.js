module.exports = function (api) {
    api.cache.forever();

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

    const plugins = [
        ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
        ['@babel/plugin-proposal-class-properties'],
        ['@babel/transform-runtime', { corejs: 3 }]
    ];

    return {
        presets,
        plugins
    };
};