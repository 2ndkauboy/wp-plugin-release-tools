module.exports = function ( grunt ) {

	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );

	grunt.initConfig( {
		wp_plugin_path: ( undefined == grunt.option( 'plugin' ) ) ? '' : '../' + grunt.option( 'plugin' ) + '/',
		wp_readme_to_markdown: {
			github_2ndkauboy: {
				files: {
					'<%= wp_plugin_path + "readme.md" %>' : '<%= wp_plugin_path + "readme.txt" %>'
				},
				options: {
					screenshot_url: 'https://raw.githubusercontent.com/2ndkauboy/{plugin}/master/assets/{screenshot}.png'
				}
			}
		}
	} );
	
	grunt.config( 'files', { readme_txt : readme_md } );				

	//grunt.registerTask( 'default', ['wp_readme_to_markdown'] );
};