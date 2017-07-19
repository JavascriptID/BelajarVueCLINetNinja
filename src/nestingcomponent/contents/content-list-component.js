// ada cara menggunakan props untuk mengirim data
// dari parent komponen ke anak komponen
// anak komponen menerima data kiriman props dengan nama
// arrayprop1 , dan kemudian ditampilkan ke html untuk contoh
export default {
  name: 'content-list',
  // props: [
  //   'arrayprop1',
  //   'datastatis1',
  // ],
  props: {
    arrayprop1: {
      type: Array,
      required: true,
    },
    datastatis1: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      judul: 'Isi Content',
      webninjas: [
        { nama: 'Kucing 1', spesial: 'Vue Components', show: false },
        { nama: 'Kucing 2', spesial: 'Vuex', show: false },
        { nama: 'Kucing 3', spesial: 'Webpack', show: false },
        { nama: 'Kucing 4', spesial: 'HTML', show: false },
        { nama: 'Kucing 5', spesial: 'CSS', show: false },
        { nama: 'Kucing 6', spesial: 'Data Binding', show: false },
      ],
    };
  },
  methods: {
    showWebNinja(index) {
      const webninjaShow = this.webninjas[index];
      if (index !== -1) {
        webninjaShow.show = !webninjaShow.show;
        this.webninjas[index] = webninjaShow;
      }
    },
    showWebNinjaSplice(index, webninja) {
      const webNinjaShow = webninja;
      webNinjaShow.show = !webninja.show;
      this.webninjas.splice(index, 1, webNinjaShow);
    },
    hapusItemList() {
      if (this.arrayprop1.length > 0) {
        this.arrayprop1.pop();
      }
    },
  },
  computed: {
    setComputedProp1() {
      return this.arrayprop1;
    },
  },
};
