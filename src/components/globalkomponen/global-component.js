// MENGGUNAKAN KOMPONEN SECARA GLOBAL
export default {
  name: 'global-komponen',
  data() {
    return {
      pesans: 'Hello World Komponen Global Vue JS',
      listmakanan: [
        'Makanan Global 1',
        'Makanan Global 2',
        'Makanan Global 3',
      ],
    };
  },
  methods: {
    getMakananGlobal() {
      return this.listmakanan;
    },
  },
  computed: {
    getPesanComputed() {
      return `${this.pesans} Contohnya`;
    },
  },
};
