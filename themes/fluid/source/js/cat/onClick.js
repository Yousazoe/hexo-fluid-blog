(function() {
  function getLS(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }
  var colorSchemaStorageKey = "Fluid_Color_Scheme";
  var colorToggleButtonName = "color-toggle-btn";
  Fluid.utils.waitElementLoaded(colorToggleButtonName, function() {
    var button = document.getElementById(colorToggleButtonName);
    if (button) {
      // 当用户点击切换按钮时，获得新的显示模式、写入 localStorage、并在页面上生效
      const BODY = document.getElementsByTagName("body")[0];
      button.addEventListener("click", () => {
        var neko = BODY.createChild("div", {
          id: "neko",
          innerHTML:
            '<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'
        });

        var hideNeko = function() {
          Fluid.utils.transition(
            neko,
            {
              delay: 2500,
              opacity: 0
            },
            function() {
              BODY.removeChild(neko);
            }
          );
        };
        var currentSetting = getLS(colorSchemaStorageKey);
        if (currentSetting === "light") {
          var c = function() {
            neko.addClass("dark");
            hideNeko();
          };
        } else {
          neko.addClass("dark");
          var c = function() {
            neko.removeClass("dark");
            hideNeko();
          };
        }
        Fluid.utils.transition(neko, 1, function() {
          setTimeout(c, 210);
        });
      });
    }
  });
})();