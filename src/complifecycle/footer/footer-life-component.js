// komponen yang berisi bagian footer komponen nya
export default {
  name: 'footer-life-component',
  props: {
    judulpropsfooter: {
      type: String,
      default: '',
    },
    arrayProps: {
      type: String,
      default: [],
    },
  },
  data() {
    return {
      judul: 'Copyright 2017 Vue JS Footer Component',
      arrayPropinit: this.arrayProps,
    };
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

