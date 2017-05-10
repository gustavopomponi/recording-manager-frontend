
function Recording($resource) {

     this.valor = [];

     this.getSources = getSources;
     this.getTargets = getTargets;
     this.getRecs = getRecs;
     this.getRecsByDate = getRecsByDate;

     function getSources(req)
     {
       this.dt_Inicial = new Date(req.dtInicial).toISOString().slice(0,10);
       this.dt_Final = new Date(req.dtFinal).toISOString().slice(0,10);
       return $resource('http://localhost:3000/origens/:dtInicial/:dtFinal', { dtInicial: this.dt_Inicial, dtFinal: this.dt_Final }).query();
     }

     function getTargets(req)
     {
       this.dt_Inicial = new Date(req.dtInicial).toISOString().slice(0,10);
       this.dt_Final = new Date(req.dtFinal).toISOString().slice(0,10);

       if(!req.origem){
         this.org = ' ';
       } else {
         this.org = req.origem;
       }
       return $resource('http://localhost:3000/destinos/:dtInicial/:dtFinal/:source ', { dtInicial: this.dt_Inicial, dtFinal: this.dt_Final, source: this.org }).query();
     }

     function getRecs()
     {
        return $resource('http://localhost:3000/recordings').query();
     }

     function getRecsByDate(req)
     {
        this.dt_Inicial = new Date(req.dtInicial).toISOString().slice(0,10);
        this.dt_Final = new Date(req.dtFinal).toISOString().slice(0,10);

        if(!req.origem){
          this.source = '';
        } else {
          this.source = req.origem;
        }

        if(!req.destino){
          this.target = '';
        } else {
          this.target = req.destino;
        }

        return $resource('http://localhost:3000/recordings/:dtInicial/:dtFinal/:sources/:destination/:disposition ', { dtInicial: this.dt_Inicial, dtFinal: this.dt_Final, sources: this.source, destination: this.target, disposition:''}).query();
     }

     function getAudio(){

       return $resource('http://localhost:3000/play');

     }

}
