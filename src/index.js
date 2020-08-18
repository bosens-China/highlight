function join(array, str) {
  const arr = [];
  const len = array.length;
  for (let i = 0; i < len - 1; i += 1) {
    const value = array[i];
    if (!value) {
      arr.push(str);
    } else {
      arr.push(value, str);
    }
  }
  if (array[len - 1]) {
    arr.push(array[len - 1]);
  }
  return arr;
}
Component({
  properties: {
    data: {
      type: String,
      observer() {
        this.change();
      },
    },
    keyWord: {
      type: String,
      observer() {
        this.change();
      },
    },
    color: {
      type: String,
      value: 'red',
    },
  },
  externalClasses: ['cs-class', 'cs-class-i', 'cs-class-i-h'],
  data: {
    arr: [],
  },
  methods: {
    change() {
      let { data, keyWord } = this.properties;
      data = `${data || ''}`;
      keyWord = `${keyWord || ''}`;
      if (!data) {
        return this.setData({ arr: [data] });
      }
      const arr = data.split(keyWord);
      const newArr = join(arr, keyWord);
      this.setData({ arr: newArr });
      return arr;
    },
    onClick() {
      this.triggerEvent('myevent', {});
    },
  },
});
