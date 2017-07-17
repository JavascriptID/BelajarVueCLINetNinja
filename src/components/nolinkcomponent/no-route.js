/**
 * Created by rian on 7/12/17.
 */
// cara melakukan impor langsung di dalam komponen
// import ListMakanan from '@/components/listcomponent/ListMakanan';
import LokalComponent from '@/components/lokalcomponent/LocalComponent';

// karena di dalam listmakanan.js sudah diberi name, maka tidak perlu lagi
// mendefinisikan name di tag components nya
const ListMakanan = () => import('@/components/listcomponent/ListMakanan.vue');

export default {
  name: 'no-route',
  components: {
    'list-makanan': ListMakanan,
    'local-component': LokalComponent,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App No Route',
    };
  },
  methods: {},
  computed: {},
};
