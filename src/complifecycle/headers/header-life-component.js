// header dari komponen yang akan disatukan dengan komponen utama yang bernama life component
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
    };
  },
  methods: {
    sendDataEvent() {

    },
    sendDataBus() {

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
  },
};

