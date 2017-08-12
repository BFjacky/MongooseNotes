//搜索返回位置search
let str = 'chenyunfeinihaoya!!!'
let res = str.search('yunfei');
console.log(res);
//替换,replace
str = 'ChenyunfeinihaoyaChenyunfeinihaoya!!!'
res = str.replace(/chenyunfei/gi, '!!!!!');
console.log(res)
//正则表达式字面量的声明方式,test返回true或false
let patt = /chenyunfei/gi
res = patt.test(str);
console.log(res);
//match找到一个或多个正则表达式的匹配，返回数组
res = str.match(patt)
console.log(res);
//正则表达式元字符 
//^,$,\d                        =>[ '0131-1231413' ]
str = '0131-1231413sdfa0131-1111111dsfaf123'
patt = /^0\d\d\d-\d\d\d\d\d\d\d/g
res = str.match(patt)
console.log(res);
//  \b 不会消耗任何字符只匹配一个位置
str = 'this is a istest'
patt = /\bis\b/g
res = str.match(patt)
console.log(res)
// \w 匹配字母，数字，下划线.
str = 'ads--chenyun__fei 1233sadf-_12-3--=+++  234 _dsa'
patt = /\w\w\w\w\w\w\w/g
res = str.match(patt)
console.log(res)
// \w+ 匹配多个字母，数字，下划线.
str = 'ads--chenyun__fei 1233sadf-_12-3--=+++  234 _dsa'
patt = /\w+/g
res = str.match(patt)
console.log(res)
// \s 匹配空格 
str = '___c h e n1321fds_fwqr'
patt = /\w\s\w\s\w\s\w/g
res = str.match(patt)
console.log(res)
// \s+ 匹配多个空格 
str = '___c     h e n1321fds_fwqr'
patt = /\w\s+\w\s\w\s\w/g
res = str.match(patt)
console.log(res)
// . 匹配除了换行符以外的任何字符
str = 'fsfd\nchenyunfei\n123-f =  '
patt = /........../g
res = str.match(patt)
console.log(res)
// "[abc]": 字符组  匹配包含括号内元素的字符 [a-z] 
str = 'chen yun ___fei bbadfadf'
patt = /[a-c]/g
res = str.match(patt)
console.log(res);
//量词 
//* (贪婪)   重复零次或更多
str = 'chen yun fei aaaaa'
patt = /a*/g
res = str.match(patt)
console.log(res);
//+ (懒惰) 重复一次或更多
str = 'chen yun fei aaaaa'
patt = /a+/g
res = str.match(patt)
console.log(res);
//? (占有) 重复零次或一次
str = 'chen yun feiaaaaa'
patt = /a?/g
res = str.match(patt)
console.log(res);
// {n} 重复n次 
str = 'chen yun fei aaaaa'
patt = /a{3}/g
res = str.match(patt)
console.log(res);
// {n,m} 重复n-m次  {n,} 重复n次或更多次
str = 'chen yun fei aaaaa aaaa aaa aa a'
patt = /a{3,5}/g
res = str.match(patt)
console.log(res);
//练习匹配电话
str = '0131-1231413sdfa0131-1111111dsfaf123'
patt = /\d{4}-\d{7}/g
res = str.match(patt)
console.log(res);
//捕获分组 ----------------?????????????????????????---------------------出错了
str = '0131-1111111 0131-1231413 0131-1111111 f123'
patt = /(\k<tel>\d{4}-\d{7}) \tel \tel /g
res = str.match(patt)
console.log(res);
//中文正则
let test ='[\u4E00-\u9FFF]'
str = '姓名:陈云飞 学号:A19150815'
patt = /:[\u4E00-\u9FFF][\u4E00-\u9FFF]飞/g
res = str.match(patt)
console.log(res);