package ids.publisherApp.subscriptionModel;


public class Notification {

	private HttpCustom httpCustom;
	
	public Notification(){
		httpCustom = new HttpCustom();
	}

	public HttpCustom getHttpCustom() {
		return httpCustom;
	}

	public void setHttpCustom(HttpCustom httpCustom) {
		this.httpCustom = httpCustom;
	}	
	
}
