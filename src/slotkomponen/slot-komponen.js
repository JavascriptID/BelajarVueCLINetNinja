import FormHelperComponent from '@/slotkomponen/FormHelper';

// halaman utama untuk slot komponen
// konten dengan tag slot di child component
// akan digantikan dengan konten untuk slot di parent component
export default {
  name: 'slot-component',
  components: {
    'form-helper': FormHelperComponent,
  },
  data() {
    return {
      judul: 'Form Helper Component',
      judulKeSlot: 'Judul dari Main Component ke Child Component dengan menggunakan Slot',
    };
  },
  methods: {},
  computed: {},
};
