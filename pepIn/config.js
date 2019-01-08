var config = {};


function toBoolean(env, defaultValue){
	return (env !== undefined) ? (env.toLowerCase() === 'true') : defaultValue;
}

// Used only if https is disabled
config.pep_port = (process.env.PEP_PROXY_PORT || 1027);

// Set this var to undefined if you don't want the server to listen on HTTPS
config.https = {
    enabled: toBoolean(process.env.PEP_PROXY_HTTPS_ENABLED, false),
    cert_file: 'cert/cert.crt',
    key_file: 'cert/key.key',
    port: (process.env.PEP_PROXY_HTTPS_PORT || 443)
};

config.idm = {
	host: (process.env.PEP_PROXY_IDM_HOST || '172.18.1.6'),
	port: (process.env.PEP_PROXY_IDM_PORT ||  '3000'),
	ssl: toBoolean(process.env.PEP_PROXY_IDM_SSL_ENABLED, false)
}

config.app = {
	host: (process.env.PEP_PROXY_APP_HOST ||  '172.18.2.4'),
	port: (process.env.PEP_PROXY_APP_PORT || '1026'),
	ssl: toBoolean(process.env.PEP_PROXY_APP_SSL_ENABLED, false) // Use true if the app server listens in https
}


// Credentials obtained when registering PEP Proxy in app_id in Account Portal
config.pep = {
	app_id: (process.env.PEP_PROXY_APP_ID || '4b5fa974-0bde-4f3e-81ec-2e6871ff848e'),
	username: (process.env.PEP_PROXY_USERNAME ||'pep_proxy_fbf6b9af-417e-4d9e-ad15-a2e9ae4af86f'),
	password: (process.env.PEP_PASSWORD ||'pep_proxy_548b175d-2af9-465e-8fd5-c32599aa0b2b'),
	token: {
		secret: ''   // Secret must be configured in order validate a jwt
	},
	trusted_apps : []
}

// in seconds
config.cache_time = 300;

// if enabled PEP checks permissions in two ways:
//  - With IdM: only allow basic authorization
//  - With Authzforce: allow basic and advanced authorization. 
//	  For advanced authorization, you can use custom policy checks by including programatic scripts 
//    in policies folder. An script template is included there 
// 
//	This is only compatible with oauth2 tokens engine

config.authorization = {
	enabled: toBoolean (process.env.PEP_PROXY_AUTH_ENABLED, false),
	pdp: (process.env.PEP_PROXY_PDP || 'idm'), 	// idm|authzforce  
	azf: {
		protocol: (process.env.PEP_PROXY_AZF_PROTOCOL  || 'http'),
	    host: (process.env.PEP_PROXY_AZF_HOST || 'localhost'),
	    port: (process.env.PEP_PROXY_AZF_PORT || 8080),
	    custom_policy: (process.env.PEP_PROXY_AZF_CUSTOM_POLICY  ||  undefined)// use undefined to default policy checks (HTTP verb + path).
	} 
}

// list of paths that will not check authentication/authorization
// example: ['/public/*', '/static/css/']
config.public_paths = [];

config.magic_key = (process.env.PEP_PROXY_MAGIC_KEY || undefined);

module.exports = config;
