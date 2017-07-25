import Headers from '@/complifecycle/headers/HeaderLifeComponent';
import Footers from '@/complifecycle/footer/FooterLifeComponent';
import ContentList from '@/complifecycle/contents/ContentLifeComponent';

// component utama yang berisi anak anak komponen lainnya
export default {
  name: 'life-component',
  components: {
    'app-header': Headers,
    'app-footer': Footers,
    'app-content': ContentList,
  },
  data() {
    return {
      judul: 'Lifecycle Component Utama',
      dataPropHeader: 'Props Data untuk Header dari Parent Component',
      datalistParent: [
        { nama: 'Artikel Main 1', spesialkonten: 'Chrome', isShow: false },
        { nama: 'Artikel Main 2', spesialkonten: 'Opera', isShow: false },
        { nama: 'Artikel Main 3', spesialkonten: 'Firefox', isShow: false },
      ],
      judulprops: 'Judul Props dari Parent Component',
    };
  },
  methods: {

  },
  computed: {

  },
};

