<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Angular Material - Starter App</title>
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,700'>
    <link rel="stylesheet" href="./assets/css/app.css"/>
    <link rel="stylesheet" href="./assets/css/topbar.css"/>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  </head>

  <body ng-cloak ng-app="rm-app">
    <!--
        No content yet!
    -->
  <div layout="row" layout-wrap >
      <div id="topbar-black" flex="100" style="vertical-align:middle;font-family:'Helvetica Neue';font-weight: lighter;font-size:24px; line-height:50px;">
          &nbsp; Extrator de Gravações
      </div>
    <div id="topbar-black-opacity" layout="column" flex="20"  layout-align="center stretch">
      <div layout-gt-lg="row" layout-align="center stretch">
         <div flex>
             <md-datepicker ng-model="ctrl.myDate" md-placeholder="Enter date"></md-datepicker>
         </div>
      </div>
      <div layout-gt-lg="row" >
         <div flex>
             <md-datepicker ng-model="ctrl.myDate" md-placeholder="Enter date"></md-datepicker>
         </div>
      </div>
      <div layout-gt-lg="row" layout-align="center right" >
         <div flex >
            <md-input-container>
                <label>Origem</label>
                <md-select ng-model="ctrl.userState">
                  <md-option><em>None</em></md-option>
                  <md-option ng-repeat="state in ctrl.states" ng-value="state.abbrev" ng-disabled="$index === 1">
                    {{state.abbrev}}
                  </md-option>
                </md-select>
              </md-input-container>
          </div>
      </div>
      <div layout-gt-lg="row" >
         <div flex="40" >
            <md-input-container>
                <label>Destino</label>
                <md-select ng-model="ctrl.userState">
                  <md-option><em>None</em></md-option>
                  <md-option ng-repeat="state in ctrl.states" ng-value="state.abbrev" ng-disabled="$index === 1">
                    {{state.abbrev}}
                  </md-option>
                </md-select>
              </md-input-container>
          </div>
      </div>
    </div>
  </div>



    <script src="./jspm_packages/system.js" type="text/javascript"></script>
    <script src="config.js" type="text/javascript"></script>
    <script type="text/javascript">
      System
          .import('./app/app.module')
          .catch( console.error.bind(console) ); // make sure any errors print to console
    </script>



  </body>
