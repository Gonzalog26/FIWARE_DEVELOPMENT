package ids.publisherApp.subscriptionModel;


import java.util.ArrayList;

public class Subject {
	
	private ArrayList<Entity> entities;
	
	public Subject(){
		entities = new ArrayList<Entity>();
	}

	public ArrayList<Entity> getEntities() {
		return entities;
	}

	public void setEntities(ArrayList<Entity> entities) {
		this.entities = entities;
	}	

}
