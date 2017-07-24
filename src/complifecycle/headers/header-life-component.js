// header dari komponen yang akan disatukan dengan komponen utama yang bernama life component
export default {
  name: 'header-life-component',
  props: {
    judulPropsBinding: {
      type: String,
      default: 'Judul default',
    },
  },
  data() {
    return {
      judul: 'Vue JS Lifecycle Component',
      dataEvent: 'Data Header dikirim dari Header',
      dataProps: this.judulPropsBinding,
      dataPropsInit: this.judulPropsBinding,
    };
  },
  methods: {
    sendDataEvent() {

    },
    sendDataBus() {

    },
    gantiJudulDenganPropGetSet() {
      this.judulPropsComputed = 'Set Get ';
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

