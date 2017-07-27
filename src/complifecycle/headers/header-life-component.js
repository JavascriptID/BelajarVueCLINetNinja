// header dari komponen yang akan disatukan dengan komponen utama yang bernama life component
import { TAG_BUS_HEADER, BusEventVue } from '@/konstans/BusesEvent';

export default {
  name: 'header-life-component',
  props: {
    judulPropsBinding: {
      type: String,
      default: 'Judul default',
    },
    judulPropsheader: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      judul: 'Vue JS Lifecycle Component',
      dataEvent: 'Data Header dikirim dari Header',
      dataProps: this.judulPropsBinding,
      dataPropsInit: this.judulPropsBinding,
      dataPropsHeader: this.judulPropsheader,
      datacomputedevent: this.judulPropsheader,
    };
  },
  created() {
    // menerima bus dari satu tempat
    BusEventVue.$on(TAG_BUS_HEADER, (data) => {
      this.judul = data;
    });
  },
  methods: {
    sendDataEvent() {
      // mengirim data event dari child component ke parent component
      this.$emit('gantiJudul', 'Vue JS Event Wizards');
    },
    sendDataBus() {
      // kirim data ke komponen lain dengan event bus
      BusEventVue.$emit(TAG_BUS_HEADER, 'Hello Word Event Bus Vue');
    },
    gantiJudulDenganPropGetSet() {
      this.judulPropsComputed = 'Set Get';
    },
    gantiJudulDariProps() {
      console.log('ganti judul props');
      this.dataPropsHeader = 'Vue Wizards Judulnya';
    },
  },
  computed: {
    judulPropsComputed: {
      get() {
        // computed property akan berjalan jika bagian data utama nya diubah
        return this.dataProps;
      },
      set(value) {
        this.dataProps = `${this.judulPropsBinding} dengan ${value}`;
      },
    },
    judulPropsEventComputed() {
      console.log('props berjalan event');
      // return this.dataPropsHeader;
      // jika sumbernya adalah props maka ikutan berubah juga
      return `Getter Langsung ${this.judulPropsheader}`;
    },
    judulPropsEventComputedGetSet: {
      get() {
        // tidak bisa berjalan langsung jika menggunakan props
        console.log('return props event');
        return this.datacomputedevent;
      },
      set() {
        this.datacomputedevent = this.judulPropsheader;
      },
    },
  },
};

