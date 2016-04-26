'use strict';

angular.module('linkedinLite.version', [
  'linkedinLite.version.interpolate-filter',
  'linkedinLite.version.version-directive'
])

.value('version', '0.1');
