module.exports = {
  "extends": "airbnb",
  rules: {
      "linebreak-style": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "jsx-a11y/anchor-is-valid": [ "error", {
          "components": [ "Link" ],
          "specialLink": [ "to" ],
      }],
      "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] 
  }
};