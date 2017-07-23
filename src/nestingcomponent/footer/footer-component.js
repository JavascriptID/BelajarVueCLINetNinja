// import { EventBus } from '@/main';
import Bus from '@/buses/Bus';


// menggunakan props dengan validasi tipe props yang dikirimnya
export default {
  name: 'footer-component',
  props: {
    dataProp2footer: [String, Number],
    dataProp3Numberfooter: {
      type: Number,
      required: true,
      default: 1998,
    },
    dataPropArrayfooter: {
      type: Array,
      default() {
        return [];
      },
    },
    judulbindRef: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      judul: 'Isi Copyright 2017 Ada disini nih tentang hak cipta',
      dataRefMutated: this.judulbindRef,
    };
  },
  mounted() {
    Bus.$on('judulGantiBus', (data) => {
      this.judul = data;
      console.log(`pesan bus diterima : ${data}`);
    });
  },
  methods: {
    gantiJudulRef() {
      // data dari props jangan dirubah langsung, tapi tampung dahulu ke
      // adalam parameter data, dalam hal ini dataRefMutated
      this.dataRefMutated = 'Ref Judul Diganti di Footer';
      this.getJudulRef = 'Hello Tambahan';
    },
  },
  computed: {
    getCopyComputed() {
      const stringabung = `${this.dataProp2footer} dan ${this.dataProp3Numberfooter}`;
      return stringabung;
    },
    getJudulRef: {
      get() {
        console.log('computed property jalan getJudulRef()');
        return this.dataRefMutated;
      },
      set(value) {
        console.log(value);
        this.dataRefMutated = this.dataRefMutated + value;
      },
    },
    dataEventRootComp() {
      this.dataRefMutated = this.judulbindRef;
      return this.judulbindRef;
    },
  },
};
