module.exports = {
	fix : true,
	extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines", "stylelint-config-idiomatic-order"],
	plugins: [
		"stylelint-order",
		"stylelint-scss",
	],
	rules : {
		"indentation": [
			"tab",
			{
			  "except": ["block"],
			  "message": "Please use tab for indentation.",
			  "severity": "error"
			}
		],
		"max-empty-lines" : 1,
		
		"order/properties-alphabetical-order": null
	}
}