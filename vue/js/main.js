require.config({
    paths: {
        // Transformers
        'babel': 'transform/babel',
        'component': 'transform/component',
        'less-builder':'transform/less/less-builder',
        'normalize':'transform/less/normalize',
        'lessc':'transform/less/lessc',
        'less': 'transform/less',

        // Packages
        // 'babel-standalone': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min',
        // 'babel-polyfill': 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min',
        // 'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue',
        // 'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min',
        // 'vue-router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.2/vue-router.min',
        // 'http-vue-loader': 'https://unpkg.com/http-vue-loader@1.4.0/src/httpVueLoader',

        'babel-standalone': 'http://gjp.me/vue/js/lib/babel_standalone_6.26.0_babel.min',
        'babel-polyfill': 'http://gjp.me/vue/js/lib/babel_polyfill_6.26.0_polyfill.min',
        'vue': 'http://gjp.me/vue/js/lib/vue_2.5.21_vue',
        'vuex': 'http://gjp.me/vue/js/lib/vuex_3.0.1_vuex.min',
        'vue-router': 'http://gjp.me/vue/js/lib/vue-router_3.0.2_vue-router.min',
        'http-vue-loader': 'http://gjp.me/vue/js/lib/1.4.0_src_httpVueLoader',

        'iview':'http://gjp.me/vue/js/lib/iview3.4.2.min',
        'js-cookie':'http://gjp.me/vue/js/lib/js.cookie',
        'axios':'http://gjp.me/vue/js/lib/axios.min',
        'vue-i18n':'http://gjp.me/vue/js/lib/vue-i18n.min',
        
    },
});
require(['babel!app'],function(app){
    // console.log(app);
    // 动态加载组件
    app.default.$store.sss = function(component_name,cb){
        return new Promise(function(resolve, reject) {
            require(['component!http://gjp_admin.me/js/view/'+component_name],function(component_js){
                if(component_js){
                    console.log('入口处载入的component_js');
                    console.log(component_js);
                    cb(component_js);
                    resolve(component_js);
                }else{
                    reject(false);
                }
            });
        });
    }
});
