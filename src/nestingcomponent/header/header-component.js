// import { bus } from '@/main';
import axios from 'axios';
import { eventbus } from '../../main';

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
      eventbus.$emit('judulGantiBus', 'Event Bus Demo Vue');
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
  computed: {

  },
};
