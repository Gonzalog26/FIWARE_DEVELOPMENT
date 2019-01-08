package ids.publisherApp.api;

import javax.ws.rs.core.Response;

public interface IidsManagerRest {

	public Response publishMessage(String messageEntity);
	
}
