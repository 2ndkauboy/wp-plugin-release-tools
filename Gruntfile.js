module.exports = function ( grunt ) {

	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );

	grunt.initConfig( {
		github_username: '2ndkauboy',
		wp_plugin_path: ( undefined == grunt.option( 'plugin' ) ) ? '' : '../' + grunt.option( 'plugin' ) + '/',
		wp_readme_to_markdown: {
			target: {
				files: {
					'<%= wp_plugin_path + "readme.md" %>' : '<%= wp_plugin_path + "readme.txt" %>'
				},
				options: {
					screenshot_url: 'https://raw.githubusercontent.com/<%= github_username %>/{plugin}/master/assets/{screenshot}.png'
				}
			}
		}
	} );

	grunt.registerTask( 'readme', ['wp_readme_to_markdown:target'] );
};