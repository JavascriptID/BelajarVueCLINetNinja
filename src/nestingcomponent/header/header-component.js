// import { bus } from '@/main';
import axios from 'axios';
import Bus from '@/buses/Bus';
import { bar, EventBus, foo } from '../../main';
// import banyak variabel sekaligus dari main
// import { foo, bar, EventBus } from '@/main';
// import EventBus from '../../main';

export default {
  name: 'header-component',
  props: {
    judulbindRef: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      judul: 'Halaman Vue JS Utama',
      judulgantiEvent: 'Halaman Judul Diganti dengan Event',
    };
  },
  mounted() {
    // menerima pesan bus
    Bus.$on('judulGantiBus', (data) => {
      // menerima event bus di komponen yang sama
      EventBus.$on('hello-world', () => {
        console.log('hello word');
      });
      this.judul = data;
    });
  },
  methods: {
    saveLocalStorages(varusername, varId) {
      localStorage.setItem('username', varusername);
      localStorage.setItem('idusername', varId);
    },
    gantiJudulHeaderFooter() {
      // ganti judul header dan footer dengan event emit
      this.gantiJudulEvent();
    },
    gantiJudulEvent() {
      // kirim event ke parent component dengan event $event emit
      this.$emit('update-judul-event', this.judulgantiEvent);
    },
    gantiJudulDenganBus() {
      Bus.$emit('judulGantiBus', 'Event Bus Demo Vue');
      console.log(foo);
      console.log(bar);
    },
    tesGetAxios() {
      axios.get('https://widget.kominfo.go.id/data/latest/gpr.xml')
        .then((response) => {
          console.log(response);
        })
        .catch(
          (error) => {
            console.log(error);
          });
    },
  },
  computed: {},
};
