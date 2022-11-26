/* eslint-disable no-undef */
module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					// This needs to be mirrored in tsconfig.json
					'@src': './src',
					'@utils': './src/utils',
					'@assets': './src/assets',
					'@components': './src/components',
					'@navigations': './src/navigations',
					'@styles': './src/styles',
				},
			},
		],
	],
};
