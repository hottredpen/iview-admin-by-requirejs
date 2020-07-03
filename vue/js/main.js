require.config({
    paths: {
        // es6等转义包
        'babel-standalone': 'http://aixh-vue.me/js/lib/babel_standalone_6.26.0_babel.min',
        'babel-polyfill': 'http://aixh-vue.me/js/lib/babel_polyfill_6.26.0_polyfill.min',
        'vue': 'http://aixh-vue.me/js/lib/vue_2.5.21_vue',
        'vuex': 'http://aixh-vue.me/js/lib/vuex_3.0.1_vuex.min',
        'vue-router': 'http://aixh-vue.me/js/lib/vue-router_3.0.2_vue-router.min',
        'http-vue-loader': 'http://aixh-vue.me/js/lib/1.4.0_src_httpVueLoader',
        'iview':'http://aixh-vue.me/js/lib/iview3.4.2.min',
        'js-cookie':'http://aixh-vue.me/js/lib/js.cookie',
        'axios':'http://aixh-vue.me/js/lib/axios.min',
        'qs':'http://aixh-vue.me/js/lib/qs',
        'vue-i18n':'http://aixh-vue.me/js/lib/vue-i18n.min',
        // es6等转义(requirejs)
        'babel': 'transform/babel',
        'component': 'transform/component',
        'less-builder':'transform/less/less-builder',
        'normalize':'transform/less/normalize',
        'lessc':'transform/less/lessc',
        'less': 'transform/less',
    },
});
require(['babel!app'],function(app){
    // console.log(app);
    // 动态加载组件
    app.default.$store.sss = function(component_name,cb){
        return new Promise(function(resolve, reject) {
            // component_name = 'test3'
            var is_add_version = '?version='+Date.parse(new Date());
            is_add_version = "";
            require(['component!http://aixh-api.me/vuebuilder/'+component_name+is_add_version],function(component_js){
                // console.log(component_js);
                if(component_js){
                    // console.log('入口处载入的component_js');
                    // console.log(component_js);
                    cb(component_js);
                    resolve(true);
                }else{
                    reject(false);
                }
            });

            // require(['component!http://aixh-vue.me/js/view/'+component_name],function(component_js){
            //     if(component_js){
            //         console.log('入口处载入的component_js');
            //         console.log(component_js);
            //         cb(component_js);
            //         resolve(component_js);
            //     }else{
            //         reject(false);
            //     }
            // });
        });
    }
});
