import { TAG_BUS_HEADER, BusEventVue } from '@/konstans/BusesEvent';

// komponen yang berisi bagian footer komponen nya
export default {
  name: 'footer-life-component',
  props: {
    judulpropsfooter: {
      type: String,
      default: '',
    },
    arrayProps: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      judul: 'Copyright 2017 Vue JS Footer Component',
      arrayPropinit: this.arrayProps,
      databusHeader: '',
    };
  },
  created() {
    BusEventVue.$on(TAG_BUS_HEADER, (databus) => {
      this.databusHeader = databus;
    });
  },
  methods: {
    changeArray() {
      // jika isi data array diganti seperti ini, maka tidak
      // akan mempengaruhi isi array di parent utama
      this.arrayPropinit = [
        { nama: 'Artikel Footer 1', spesialkonten: 'Chromium', isShow: false },
      ];
    },
  },
  computed: {

  },
};

