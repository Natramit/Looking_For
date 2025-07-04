const Message = {
    name: "路亭 Looking For",
    version: "V2.01.64"
}
const Text = [
    {
        p0_t: "欢迎",
        p0_t0: "这是 <i>" + Message.name + "</i> 的预览页面。<br><br>当前版本为：" + Message.version + "<br><br>",
        p1_t: "提示",
        p1_t0: "鼠标指针位置属于本页核心操作逻辑的一部分，请使用含有鼠标指针的设备操作。",
        p2_t: "更多信息",
        p2_t0: "若希望查看更多信息，可点击下方的链接：",
        p2_t1: "用户手册",
        p2_t2: "开发文档",
        p2_t3: "软件源代码",
        p2_t4: "软件著作权证书",
        p3_t: "预览",
        p3_t0: "点击以下按钮访问预览页面：",
        p3_t1: "预览新页面",
        p3_t2: "预览已配置页面(必应壁纸 更快)",
        p3_t3: "预览已配置页面",
        p3_t4: "下载新页面"
    }
];
function load() {
    write();
    return 0;
}
function write(lang = 0) {
    document.getElementById('p0_t').innerHTML = Text[lang].p0_t;
    document.getElementById('p0_t0').innerHTML = Text[lang].p0_t0;
    document.getElementById('p1_t').innerHTML = Text[lang].p1_t;
    document.getElementById('p1_t0').innerHTML = Text[lang].p1_t0;
    document.getElementById('p2_t').innerHTML = Text[lang].p2_t;
    document.getElementById('p2_t0').innerHTML = Text[lang].p2_t0;
    document.getElementById('p2_t1').innerHTML = Text[lang].p2_t1;
    document.getElementById('p2_t2').innerHTML = Text[lang].p2_t2;
    document.getElementById('p2_t3').innerHTML = Text[lang].p2_t3;
    //document.getElementById('p2_t4').innerHTML = Text[lang].p2_t4;
    document.getElementById('p3_t').innerHTML = Text[lang].p3_t;
    document.getElementById('p3_t0').innerHTML = Text[lang].p3_t0;
    document.getElementById('p3_t1').innerHTML = Text[lang].p3_t1;
    document.getElementById('p3_t2').innerHTML = Text[lang].p3_t2;
    document.getElementById('p3_t3').innerHTML = Text[lang].p3_t3;
    document.getElementById('p3_t4').innerHTML = Text[lang].p3_t4;
    return 0;
}
function next(value) {
    let page_E = document.getElementById('box_home_div').children;
    let long = page_E.length;
    page_E[value].className = 'page_hind';
    if (value < long) {
        page_E[value + 1].className = 'page_show';
    }
    return 0;
}
function back(value) {
    let page_E = document.getElementById('box_home_div').children;
    if (value != 0) {
        page_E[value - 1].className = 'page_show';
    }
    page_E[value].className = 'page_wait';
    return 0;
}