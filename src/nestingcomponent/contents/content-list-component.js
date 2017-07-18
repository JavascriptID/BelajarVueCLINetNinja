export default {
  name: 'content-list',
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
  },
  computed: {},
};
