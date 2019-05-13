var app = new Vue({
    el: '.app',
    data: {
      title: 'Mastrangelo Sindaco',
      showLegal: false,
      showList: false,
      elezionitrasparenti: true,
      key: '',
      min: 1,
      max: 16,
      coalizione: [
        {
          key: 'forzaitalia',
          logo: 'images/forzaitalia.png',
          name: 'Forza Italia'
        },
        {
            key: 'fratelliditalia',
            logo: 'images/fratelliditalia.png',
            name: 'Fratelli d\'Italia'
        },
        {
            key: 'lega',
            logo: 'images/lega.png',
            name: 'Lega Salvini Puglia'
        },
        {
            key: 'rinnova',
            logo: 'images/rinnova.png',
            name: '(r)INNova'
        },
        {
            key: 'mastrangelo',
            logo: 'images/mastrangelo.png',
            name: 'Mastrangelo Sindaco'
        },
        {
            key: 'primagioia',
            logo: 'images/primagioia.png',
            name: 'Prima Gioia'
        }
        ]
    },
    methods: {
        goToLegal: function () {
            this.showLegal = !this.showLegal;
            this.showList = false;
            console.log(this.showLegal);
        },
        changeLista: function (lista) {
            this.key = lista;
            this.showList = true;
            console.log('lista changed to -> ' +  this.key);
        },
        getListImage: function (index) {
            var r = 'coalizione/' + this.key.key + '/' + index + '.jpg';
            console.log(r);
            return r;
        },
        getListCV: function (index) {
            return 'coalizione/' + this.key.key + '/' + index + '-cv.pdf';
        },
        getListLegal: function (index) {
            return 'coalizione/' + this.key.key + '/' + index + '-legal.pdf';
        }
    }
  })