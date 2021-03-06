"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  label: 'Item 1',
  value: 'c'
}, {
  label: 'Item 2',
  value: 'b'
}, {
  label: 'Item 3',
  value: 'o'
}];
var apiResponse = {
  position: {
    current: items[0],
    yearOfExperience: items[2]
  },
  workAs: {
    current: items
  },
  mainSkills: [{
    current: items[1],
    order: 0,
    yearOfExperience: items[1]
  }, {
    current: items[2],
    order: 1,
    yearOfExperience: items[1]
  }],
  openedPosition: true
};
(0, _react2.storiesOf)("Sections|Skills", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      position: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      workAs: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      openedPosition: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    workAs: items,
    mainSkills: items,
    positions: items,
    data: apiResponse,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("error", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      position: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      workAs: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      openedPosition: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      }
    },
    workAs: items,
    mainSkills: items,
    positions: items,
    data: apiResponse,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("loading", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      position: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      workAs: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      openedPosition: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    workAs: items,
    mainSkills: items,
    positions: items,
    data: apiResponse,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});