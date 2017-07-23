import HeaderLifeComponent from '@/complifecycle/headers/HeaderLifeComponent';

// component utama yang berisi anak anak komponen lainnya
export default {
  name: 'life-component',
  components: {
    'app-header': HeaderLifeComponent,
  },
  data() {
    return {
      judul: 'Lifecycle Component Utama',
    };
  },
  methods: {

  },
  computed: {

  },
};

