import util from './util/index'
import * as stringFilters from './string/index'
import * as arrayFilters from './array/index'
import * as otherFilters from './other/index'

const Vue3Filters = {
  install: function (Vue, options) {},
  filters: {...arrayFilters, ...otherFilters, ...stringFilters},
  mixin: {
    methods: {...arrayFilters, ...otherFilters, ...stringFilters}
  }
};

export default Vue3Filters;

if (typeof window !== 'undefined') {
  window.Vue3Filters = Vue3Filters;
}
