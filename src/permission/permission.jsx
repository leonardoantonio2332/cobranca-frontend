export const checkAccess = (required_permissions) => {
	var access = false

	if(!JSON.parse(localStorage.getItem('login'))) {
		return false
	}

	var permissions =  JSON.parse(localStorage.getItem('login')).permissions

	for(var permission in permissions) {
		if( required_permissions.includes(permissions[permission])) {
			access = true
		}
	}
    
	return access
}