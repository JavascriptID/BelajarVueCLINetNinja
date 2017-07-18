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
    };
  },
  methods: {

  },
  computed: {

  },
};
