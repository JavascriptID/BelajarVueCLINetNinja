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
      dataProps: 'Data Header dari Main Component Props',
    };
  },
  methods: {
    sendDataEvent() {

    },
    sendDataBus() {

    },
  },
  computed: {
    judulPropsComputed: {
      get() {
        return this.dataProps;
      },
      set() {
        this.dataProps = this.judulPropsBinding;
      },
    },
  },
};

