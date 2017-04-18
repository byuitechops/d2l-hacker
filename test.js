var hacker = require('./main.js');

hacker.run({domain:'pathway'},function(nightmare,data) {
	return nightmare
		.goto('https://byui.brightspace.com/d2l/lms/dropbox/admin/folders_manage.d2l?ou='+data.ou)
		.evaluate(() => {
			return $('span.ds_i').text()
		})
})
