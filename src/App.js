import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (

    <div className="container shadow p-3 rounded mt-5 " id="form">
        <div className="row">
          <div className="col-md-4">
            <label for="lastName">Nom</label><input type="text" name="lastName" id="lastName" className="form-control"/>
          </div>
          <div className="col-md-4">
            <label for="firstName">Prénom</label><input type="text" name="firstName" id="firstName" className="form-control"/>
          </div>
          
        </div>
        <div className="row">
          <div className="col-md-4">
            <label for="userName">Nom d'utilisateur</label><input type="text" name="userName" id="userName"
              className="form-control" />
          </div>
          <div className="col-md-4">
            <label for="createdDate">ate de naissance</label><input type="datetime-local" name="createdDate" id="createdDate"
              className="form-control" />
          </div>
        </div>
        
        
        <div className="text-end mt-3">
          <button className="btn btn-warning">Enregistrer</button>

        </div>
        <ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>

  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>
 





      </div>
      
      




  );
}

export default App;