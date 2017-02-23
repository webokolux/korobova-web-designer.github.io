(function() {
  angular.module("myApp", ["myApp.directives"]);

  angular.module("myApp.directives", []).directive("skills", function() {
    return {
      restrict: "C",
      controller: [
        '$scope', '$element', '$attrs', '$timeout', '$compile', function($scope, $element, $attrs, $timeout, $compile) {
          return angular.forEach($scope.skills, function(value, index) {
            var skill, time;
            time = (Math.random() * 1) + parseFloat($attrs.speed);
            skill = $compile("<div id='skills_" + value.language.toLowerCase() + "' style='transition: width " + time + "s; -webkit-transition: width " + time + "s; -o-transition: width " + time + "s; -moz-transition: width " + time + "s; background-color: " + value.color + "'><span>" + value.language + "</span></div>")($scope);
            $element.append(skill);
            return $timeout(function() {
              return skill.css({
                width: value.percentage + '%'
              });
            }, $attrs.timeout);
          });
        }
      ]
    };
  });

  angular.bootstrap(document, ['myApp']);

}).call(this);