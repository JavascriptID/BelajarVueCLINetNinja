import HeaderComponent from '@/nestingcomponent/header/HeaderComponent';
import FooterComponent from '@/nestingcomponent/footer/FooterComponent';
import ContentComponent from '@/nestingcomponent/contents/ContentListComponent';

export default {
  name: 'main-nesting-component',
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'content-component': ContentComponent,
  },
  data() {
    return {
      judul: 'Halaman Utama Nesting Component',
      dataProp1: [
        { nama: 'Kucing 1 Prop', spesial: 'Vue Components', show: false },
        { nama: 'Kucing 2 Prop', spesial: 'Vuex', show: false },
        { nama: 'Kucing 3 Prop', spesial: 'Webpack', show: false },
      ],
      dataProp2: 'Props : Copyright Tahun ',
      dataProp3Number: 2017,
      judulrefbindRoot: 'Reference Type Component',
    };
  },
  methods: {
    updateJudulKomponen(judulEvent) {
      console.log(judulEvent);
      this.judulrefbindRoot = judulEvent;
      // langsung dihubungkan dengan parameter data yang akan jadi props untuk komponen
      // sehingga data props komponen yang lain ikut berubah juga
    },
  },
  computed: {

  },
};
