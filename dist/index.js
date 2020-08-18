"use strict";
function join(array, str) {
    var arr = [];
    var len = array.length;
    for (var i = 0; i < len - 1; i += 1) {
        var value = array[i];
        if (!value) {
            arr.push(str);
        }
        else {
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
            observer: function () {
                this.change();
            },
        },
        keyWord: {
            type: String,
            observer: function () {
                this.change();
            },
        },
        color: {
            type: String,
            value: 'red',
        },
        rootStyle: {
            type: String,
        },
        itemStyle: {
            type: String,
            observer: function () {
                this.getItemSty();
            },
        },
    },
    externalClasses: ['cs-class', 'cs-class-i', 'cs-class-i-h'],
    data: {
        arr: [],
        sty: '',
    },
    methods: {
        getItemSty: function () {
            var itemStyle = this.properties.itemStyle;
            var sty = '';
            if (itemStyle) {
                sty += itemStyle;
            }
            this.setData({ sty: sty });
        },
        change: function () {
            var _a = this.properties, data = _a.data, keyWord = _a.keyWord;
            data = "" + (data || '');
            keyWord = "" + (keyWord || '');
            if (!data) {
                return this.setData({ arr: [data] });
            }
            var arr = data.split(keyWord);
            var newArr = join(arr, keyWord);
            this.setData({ arr: newArr });
            return arr;
        },
        onClick: function () {
            this.triggerEvent('myevent', {});
        },
    },
});
//# sourceMappingURL=index.js.map