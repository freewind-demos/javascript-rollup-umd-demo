export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'umd',
        globals: {
            'lodash': '_'
        }
    },
    external: ['lodash']
}