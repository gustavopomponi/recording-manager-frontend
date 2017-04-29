  function AppController($mdSidenav, $resource, Recording, $mdDialog, $timeout){

    this.toggleLeft = buildToggler('left');
    this.toggleRight = buildToggler('right');
    this.dtInicial = '';
    this.dtFinal = '';

    this.people = [{ 'name':'Gustavo', 'age':'36' },{ 'name':'Leonardo','age':'34' }];
    this.call = [
                  {
                    'date':'10/04/2017',
                    'source':'8010',
                    'dst':'34988512935',
                    'duration':'365s',
                    'disposition':'ANSWERED'
                  },
                  {
                    'date':'12/04/2017',
                    'source':'8010',
                    'dst':'34999166935',
                    'duration':'40s',
                    'disposition':'ANSWERED'
                  }
                ];

    this.nome = 'Gustavo Pomponi';

    //$('#example').DataTable();

    //this.origens = Recording.getSources();
    //this.destinos = Recording.getTargets();
    //this.recs = Recording.getRecs();

    this.carrega = function(req) {

      if(!req.origem || req.origem == "None"){
        req.origem = '';
        req.destino = '';
        this.carregaDestino(req);
      }
      else if(!req.destino || req.destino == "None"){
        req.destino = '';
        this.carregaDestino(req);
      } else {
        this.recs = Recording.getRecsByDate(req);
      }

    };

    this.carregaOrigem = function (req){

        this.origens = Recording.getSources(req);
    }

    this.carregaDestino = function (req){

        this.destinos = Recording.getTargets(req);
        this.recs = Recording.getRecsByDate(req);
    }

      this.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(false)
          .title('Erro de Seleção')
          .textContent('Data inicial não pode ser maior que a final !!.')
          .ariaLabel('Alert Dialog Demo')
          .ok('OK')
          .targetEvent(ev)
      );
  }


    this.dataSelecionada = function(req){

        if(new Date(req.dtInicial) > new Date(req.dtFinal)){
             this.errmsg = "Data final não pode ser maior que inicial !!";
             this.showAlert();
        }
        else {
          this.carrega(req);
          this.carregaOrigem(req);
        }

    };

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  };
