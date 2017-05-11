  function AppController($mdSidenav, $resource, Recording, $mdDialog, $timeout, ngAudio){

    this.toggleLeft = buildToggler('left');
    this.toggleRight = buildToggler('right');
    this.dtInicial = '';
    this.dtFinal = '';
    this.path = '/home/asterisk/recordings/';

    this.recpath = function(req){

      this.pth = '';

      this.date = new Date(req.calldate).toISOString().slice(0,10);

      this.year = this.date.substring(0,4);
      this.month = this.date.substring(5,7);
      this.day = this.date.substring(8,10);

      if (req.recordingfile.length > 60){
        this.pth = this.path + this.year + "/" + this.month + "/" + this.day + "/" +req.recordingfile.substring(39,req.length);
      }  else {
        this.pth = this.path + this.year + "/" + this.month + "/" + this.day + "/" +req.recordingfile;
      }

      //console.log(req.calldate);
      console.log(this.pth);
      //console.log(this.date);

      return this.pth;

    }

    this.sound = function(req){

      this.audio = ngAudio.load(this.recpath(req));

    }

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

      //console.log(req.dtInicial)
      //console.log(req.dtFinal);

        if(req.dtFinal)
        {
          //console.log('Ola Mundo');
          if(new Date(req.dtInicial) > new Date(req.dtFinal)){
               this.errmsg = "Data final não pode ser maior que inicial !!";
               this.showAlert();
          }
          else {
            this.carrega(req);
            this.carregaOrigem(req);
          }
        }

    };

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  };
