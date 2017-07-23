// komponen yang berisi konten
export default {
  name: 'content-life',
  data() {
    return {
      judul: 'Isi Content Data Component',
      listartikel: [
        { nama: 'Artikel Lifecycle 1', spesialkonten: 'Angular', isShow: false },
        { nama: 'Artikel Lifecycle 2', spesialkonten: 'Vue', isShow: false },
        { nama: 'Artikel Lifecycle 3', spesialkonten: 'Webpack', isShow: false },
        { nama: 'Artikel Lifecycle 6', spesialkonten: 'Bootstrap', isShow: false },
      ],
    };
  },
  methods: {},
  computed: {},
};

