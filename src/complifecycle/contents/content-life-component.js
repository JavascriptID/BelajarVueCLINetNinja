// komponen yang berisi konten
export default {
  name: 'content-life',
  props: {
    arrayartikelprop: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      judul: 'Isi Content Data Component',
      listartikel: [
        { nama: 'Artikel Lifecycle 1', spesialkonten: 'Angular', isShow: false },
        { nama: 'Artikel Lifecycle 2', spesialkonten: 'Vue', isShow: false },
        { nama: 'Artikel Lifecycle 3', spesialkonten: 'Webpack', isShow: false },
      ],
      listartikelpropsinit: this.arrayartikelprop,
    };
  },
  methods: {
    showSpesial(index, artikel) {
      // ganti parameter show dan hide dengan splice dan index
      const isShow = !artikel.isShow;
      if (index !== -1) {
        const artikelget = this.listartikelpropsinit[index];
        artikelget.isShow = isShow;
        this.listartikelpropsinit.splice(index, 1, artikelget);
      }
    },
    hapus1Artikel() {
      // hapus artikel satu buah di belakang dengan pop
      // data array yang di dalam komponen tidak mempengaruhi
      // data array yang ada di komponen lainnya
      // jika menggunakan data props dari komponen parent, maka
      // akan mempengaruhi data di parent utama nya
      if (this.listartikel.length > 0) {
        this.listartikel.pop();
      }
    },
    addDataProps() {
      const panjangDataProps = this.listartikelpropsinit.length;
      for (let i = 0; i < panjangDataProps; i += 1) {
        const artikelProps = this.listartikelpropsinit[i];
        this.listartikel.push(artikelProps);
      }
    },
  },
  computed: {},
};

