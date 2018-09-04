export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'amd',
    },
    external: ['lodash']
}