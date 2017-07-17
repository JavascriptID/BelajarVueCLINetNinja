export default {
  name: 'local-component',
  data() {
    return {
      makanans: [
        'Kue Lokal 1', 'Kue Lokal 2', 'Kue Lokal 3',
      ],
      pesans: 'Hello word Vue JS Komponen Lokal',
    };
  },
  methods: {
    getMakanan() {
      return this.makanans;
    },
  },
  computed: {
    getComputedMakanan() {
      return `${this.pesans} Contohnya`;
    },
  },
};
