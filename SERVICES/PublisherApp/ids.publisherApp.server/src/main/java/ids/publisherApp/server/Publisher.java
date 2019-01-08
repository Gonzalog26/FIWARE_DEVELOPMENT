package ids.publisherApp.server;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class Publisher {
	
	private static final Log log = LogFactory.getLog(Publisher.class);

	public Publisher(){
		
	}
	
	public boolean publishMessage(String message){
		
		boolean succeed = true;
		
		log.debug("Message received: "+message);
		
		return succeed;
				
	}
	
}
