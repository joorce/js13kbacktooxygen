// rollup.config.js
import minify from 'rollup-plugin-babel-minify'
export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'iife'
    },
    plugins: [
        minify({
            comments: false
        })
    ]
};
