/*
[rewrite_local]
https:\/\/some_url_match_rule url script-response-body cookie_test.js
*/

cookie = $request.headers['Cookie'];
console.log("测试cookie获取成功");
console.log("--------------------------");
console.log(cookie);
$notify("测试cookie获取成功");
