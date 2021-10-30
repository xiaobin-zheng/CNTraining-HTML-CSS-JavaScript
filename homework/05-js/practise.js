//问题1
const removeRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    const unique = array.filter((val, idx, arr) => arr.indexOf(val) === idx)
    console.log(unique)
    // todo
    // 输出[1, 2, 3, "a", "b"]
}
removeRepeat();

//问题2
const findRepeat= () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    const repeat = array.filter((val, idx, arr) => arr.indexOf(val) !== idx);
    console.log(repeat)
    // todo
    // 输出[2, 3, "a"]
}
findRepeat();

//问题3
const clone= (obj) => { return JSON.parse(JSON.stringify(obj)) }
const obj = {
    arr: [{a: 1, f: {q: 1}}, 2, 3],
    obj: {key: 'value'},
    string: 'hello world',
};
const obj1 = clone(obj);
console.log(obj1.string === obj.string);


//问题4
const question4 = () => {
    for (var i = 0; i < 5; i++) {
        const fun = function(val) {
            setTimeout(function() {
                console.log(val)
            }, 1000)
        }
        fun(i);
    }
    console.log(i)
    // todo
    // 修改代码输出 5,0,1,2,3,4
}
question4();

//问题5
function fn(a) {
    // 输出 ƒ a() {} 是因为函数提升
    console.log(a);
    var a = 666;
    // 正常将a定义并赋值为666 所以输出666
    console.log(a);
    function a() {}
    // 因为此处的a已经进行函数提升 所以这里取用的a还是666
    console.log(a);

    var b = function() {};
    // 正常定义b 并赋值 不涉及函数提升  正常输出ƒ () {}
    console.log(b);
    function c() {}
}
fn(1);
