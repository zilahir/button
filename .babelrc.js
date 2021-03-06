module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "modules": false,
    }],
    ["@babel/preset-stage-0", {
      "decoratorsLegacy": true,
      "pipelineProposal": "minimal",
    }],
    ["@babel/preset-react"],
  ],
};
