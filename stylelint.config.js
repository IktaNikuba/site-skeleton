export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-rational-order"
  ],
  rules: {
    "at-rule-descriptor-value-no-unknown": null,
    "declaration-property-value-no-unknown": null,
    "custom-property-empty-line-before": null,
    "no-empty-source": null,
    "custom-property-pattern": [
      "",
      {
        message: ""
      }
    ],
    "at-rule-empty-line-before": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "scss/dollar-variable-pattern": "^[a-z-_0-9]+",
    "scss/load-no-partial-leading-underscore": null,
    "scss/percent-placeholder-pattern": "^[a-z-_0-9]+",
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: [
          "first-nested"
        ],
        ignore: [
          "after-comment",
          "after-dollar-variable"
        ]
      }
    ],
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
    "value-keyword-case": [
      "lower",
      {
        ignoreProperties: [
          "/^\\$/"
        ]
      }
    ],
    "import-notation": null,
    "no-descending-specificity": null,
    "scss/no-global-function-names": null,
    "no-duplicate-selectors": null,
    "number-max-precision": null,
    "scss/at-import-partial-extension": null,
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "value-no-vendor-prefix": [
      true,
      {
        ignoreValues: [
          "box"
        ]
      }
    ]
  }
};
