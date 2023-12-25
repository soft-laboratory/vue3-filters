import util from './util/index'
import * as stringFilters from './string/index'
import * as arrayFilters from './array/index'
import * as otherFilters from './other/index'

const Vue3Filters = {
  install: function (Vue, options) {},
  mixin: {
    methods: {...arrayFilters}
  }
};

export default Vue3Filters;

if (typeof window !== 'undefined') {
  window.Vue3Filters = Vue3Filters;
}
