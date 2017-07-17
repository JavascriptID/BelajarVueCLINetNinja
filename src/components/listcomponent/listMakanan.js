/**
 * Created by rian on 7/14/17.
 */
export default {
  name: 'list-makanan',
  data() {
    return {
      listmakanans: [
        'Tahu Bulat',
        'Tempe',
        'Tahu Isi',
        'Ubi Rebus',
        'Jagung goreng',
      ],
    };
  },
  methods: {
    getData() {
      return this.listmakanans;
    },
  },
  computed: {

  },
};
