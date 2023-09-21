function runQueue() {
  mytuner_scripts["player-v1.js_queue"].forEach(function (func) {
    func();
  });
}

var mytuner_scripts = mytuner_scripts || {};
mytuner_scripts["player-v1.js_queue"] =
  mytuner_scripts["player-v1.js_queue"] || [];
if (mytuner_scripts["player-v1.js-imported"] == undefined) {
  mytuner_scripts["player-v1.js-imported"] = false;
  mytuner_scripts["player-v1.js"] = function () {};
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://mytuner-radio.com/static/js/widgets/player-v1.js";
  s.defer = true;
  if (s.readyState) {
    //IE
    s.onreadystatechange = function () {
      if (s.readyState == "loaded" || s.readyState == "complete") {
        s.onreadystatechange = null;
        runQueue();
      }
    };
  } else {
    //Others
    s.onload = function () {
      runQueue();
    };
  }
  document.getElementsByTagName("head")[0].appendChild(s);

  mytuner_scripts["player-v1.js_queue"].push(function () {
    mytuner_scripts["player-v1.js"](
      "d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA="
    );
  });
} else {
  let widget = document.getElementById(
    "d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA="
  );
  if (widget && widget.dataset.requires_initialization === "true") {
    if (mytuner_scripts["player-v1.js-imported"]) {
      mytuner_scripts["player-v1.js"](
        "d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA="
      );
      widget.dataset.requires_initialization = "false";
    } else {
      mytuner_scripts["player-v1.js_queue"].push(function () {
        mytuner_scripts["player-v1.js"](
          "d8K/wrnDj8OVwrJ3NcKvw5TDp8O3w4J3e0rCo8Oaw5LCqGA="
        );
        widget.dataset.requires_initialization = "false";
      });
    }
  }
}
