document.write('<h2>this is b<h2>')

//var ServerUrl = 'http://121.40.149.125:8080/wyundata/api/';
var ServerUrl = 'http://192.168.0.108:8080/wyundata/api/';

//tab切换
function tabs() {
    var tabBtn = $('.tabs-box').find('.tabsbar').children('a');
    var tabContent = $('.tabs-box').children('.tabs-content').children('.tabs-item');
    var tabindex = $('.tabs-box').data('tab');
    tabBtn.click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = tabBtn.index(this);
        tabContent.eq(index).show().siblings().hide();
    });

    if (tabindex == null) {
        tabindex = 0;
    }

    tabBtn.eq(tabindex).trigger('click');
}

//数组添加删除某一项的方法
Array.prototype.removeArr = function(item) {
    var index = this.indexOf(item);
    this.splice(index, 1);
}

//去重
Array.prototype.unique = function() {
    var arr = this,
        result = [],
        len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
    }
    return result;
}

//去掉数组第一项
var arrShift = function(arr) {
    arr.shift();
    return arr;
}

//本地存储
var CacheClass = function() {
    this.set = function(key, value) {
        if (typeof value == 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }
    this.get = function(key) {
        return localStorage.getItem(key);
    }
}
var cacheData = new CacheClass();

//获取url标签
var getUrlByName = function(name) {
    var url = location.hash;
    var theRequest = {};
    if (url.indexOf("?") >= 0) {
        var str = url.split('?')[1];
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
    }
    return theRequest[name];
}

//数字转换成百分比
var getPercent = function(number) {
    number = parseFloat(number) * 100;
    return number.toFixed(2);
}

//实现replaceAll方法
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    }
    else {
        return this.replace(reallyDo, replaceWith);
    }
}

//根据type字段显示type名字
var showTypeName = function(type) {
    var name;
    switch (type) {
        case 'type_id':
            name = '公司类型';
            break;
        case 'establish_period_id':
            name = '成立日期';
            break;
        case 'register_city_id':
            name = '注册地';
            break;
        case 'industry_level2_id':
            name = '行业';
            break;
        case 'register_status_id':
            name = '经营状态';
            break;
        case 'register_capital_range_id':
            name = '注册资金';
            break;
        default:
    }
    return name;
}

//补位
function todou(n) {
    if (n < 10) {
        return '0' + n;
    }
    else {
        return n;
    }
}

//时间戳转日期
function getNumDate(num) {
    if (!num) {
        return '';
    }
    var date = new Date(num);
    var str = date.getFullYear() + '-' + todou(date.getMonth() + 1) + '-' + todou(date.getDate());
    return str;
}