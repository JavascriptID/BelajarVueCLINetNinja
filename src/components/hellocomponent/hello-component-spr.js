import LocalComponent from '@/components/lokalcomponent/LocalComponent';
import ParserClass from './ParserClass';

export default {
  name: 'hello-component-spr',
  components: {
    'lokal-komponen': LocalComponent,
  },
  data() {
    return {
      pesan1: 'Hello world dari component separation',
      judul: 'Hello world untuk file .vue pertama dengan separation',
      objekvar: {
        nama: 'Nama Lorem',
        alamat: 'Alamat Lorem Ipsum',
      },
      objekvarReturn: '',
    };
  },
  methods: {
    greetingHello() {
      return this.pesan1;
    },
    setObjekComputedVar(values) {
      this.getObjectVar = values;
      // this.tesParserJson();
    },
    tesParserJson() {
      const promises = new Promise(
        (resolve) => {
          const parser = new ParserClass();
          const stringstest = parser.parseJson('<data><hello>hello word</hello></data>');
          resolve(stringstest);
        },
      );

      promises.then(
        (objectJson) => {
          console.log(objectJson);
        },
      ).catch(
        (error) => {
          console.log(error);
        },
      );
    },
  },
  computed: {
    greetingHelloComputed() {
      const datalet = 'hello world data let';
      return datalet;
    },
    getObjectVar: {
      get() {
        // console.log('get data dari computed');
        return this.objekvarReturn;
      },
      set(value) {
        // const gabunganKata = value + ' ' + this.objekvar.nama + ' ' + this.objekvar.alamat;
        const gabunganKata = `${value} ${this.objekvar.nama} ${this.objekvar.alamat}`;
        // console.log(gabunganKata);
        this.objekvarReturn = gabunganKata;
      },
    },
  },
};
