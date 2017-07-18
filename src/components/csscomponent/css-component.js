import SubCSSComponent from '@/components/csscomponent/SubCSSComponent';
// css untuk anak komponen yang dipakai di komponen utama akan ikut terpengaruh juga css nya

export default {
  name: 'main-component-css',
  components: {
    'sub-css-component': SubCSSComponent,
  },
  data() {
    return {
      judul: 'Halaman Utama CSS Component',
      judulComputed: 'Tambahan ',
    };
  },
  methods: {
    getJudulMethods() {
      return this.judul;
    },
  },
  computed: {
    getJudulComputed: {
      get() {
        return this.judulComputed;
      },
      set(value) {
        this.judulComputed = `Tambahan ${this.judul} dan ${value}`;
      },
    },
  },
};
