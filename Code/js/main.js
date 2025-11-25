//Version: 2.01.63 dev...

const Looking_For_Release_Version_Message = Looking_For_DEV_Version_Message;
/*CONFIG START*/
/*
0 Navigation转到View
1 Navigation在新标签页中打开View
2 Navigation在新标签页中直接打开目标网页
3 直接使用View界面
-1 打开Options界面*/
var Looking_For_Model = 2;
/*网页文件的文件名*/
var Looking_For_File_Name = "";
/*view窗口默认打开的初始界面*/
var Looking_For_Default_Web_Page_In_View = "";
/*wellcome窗口输入框内的提示语*/
var Looking_For_Input_Tips = 'LF0nullb;';
/*wellcome窗口的提示语*/
var Looking_For_NP_Tips_Word = 'LF0nullb;';
/*非默认打开的提示信息*/
var Looking_For_Error_Message = 'LF0nullb;';
/*side_tabe 唤出时，网页是否让出位置*/
var Looking_For_Ctrl_Move_Web_Side = 1;
/*top_tabe 唤出时，网页是否让出位置*/
var Looking_For_Ctrl_Move_Web_Top = 1;
/*默认的链接打开方式
0 在页面内打开 1 在新标签页内使用本页面打开 2 在新标签页内直接打开*/
var ctrl_go_link_as = 0;
/*提示弹窗
-1 弹出并需确认 0 不弹窗 >0 自动关闭并打开链接的时间(ms)*/
var Looking_For_Message_Prompt_Time = 1500;

/*
0 中文
1 English*/
var Looking_For_Language_Sitting = -1;
var Looking_For_Hellow_Word = 'LF0nullb;';
var Looking_For_Dark_Light_Style = 1;
var Looking_For_Dark_Light_Auto_Change = 1;
/*
0 not use
1 use*/
var Looking_For_Img_Use = [1, 1, 1, 1, 1];
var Looking_For_Color_Link_Chouse_Value = 1;
var Looking_For_Navigation_Sleep = 1;
var Looking_For_Sleep_Time = 6;
var Looking_For_Sleep_Background_at_View = 0;
var Looking_For_Background_Turn_Way = 0;
var Looking_For_Background_Turn_Time = 5000;
var Looking_For_Preview_Button_Show_Model = 1;
var Looking_For_Proview_Link_Box_Model = 1;

/*
底板颜色 背景颜色，按钮默认颜色，按钮悬浮颜色，按钮触发颜色 文字颜色 圆角量 线宽 是否显示滚动条 */
var Looking_For_Background_Style = [
    ["hsla(203,0%,27%,1.00)", "hsla(203,20%,19%,0.30)", "hsla(207,87%,35%,0.28)", "hsla(212,84%,30%,0.78)", "hsla(218,76%,77%,0.74)", "hsla(232,94%,96%,1.00)", "12px", "3px", "none"],
    ["hsla(194,0%,85%,1.00)", "hsla(194,20%,73%,0.24)", "hsla(196,87%,85%,0.68)", "hsla(199,84%,73%,0.78)", "hsla(203,76%,61%,0.55)", "hsla(191,94%,20%,1.00)", "6px", "3px", "none"]
];
/*
nunber 5 > 0 not use : 1 use*/
var Looking_For_Background_If_Use = [
    [
        // Dark
        [1, "backgrounds/1/blue.jpg", 77, 25, 1, 1],
        [1, "backgrounds/1/red.jpg", 24, 25, 1, 1],
        [1, "backgrounds/1/green.jpg", 57, 25, 1, 1],
        [1, "backgrounds/1/error.jpg", 57, 25, 1, 1],
        [1, "backgrounds/1/error.jpg", 57, 25, 1, 1],
        [1, "backgrounds/1/red.jpg", 24, 25, 1, 1],
        [1, "backgrounds/1/blue.jpg", 77, 25, 1, 1],
        [2, "backgrounds/mask/logo_white.png", 87, 5, .82, 1],
        [2, "backgrounds/mask/logo_black.png", 98, 5, .82, 0],
        [3, "backgrounds/3/red.jpg", 24, 25, 1, 1],
        [4, "backgrounds/3/error.jpg", 57, 25, 1, 1],
        [3, "backgrounds/3/green.jpg", 57, 25, 1, 1],
        [3, "backgrounds/3/blue.jpg", 77, 75, 1, 1],
        [4, "backgrounds/4/error.jpg", 57, 25, 1, 1],
        [4, "backgrounds/4/red.jpg", 24, 25, 1, 1],
        [4, "backgrounds/4/green.jpg", 57, 25, 1, 1],
        [4, "backgrounds/4/blue.jpg", 77, 25, 1, 1],
        [-2, "0", 0, 0, 0, 0]
    ],
    [
        //Light
        [1, "backgrounds/1/green.jpg", 57, 25, 1, 1],
        [1, "backgrounds/1/white.jpg", 55, 25, 1, 1],
        [1, "backgrounds/1/red.jpg", 24, 25, 1, 1],
        [1, "backgrounds/1/error", 57, 25, 1, 1],
        [1, "backgrounds/1/error", 57, 25, 1, 1],
        [1, "backgrounds/1/error", 57, 25, 1, 1],
        [1, "backgrounds/1/green.jpg", 57, 25, 1, 1],
        [1, "backgrounds/1/blue.jpg", 77, 25, 1, 1],
        [2, "backgrounds/mask/logo_black.png", 87, 5, .82, 1],
        [2, "backgrounds/mask/logo_white.png", 87, 98, .82, 0],
        [3, "backgrounds/3/green.jpg", 57, 25, 1, 1],
        [3, "backgrounds/3/blue.jpg", 77, 75, 1, 1],
        [3, "backgrounds/3/error.jpg", 57, 25, 1, 1],
        [3, "backgrounds/3/red.jpg", 24, 25, 1, 1],
        [4, "backgrounds/4/green.jpg", 57, 25, 1, 1],
        [4, "backgrounds/4/error.jpg", 57, 25, 1, 1],
        [4, "backgrounds/4/red.jpg", 24, 25, 1, 1],
        [4, "backgrounds/4/blue.jpg", 77, 25, 1, 1],
        [-2, "0", 0, 0, 0, 0]
    ]
];

/*
links 是网页链接，可自行修改，注意保持格式
类型编号从 1 开始 其为 0 时，列表结束
分别是 类型编号 类型/链接名称 链接主页 链接(如为类型，则为0) 链接后部控制符(0为无控制) 链接打开方式,数值参见ctrl_go_link_as 非默认打开方式的原因(0为默认原因) 是否启用
以下网页链接仅供测试使用*/
var Looking_For_Links = [
    [0, "", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [0, "必1应", "https://cn.bing.com", "https://cn.bing.com/search?q=", '', 2, "存在搜索和翻页错误", 1],
    [0, "必2应", "https://cn.bing.com", "https://cn.bing.com/search?q=", '', 2, "存在搜索和翻页错误", 1],
    [1, "网页搜索", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [1, "必应", "https://cn.bing.com", "https://cn.bing.com/search?q=", '', 2, "存在搜索和翻页错误", 1],
    [1, "百度", "https://www.baidu.com", "https://www.baidu.com/s?wd=", '', 2, '', 1],
    [1, "360", "https://www.so.com", "https://www.so.com/s?q=", '', ctrl_go_link_as, '', 1],
    [1, "搜狗", "https://www.sogou.com", "https://www.sogou.com/web?query=", '', ctrl_go_link_as, '', 1],
    [1, "无追", "https://www.wuzhuiso.com", "https://www.wuzhuiso.com/s?q=", '', 2, '', 1],
    [2, "百科Wiki", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [2, "百度百科", "https://baike.baidu.com", "https://baike.baidu.com/search/word?word=", '', ctrl_go_link_as, '', 1],
    [2, "萌娘百科", "https://zh.moegirl.org.cn", "https://zh.moegirl.org.cn/index.php?search=", '', 2, '', 1],
    [2, "华为IP知识百科", "https://info.support.huawei.com", "https://info.support.huawei.com/info-finder/encyclopedia/zh/detail?action=queryMatchedEntityDetail&keyword=", 0, ctrl_go_link_as, '', 1],
    [2, "WikiHow", "https://zh.wikihow.com", "https://zh.wikihow.com/wikiHowTo?search=", '', 2, '', 1],
    [2, "知网百科（必加关键词）", "https://xuewen.cnki.net", "https://xuewen.cnki.net/searchentry.aspx?key=", '', 2, '', 1],
    [3, "论坛", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [3, "知乎", "https://zhihu.com", "https://cn.bing.com/search?q=", " site:zhihu.com", ctrl_go_link_as, '', 1],
    [3, "知乎（百度搜索）", "https://zhihu.com", "https://www.baidu.com/s?wd=", " site:zhihu.com", 2, '', 1],
    [4, "学术", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [4, "Nature", "https://www.nature.com", "https://www.nature.com/search?q=", '', 2, '', 1],
    [4, "百度学术", "https://xueshu.baidu.com", "https://xueshu.baidu.com/s?wd=", '', 2, '', 1],
    [4, "国家科技图书文献中心", "http://oar.nstl.gov.cn", "http://oar.nstl.gov.cn/Paper/Search?searchKey=", '', 2, '', 1],
    [4, "BASE", "https://www.base.net", "https://www.base-search.net/Search/Results?lookfor=", '', 2, '', 1],
    [4, "中国科学论文在线", "http://www.paper.edu.cn", "http://www.paper.edu.cn/releasepaper/search?searchContent=", '', 2, '', 1],
    [5, "影视", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [5, "CCTV", "https://cctv.com", "https://search.cctv.com/search.php?qtext=", '', ctrl_go_link_as, '', 1],
    [5, "1905", "https://www.1905.com", "https://www.1905.com/search/?q=", '', 2, '', 1],
    [5, "哔哩哔哩", "https://www.bilibili.com", "https://search.bilibili.com/all?keyword=", '', 0, '', 1],
    [5, "腾讯视频", "https://v.qq.com", "https://v.qq.com/x/search/?q=", '', ctrl_go_link_as, '', 1],
    [5, "优酷", "https://youku.com", "https://so.youku.com/search_video/q_", '', 2, '', 1],
    [5, "爱奇艺", "https://iqiyi.com", "https://so.iqiyi.com/so/q_", '', ctrl_go_link_as, '', 1],
    [6, "音乐", 0, 0, 0, ctrl_go_link_as, '', 1],
    [6, "网易云音乐", "https://music.163.com", "https://music.163.com/#/search/m/?s=", '', ctrl_go_link_as, '', 1],
    [6, "酷狗音乐", "https://www.kugou.com", "https://www.kugou.com/yy/html/search.html?searchKeyWord=", '', 2, '', 1],
    [7, "商品", 0, 0, 0, ctrl_go_link_as, '', 1],
    [7, "京东", "https://jd.com", "https://search.jd.com/Search?keyword=", '', ctrl_go_link_as, '', 1],
    [7, "1688", "https://1688.com", "https://s.1688.com/selloffer/offer_search.htm?keywords=", '', ctrl_go_link_as, '', 1],
    [11, "代码", 0, 0, 0, ctrl_go_link_as, '', 1],
    [11, "菜鸟教程", "https://www.runoob.com", "https://www.runoob.com/?s=", '', ctrl_go_link_as, '', 1],
    [11, "Github", "https://github.com", "https://github.com/search?q=", '', 2, '', 1],
    [11, "CSDN", "https://www.csdn.net", "https://cn.bing.com/search?q=", " site:www.csdn.net", ctrl_go_link_as, '', 1],
    [9, "图片", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [9, "Pexels", "https://www.pexels.com", "https://www.pexels.com/zh-cn/search/", '', ctrl_go_link_as, '', 1],
    [9, "vlipix", "https://www.vilipix.com", "https://www.vilipix.com/tags/", "/illusts", ctrl_go_link_as, '', 1],
    [9, "Unsplash", "https://unsplash.com", "https://unsplash.com/s/photos/", '', 2, '', 1],
    [9, "Stocksnap", "https://stocksnap.io", "https://stocksnap.io/search/", '', ctrl_go_link_as, '', 1],
    [9, "懒人图库", "https://www.lanrentuku.com", "https://www.lanrentuku.com/search/", '', ctrl_go_link_as, '', 1],
    [10, "测试", 0, 0, 0, ctrl_go_link_as, 0, 1],
    [10, "测试链接", "test.html", "test.html?", '', 0, '', 1],
    [10, "测试链接", "test.html", "test.html?", '', 1, '', 1],
    [10, "测试链接", "test.html", "test.html?", '', 2, '', 1],
    [-1, 0, 0, 0, 0, ctrl_go_link_as, 0, 1],
];



/*Looking_For_CoNfiG_EnD_sign*/
var Looking_For_Version = 2.0;
var Looking_For_Model_Temp_To_Save = Looking_For_Model;
var Looking_For_File_Name_Temp_To_Save = Looking_For_File_Name;
var Looking_For_Input_Tips_S;
var Looking_For_NP_Tips_Word_S;
var Looking_For_Error_Message_S;
var Looking_For_Hellow_Word_S;
var Looking_For_Point_X = 0;
var Looking_For_Point_Y = 0;
var Looking_For_Sitting_Button_Point_Down_Times = 0;
var Looking_For_Sitting_Button_Enter_Lock = 0;
const Looking_For_Texts_Languages = [
    {
        /*
        T: title;
        C: Chouse;
        VT: value tipe;
        TX: text;
        */
        Language_name: "English",
        T_sitting: "Sitting",
        T_theme: "Theme",
        T_navigation: "Navigation",
        T_preview: "Preview",
        T_links: "Links",
        T_others: "Others",
        T_save: "Save",
        T_about: "About",
        T_theme_language: "Language",
        T_theme_color: "Color",
        C_theme_color_mode_auto_change: "Color mode follows browser",
        C_theme_color_mode_light: "Light Mode",
        C_theme_color_mode_dark: "Dark Mode",
        C_theme_color_autofull: "Autofill subsequent colors",
        VT_theme_color_board: "Bottom board",
        VT_theme_color_background: "Background",
        VT_theme_color_button: "Button",
        VT_theme_color_button_hover: "Button(mouse over)",
        VT_theme_color_button_click: "Button (click)",
        VT_theme_color_text: "Text",
        VT_theme_round_corner: "Round corner",
        VT_theme_line_whdth: "Line width",
        C_theme_use_picture: "Use a picture as a background",
        T_theme_color_palette: "Color palette",
        VT_theme_color_hue: "Hue",
        VT_theme_color_saturation: "Saturation",
        VT_theme_color_intensity: "Intensity",
        VT_theme_color_opacity: "Opacity",
        VT_theme_color_cancel: "Cancel",
        C_confirm: "Confirm",
        C_theme_png_back: "Underlying background",
        C_theme_png_top: "Top-level watermark",
        C_theme_png_side: "Link page side background",
        C_theme_png_head: "Top input box background",
        C_theme_png_change_gradient: "Gradient in",
        C_theme_png_change_slide: "Slide in",
        C_search: "Search",
        VT_timeout: "Time out:",
        VT_navigation_slogn: "Slogan",
        VT_navigation_prompts: "Prompts",
        T_navigation_texts: "Texts",
        T_navigation_sleep: "Sleep",
        TX_navigation_sleep: "After the specified time has passed, collapse the functional area.",
        C_navigation_sleep: "Active sleep",
        C_others_scroll: "Scroll bars are displayed",
        TX_preview_eject_drawer: "Displays the evocation buttons for the side and top panels on the preview page, and if disabled, the buttons are automatically swiped in when the mouse is moved to the left (top). (Due to technical reasons, the performance loss is higher, the sensing is not yet sensitive, and it may take several attempts to trigger successfully.)",
        C_preview_button_show: "Display buttons",
        TX_preview_button_show: "The link drawer pops up to the right, and if disabled, the drawer will be expanded directly.",
        C_preview_eject_drawer: "Eject the drawer",
        TX_preview_png_change: "When previewing, if the target page has a background, the background of this page will not be visible, you can stop the background switching to save performance, if you enable this configuration, the background of the preview page will always be switched.",
        C_preview_png_change: "Change backgrounds when previewing",
        TX_links_way: "Chouse a way to go link:",
        C_links_way_turn: "Turn to",
        C_links_way_new: "Open in a new page",
        C_links_way_junp: "Open at new page without this page",
        T_links_way: "How to go",
        T_links_where: "Where to go",
        TX_links_add_group: "Add a group:<br>&emsp;&emsp;Please fill in the details according to the rules of 'Group name = 'Group name, group number = 'Group number', and click the 'Confirm' button below after entering.",
        TX_links_add_link: "Add a link:<br>&emsp;&emsp;Please enter the link information in the format of 'Link name', 'Home Page Link', 'Search Link', 'Search Link Suffix', or follow it, 'Belonging Group Number', 'Access Method', if 'Belonging Group Number' is '0', then there is no grouping, 'Access Mode' please use numbers instead, '0' means default, '1' means open in a new tab, and '2' means open the target page directly in a new tab. If there is a difference from the default opening method, you can add ', 'Reminder Information', the order of each attribute cannot be changed, and the attributes are separated by ','.",
        TX_links_where_part_0: 'Please search for "',
        TX_links_where_part_1: '" on the target website, then paste the full text of the destination address in the text box below, click "Confirm", and the program will automatically fill in the Add Link box.',
        C_links_copy_keyword: "Click here to copy the keyword",
        C_links_paste_link: "Click here to paste the link",
        TX_links_add: "Add and adjust groupings and links in the following windows:",
        T_others_scroll: "Scroll",
        T_others_messang_box: 'Message box',
        C_others_message_box_alert: "pops up and needs to be confirmed",
        C_others_message_box_none: "Not shown",
        C_others_message_box_timeout: "Time out:",
        TX_save_about: 'The modified configuration needs to be saved to take effect on reload, if the configuration is changed, save it. There are three ways to save this page:',
        TX_save_cookie: 'Save to Cookie: Saved to the cookies, automatically read when the page loads, and will be lost when changing browsers cookies.(Cookies can only be saved by using a web access)',
        TX_save_local: 'Save to local cache: Save to the browser cache, read automatically when the page loads, and will be lost when changing browsers or cleaning the cache.',
        TX_save_file: 'Save to File: Save to the source program file on this page, which will generate a new program file, replace it with the original location.',
        C_save_cookie: 'Save to cookies',
        C_save_remove_cookie: 'Remove cookies',
        C_save_file: 'Save to file',
        C_save_local: 'Save to local cache',
        C_save_remove_local: 'Remove the local cache',
        TX_about: '&emsp;&emsp;路亭 Looking For<br>&emsp;&emsp;Version No. ' 
            + Looking_For_Release_Version_Message.Version + '<br>&emsp;&emsp;Development Completion Time ' 
            + Looking_For_Release_Version_Message.Date.Day + ' ' 
            + Looking_For_Release_Version_Message.Date.Year + '.<br><br>&emsp;&emsp;This is a post pavilion on the side of the road, people can hurry by, but they can also take a little rest.<br><br><br>&emsp;&emsp;We are committed to bringing you enough experience with lightweight programs.',
        TX_preview_start: '&emsp;&emsp;Use the preview page directly, and if enabled, the page will load directly to the link in the input box below.',
        C_preview_start: 'Use the preview page directly',
        T_others_filename: 'Filename',
        TX_others_filename: 'The file name of this page is automatically read from the link address when left blank, but the page jump will be abnormal if the link does not contain the file name.',
        C_theme_png_batch_edit: 'Batch configuration',
        VT_theme_png_batch_edit_scope: 'Configure the scope',
        C_theme_png_batch_edit_scope_all: 'All backgrounds',
        VT_theme_png_batch_edit_location: 'Insertion location',
        C_theme_png_batch_edit_localtion_head: 'Head',
        C_theme_png_batch_edit_localtion_interval: 'Interval',
        C_theme_png_batch_edit_localtion_tail: 'Tail',
        VT_theme_png_batch_edit_condition: 'Identify conditions',
        C_theme_png_batch_edit_condition_rules: 'Rules',
        TX_theme_png_batch_edit_condition_rules: '&emsp;&emsp;Fill in the filter rule here<br><br>&emsp;&emsp;When using ordinal number filtering, please fill in the number and function identifier, for example:<br><br>&emsp;&emsp;1,2,4-11,??? <br><br>will filter out items with ordinal numbers of 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, and ordinal numbers containing three-digit integers<br>Note: Ordinal filtering is not available for additions.<br><br>When using route filtering, enter the route identifier and identifier. Such as:<br><br>&emsp;f1,f2/,f3?. png,f4*.png <br><br>will filter out the items in the path or file name containing “f1”, the “f2” folder, the file name f30.png to f39.png, and the file name f40.png to f4999.png.<br>Note: Path filtering is used to supplement the unknown number number when adding, please fill in the full path and file name.<br><br>&emsp;&emsp;The identifiers are as follows:<br>&emsp;[,] separate multiple filtering rules and execute them sequentially;<br>&emsp;[-] Indicates continuous increment or decrement from one number to another, applicable with serial number filtering;<br>&emsp;[&#60;-&#62;] Add <br>“&#60;” and “&#62;” on both sides of “-” to indicate continuous increment or decrement from one number to another, which is suitable for path filtering;<br>&emsp;[?] An indeterminate digit used to represent a number with a fixed number of digits;<br>&emsp;[*] Digital indeterminate digits, which are used to represent the number of uncertain digits;<br>Note: “-” can not be with“?” or “*” at the same time;<br>Note: Use “?” or the “*” wildcard character to add an item, the item that encounters the earliest access failure stops loading.',
        C_theme_png_batch_edit_condition_ordina: 'Ordinal',
        C_theme_png_batch_edit_condition_path: 'Path',
        VT_C_theme_png_batch_edit_condition_action: 'Action',
        C_theme_png_batch_edit_condition_add: 'Add',
        C_theme_png_batch_edit_condition_remove: 'Remove',
        VT_navigation_enter_prompt: 'Enter prompt',
        TX_proview_default_prompt: 'The default prompt message that does not use the default access method.',
        TX_No_confed_default_wellcom_title: ['Enter keywords at here please.', 'The type of content is ?', 'confed', 'What are you Looking For ?'],
        TX_Png_error_0: ['Error message', 'Background image ', 'Loading failed', 'A total of', ' sheets,', 'which have been disabled and the next one is loaded.', 'be disabled.'],
        TX_Png_error_1: ['Picture group', 'There is only one background left, with refresh turned off.'],
        TX_Png_error_2: ['Picture group', 'Failed to load all, all disabled and background turned off.'],
        TX_Time_Over: ['Tip', 'The waiting time can only be between 3-3600 s. '],
        TX_Link_placeholder: ['Group name = Group 1, group number = 1', 'Link 1,url,url?keyword=,site:url,1,0,confed', 'confed'],
        TX_Img_Batch_Edit: ['Bulk edit', 'Queried:', 'Added', 'Removed', 'Target not queried', '查询中...', 'Ordinal filtering is not available for adding'],
        TX_Link_load_no_group_default: 'No Grouping',
        TX_Link_auto_add_tips: ['Please check the link content or enter it directly.', "Error"],
        TX_Link_auto_add_key_words: 'Please check that the keywords are entered completely and accurately.',
        TX_Link_auto_add_next: ['The input box has been filled in automatically, please go to confirm.', 'Prompt'],
        TX_Link_add_add_group: ['Group name', 'Group number', 'Error', "The group number can only be between '1' and '1000'!", 'The group name is too long!', 'The group number has been used, please replace the group number.', 'The group has been added'],
        TX_Link_add_add_link: ['Error', 'Please select one of the available groups!', "Access Mode is only '0', '1', '2'!", 'The home page link cannot be "0".', 'The link has been added'],
        TX_Link_editer: ['Group', 'Serial Number', 'Link Name', 'Access Method', 'Notification that the default access method is not used', 'Home Page Link', 'Search Link', 'Search Link Suffix', 'Group Number', 'Group Name', 'Delete Group', 'Confirm', 'Turn to', 'New tab', 'Go to', 'Tipe'],
        TX_Link_edit_link: ['The link was edited incorrectly', 'Please select one of the available groups.', 'Use "0", "1", or "2" as the access method.', 'The home page link cannot be "0".', 'The serial number must be greater than "0".'],
        TX_Link_edit_group: ['The group number is incorrect', 'The minimum is "1".', 'The maximum is "1000".', "You can't change the group number without grouping!"],
        TX_Link_edit_remove_group: ['Are you sure you want to delete the group?', 'Prompt', "You can't delete an ungrouped group!"],
        TX_Message_time_over: 'The display time should be greater than "0".',
        TX_Img_close_easing: ['Error message', 'Background image ', 'Loading failed', 'A total of ', ' sheets.'],
        TX_Message_box_over: 'The notification box error <br>Notification is too numerous and is no longer displayed.',
        TX_Message_save_cookie: ['Save the prompt', 'Saved to cookies', 'Cookies are not saved.'],
        TX_Message_load_cookie: ['Prompt', 'The configuration was loaded from cookies', 'The cookies configuration version is inconsistent with the page and is deprecated.', 'Cookie configuration corruption detected and deprecated. '],
        TX_Message_remove_cookie: ['Save the prompt', 'The Cookies has been removed'],
        TX_Message_set_cookie: ['Error', 'Cookie length is too large, please reduce the amount of configured characters or save to a local cache.', 'Cookie saved error!'],
        TX_Message_save_local: ['Save the prompt', 'Saved to a local cache', 'Error', 'The local cache length is too large, please reduce the configuration character size or save to a file.'],
        TX_Message_load_local: ['Prompt', 'The configuration was loaded from the local cache', 'The local cache configuration version is inconsistent with the page and is deprecated.', 'Local cache corruption detected and deprecated.'],
        TX_Message_remove_local: ['Save the prompt', 'The local cache has been removed'],
        TX_Message_save_file: ['Save the prompt', 'Saving . . .', 'Saved to a file', 'Please replace the new file with the original location.'],
        TX_Message_change_file_name: ['Prompt', 'The file name has been modified to: '],
        TX_Message_link_less: ['Tip', 'Link not found, please add link'],
        TX_Message_iframe_over: ["Tips!", ", which will open for you in a new tab. ", "If you exceed the maximum number of tiles, it will open in a new tab for you. "]

    },
    {
        /*
        T: title;
        C: Chouse;
        VT: value tipe;
        TX: text;
        */
        Language_name: '简体中文',
        T_sitting: "设置",
        T_theme: "主题",
        T_navigation: "导航页",
        T_preview: "预览页",
        T_links: "链接",
        T_others: "其它选项",
        T_save: "保存",
        T_about: "关于",
        T_theme_language: "语言",
        T_theme_color: "色彩",
        C_theme_color_mode_auto_change: "色彩模式跟随浏览器",
        C_theme_color_mode_light: "浅色模式",
        C_theme_color_mode_dark: "深色模式",
        C_theme_color_autofull: "自动填充后续颜色",
        VT_theme_color_board: "底板颜色",
        VT_theme_color_background: "背景颜色",
        VT_theme_color_button: "按钮颜色",
        VT_theme_color_button_hover: "按钮(鼠标悬浮)",
        VT_theme_color_button_click: "按钮(点击)",
        VT_theme_color_text: "文字颜色",
        VT_theme_round_corner: "圆角量",
        VT_theme_line_whdth: "线宽",
        C_theme_use_picture: "使用图片作为背景",
        T_theme_color_palette: "选色卡",
        VT_theme_color_hue: "色相",
        VT_theme_color_saturation: "对比度",
        VT_theme_color_intensity: "亮度",
        VT_theme_color_opacity: "透明度",
        VT_theme_color_cancel: "取消",
        C_confirm: "确认",
        C_theme_png_back: "底层背景",
        C_theme_png_top: "顶层水印",
        C_theme_png_side: "预览页侧面背景",
        C_theme_png_head: "顶部输入框背景",
        C_theme_png_change_gradient: "淡入",
        C_theme_png_change_slide: "切入",
        C_search: "搜索",
        VT_timeout: "等待时间:",
        VT_navigation_slogn: "标语",
        VT_navigation_prompts: "提示语",
        T_navigation_texts: "文本内容",
        T_navigation_sleep: "睡眠",
        TX_navigation_sleep: "超过指定时间后，收起点击区域。",
        C_navigation_sleep: "启用睡眠",
        C_others_scroll: "显示滚动条",
        TX_preview_eject_drawer: "在预览页显示侧面板和顶部面板的唤出按钮，若禁用，则在鼠标移动到左侧（顶部）时按钮自动划入。（由于技术原因，性能损耗更高，感应尚不灵敏，可能需要多次尝试才能成功触发。）",
        C_preview_button_show: "显示按钮",
        TX_preview_button_show: "向右侧弹出链接抽屉，若禁用，将直接展开抽屉。",
        C_preview_eject_drawer: "弹出抽屉",
        TX_preview_png_change: "预览时，若目标页面设置了背景，本页面的背景将不可见，可以停止背景的切换，以节约性能，若启用此配置，将始终切换预览页的背景。",
        C_preview_png_change: "预览时切换背景",
        TX_links_way: "链接的访问方式:",
        C_links_way_turn: "转到",
        C_links_way_new: "在新标签页访问",
        C_links_way_junp: "在新标签页直接访问",
        T_links_way: "访问方式",
        T_links_where: "添加链接",
        TX_links_add_group: "添加一个分组:<br>&emsp;&emsp;请按照‘组名 = 《组名》，组号 = 《组号》’的规则填写内容，输入完成后点击下方的‘确认’按钮。",
        TX_links_add_link: "添加一个链接:<br>&emsp;&emsp;请按照‘《链接名》，《主页链接》，《搜索链接》，《搜索链接后缀》’的格式输入链接信息，也可在其后跟随‘，《所属分组编号》，《访问方式》’，若‘所属分组编号’为‘0’，则无分组，‘访问方式’请使用数字代替，‘0’表示默认、‘1’表示在新标签页打开、‘2’表示在新标签页直接打开目标页。若与默认打开方式有差异，可以添加‘，《提示信息》’，各属性顺序不可变更，属性间以‘，’分隔。",
        TX_links_where_part_0: '请在目标网站搜索“',
        TX_links_where_part_1: '”,然后将前往的目标地址全文粘贴在下方的文本框中,点击“确认”,程序将自动填写添加链接框。',
        C_links_copy_keyword: "点此复制关键词",
        C_links_paste_link: "点此粘贴链接",
        TX_links_add: "在以下窗口添加及调整分组和链接:",
        T_others_scroll: "滚动条",
        T_others_messang_box: '消息框',
        C_others_message_box_alert: "弹出且需确认",
        C_others_message_box_none: "不显示",
        C_others_message_box_timeout: "显示时间:",
        TX_save_about: "修改的配置需要保存才能在重新加载时生效，若更改了配置，请将其保存。本页提供三种保存方式：",
        TX_save_cookie: "保存到Cookie：保存到浏览Cookie中，页面加载时自动读取，会在更换浏览器或清理Cookie时丢失。(使用网络方式访问才能保存cookie)",
        TX_save_local: "保存到本地缓存：保存到浏览器缓存中，页面加载时自动读取，会在更换浏览器或清理缓存时丢失。",
        TX_save_file: "保存到文件：保存到本页面的源程序文件中，这会生成新的程序文件，请将其替换到原始位置。",
        C_save_cookie: '保存到Cookie',
        C_save_remove_cookie: '移除Cookie',
        C_save_file: '保存到文件',
        C_save_local: '保存到本地缓存',
        C_save_remove_local: '移除本地缓存',
        TX_about: '&emsp;&emsp;路亭 Looking For<br>&emsp;&emsp;版本号 ' 
            + Looking_For_Release_Version_Message.Version + '<br>&emsp;&emsp;开发完成时间 ' 
            + Looking_For_Release_Version_Message.Date.Day + ' ' 
            + Looking_For_Release_Version_Message.Date.Year + '.<br><br>&emsp;&emsp;这是栖于路边的驿亭，人们匆匆而过，也可微微留憩。<br><br><br>&emsp;&emsp;致力于以轻量化的程序为您带来足够的体验。',
        TX_preview_start: "&emsp;&emsp;直接使用预览页，若启用，页面载入时将直接访问下方输入框内的链接。",
        C_preview_start: '直接使用预览页',
        T_others_filename: '文件名',
        TX_others_filename: "本页面的文件名，留空时自动从链接地址读取，但链接不包含文件名时页面跳转将发生异常。",
        C_theme_png_batch_edit: '批量配置',
        VT_theme_png_batch_edit_scope: '配置范围',
        C_theme_png_batch_edit_scope_all: '所有背景',
        VT_theme_png_batch_edit_location: '插入背景',
        C_theme_png_batch_edit_localtion_head: '首部',
        C_theme_png_batch_edit_localtion_interval: '间隙',
        C_theme_png_batch_edit_localtion_tail: '尾部',
        VT_theme_png_batch_edit_condition: '识别条件',
        C_theme_png_batch_edit_condition_rules: '规则',
        TX_theme_png_batch_edit_condition_rules: "&emsp;&emsp;此处填写筛选规则<br><br>&emsp;&emsp;使用序号筛选时，请填入数字和功能标识符；如：<br><br>&emsp;1，2，4-11，？？？<br><br>将依次筛选出序号为1、2、4、5、6、7、8、9、10、11、及序数包含三位整数的项目；<br>注：序数筛选不适用于添加。<br><br>使用路径筛选时，请填入路径识别符和标识符。如：<br><br>&emsp;f1，f2/,f3?.png,f4*.png<br><br>将依次筛选出路径或文件名包含“f1”的、“f2”文件夹下的、文件名为f30.png到f39.png、文件名为f40.png到f4999.png的项目；<br>注：路径筛选用于添加时仅对未知数字编号起补充作用，请填入完整路径及文件名。<br><br>&emsp;&emsp;标识符如下：<br>&emsp;[,] 分隔多个筛选规则，按顺序执行；<br>&emsp;[-] 表示从一个数字连续递增或递减到另一个数字，适用与序号筛选；<br>&emsp;[&#60;-&#62;] 在“-”两侧添加<br>“&#60;”,“&#62;”,表示从一个数字连续递增或递减到另一个数字，适用于路径筛选；<br>&emsp;[?] 一位不确定数字，用于表示固定位数的数字；<br>&emsp;[*] 数位不确定数字，用于表示不确定位数的数字；<br>注：“-”不能与“？”或“*”同时使用；<br>注：使用“?”“*”通配符添加项目时，遇到最早的访问失败的项目即停止加载。",
        C_theme_png_batch_edit_condition_ordina: '序号',
        C_theme_png_batch_edit_condition_path: '路径',
        VT_C_theme_png_batch_edit_condition_action: '操作',
        C_theme_png_batch_edit_condition_add: '添加',
        C_theme_png_batch_edit_condition_remove: '移除',
        VT_navigation_enter_prompt: '输入提示',
        TX_proview_default_prompt: "未使用默认访问方式的默认提示信息。",
        TX_No_confed_default_wellcom_title: ['请在此输入关键词。', '要找哪一类？', '自定义', '路边亭台 ' + ' ' + ' 适之何方'],
        TX_Png_error_0: ['错误提示', '背景图片', '加载失败', '共', '张，', '已将其禁用并加载下一张。', '已禁用。'],
        TX_Png_error_1: ['图片组', '仅余一张背景，已关闭刷新。'],
        TX_Png_error_2: ['图片组', '全部加载失败，已禁用并关闭背景。'],
        TX_Time_Over: ['提示', '等待时间只能在3-3600 s 之间。'],
        TX_Link_placeholder: ['组名=组 1，组号=1', '链接 1,url,url?keyword=,site:url,1,0,自定义', '自定义'],
        TX_Img_Batch_Edit: ['批量编辑', '查询到:', '已添加', '已移除', '未查询到目标', '查询中...', '序数筛选不适用于添加'],
        TX_Link_load_no_group_default: '无分组',
        TX_Link_auto_add_tips: ['请检查链接内容或直接输入。', '提示'],
        TX_Link_auto_add_key_words: '请检查关键词是否完整准确输入。',
        TX_Link_auto_add_next: ['已自动填写输入框，请前往确认。', '提示'],
        TX_Link_add_add_group: ['组名', '组号', '提示', '组号仅能在‘1’到‘1000’之间!', '组名过长！', '该组号已使用，请更换组号。', '组已添加'],
        TX_Link_add_add_link: ['提示', '请选择可用的分组！', '访问方式仅可使用‘0’、‘1’、‘2’！', '主页链接不能为“0”。', '链接已添加'],
        TX_Link_editer: ['分组', '序号', '链接名', '访问方式', '未使用默认访问方式的提示信息', '主页链接', '搜索链接', '搜索链接后缀', '组号', '组名', '删除组', '确认', '转到', '新标签页', '直接访问', '提示'],
        TX_Link_edit_link: ['链接编辑有误', '请选择可用的组。', '访问方式请使用“0”、“1”或“2”。', '主页链接不能为“0”。', '序号必须大于“0”。'],
        TX_Link_edit_group: ['组号有误', '最小为“0”。', '最大为“1000”。', '不能修改无分组组号！'],
        TX_Link_edit_remove_group: ['确认要删除组吗？', '提示', '不能删除无分组组！'],
        TX_Message_time_over: '显示时间应大于“0”。',
        TX_Img_close_easing: ['错误提示', '背景图片 ', '加载失败', '共 ', ' 张。'],
        TX_Message_box_over: '通知框错误<br>通知数量过多，不再显示。',
        TX_Message_save_cookie: ['保存提示', '已保存到 Cookie', 'Cookie 未保存。'],
        TX_Message_load_cookie: ['提示', '已从Cookie加载配置', 'Cookie配置版本与页面不一致，已弃用。', '检测到Cookie配置损坏，已弃用。'],
        TX_Message_remove_cookie: ['保存提示', '已移除Cookie'],
        TX_Message_set_cookie: ['错误', 'Cookie长度过大，请减少配置字符量或保存到本地缓存。', 'Cookie保存出错！'],
        TX_Message_save_local: ['保存提示', '已保存到本地缓存', '本地缓存未保存。', '错误', '本地缓存长度过大，请减少配置字符量或保存到文件。'],
        TX_Message_load_local: ['提示', '已从本地缓存加载配置', '本地缓存配置版本与页面不一致，已弃用。', '检测到本地缓存损坏，已弃用。'],
        TX_Message_remove_local: ['保存提示', '已移除本地缓存'],
        TX_Message_save_file: ['保存提示', '保存中。。。', '已保存到文件', '请将新文件替换到原始位置。'],
        TX_Message_change_file_name: ['提示', '文件名已修改为：'],
        TX_Message_link_less: ['提示', '未查找到链接，请添加链接'],
        TX_Message_iframe_over: ["提示!", "，将为您在新标签页打开。", "超过最大分块数量，将为您在新标签页打开。"],

    }
];

let Looking_For_Language = {};
let Looking_For_Language_Box_Type = 0;
const Looking_For_Title = [
    ['路亭 Looking_For |\u00a0 z Z', '|\u00a0\u00a0\u00a0\u00a0\u00a0(∪.∪ )...zzz\u00a0\u00a0\u00a0\u00a0\u00a0|'],
    ['路亭 | Looking_For...', '|\u00a0\u00a0\u00a0\u00a0\u00a0ヾ(≧▽≦*)o\u00a0\u00a0\u00a0\u00a0\u00a0|']
];
const Looking_For_Slid_Value = [0, 0.0006, 0.0022, 0.0050, 0.0089, 0.0139, 0.0200, 0.0272, 0.0356, 0.0450, 0.0556, 0.0672, 0.0800, 0.0939, 0.1089, 0.1250, 0.1422, 0.1606, 0.1800, 0.2006, 0.2222, 0.2450, 0.2689, 0.2939, 0.3200, 0.3472, 0.3756, 0.4050, 0.4356, 0.4672, 0.5000, 0.5328, 0.5644, 0.5950, 0.6244, 0.6528, 0.6800, 0.7061, 0.7311, 0.7550, 0.7778, 0.7994, 0.8200, 0.8394, 0.8578, 0.8750, 0.8911, 0.9061, 0.9200, 0.9328, 0.9444, 0.9550, 0.9644, 0.9728, 0.9800, 0.9861, 0.9911, 0.9950, 0.9978, 0.9994, 1];
var Looking_For_Input_Ctrl = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
var Looking_For_Color_Chouse_Table_Use = 0;
var Looking_For_Color_Chouse_Table_Temp = "";
var Looking_For_Time = 0;
var Looking_For_Img_Use_Old = [0, 0, 0, 0, 0];
var Looking_For_S_Img_Show_R_Y_If_Use = 0;
var Looking_For_S_Img_Mix_R_Value = 0;
var Looking_For_S_Img_Show_Mask_X_Y_Line_Clean_Time;
var Looking_For_S_Img_Show_O_R_Clean_Time;
var Looking_For_Background_Img_Links_Grou_Timeout={
    B:{
        I:0,
        B:0
    },
    T:{
        I:0,
        B:0
    },
    I:{
        I:0,
        B:0
    },
    S:{
        I:0,
        B:0
    }
}
var Looking_For_N_Active_Value = 1;
var Looking_For_Message_Box_Clear_Timeout;
/* last is if_ready*/
var Looking_For_Background_Change_Sleep_Value = [1];
var Looking_For_Button_Disable_Time_Out = 0;
var Looking_For_Auto_Selet_Input_At_Open = 1;
const Looking_For_Chouse_Value = ['var(--Back_Color)', 'var(--Back_Color_Active)'];
var Looking_For_Message_Box_Hover_Keep = 0;
var Looking_For_Message_Box_Hover_Keep_Timeout;
var Looking_For_Message_Box_Remove_Timeout;
var Looking_For_Message_ID_Spase = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var Looking_For_Message_Box_Timeout = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var Looking_For_Message_Box_ID_Remove_Timeout = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var Looking_For_Button_Sleep_Value = [0, 0, 0, 0, 0, 0];
var Looking_For_Go_Link_As_Way = 0;
var Looking_For_Link_Edit_Useing = 0;
var Looking_For_Preview_Button_Down = 0;
var Looking_For_Preview_Table_Open = [0, 0];
var Looking_For_Background_Img_Change_Turn_Clear_Timeout = [0, 0, 0, 0];
var Looking_For_Background_Img_Change_Error_Times = [['', 0, -1], ['', 0, -1], ['', 0, -1], ['', 0, -1], ['', 0, -1]];
var Looking_For_Message_Box_Wite_Time_At_Start = 1000;
var Looking_For_Enter_Start_Lock = 0;
var Looking_For_B_G_I_P_Timeout;
var Looking_For_B_G_I_P_Timeout_C;
var Looking_For_B_G_I_P_Timeout_C_V = 0;
var Looking_For_B_G_I_P_Timeout_H;
var Looking_For_B_G_I_P_Timeout_V = 0;
var Looking_For_Load_Sitting_Local = 0;
var Looking_For_Img_Preview_Loac_Error_Timeout;
var Looking_For_Img_Preview_Loac_Error_Timeout_Value = "";
var Looking_For_Img_Preview_Loac_Error_Timeout_Times = 0;
var Looking_For_Img_Batch_Edit_Change_V = '';
var Looking_For_Img_Batch_Edit_Group_V = 0;
var Looking_For_Img_Batch_Edit_Where_V = 1;
var Looking_For_Img_Batch_Edit_Chouse_V = 0;
var Looking_For_Img_Batch_Edit_Add_Path_Chake_Paths = [0];
var Looking_For_Img_Batch_Edit_Add_Path_Chake_C = [0, 0, 0, 0];
var Looking_For_Img_Batch_Edit_Add_Path_Chake_V = 0;
var Looking_For_S_Background_Img_Link_Input_Show_Null_Way_focus = 0;
var Looking_For_Link_Editer_Go_Way_Temp = 0;
var Looking_For_Link_Editer_Go_Way_Value = 0;
var Looking_For_Background_Img_Links_B = [0];
var Looking_For_Background_Img_Links_T = [0];
var Looking_For_Background_Img_Links_S = [0];
var Looking_For_Background_Img_Links_I = [0];
var Looking_For_Background_Img_Links_Now = [-1, -1, -1, -1];
var Looking_For_Background_Img_Links_Using = [-1, -1, -1, -1];
var Looking_For_Background_Img_Home_Time;
var Looking_For_Background_Img_Links_Time = [0, 0, 0, 0];
var Looking_For_Background_Img_Element_Useing = [0, 0, 0, 0];
var Looking_For_Background_Img_Links_Load_Errored = '';
var Looking_For_Background_Img_Links_Load_Errored_times = 0;
var Looking_For_Background_Img_Group_Load_Errored = [0, 0, 0, 0];
var Looking_For_Background_Img_Group_Load_Error_Overed = [0, 0, 0, 0];
var Looking_For_Background_Img_Group_Load_Opened = [0, 0, 0, 0];
var Looking_For_Background_Img_Links_Load_Error_Timeout;
var Looking_For_Background_Img_Change_Ready_Wait = [1, 1, 1, 1];
var Looking_For_Background_Img_Change_First_Load = [1, 1, 1, 1];
var Looking_For_Sitting_Button_Show_Timeout_Navigation;
var Looking_For_S_Re_Scroll_Clear;
var Looking_For_Navigation_Active_Show_Mouse_Timeout;
var Looking_For_Chouse_Language_Box_Open_Door = 0;


var value_welcome_page = 1;
var value_view_page = 0;
var ctrl_hide_side_button = 0;
var ctrl_hide_top_button = 0;
var value_side_table = 0;
var value_top_table = 0;
/*var active_box_time_speed=170;*/
var value_time_refesh_start = 0;
var value_time_refesh_over = 7;
var value_temp_search_url = -1;
var ctrl_if_wite = 0;
var ctrl_lode_in_ids_open_twices = 0;
var ctrl_side_link_box_box_number = 9999;
var ctrl_side_table_top_old_height = 0;
var value_link_go_as_temp = ctrl_go_link_as;
var time_mouse_active = 0;
var mouse_point_at_x = 0;
var mouse_point_at_y = 0;
var infram_use_number = [0, 0, 0, 0, 0];
var infram_useing_number = [null, null, null, null, null];
var link_go_way = 0;



function Looking_For_Load_At_Start() {
    Looking_For_Language_Load();
    Looking_For_Load_Sitting_From_Local();
    Looking_For_Load_Sitting_From_Cookie();
    Looking_For_Get_Dark_Light_Mode();
    Looking_For_Listener_Dark_Light();
    //Looking_For_Language_Load();
    Looking_For_Load_No_Confed_Default();
    Looking_For_Text_Witer();
    Looking_For_Add_Time();
    Looking_For_Background_Change_Sleep_Start();
    Looking_For_Link_UseAble_Load_At_Start();
    Looking_For_Preview_Table_Show_Button_Model_Load();
    Looking_For_Message_Box_Wite();
    input_value_be_same();
    putin_enter_start();
}
function Looking_For_Load_No_Confed_Default() {
    /*const Def_Values = [
        ['请在此输入关键词。', '要找哪一类？', '自定义', '路边亭台 ' + ' ' + ' 适之何方'],
        ['Enter keywords at here please.', 'The type of content is ?', 'confed', 'What are you Looking For ?']
    ];*/
    const Def_Values = Looking_For_Language.TX_No_confed_default_wellcom_title;
    Looking_For_Input_Tips_S = Looking_For_Input_Tips;
    Looking_For_NP_Tips_Word_S = Looking_For_NP_Tips_Word;
    Looking_For_Error_Message_S = Looking_For_Error_Message;
    Looking_For_Hellow_Word_S = Looking_For_Hellow_Word;
    if (Looking_For_Input_Tips == 'LF0nullb;') Looking_For_Input_Tips = Def_Values[0];
    if (Looking_For_NP_Tips_Word == 'LF0nullb;') Looking_For_NP_Tips_Word = Def_Values[1];
    if (Looking_For_Error_Message == 'LF0nullb;') Looking_For_Error_Message = Def_Values[2];
    if (Looking_For_Hellow_Word == 'LF0nullb;') Looking_For_Hellow_Word = Def_Values[3];
}
function Looking_For_Load_No_Confed_Default_Re_Load() {
    /*const Def_Values = [
        ['请在此输入关键词。', '要找哪一类？', '自定义', '路边亭台 ' + ' ' + ' 适之何方'],
        ['Enter keywords at here please.', 'The type of content is ?', 'confed', 'What are you Looking For ?']
    ];*/
    const Def_Values = Looking_For_Language.TX_No_confed_default_wellcom_title;
    if (Looking_For_Input_Tips_S == 'LF0nullb;') Looking_For_Input_Tips = Def_Values[0];
    if (Looking_For_NP_Tips_Word_S == 'LF0nullb;') Looking_For_NP_Tips_Word = Def_Values[1];
    if (Looking_For_Error_Message_S == 'LF0nullb;') Looking_For_Error_Message = Def_Values[2];
    if (Looking_For_Hellow_Word_S == 'LF0nullb;') Looking_For_Hellow_Word = Def_Values[3];
}
function Looking_For_Language_Load(if_confed = 0) {
    let Long = Looking_For_Texts_Languages.length;
    if (Looking_For_Language_Sitting < 0 || Looking_For_Language_Sitting >= Long) {
        Looking_For_Language_Sitting = 0;
        Looking_For_Language_Box_Type = 1;
    }
    if (if_confed) Looking_For_Language_Box_Type = 0;
    Looking_For_Language = Looking_For_Texts_Languages[Looking_For_Language_Sitting];
}
function Looking_For_Language_Box_Creater() {
    const L_Box_T_H = ['<div id="S_Language_Box_Door" class="Auto_Door_Open"><div class="S_Min_Height_42"><div id="S_Language_Box_Pad" class="S_Language_Chouse_Pad">', ''];
    const L_Box_T_F = ['</div></div></div>', ''];
    const C_Box_T_H = ['<div class="Box_Side_Line S_Chose_Box Button_Click S_Max_width_200" onclick="Looking_For_Chouse_Language_Box_Open(', '<div class="Box_Side_Line S_Chose_Box Button_Click" onclick="Looking_For_Language_Chouse('];
    const C_Box_T_I_H = ')"><div id="S_Language_Chouse_Value_';
    const C_Box_T_I_F = '" class="Box_Side_Line S_Value_Chouse_Box"></div><h5 style="margin-left: 45px">';
    const C_Box_T_F = '</h5></div>';
    let E_Box = document.getElementById('S_Language_Box');
    let Create_type = 1, Text_inner;
    let Long = Looking_For_Texts_Languages.length;
    let number0 = 0;
    if (Long > 3) {
        Create_type = 0;
        if (Looking_For_Language_Box_Type) {
            Create_type = 1;
        }
    }
    Text_inner = L_Box_T_H[Create_type];
    for (; ;) {
        if (number0 >= Long) break;
        Text_inner = Text_inner + C_Box_T_H[Create_type] + number0 + C_Box_T_I_H + number0 + C_Box_T_I_F + Looking_For_Texts_Languages[number0].Language_name + C_Box_T_F;
        number0++;
    }
    Text_inner = Text_inner + L_Box_T_F[Create_type];
    E_Box.innerHTML = Text_inner;
    Looking_For_Chouse_Language_Chouse_Load();
    return 0;
}
function Looking_For_Chouse_Language_Box_Open(value) {
    let E_Door = document.getElementById('S_Language_Box_Door');
    let E_Pad = document.getElementById('S_Language_Box_Pad');
    let Long = Looking_For_Texts_Languages.length;
    if (Looking_For_Chouse_Language_Box_Open_Door) {
        Looking_For_Chouse_Language_Box_Open_Door = 0;
        E_Door.style['grid-template-rows'] = '0fr';
    }
    else {
        Looking_For_Chouse_Language_Box_Open_Door = 1;
        E_Door.style['grid-template-rows'] = '1fr';
        E_Pad.style.marginTop = '0px';
    }
    Looking_For_Language_Chouse(value);
}
function Looking_For_Chouse_Language_Chouse_Load() {
    const ID_T = 'S_Language_Chouse_Value_';
    let E_Pad = document.getElementById('S_Language_Box_Pad');
    let E_Chack = document.getElementById(ID_T + '0');
    let Height = 42;
    let number0 = 0;
    let Long = Looking_For_Texts_Languages.length;
    if (E_Chack === null) return 0;
    if (E_Pad !== null) {
        Height = Height * Looking_For_Language_Sitting;
        Height = '-' + Height + 'px';
        E_Pad.style.marginTop = Height;
    }
    for (; ;) {
        if (number0 >= Long) break;
        if (number0 == Looking_For_Language_Sitting) document.getElementById(ID_T + number0).style.background = "var(--Back_Color_Active)";
        else document.getElementById(ID_T + number0).style.background = "var(--Back_Color)";
        number0++;
    }
}
function Looking_For_Sitting_Load_At_Open() {
    Looking_For_Chouse_Load();
    Looking_For_Img_Batch_Edit_Group();
    Looking_For_Img_Batch_Edit_Where();
    Looking_For_Img_Batch_Edit_Chouse();
}
function Looking_For_hsla_to_rgba(value) {
    let h = 0, s = 0, l = 0, a = 0;
    let color = {
        r: 0,
        g: 0,
        b: 0,
        a: 0
    };
    function hsl_to_rgb(p, q, h_v) {
        let temp1 = 0;
        if (h_v < 0) h_v = h_v + 1;
        if (h_v > 1) h_v = h_v - 1;
        if (h_v < 1 / 6) temp1 = p + (q - p) * 6 * h_v;
        else if (h_v < 1 / 2) temp1 = q;
        else if (h_v < 2 / 3) temp1 = p + (q - p) * 6 * (2 / 3 - h_v);
        else temp1 = p;
        return temp1;
    }
    let temp0 = 0, temp2 = 0;
    temp0 = value.split(',');
    h = temp0[0].replace(/[^\d]/g, '');
    h = Number(h) / 360;
    s = temp0[1].replace(/[^\d]/g, '');
    s = Number(s) / 100;
    l = temp0[2].replace(/[^\d]/g, '');
    l = Number(l) / 100;
    a = temp0[3].replace(/[^\d.]/g, '');
    color.a = Number(a);
    if (s === 0) {
        color.r = color.g = color.b = l;
    }
    else {
        if (l < 0.5) temp0 = l * (1 + s);
        else temp0 = l + s - l * s;
        temp2 = 2 * l - temp0;
        color.r = hsl_to_rgb(temp2, temp0, h + 1 / 3);
        color.g = hsl_to_rgb(temp2, temp0, h);
        color.b = hsl_to_rgb(temp2, temp0, h - 1 / 3);
    }
    color.r = (color.r * 255).toFixed(0);
    color.g = (color.g * 255).toFixed(0);
    color.b = (color.b * 255).toFixed(0);
    color.a = (color.a * 255).toFixed(0);
    return color;
}
function Looking_For_Icon_Maker() {
    const icon_data_p = [0, 39, 6, 22, 6, 22, 6, 22, 6, 11, 56, 3, 22, 6, 22, 65, 3, 10, 3, 12, 3, 10, 3, 12, 3, 10, 3, 12, 3, 10, 3, 12, 3, 10, 3, 12, 3, 10, 3, 12, 3, 10, 3, 12, 3, 2, 6, 2, 3, 12, 3, 2, 6, 2, 3, 12, 3, 10, 3, 12, 3, 10, 3, 12, 3, 10, 3, 12, 3, 10, 3, 36, 24, 3, 26, 1, 28];
    const icon_data_s = '0000000000000000000000000000000000000001111110000000000000000000000111111000000000000000000000011111100000000000000000000001111110000000000011111111111111111111111111111111111111111111111111111111000111111111111111111111100000011111111111111111111110000000000000000000000000000000000000000000000000000000000000000011100000000001110000000000001110000000000111000000000000111000000000011100000000000011100000000001110000000000001110000000000111000000000000111000000000011100000000000011100000000001110000000000001110011111100111000000000000111001111110011100000000000011100000000001110000000000001110000000000111000000000000111000000000011100000000000011100000000001110000000000000000000000000000000000001111111111111111111111110001111111111111111111111111101111111111111111111111111111';
    const build_way = 1;
    let C_data = [0];
    let con = document.createElement('canvas');
    let ctx = con.getContext('2d');
    let icon_D = ctx.createImageData(28, 28);
    let I_data = icon_D.data;
    let Base64_I = '';
    let number0 = 0, number1 = 0;
    let number2 = 0, number3 = 1;
    con.height = 28;
    con.width = 28;
    C_data[0] = Looking_For_hsla_to_rgba(Looking_For_Background_Style[Looking_For_Dark_Light_Style][1]);
    C_data[1] = Looking_For_hsla_to_rgba(Looking_For_Background_Style[Looking_For_Dark_Light_Style][5]);
    if (build_way) {
        number2 = icon_data_p[0];
        for (; ;) {
            if (icon_data_p[number3] == undefined) break;
            I_data[number1++] = C_data[number2].r;
            I_data[number1++] = C_data[number2].g;
            I_data[number1++] = C_data[number2].b;
            I_data[number1++] = C_data[number2].a;
            number0++;
            if (number0 >= icon_data_p[number3]) {
                number0 = 0, number3++;
                if (number2) number2 = 0;
                else number2 = 1;
            }
        }
    }
    else {
        for (; ;) {
            if (icon_data_s[number0] == undefined) break;
            I_data[number1] = C_data[icon_data_s[number0]].r;
            number1++;
            I_data[number1] = C_data[icon_data_s[number0]].g;
            number1++;
            I_data[number1] = C_data[icon_data_s[number0]].b;
            number1++;
            I_data[number1] = C_data[icon_data_s[number0]].a;
            number1++;
            number0++;
        }
    }
    ctx.putImageData(icon_D, 0, 0);
    Base64_I = con.toDataURL();
    document.getElementById('Looking_For_Icon').href = Base64_I;
}
function Looking_For_Add_Time() {
    if (Looking_For_Background_Change_Sleep_Value[0] && value_welcome_page) setTimeout(function () {
        Looking_For_Add_Time();
    }, 1000);
    Looking_For_Time++;
    /*active when input active*/
    if (document.activeElement.id == 'wellcome_chars_input') Looking_For_Time = 0;
    if (Looking_For_Time > Looking_For_Sleep_Time) {
        Looking_For_Navigation_Active(0);
    }
}
function Looking_For_Title_Change(value = 1) {
    document.title = Looking_For_Title[value][1];
    setTimeout(function () {
        document.title = Looking_For_Title[value][0];
    }, 1000);
}
function Looking_For_Navigation_Active(value = 1) {
    var Element_Input = document.getElementById('wellcome_chars_input');
    if (Looking_For_Navigation_Sleep && value_welcome_page) {
        if (value == 1) {
            document.getElementById('Navigation_Box').style.height = '100%';
            document.getElementById('Navigation_Active').style['z-index'] = '-1';
            Element_Input.focus();
            if (Looking_For_Auto_Selet_Input_At_Open) Element_Input.setSelectionRange(0, Element_Input.value.length);
        }
        else {
            document.getElementById('Navigation_Box').style.height = '0px';
            document.getElementById('Navigation_Active').style['z-index'] = '1';
        }
    }
    Looking_For_Time = 0;
}
function Looking_For_Navigation_Active_Show_Mouse() {
    let E = document.getElementById('Navigation_Active');
    clearTimeout(Looking_For_Navigation_Active_Show_Mouse_Timeout);
    E.style.cursor = 'auto';
    Looking_For_Navigation_Active_Show_Mouse_Timeout = setTimeout(function () {
        E.style.cursor = 'none';
    }, 2000);
}
function Looking_For_Navigation_Cameback_Active() {
    setTimeout(function () {
        Looking_For_Navigation_Active();
    }, 200);
}
function Looking_For_Background_Img_Group_Slipt() {
    let Temp_L = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style];
    let number_T = [0, 0, 0, 0, 0];
    let number0 = 0, number1 = 0;
    Looking_For_Background_Img_Links_B = [];
    Looking_For_Background_Img_Links_T = [];
    Looking_For_Background_Img_Links_S = [];
    Looking_For_Background_Img_Links_I = [];
    for (; ;) {
        number1 = Temp_L[number0][0];
        if (number1 == -2) break;
        if (number1 == 1) Looking_For_Background_Img_Links_B[number_T[number1]] = Temp_L[number0];
        else if (number1 == 2) Looking_For_Background_Img_Links_T[number_T[number1]] = Temp_L[number0];
        else if (number1 == 3) Looking_For_Background_Img_Links_S[number_T[number1]] = Temp_L[number0];
        else Looking_For_Background_Img_Links_I[number_T[number1]] = Temp_L[number0];
        number_T[number1]++;
        number0++;
    }
}
function Looking_For_Background_Img_ReLoad(value = 0) {
    Looking_For_Background_Img_Group_Slipt();
    if (value == 1) {
        Looking_For_Background_Img_Links_Now = [-1, -1, -1, -1];
        Looking_For_Background_Img_Links_Using = [-1, -1, -1, -1];
    }
}
function Looking_For_Background_Img_Next(group_links) {
    let Temp_V = group_links;
    let number0 = 0;
    let temp_end = false;
    if (Temp_V[0] === undefined) return -1;
    number0 = Temp_V[0][0];
    number0--;
    number0 = Looking_For_Background_Img_Links_Now[number0];
    number0++;
    for (; ;) {
        if (Temp_V[number0] === undefined) {
            if (temp_end) return -1;
            number0 = 0;
            if (Temp_V[number0] === undefined) return -1;
            temp_end = true;
        }
        if (Temp_V[number0][5] == 1) return number0;
        number0++;
    }
}
function Looking_For_Background_Img_B() {
    let number0 = 0;
    clearTimeout(Looking_For_Background_Img_Links_Time[0]);
    if (!Looking_For_Background_Change_Sleep_Value[0]) return 0;
    if (value_view_page) {
        if (Looking_For_Sleep_Background_at_View) {
            if (!Looking_For_Background_Img_Change_First_Load[0]) return 0;
        }
    }
    if (!Looking_For_Img_Use[0] || !Looking_For_Img_Use[1]) {
        Looking_For_Background_Img_Close(0);
        return -1;
    }
    number0 = Looking_For_Background_Img_Next(Looking_For_Background_Img_Links_B);
    if (number0 == -1) {
        Looking_For_Background_Img_Group_Load_Error_Overed[0] = 2;
        Looking_For_Background_Img_Close(0);
    }
    else if (number0 != Looking_For_Background_Img_Links_Using[0] || Looking_For_Background_Img_Change_First_Load[0]) {
        Looking_For_Background_Img_Group_Load_Error_Overed[0] = 0;
        Looking_For_Background_Img_Links_Now[0] = number0;
        Looking_For_Background_Img_Load(0, Looking_For_Background_Img_Links_B);
    }
    else {
        Looking_For_Background_Img_Group_Load_Error_Overed[0] = 1;
    }
}
function Looking_For_Background_Img_T() {
    let number0 = 0;
    clearTimeout(Looking_For_Background_Img_Links_Time[1]);
    if (!Looking_For_Background_Change_Sleep_Value[0]) return 0;
    if (!Looking_For_Img_Use[0] || !Looking_For_Img_Use[2]) {
        Looking_For_Background_Img_Close(1);
        return -1;
    }
    number0 = Looking_For_Background_Img_Next(Looking_For_Background_Img_Links_T);
    if (number0 == -1) {
        Looking_For_Background_Img_Group_Load_Error_Overed[1] = 2;
        Looking_For_Background_Img_Close(1);
    }
    else if (number0 != Looking_For_Background_Img_Links_Using[1] || Looking_For_Background_Img_Change_First_Load[1]) {
        Looking_For_Background_Img_Group_Load_Error_Overed[1] = 0;
        Looking_For_Background_Img_Links_Now[1] = number0;
        Looking_For_Background_Img_Load(1, Looking_For_Background_Img_Links_T);
    }
    else Looking_For_Background_Img_Group_Load_Error_Overed[1] = 1;
}
function Looking_For_Background_Img_S() {
    let number0 = 0;
    clearTimeout(Looking_For_Background_Img_Links_Time[2]);
    if (!Looking_For_Background_Change_Sleep_Value[0]) return 0;
    if (!Looking_For_Background_Img_Change_First_Load[2]) {
        if (!value_side_table) return 0;
    }
    if (!Looking_For_Img_Use[0] || !Looking_For_Img_Use[3]) {
        Looking_For_Background_Img_Close(2);
        return -1;
    }
    number0 = Looking_For_Background_Img_Next(Looking_For_Background_Img_Links_S);
    if (number0 == -1) {
        Looking_For_Background_Img_Group_Load_Error_Overed[2] = 2;
        Looking_For_Background_Img_Close(2);
    }
    else if (number0 != Looking_For_Background_Img_Links_Using[2] || Looking_For_Background_Img_Change_First_Load[2]) {
        Looking_For_Background_Img_Group_Load_Error_Overed[2] = 0;
        Looking_For_Background_Img_Links_Now[2] = number0;
        Looking_For_Background_Img_Load(2, Looking_For_Background_Img_Links_S);
    }
    else Looking_For_Background_Img_Group_Load_Error_Overed[2] = 1;
}
function Looking_For_Background_Img_I() {
    let number0 = 0;
    clearTimeout(Looking_For_Background_Img_Links_Time[3]);
    if (!Looking_For_Background_Change_Sleep_Value[0]) return 0;
    if (!Looking_For_Background_Img_Change_First_Load[2]) {
        if (!value_top_table) return 0;
    }
    if (!Looking_For_Img_Use[0] || !Looking_For_Img_Use[4]) {
        Looking_For_Background_Img_Close(3);
        return -1;
    }
    number0 = Looking_For_Background_Img_Next(Looking_For_Background_Img_Links_I);
    if (number0 == -1) {
        Looking_For_Background_Img_Group_Load_Error_Overed[3] = 2;
        Looking_For_Background_Img_Close(3);
    }
    else if (number0 != Looking_For_Background_Img_Links_Using[3] || Looking_For_Background_Img_Change_First_Load[3]) {
        Looking_For_Background_Img_Group_Load_Error_Overed[3] = 0;
        Looking_For_Background_Img_Links_Now[3] = number0;
        Looking_For_Background_Img_Load(3, Looking_For_Background_Img_Links_I);
    }
    else Looking_For_Background_Img_Group_Load_Error_Overed[3] = 1;
}
function Looking_For_Background_Img_Load(group = 0, links_array) {
    const ID_T = ['Home_Background', 'Home_Topground', 'View_Sideground', 'View_Topground'];
    let ID_I = ID_T[group];
    let E_I;
    let temp0;
    temp0 = Looking_For_Background_Img_Change_Ready(group);
    if (temp0) {
        setTimeout(function () {
            Looking_For_Background_Img_Load(group, links_array);
        }, 40);
        return -1;
    }
    let array_T = links_array[Looking_For_Background_Img_Links_Now[group]];
    if (!Looking_For_Background_Img_Element_Useing[group]) {
        ID_I = ID_I + 'B';
    }
    E_I = document.getElementById(ID_I);
    E_I.src = array_T[1];
    if (Looking_For_Background_Turn_Way == 1) {
        E_I.style.opacity = array_T[4];
        E_I.style['object-position'] = array_T[2] + "% " + array_T[3] + "%";
    }
}
function Looking_For_Background_Img_Change_Ready(group_number = 0, value = 0) {
    const ID_T = ['Home_Background', 'Home_Topground', 'View_Sideground', 'View_Topground'];
    let E_I, E_I_B, E_D, E_D_B;
    let temp0;
    if (value == 1) {
        Looking_For_Background_Img_Change_Ready_Wait[group_number] = 1;
        return -1;
    }
    if (!Looking_For_Background_Img_Change_Ready_Wait[group_number]) {
        return 0;
    }
    Looking_For_Background_Img_Change_Ready_Wait[group_number] = 0;
    E_I = document.getElementById(ID_T[group_number]);
    E_I_B = document.getElementById(ID_T[group_number] + 'B');
    E_D = document.getElementById(ID_T[group_number] + '_Box');
    E_D_B = document.getElementById(ID_T[group_number] + '_BoxB');
    if (Looking_For_Background_Turn_Way == 0) {
        E_D_B.style.transition = 'all 0s';
        E_D.style.transition = 'all 0s';
        E_D_B.style.width = '100%';
        E_D.style.width = '100%';
        if (Looking_For_Background_Img_Element_Useing[group_number]) {
            temp0 = E_I;
            E_I = E_I_B;
            E_I_B = temp0;
        }
        E_I_B.style.transition = 'all 0s';
        E_I_B.style['object-position'] = "0% 100%";
        E_I_B.style.opacity = 0;
        setTimeout(function () {
            E_I_B.style.transition = "object-position 1.2s ease 0s, opacity 1.5s ease-out 0s";
            E_I.style.transition = "object-position 1.2s ease 0s, opacity 1.5s ease-out 0s";
        }, 20);
    }
    else if (Looking_For_Background_Turn_Way == 1) {
        E_I_B.style.transition = 'all 0s';
        E_I.style.transition = 'all 0s';
        if (Looking_For_Background_Img_Element_Useing[group_number]) {
            temp0 = E_D;
            E_D = E_D_B;
            E_D_B = temp0;
        }
        E_D_B.style.width = '0px';
        E_D.style.width = '100%';
        setTimeout(function () {
            E_D_B.style.transition = 'width 2s';
            E_D.style.transition = 'width 2s';
        }, 20);
    }
    if (value == 0) {
        E_D_B.style.display = '-webkit-flex';
        E_D.style.display = '-webkit-flex';
    }
    return 1;
}
function Looking_For_Background_Img_Change(value = 0) {
    const ID_T = ['Home_Background', 'Home_Topground', 'View_Sideground', 'View_Topground'];
    let E_I = document.getElementById(ID_T[value]);
    let E_I_B = document.getElementById(ID_T[value] + 'B');
    let E_D = document.getElementById(ID_T[value] + '_Box');
    let E_D_B = document.getElementById(ID_T[value] + '_BoxB');
    let Array_T;
    let Array_T_Timeout;
    let Array_T_Grout_Timeout = Looking_For_Background_Img_Links_Grou_Timeout;
    let F_A_C = [
        function () {
            Array_T = Looking_For_Background_Img_Links_B;
            Array_T_Timeout = Array_T_Grout_Timeout.B;
        },
        function () {
            Array_T = Looking_For_Background_Img_Links_T;
            Array_T_Timeout = Array_T_Grout_Timeout.T;
        },
        function () {
            Array_T = Looking_For_Background_Img_Links_S;
            Array_T_Timeout = Array_T_Grout_Timeout.S;
        },
        function () {
            Array_T = Looking_For_Background_Img_Links_I;
            Array_T_Timeout = Array_T_Grout_Timeout.I;
        },
    ];
    let Img_Z_Index_S = -1, Img_Z_Index_H = -2;
    let img_urls = '';
    let temp0;
    if (Looking_For_Background_Turn_Way == 0) {
        F_A_C[value]();
        if (Looking_For_Background_Img_Element_Useing[value]) {
            temp0 = E_I;
            E_I = E_I_B;
            E_I_B = temp0;
            temp0 = E_D;
            E_D = E_D_B;
            E_D_B = temp0;
            temp0 = Array_T_Timeout.I;
            Array_T_Timeout.I = Array_T_Timeout.B;
            Array_T_Timeout.B = temp0;
        }
        img_urls = Array_T[Looking_For_Background_Img_Links_Now[value]];
        if (value == 1) {
            Img_Z_Index_S = 20, Img_Z_Index_H = 19;
        }
        E_D_B.style["z-index"] = Img_Z_Index_S;
        E_D.style["z-index"] = Img_Z_Index_H;
        clearTimeout(Array_T_Timeout.I);
        Array_T_Timeout.I = setTimeout(function(){
            E_I.style.opacity = 0;
        },1500);
        E_I_B.style.opacity = img_urls[4];
        E_I_B.style['object-position'] = img_urls[2] + "% " + img_urls[3] + "%";
        if (Looking_For_Background_Img_Element_Useing[value]) {
            E_I.style['object-position'] = "0% 100%";
        }
        else {
            E_I.style['object-position'] = "100% 100%";
        }
    }
    else if (Looking_For_Background_Turn_Way == 1) {
        if (Looking_For_Background_Img_Group_Load_Opened[value] == 0 && value <= 1) {
            F_A_C[value]();
            img_urls = Array_T[Looking_For_Background_Img_Links_Now[value]];
            E_I_B.style['object-position'] = "0% 100%";
            E_I.style['object-position'] = "100% 100%";
            if (Looking_For_Background_Img_Element_Useing[value]) {
                temp0 = E_I;
                E_I = E_I_B;
                E_I_B = temp0;
                temp0 = E_D;
                E_D = E_D_B;
                E_D_B = temp0;
            }
            E_D_B.style.transition = 'width 0s';
            E_D.style.transition = 'width 0s';
            E_I_B.style.transition = 'all 0s';
            E_I_B.style.opacity = 0;
            E_D_B.style.width = '100%';
            E_D.style.width = '0px';
            setTimeout(function () {
                E_D.style.transition = 'width 2s';
                E_I_B.style.transition = "object-position 1.2s ease 0s, opacity 1.5s ease-out 0s";
                E_I_B.style.opacity = img_urls[4];
                E_I_B.style['object-position'] = img_urls[2] + "% " + img_urls[3] + "%";
                setTimeout(function () {
                    E_I_B.style.transition = 'all 0s';
                    E_D_B.style.transition = 'width 2s';
                }, 2000);
            }, 40);
        }
        else {
            if (Looking_For_Background_Img_Element_Useing[value]) {
                temp0 = E_D;
                E_D = E_D_B;
                E_D_B = temp0;
            }
            E_D_B.style.width = '100%';
            E_D.style.width = '0px';
        }
    }
    Looking_For_Background_Img_Element_Useing[value] = !Looking_For_Background_Img_Element_Useing[value];
}
function Looking_For_Background_Img_Close(value = 0) {
    const ID_T = ['Home_Background', 'Home_Topground', 'View_Sideground', 'View_Topground'];
    let E_I = document.getElementById(ID_T[value]);
    let E_I_B = document.getElementById(ID_T[value] + 'B');
    Looking_For_Background_Img_Change_Ready(value, 1);
    Looking_For_Background_Img_Group_Load_Opened[value] = 0;
    E_I_B.style.transition = "object-position 1s, opacity 1.5s ease-out";
    E_I.style.transition = "object-position 1s, opacity 1.5s ease-out";
    E_I_B.style.opacity = 0;
    E_I_B.style['object-position'] = "100% 100%";
    E_I.style.opacity = 0;
    E_I.style['object-position'] = "0% 100%";
}
function Looking_For_Background_Img_Success(value = 0) {
    let temp = [
        function () { Looking_For_Background_Img_B() },
        function () { Looking_For_Background_Img_T() },
        function () { Looking_For_Background_Img_S() },
        function () { Looking_For_Background_Img_I() }
    ];
    Looking_For_Background_Img_Change(value);
    Looking_For_Background_Img_Group_Load_Opened[value] = 1;
    Looking_For_Background_Img_Change_First_Load[value] = 0;
    Looking_For_Background_Img_Links_Using[value] = Looking_For_Background_Img_Links_Now[value];
    Looking_For_Background_Img_Links_Time[value] = setTimeout(function () {
        temp[value]();
    }, Looking_For_Background_Turn_Time);
}
function Looking_For_Background_Img_Error(value = 0) {
    /*const Text_N = [
        ['错误提示', '背景图片', '加载失败', '共', '张，', '已将其禁用并加载下一张。'],
        ['Error message', 'Background image ', 'Loading failed', 'A total of', ' sheets,', 'which have been disabled and the next one is loaded.']
    ];
    const Text_O = [
        ['图片组', '仅余一张背景，已关闭刷新'],
        ['Picture group', 'There is only one background left, with refresh turned off']
    ];
    const Text_E = [
        ['图片组', '全部加载失败，已全部禁用并关闭背景'],
        ['Picture group', 'Failed to load all, all disabled and background turned off']
    ];*/
    const Text_N = Looking_For_Language.TX_Png_error_0;
    const Text_O = Looking_For_Language.TX_Png_error_1;
    const Text_E = Looking_For_Language.TX_Png_error_2;
    const Text_ID_T = [Looking_For_Language.C_theme_png_back, Looking_For_Language.C_theme_png_top, Looking_For_Language.C_theme_png_side, Looking_For_Language.C_theme_png_head];
    let F_S = [
        function () {
            Looking_For_Background_Img_Links_B[Looking_For_Background_Img_Links_Now[0]][5] = 0;
            Looking_For_Background_Img_B();
            Looking_For_Background_Img_Links_Load_Errored = Looking_For_Background_Img_Links_Load_Errored + Looking_For_Background_Img_Links_B[Looking_For_Background_Img_Links_Now[0]][1] + '; ';
        },
        function () {
            Looking_For_Background_Img_Links_T[Looking_For_Background_Img_Links_Now[1]][5] = 0;
            Looking_For_Background_Img_T();
            Looking_For_Background_Img_Links_Load_Errored = Looking_For_Background_Img_Links_Load_Errored + Looking_For_Background_Img_Links_T[Looking_For_Background_Img_Links_Now[1]][1] + '; ';
        },
        function () {
            Looking_For_Background_Img_Links_S[Looking_For_Background_Img_Links_Now[2]][5] = 0;
            Looking_For_Background_Img_S();
            Looking_For_Background_Img_Links_Load_Errored = Looking_For_Background_Img_Links_Load_Errored + Looking_For_Background_Img_Links_S[Looking_For_Background_Img_Links_Now[2]][1] + '; ';
        },
        function () {
            Looking_For_Background_Img_Links_I[Looking_For_Background_Img_Links_Now[3]][5] = 0;
            Looking_For_Background_Img_I();
            Looking_For_Background_Img_Links_Load_Errored = Looking_For_Background_Img_Links_Load_Errored + Looking_For_Background_Img_Links_I[Looking_For_Background_Img_Links_Now[3]][1] + '; ';
        }
    ];
    clearTimeout(Looking_For_Background_Img_Links_Load_Error_Timeout);
    Looking_For_Background_Img_Links_Load_Errored_times++;
    F_S[value]();
    Looking_For_Background_Img_Group_Load_Errored[value] = 1;
    Looking_For_Background_Img_Links_Load_Error_Timeout = setTimeout(function () {
        let L_only = false, L_end = false;
        let L_O_T = '', L_E_T = '';
        let number0 = 0;
        if (Looking_For_Model == -1) {
            let number1 = 0;
            let Long = Looking_For_Background_If_Use.length;
            for (; ;) {
                if (number1 >= Long) break;
                Looking_For_S_Img_Link_UseAble_Load(number1);
                number1++;
            }
        }
        for (; ;) {
            if (number0 >= 4) break;
            if (Looking_For_Background_Img_Group_Load_Errored[number0]) {
                if (Looking_For_Background_Img_Group_Load_Error_Overed[number0] == 1) {
                    L_only = true;
                    L_O_T = L_O_T + Text_ID_T[number0] + ' ';
                }
                else if (Looking_For_Background_Img_Group_Load_Error_Overed[number0] == 2) {
                    L_end = true;
                    L_E_T = L_E_T + Text_ID_T[number0] + ' ';
                }
            }
            number0++;
        }
        if (L_only || L_end) {
            Looking_For_Message_Box([Text_N[0], Text_N[1], Looking_For_Background_Img_Links_Load_Errored, Text_N[2], Text_N[3] + Looking_For_Background_Img_Links_Load_Errored_times + Text_N[4], Text_N[6]]);
        }
        else {
            Looking_For_Message_Box([Text_N[0], Text_N[1], Looking_For_Background_Img_Links_Load_Errored, Text_N[2], Text_N[3] + Looking_For_Background_Img_Links_Load_Errored_times + Text_N[4], Text_N[5]]);
        }
        if (L_only) {
            Looking_For_Message_Box([Text_O[0], L_O_T, Text_O[1]]);
        }
        if (L_end) {
            Looking_For_Message_Box([Text_E[0], L_E_T, Text_E[1]]);
        }
        Looking_For_Background_Img_Links_Load_Errored_times = 0;
        Looking_For_Background_Img_Links_Load_Errored = '';
        Looking_For_Background_Img_Group_Load_Errored = [0, 0, 0, 0];
    }, 1000);
}
function Looking_For_Background_Img_Get_New() {
    Looking_For_Background_Img_ReLoad();
    if (Looking_For_Background_Img_Group_Load_Error_Overed[0] != 0) {
        Looking_For_Background_Img_Links_Using[0] = -1;
        Looking_For_Background_Img_B();
    }
    if (Looking_For_Background_Img_Group_Load_Error_Overed[1] != 0) {
        Looking_For_Background_Img_Links_Using[1] = -1;
        Looking_For_Background_Img_T();
    }
    if (Looking_For_Background_Img_Group_Load_Error_Overed[2] != 0) {
        Looking_For_Background_Img_Links_Using[2] = -1;
        Looking_For_Background_Img_S();
    }
    if (Looking_For_Background_Img_Group_Load_Error_Overed[3] != 0) {
        Looking_For_Background_Img_Links_Using[3] = -1;
        Looking_For_Background_Img_I();
    }
}
/*
0 get new and load
1 get new
2 get new refalsh
3 load
*/
function Looking_For_Background_Img(value = 0) {
    if (value <= 1) Looking_For_Background_Img_ReLoad();
    else if (value == 2) Looking_For_Background_Img_ReLoad(1);
    if (value == 0 || value == 3) {
        Looking_For_Background_Img_B();
        Looking_For_Background_Img_T();
        Looking_For_Background_Img_S();
        Looking_For_Background_Img_I();
    }
    if (value == 0 && Looking_For_Model == -1) {
        Looking_For_Background_Img_S_Batch_New(1);
        Looking_For_Background_Img_S_Batch_New(2);
        Looking_For_Background_Img_S_Batch_New(3);
        Looking_For_Background_Img_S_Batch_New(4);
    }
}
function Looking_For_Background_Img_S_Batch_New(group_number = 1) {
    let If_Null = false;
    If_Null = Looking_For_S_Background_Img_Link_Input_Show(group_number);
    if (If_Null) Looking_For_S_Background_Img_Link_Input_Show_Null_Way(group_number);
}
function Looking_For_S_Background_Sleep_Time_Change(value) {
    if (value == 0) {
        if (Looking_For_Navigation_Sleep) Looking_For_Navigation_Sleep = 0;
        else Looking_For_Navigation_Sleep = 1;
    }
    else {
        let T_V = Number(event.target.value.replace(/[^\d\.]/g, ""));
        let If_Error = 0;
        if (T_V <= 0) {
            T_V = 0;
            Looking_For_Navigation_Sleep = 0;
        }
        else Looking_For_Navigation_Sleep = 1;
        if (T_V > 3600) {
            T_V = 3600;
            If_Error = 1;
        }
        else if (T_V < 3) {
            T_V = 3;
            If_Error = 1;
        }
        T_V = T_V.toFixed(0);
        event.target.value = T_V + ' s';
        Looking_For_Sleep_Time = T_V;
        if (If_Error) {
            //let Tipes = [['提示', '等待时间只能在3-3600 s 之间。'], ['Tip', 'The waiting time can only be between 3-3600 s. ']];
            Looking_For_Message_Box(Looking_For_Language.TX_Time_Over);
        }
    }
    document.getElementById('S_N_Sleep_Value').style.background = Looking_For_Chouse_Value[Looking_For_Navigation_Sleep];

}
function Looking_For_Img_Show_Box_Show_OR_Close() {
    var If_Null = true;
    if (Looking_For_Img_Use[0] != Looking_For_Img_Use_Old[0]) {
        if (Looking_For_Img_Use[0]) document.getElementById('S_Color_Img_Link_Show_Box_Door').style['grid-template-rows'] = "1fr";
        else document.getElementById('S_Color_Img_Link_Show_Box_Door').style['grid-template-rows'] = "0fr";
        Looking_For_Img_Use_Old[0] = Looking_For_Img_Use[0];
    }
    if (Looking_For_Img_Use[1] != Looking_For_Img_Use_Old[1]) {
        if (Looking_For_Img_Use[1]) {
            If_Null = Looking_For_S_Background_Img_Link_Input_Show(1);
            if (If_Null) Looking_For_S_Background_Img_Link_Input_Show_Null_Way(1);
            else document.getElementById('S_Color_Img_Show_Door_B').style['grid-template-rows'] = "1fr";
        }
        else {
            document.getElementById('S_Color_Img_Show_Door_B').style['grid-template-rows'] = "0fr";
        }
        Looking_For_Img_Use_Old[1] = Looking_For_Img_Use[1];
    }
    if (Looking_For_Img_Use[2] != Looking_For_Img_Use_Old[2]) {
        if (Looking_For_Img_Use[2]) {
            If_Null = Looking_For_S_Background_Img_Link_Input_Show(2);
            if (If_Null) Looking_For_S_Background_Img_Link_Input_Show_Null_Way(2);
            else document.getElementById('S_Color_Img_Show_Door_T').style['grid-template-rows'] = "1fr";
        }
        else {
            document.getElementById('S_Color_Img_Show_Door_T').style['grid-template-rows'] = "0fr";
        }
        Looking_For_Img_Use_Old[2] = Looking_For_Img_Use[2];
    }
    if (Looking_For_Img_Use[3] != Looking_For_Img_Use_Old[3]) {
        if (Looking_For_Img_Use[3]) {
            If_Null = Looking_For_S_Background_Img_Link_Input_Show(3);
            if (If_Null) Looking_For_S_Background_Img_Link_Input_Show_Null_Way(3);
            else document.getElementById('S_Color_Img_Show_Door_S').style['grid-template-rows'] = "1fr";
        }
        else {
            document.getElementById('S_Color_Img_Show_Door_S').style['grid-template-rows'] = "0fr";
        }
        Looking_For_Img_Use_Old[3] = Looking_For_Img_Use[3];
    }
    if (Looking_For_Img_Use[4] != Looking_For_Img_Use_Old[4]) {
        if (Looking_For_Img_Use[4]) {
            If_Null = Looking_For_S_Background_Img_Link_Input_Show(4);
            if (If_Null) Looking_For_S_Background_Img_Link_Input_Show_Null_Way(4);
            else document.getElementById('S_Color_Img_Show_Door_I').style['grid-template-rows'] = "1fr";
        }
        else {
            document.getElementById('S_Color_Img_Show_Door_I').style['grid-template-rows'] = "0fr";
        }
        Looking_For_Img_Use_Old[4] = Looking_For_Img_Use[4];
    }
}
/*
1 open -1 close*/
function Looking_For_Background_Open_or_Close(team_number, open_close) {
    if (team_number < -1 || team_number > 3) return -1;
    if (open_close != 1 && open_close != -1) return -2;
    var Team_ID = "", Type_Value = "";
    if (team_number == 0) Team_ID = "Home_Background";
    else if (team_number == 1) Team_ID = "Home_Topground";
    else if (team_number == 2) Team_ID = "View_Sideground";
    else if (team_number == 3) Team_ID = "View_Topground";
    if (open_close == 1) {
        Type_Value = "-webkit-flex";
    }
    else if (open_close == -1) {
        Type_Value = "none";
    }
    document.getElementById(Team_ID + '_Box').style.display = Type_Value;
    document.getElementById(Team_ID + '_BoxB').style.display = Type_Value;
}
function Looking_For_Background_Change_Sleep_Start() {
    document.addEventListener("visibilitychange", function () {
        var value_s = document.visibilityState;
        if (value_s == 'visible') {
            Looking_For_Background_Change_Sleep_Value[0] = 1;
            Looking_For_Title_Change(1);
            clearTimeout(Looking_For_Background_Img_Home_Time);
            Looking_For_Background_Img_Home_Time = setTimeout(function () { Looking_For_Background_Img(3); }, 3000);
            Looking_For_Navigation_Cameback_Active();
            Looking_For_Add_Time();
            if (Looking_For_Preview_Button_Show_Model != 1) Looking_For_View_Run_In_Times();
        }
        else {
            Looking_For_Title_Change(0);
            Looking_For_Background_Change_Sleep_Value[0] = 0;
            clearTimeout(Looking_For_Background_Img_Home_Time);
            clearTimeout(Looking_For_Background_Img_Links_Time[0]);
            clearTimeout(Looking_For_Background_Img_Links_Time[1]);
            clearTimeout(Looking_For_Background_Img_Links_Time[2]);
            clearTimeout(Looking_For_Background_Img_Links_Time[3]);
        }
    });
}
function Looking_For_S_Background_Change_Time_Change() {
    var T_V = Number(event.target.value.replace(/[^\d\.]/g, ""));
    if (T_V < 3) T_V = 3;
    if (T_V > 600) T_V = 600;
    T_V = T_V.toFixed(3);
    event.target.value = T_V + ' s';
    T_V = T_V * 1000;
    Looking_For_Background_Turn_Time = T_V;
    clearTimeout(Looking_For_Background_Img_Home_Time);
    clearTimeout(Looking_For_Background_Img_Links_Time[0]);
    clearTimeout(Looking_For_Background_Img_Links_Time[1]);
    clearTimeout(Looking_For_Background_Img_Links_Time[2]);
    clearTimeout(Looking_For_Background_Img_Links_Time[3]);
    Looking_For_Background_Img_Home_Time = setTimeout(function () {
        Looking_For_Background_Img(3);
    }, Looking_For_Background_Turn_Time);
}
function Looking_For_Color_Background_Turn_Way(value = 0) {
    if (value) {
        Looking_For_Background_Turn_Way = 1;
    }
    else {
        Looking_For_Background_Turn_Way = 0;
    }
    Looking_For_Background_Img_Change_Ready(0, 1);
    Looking_For_Background_Img_Change_Ready(1, 1);
    Looking_For_Background_Img_Change_Ready(2, 1);
    Looking_For_Background_Img_Change_Ready(3, 1);
    Looking_For_Chouse_Load_Load('S_Color_I_B_W_S_Value', value, 'S_Color_I_B_W_O_Value');
}
function Looking_For_Sitting_Button() {
    let I_E = document.getElementById('web_in').getElementsByTagName('iframe');
    let number0 = 0;
    Looking_For_Model = -1;
    Looking_For_Ling_Go(1);
    setTimeout(function () {
        for (; ;) {
            if (I_E[number0] === undefined) break;
            I_E[number0].src = '';
            number0++;
        }
    }, 1000);
}
function Looking_For_Sitting_Button_Show(value = 0, type = 0) {
    const ID_L = ['N', 'H', 'I'];
    var point_y = event.clientY;
    var point_x = event.clientX;
    var S_Width = document.getElementById('Navigation_Box');
    var S_B_E = document.getElementById('Sitting_Button_' + ID_L[value]);
    Looking_For_Navigation_Active_Show_Mouse();
    if (type) S_B_E.style['margin-top'] = '';
    S_Width = window.getComputedStyle(S_Width).width;
    S_Width = S_Width.replace("px", "");
    if ((point_x + 60) > (Number(S_Width)));
    point_x = (Number(S_Width)) - point_x;

    if (point_y > Looking_For_Point_Y) {
        Looking_For_Sitting_Button_Point_Down_Times++;
    }
    Looking_For_Point_Y = point_y;
    if (Looking_For_Sitting_Button_Point_Down_Times > 3) {
        if (value == 0) {
            clearTimeout(Looking_For_Sitting_Button_Show_Timeout_Navigation);
            Looking_For_Sitting_Button_Show_Timeout_Navigation = setTimeout(function () {
                S_B_E.style['margin-top'] = '';
            }, 3000);
        }
        Looking_For_Sitting_Button_Point_Down_Times = 0;
        S_B_E.style['margin-top'] = '20px';
    }
    if (point_x > 300 || point_y > 300) S_B_E.style['margin-top'] = '';
}
function Looking_For_Sitting_Button_Hind(value = 0, type = 0) {
    let ID_L = ['N', 'H', 'I'];
    if (type) {
        document.getElementById('Sitton_Button_Box_' + ID_L[value]).style.top = '-60px';
    }
    else document.getElementById('Sitting_Button_' + ID_L[value]).style['margin-top'] = '';
}
function Looking_For_Ling_Go(value) {
    if (value == 1) Looking_For_Page_Change();
}
function Looking_For_Page_Change() {
    if (Looking_For_Model == 0) {
        if (value_welcome_page == 1) {
            value_welcome_page = 0;
            document.getElementById('wellcome_page').className = "wellcome_page_hidden";
            document.getElementById('Navigation_Box').style.height = '0px';
            value_view_page = 1;
            creat_side_table_divs();
            document.getElementById('web_mix').className = "web_mix";
            document.getElementById('View_Box').style.height = '100%';
        }
    }
    else if (Looking_For_Model == 3) {

    }
    else if (Looking_For_Model == -1) {
        value_welcome_page = 0;
        Looking_For_Sitting_Button_Hind(0, 1);
        Looking_For_Sitting_Button_Hind(1, 1);
        Looking_For_Sitting_Button_Hind(2, 1);
        document.getElementById('Navigation_Box').style.height = "0px";
        document.getElementById('View_Box').style.height = "0px";
        Looking_For_Language_Box_Creater();
        Looking_For_Text_Witer();
        Looking_For_Sitting_Load_At_Open();
        Looking_For_Link_Input_Show();
        Looking_For_Img_Show_Box_Show_OR_Close();
        document.getElementById('Sitting_Box').style.height = "100%";
    }
}
function Looking_For_Style_Load_Color_Chouse_Load(number, style_value, if_all_load) {
    var Temp = "";
    document.body.style.setProperty(style_value, Looking_For_Background_Style[Looking_For_Dark_Light_Style][number]);
    if (if_all_load == 1 || Looking_For_Input_Ctrl[number][0] == 0) {
        document.getElementById('S_Color_I_' + number).value = Looking_For_Background_Style[Looking_For_Dark_Light_Style][number];
    }
    if (if_all_load == 1 || Looking_For_Input_Ctrl[number][1] == 0) {
        Temp = Looking_For_Background_Style[Looking_For_Dark_Light_Style][number].split(',');
        document.getElementById('S_Color_R_' + number).style.background = "linear-gradient(to right," + Temp[0] + ',' + Temp[1] + ',' + Temp[2] + ',0) 0%,' + Temp[0] + ',' + Temp[1] + ',' + Temp[2] + ',1.00) 100%)';
        Temp = Temp[3];
        Temp = Temp.replace(')', '');
        document.getElementById('S_Color_R_' + number).value = Temp;
    }
}
function Looking_For_Style_Load_Line_Chouse_Load(number, style_value, if_all_load) {
    document.body.style.setProperty(style_value, Looking_For_Background_Style[Looking_For_Dark_Light_Style][number]);
    if (if_all_load == 1 || Looking_For_Input_Ctrl[number][0] == 0) {
        document.getElementById('S_Color_I_' + number).value = Looking_For_Background_Style[Looking_For_Dark_Light_Style][number];
    }
    if (if_all_load == 1 || Looking_For_Input_Ctrl[number][1] == 0) {
        document.getElementById('S_Color_R_' + number).value = parseFloat(Looking_For_Background_Style[Looking_For_Dark_Light_Style][number]);
    }
}
function Looking_For_Style_Load(value) {
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][0] != 0) {
        Looking_For_Style_Load_Color_Chouse_Load(0, '--Back_Color_Board', value);
    }
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][1] != 0) {
        Looking_For_Style_Load_Color_Chouse_Load(1, '--Back_Color_Back', value);
    }
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][2] != 0) {
        Looking_For_Style_Load_Color_Chouse_Load(2, '--Back_Color', value);
    }
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][3] != 0) {
        Looking_For_Style_Load_Color_Chouse_Load(3, '--Back_Color_Hover', value);
    }
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][4] != 0) {
        Looking_For_Style_Load_Color_Chouse_Load(4, '--Back_Color_Active', value);
    }
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][5] != 0) {
        Looking_For_Style_Load_Color_Chouse_Load(5, '--Back_Color_Text', value);
    }
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][6] != 0) {
        Looking_For_Style_Load_Line_Chouse_Load(6, '--Back_Border_Radius', value);
    }
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][7] != 0) {
        Looking_For_Style_Load_Line_Chouse_Load(7, '--Back_Line_Width', value);
    }
    document.body.style.setProperty('--Style_Scrollbar_Show', Looking_For_Background_Style[Looking_For_Dark_Light_Style][8]);
    Looking_For_Icon_Maker();
}
function Looking_For_Text_Witer() {
    Looking_For_Hellow_Words_Lode();
    document.getElementById('wellcome_chars_button').innerHTML = Looking_For_Language.C_search;
    document.getElementById('putin_button').innerHTML = Looking_For_Language.C_search;
    document.getElementById('Looking_For_Copyright_Notice').innerHTML = '&copy; 须语 Natramit ' + Looking_For_Release_Version_Message.Date.Year;
    if (Looking_For_Model != -1) return 0;
    document.getElementById('S_Title_S').innerHTML = Looking_For_Language.T_sitting;
    document.getElementById('S_Theme').innerHTML = Looking_For_Language.T_theme;
    document.getElementById('S_Theme_S').innerHTML = Looking_For_Language.T_theme;
    document.getElementById('S_Language').innerHTML = Looking_For_Language.T_theme_language;
    document.getElementById('S_Color').innerHTML = Looking_For_Language.T_theme_color;
    document.getElementById('S_Color_D_L_A_C_T').innerHTML = Looking_For_Language.C_theme_color_mode_auto_change;
    document.getElementById('S_Color_L_T').innerHTML = Looking_For_Language.C_theme_color_mode_light;
    document.getElementById('S_Color_D_T').innerHTML = Looking_For_Language.C_theme_color_mode_dark;
    document.getElementById('S_Color_Link_T').innerHTML = Looking_For_Language.C_theme_color_autofull;
    document.getElementById('S_Color_C_Board').innerHTML = Looking_For_Language.VT_theme_color_board;
    document.getElementById('S_Color_C_B').innerHTML = Looking_For_Language.VT_theme_color_background;
    document.getElementById('S_Color_C').innerHTML = Looking_For_Language.VT_theme_color_button;
    document.getElementById('S_Color_C_H').innerHTML = Looking_For_Language.VT_theme_color_button_hover;
    document.getElementById('S_Color_C_A').innerHTML = Looking_For_Language.VT_theme_color_button_click;
    document.getElementById('S_Color_C_T').innerHTML = Looking_For_Language.VT_theme_color_text;
    document.getElementById('S_Color_C_L').innerHTML = Looking_For_Language.VT_theme_round_corner;
    document.getElementById('S_Color_C_R').innerHTML = Looking_For_Language.VT_theme_line_whdth;
    document.getElementById('S_Color_I_B_T').innerHTML = Looking_For_Language.C_theme_use_picture;
    document.getElementById('S_Color_Chouse_Table_T0').innerHTML = Looking_For_Language.T_theme_color_palette;
    document.getElementById('S_Color_Chouse_Table_T1').innerHTML = Looking_For_Language.VT_theme_color_hue;
    document.getElementById('S_Color_Chouse_Table_T2').innerHTML = Looking_For_Language.VT_theme_color_saturation;
    document.getElementById('S_Color_Chouse_Table_T3').innerHTML = Looking_For_Language.VT_theme_color_intensity;
    document.getElementById('S_Color_Chouse_Table_T4').innerHTML = Looking_For_Language.VT_theme_color_opacity;
    document.getElementById('S_Color_Chouse_Table_T5').innerHTML = Looking_For_Language.VT_theme_color_cancel;
    document.getElementById('S_Color_Chouse_Table_T6').innerHTML = Looking_For_Language.C_confirm;
    document.getElementById('S_Color_I_S_B_T').innerHTML = Looking_For_Language.C_theme_png_back;
    document.getElementById('S_Color_I_S_T_T').innerHTML = Looking_For_Language.C_theme_png_top;
    document.getElementById('S_Color_I_S_S_T').innerHTML = Looking_For_Language.C_theme_png_side;
    document.getElementById('S_Color_I_S_I_T').innerHTML = Looking_For_Language.C_theme_png_head;
    document.getElementById('S_Color_I_B_W_O_T').innerHTML = Looking_For_Language.C_theme_png_change_gradient;
    document.getElementById('S_Color_I_B_W_S_T').innerHTML = Looking_For_Language.C_theme_png_change_slide;
    document.getElementById('S_Color_I_B_T_T').innerHTML = Looking_For_Language.VT_timeout;
    document.getElementById('S_Navigation_S').innerHTML = Looking_For_Language.T_navigation;
    document.getElementById('S_Navigation').innerHTML = Looking_For_Language.T_navigation;
    document.getElementById('S_Preview_S').innerHTML = Looking_For_Language.T_preview;
    document.getElementById('S_Preview').innerHTML = Looking_For_Language.T_preview;
    document.getElementById('S_Links_S').innerHTML = Looking_For_Language.T_links;
    document.getElementById('S_Links').innerHTML = Looking_For_Language.T_links;
    document.getElementById('S_Others_S').innerHTML = Looking_For_Language.T_others;
    document.getElementById('S_Others').innerHTML = Looking_For_Language.T_others;
    document.getElementById('S_Save_S').innerHTML = Looking_For_Language.T_save;
    document.getElementById('S_Save').innerHTML = Looking_For_Language.T_save;
    document.getElementById('S_About_S').innerHTML = Looking_For_Language.T_about;
    document.getElementById('S_About').innerHTML = Looking_For_Language.T_about;
    document.getElementById('S_Navigation_Hellow_T').innerHTML = Looking_For_Language.VT_navigation_slogn;
    document.getElementById('S_Navigation_Tipes_T').innerHTML = Looking_For_Language.VT_navigation_prompts;
    document.getElementById('S_Texts').innerHTML = Looking_For_Language.T_navigation_texts;
    document.getElementById('S_N_Sleep').innerHTML = Looking_For_Language.T_navigation_sleep;
    document.getElementById('S_N_Sleep_Text').innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_navigation_sleep;
    document.getElementById('S_N_Sleep_T').innerHTML = Looking_For_Language.C_navigation_sleep;
    document.getElementById('S_N_Sleep_T_T').innerHTML = Looking_For_Language.VT_timeout;
    document.getElementById('S_O_Scroll_T').innerHTML = Looking_For_Language.C_others_scroll;
    document.getElementById('S_P_B_M_Text').innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_preview_eject_drawer;
    document.getElementById('S_P_B_M_T').innerHTML = Looking_For_Language.C_preview_button_show;
    document.getElementById('S_P_L_M_Text').innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_preview_button_show;
    document.getElementById('S_P_L_M_T').innerHTML = Looking_For_Language.C_preview_eject_drawer;
    document.getElementById('S_P_Sleep_Text').innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_preview_png_change;
    document.getElementById('S_P_Sleep_T').innerHTML = Looking_For_Language.C_preview_png_change;
    document.getElementById('S_Link_Go_M_Text').innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_links_way;
    document.getElementById('S_L_Go_M0_T').innerHTML = Looking_For_Language.C_links_way_turn;
    document.getElementById('S_L_Go_M1_T').innerHTML = Looking_For_Language.C_links_way_new;
    document.getElementById('S_L_Go_M2_T').innerHTML = Looking_For_Language.C_links_way_junp;
    document.getElementById('S_Links_Go_Model').innerHTML = Looking_For_Language.T_links_way;
    document.getElementById('S_Links_Add').innerHTML = Looking_For_Language.T_links_where;
    document.getElementById('S_L_Group_Add_Text').innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_links_add_group;
    document.getElementById('S_L_Link_Add_Text').innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_links_add_link;
    document.getElementById("S_L_Auto_Add_Text_H").innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_links_where_part_0;
    document.getElementById("S_L_Auto_Add_Text_E").innerHTML = Looking_For_Language.TX_links_where_part_1;
    document.getElementById("S_L_Auto_Add_Copy_Word_T").innerHTML = Looking_For_Language.C_links_copy_keyword;
    document.getElementById("S_L_Auto_Add_Paste_Link_T").innerHTML = Looking_For_Language.C_links_paste_link;
    document.getElementById("S_L_Auto_Add_OK_Link_T").innerHTML = Looking_For_Language.C_confirm;
    document.getElementById("S_L_Group_Add_OK_Link_T").innerHTML = Looking_For_Language.C_confirm;
    document.getElementById("S_L_Link_Add_OK_Link_T").innerHTML = Looking_For_Language.C_confirm;
    document.getElementById("S_L_Self_Add_Text").innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_links_add;
    document.getElementById("S_Others_Scroll").innerHTML = Looking_For_Language.T_others_scroll;
    document.getElementById("S_Others_Message").innerHTML = Looking_For_Language.T_others_messang_box;
    document.getElementById("S_O_Message_0_T").innerHTML = Looking_For_Language.C_others_message_box_alert;
    document.getElementById("S_O_Message_1_T").innerHTML = Looking_For_Language.C_others_message_box_none;
    document.getElementById("S_O_Message_2_T").innerHTML = Looking_For_Language.C_others_message_box_timeout;
    document.getElementById("S_S_0_T").innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_save_about;
    document.getElementById("S_S_1_T").innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_save_cookie;
    document.getElementById("S_S_2_T").innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_save_local;
    document.getElementById("S_S_3_T").innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_save_file;
    document.getElementById("S_S_Cookie_T").innerHTML = Looking_For_Language.C_save_cookie;
    document.getElementById("S_S_Cookie_R_T").innerHTML = Looking_For_Language.C_save_remove_cookie;
    document.getElementById("S_S_File_T").innerHTML = Looking_For_Language.C_save_file;
    document.getElementById("S_S_Local_T").innerHTML = Looking_For_Language.C_save_local;
    document.getElementById("S_S_Local_R_T").innerHTML = Looking_For_Language.C_save_remove_local;
    document.getElementById("S_A_Text_T").innerHTML = Looking_For_Language.TX_about;
    document.getElementById("S_Link_Go_M3_Text").innerHTML = Looking_For_Language.TX_preview_start;
    document.getElementById("S_L_Go_M3_T").innerHTML = Looking_For_Language.C_preview_start;
    document.getElementById("S_Others_File_Name").innerHTML = Looking_For_Language.T_others_filename;
    document.getElementById("S_O_F_N_Text").innerHTML = '&emsp;&emsp;' + Looking_For_Language.TX_others_filename;
    document.getElementById("S_Color_I_B_E_T").innerHTML = Looking_For_Language.C_theme_png_batch_edit;
    document.getElementById("S_Color_I_B_E_G").innerHTML = Looking_For_Language.VT_theme_png_batch_edit_scope;
    document.getElementById("S_Color_I_B_E_G_T_0").innerHTML = Looking_For_Language.C_theme_png_batch_edit_scope_all;
    document.getElementById("S_Color_I_B_E_G_T_1").innerHTML = Looking_For_Language.C_theme_png_back;
    document.getElementById("S_Color_I_B_E_G_T_2").innerHTML = Looking_For_Language.C_theme_png_top;
    document.getElementById("S_Color_I_B_E_G_T_3").innerHTML = Looking_For_Language.C_theme_png_side;
    document.getElementById("S_Color_I_B_E_G_T_4").innerHTML = Looking_For_Language.C_theme_png_head;
    document.getElementById("S_Color_I_B_E_W").innerHTML = Looking_For_Language.VT_theme_png_batch_edit_location;
    document.getElementById("S_Color_I_B_E_W_T_0").innerHTML = Looking_For_Language.C_theme_png_batch_edit_localtion_head;
    document.getElementById("S_Color_I_B_E_W_T_1").innerHTML = Looking_For_Language.C_theme_png_batch_edit_localtion_interval;
    document.getElementById("S_Color_I_B_E_W_T_2").innerHTML = Looking_For_Language.C_theme_png_batch_edit_localtion_tail;
    document.getElementById("S_Color_I_B_E_C").innerHTML = Looking_For_Language.VT_theme_png_batch_edit_condition;
    document.getElementById("S_Color_I_B_E_C_D_T").innerHTML = Looking_For_Language.C_theme_png_batch_edit_condition_rules;
    document.getElementById("S_Color_I_B_E_C_T").innerHTML = Looking_For_Language.TX_theme_png_batch_edit_condition_rules;
    document.getElementById("S_Color_I_B_E_C_T_0").innerHTML = Looking_For_Language.C_theme_png_batch_edit_condition_ordina;
    document.getElementById("S_Color_I_B_E_C_T_1").innerHTML = Looking_For_Language.C_theme_png_batch_edit_condition_path;
    document.getElementById("S_Color_I_B_E_D").innerHTML = Looking_For_Language.VT_C_theme_png_batch_edit_condition_action;
    document.getElementById("S_Color_I_B_E_D_T_0").innerHTML = Looking_For_Language.C_theme_png_batch_edit_condition_add;
    document.getElementById("S_Color_I_B_E_D_T_1").innerHTML = Looking_For_Language.C_theme_png_batch_edit_condition_remove;
    document.getElementById("S_Navigation_Input_Tipes_T").innerHTML = Looking_For_Language.VT_navigation_enter_prompt;
    document.getElementById("S_Link_Go_Error_Text").innerHTML = Looking_For_Language.TX_proview_default_prompt;
    /*Hellow page*/
    if (Looking_For_Model == -1) {
        Looking_For_Input_Placeholder_Load();
        Looking_For_S_Link_No_Group_Name_Load();
    }
}
function Looking_For_Input_Placeholder_Load() {
    /*const Texts = [
        ['组名=组 1，组号=1', '链接 1,url,url?keyword=,site:url,1,0,自定义', '自定义'],
        ['Group name = Group 1, group number = 1', 'Link 1,url,url?keyword=,site:url,1,0,confed', 'confed']
    ];*/
    const Texts = Looking_For_Language.TX_Link_placeholder;
    let I_E_0 = document.getElementById('S_L_Group_Add_Input');
    let I_E_1 = document.getElementById('S_L_Link_Add_Input');
    let I_E_2 = document.getElementById('S_L_Go_Error_Value');
    I_E_0.placeholder = Texts[0];
    I_E_1.placeholder = Texts[1];
    I_E_2.placeholder = Texts[2];
}
function Looking_For_S_Link_Go_Error_Message_Change() {
    let Text_V = document.getElementById('S_L_Go_Error_Value').value;
    Text_V = Text_V.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    Looking_For_Error_Message = Text_V;
    Looking_For_Error_Message_S = Looking_For_Error_Message;
}
function Looking_For_Language_Chouse(value) {
    let L_C_V = 0;
    L_C_V = Number(value);
    if (isNaN(L_C_V)) return -1;
    if (L_C_V == Looking_For_Language_Sitting) return 0;
    if (0 > L_C_V || L_C_V >= Looking_For_Texts_Languages.length) return -1;
    Looking_For_Language_Sitting = L_C_V;
    Looking_For_Language_Load();
    Looking_For_Load_No_Confed_Default_Re_Load();
    Looking_For_Chouse_Load();
    Looking_For_Text_Witer();
}
/*
id2 0 id1=value
id2 !0 id1=value id2=!value*/
function Looking_For_Chouse_Load_Load(id1, value, id2 = 0) {
    if (value) {
        document.getElementById(id1).style.background = "var(--Back_Color_Active)";
        if (id2 != 0) document.getElementById(id2).style.background = "var(--Back_Color)";
    }
    else {
        document.getElementById(id1).style.background = "var(--Back_Color)";
        if (id2 != 0) document.getElementById(id2).style.background = "var(--Back_Color_Active)";
    }
}
function Looking_For_Chouse_Load() {
    //Looking_For_Chouse_Load_Load('S_Language_E_Value',Looking_For_Language_Sitting,'S_Language_C_Value');
    Looking_For_Chouse_Load_Load('S_Color_D_L_A_C_Value', Looking_For_Dark_Light_Auto_Change);
    Looking_For_Chouse_Load_Load('S_Color_D_Value', !Looking_For_Dark_Light_Style, 'S_Color_L_Value');
    Looking_For_Chouse_Load_Load('S_Color_Link_Value', Looking_For_Color_Link_Chouse_Value);
    Looking_For_Chouse_Load_Load('S_Color_I_B_Value', Looking_For_Img_Use[0]);
    Looking_For_Chouse_Load_Load('S_Color_I_S_B_Value', Looking_For_Img_Use[1]);
    Looking_For_Chouse_Load_Load('S_Color_I_S_T_Value', Looking_For_Img_Use[2]);
    Looking_For_Chouse_Load_Load('S_Color_I_S_S_Value', Looking_For_Img_Use[3]);
    Looking_For_Chouse_Load_Load('S_Color_I_S_I_Value', Looking_For_Img_Use[4]);
    Looking_For_Chouse_Load_Load('S_Color_I_B_W_S_Value', Looking_For_Background_Turn_Way, 'S_Color_I_B_W_O_Value');
    Looking_For_Chouse_Load_Load('S_N_Sleep_Value', Looking_For_Background_Turn_Time);
    Looking_For_Chouse_Load_Load('S_O_Scroll_Value', (Looking_For_Background_Style[Looking_For_Dark_Light_Style][8] == 'auto'));
    Looking_For_Chouse_Load_Load('S_P_B_M_Value', Looking_For_Preview_Button_Show_Model);
    Looking_For_Chouse_Load_Load('S_P_L_M_Value', Looking_For_Proview_Link_Box_Model);
    Looking_For_Chouse_Load_Load('S_P_Sleep_Value', (Looking_For_Sleep_Background_at_View == 0));
    Looking_For_Chouse_Language_Chouse_Load();
    Looking_For_S_Value_Load();
}
function Looking_For_S_Img_Link_UseAble_Load(value = -1) {
    let ID_T_I = ['S_Color_Img_Show_Link_', '_Box_'], ID_T_S = ['S_Color_Img_Show_Show_', '_Box_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    const Style_I_V = ['S_Link_Show_Input_UNUSE', 'S_Link_Show_Input_USE'];
    const Style_S_V = ['S_Link_Show_Img_Mask_UNUSE', 'S_Link_Show_Img_Mask_USE'];
    let Temp_V = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style];
    let Long = Temp_V.length - 1;
    let Temp0 = 0;
    if (value == -1) {
        for (; ;) {
            if (Temp0 >= Long) return 0;
            document.getElementById(ID_T_I[0] + ID_W[Temp_V[Temp0][0]] + ID_T_I[1] + Temp0).getElementsByTagName('input')[0] = Style_I_V[Temp_V[Temp0][5]];
            document.getElementById(ID_T_S[0] + ID_W[Temp_V[Temp0][0]] + ID_T_S[1] + Temp0).getElementsByTagName('div')[5] = Style_S_V[Temp_V[Temp0][5]];
            Temp0++;
        }
    }
    else {
        if (value >= Long) return -1;
        document.getElementById(ID_T_I[0] + ID_W[Temp_V[value][0]] + ID_T_I[1] + value).getElementsByTagName('input')[0].className = Style_I_V[Temp_V[value][5]];
        document.getElementById(ID_T_S[0] + ID_W[Temp_V[value][0]] + ID_T_S[1] + value).getElementsByTagName('div')[5].className = Style_S_V[Temp_V[value][5]];
    }
}
function Looking_For_S_Value_Load() {
    document.getElementById('S_Color_I_B_T_I').value = Number(Looking_For_Background_Turn_Time / 1000).toFixed(3) + ' s';
    document.getElementById('S_Navigation_Hellow_I').value = Looking_For_Hellow_Word.replace(/\\\\/g, '\\');
    document.getElementById('S_Navigation_Tipes_I').value = Looking_For_NP_Tips_Word.replace(/\\\\/g, '\\');
    document.getElementById('S_Navigation_Input_Tipes_I').value = Looking_For_Input_Tips.replace(/\\\\/g, '\\');
    document.getElementById('S_N_Sleep_T_I').value = Looking_For_Sleep_Time + ' s';
    document.getElementById('S_O_F_N_Value').value = Looking_For_File_Name_Temp_To_Save.replace(/\\\\/g, '\\');
    document.getElementById('S_L_Go_Error_Value').value = Looking_For_Error_Message.replace(/\\\\/g, '\\');
    Looking_For_S_Others_Message_S_Load();
    Looking_For_S_Link_Go_Model_Change();
}
function Looking_For_S_Index_To(index) {
    var ID_T = ['S_Theme', 'S_Navigation', 'S_Preview', 'S_Links', 'S_Others', 'S_Save', 'S_About'];
    var Element_To = document.getElementById(ID_T[index]), Element_Home = document.getElementById('Sitting_Centel_Table_Id');
    var Height_To = Element_To.offsetTop - Element_Home.offsetTop;
    var Height_V = Element_Home.scrollTop;
    var Times = 30;
    Height_To = Height_To.toFixed(0) - 6;
    Height_V = Height_To - Height_V.toFixed(0);
    /*Looking_For_Scroll_Move(Element_Home,Height_V,1,Times);*/
    Looking_For_Scroll_Move_By_Value(Element_Home, Height_V, 0);
}
function Looking_For_Scroll_Move_By_Value(Element_Element, value, Times_now) {
    let value_old = Element_Element.scrollTop, V_i = 0;
    clearInterval(Looking_For_S_Re_Scroll_Clear);
    Looking_For_S_Re_Scroll_Clear = setInterval(function () {
        if (Looking_For_Slid_Value[Times_now] === undefined) {
            clearInterval(Looking_For_S_Re_Scroll_Clear);
            return 0;
        }
        V_i = value * Looking_For_Slid_Value[Times_now] + value_old;
        Element_Element.scrollTop = V_i.toFixed(0);
        Times_now++;
    }, 10);
}
function Looking_For_Scroll_Move(Element_Element, value, Times_now, Times, Mix_value = 0) {
    let V_i = Times_now, V_t = 0;
    if (Mix_value) V_t = Mix_value;
    else {
        let V_h = Times / 2;
        V_t = V_h * (V_h + 1) * (V_h * 2 + 1) / 6;
        V_h = V_h - 1;
        V_t = V_t + (V_h * (V_h + 1) * (V_h * 2 + 1) / 6);
    }
    if (V_i > (Times / 2)) V_i = Times - V_i;
    if (V_i < 0) V_i = 0;
    V_i = V_i * V_i / V_t;
    V_i = value * V_i;
    Element_Element.scrollTop = Element_Element.scrollTop + V_i;
    if (Times > Times_now) setTimeout(function () {
        Times_now++;
        Looking_For_Scroll_Move(Element_Element, value, Times_now, Times, V_t);
    }, 20);
}
function Looking_For_Color_Link_Chouse() {
    if (Looking_For_Color_Link_Chouse_Value == 1) Looking_For_Color_Link_Chouse_Value = 0;
    else Looking_For_Color_Link_Chouse_Value = 1;
    Looking_For_Chouse_Load();
}
function Looking_For_S_Color_I_Change(value, If_Chouse_Table = 0) {
    var Value_Temp0 = 0;
    var Value_Temp1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Value_Temp2 = [0, 0, 0, 0.5];
    var Value_TempT = "";
    var Long = 0;
    var Point = 0;
    var If_Rgb = 0;
    var If_Use = 0;
    var Title = "0000";
    var Use_Able = 0;
    if (If_Chouse_Table == 0) Value_TempT = Looking_For_Background_Style[Looking_For_Dark_Light_Style][value];
    else Value_TempT = Looking_For_Color_Chouse_Table_Temp;
    for (var number = 4, number1 = -1; ; number++) {
        if ((Value_TempT.substring(number, number + 1) == ',') || (number == 4)) {
            number++, number1++;
            /*Value_Temp2[number1]=0;*/
            Value_Temp2[number1] = parseFloat(Value_TempT[number] + Value_TempT[number + 1] + Value_TempT[number + 2]);
        }
        if (number > 23 || number1 > 3) break;
    }
    if (If_Chouse_Table == 0) Value_Temp0 = document.getElementById('S_Color_I_' + value).value;
    else Value_Temp0 = document.getElementById('S_Color_Chouse_Table_I_0').value;

    Long = Value_Temp0.length;
    if (Long > 4) If_Use = 1;
    for (var number = 0; ; number++) {
        if (number > Long) break;
        if (number > 23) break;
        Value_Temp1[number] = Value_Temp0[number];
    }
    if (Value_Temp1[0] == "#") {
        If_Rgb = 1;
        if (Long > 1) If_Use = 1;
        Value_Temp2[0] = parseInt(Value_Temp1[1] + Value_Temp1[2], 16);
        Value_Temp2[1] = parseInt(Value_Temp1[3] + Value_Temp1[4], 16);
        Value_Temp2[2] = parseInt(Value_Temp1[5] + Value_Temp1[6], 16);
        if (Long > 7) {
            Value_Temp2[3] = parseInt(Value_Temp1[7] + Value_Temp1[8], 16);
            Value_Temp2[3] = Value_Temp2[3] / 255;
        }

    }
    else {
        if (If_Use == 1) {
            Value_Temp2[0] = 0;
            Title = Value_Temp1[0] + Value_Temp1[1] + Value_Temp1[2] + Value_Temp1[3];
        }
        for (var number = 5, number1 = 0; ; number++) {
            if (Value_Temp0[number] == ',') {
                number++, number1++;
                Value_Temp2[number1] = 0;
            }
            if (number > 23 || number1 > 3) break;
            Value_Temp2[number1] = Value_Temp2[number1] + Value_Temp1[number];
        }
        Value_Temp2[0] = parseFloat(Value_Temp2[0]);
        Value_Temp2[1] = parseFloat(Value_Temp2[1]);
        Value_Temp2[2] = parseFloat(Value_Temp2[2]);
        Value_Temp2[3] = parseFloat(Value_Temp2[3]);
        if (Value_Temp0.indexOf('%') != -1) Point = 1;
        if (Title.indexOf('rgba') != -1) {
            If_Rgb = 1;
            if (Point == 1) {
                Value_Temp2[0] = Value_Temp2[0] * 255 / 100;
                Value_Temp2[1] = Value_Temp2[1] * 255 / 100;
                Value_Temp2[2] = Value_Temp2[2] * 255 / 100;
            }
        }
    }
    if (If_Rgb == 1) {
        var r, g, b;
        r = Value_Temp2[0];
        g = Value_Temp2[1];
        b = Value_Temp2[2];
        r = r / 255, g = g / 255, b = b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const d = max - min;
        const l = (max + min) / 2;
        const s = d === 0 ? 0 : l > 0.5 ? d / (2 - 2 * l) : d / (2 * l);
        let h = 0;
        if (d !== 0) {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g: h = (b - r) / d + 2;
                    break;
                case b: h = (r - g) / d + 4;
                    break;
                default: break;
            }
            h = h / 6;
        }
        Value_Temp2[0] = h * 360;
        Value_Temp2[1] = s * 100;
        Value_Temp2[2] = l * 100;
        Use_Able = 1;
    }
    if (Title.indexOf('hsla') != -1) {
        Use_Able = 1;
    }
    if (Use_Able == 1) {
        if (isNaN(Value_Temp2[0])) Value_Temp2[0] = 0;
        if (isNaN(Value_Temp2[1])) Value_Temp2[1] = 0;
        if (isNaN(Value_Temp2[2])) Value_Temp2[2] = 0;
        if (isNaN(Value_Temp2[3])) Value_Temp2[3] = 0;
        Value_Temp2[0] = Value_Temp2[0].toFixed(0);
        Value_Temp2[1] = Value_Temp2[1].toFixed(0);
        Value_Temp2[2] = Value_Temp2[2].toFixed(0);
        Value_Temp2[3] = Value_Temp2[3].toFixed(2);
        if (Value_Temp2[0] < 0 || Value_Temp2[0] > 360) Use_Able = 0;
        if (Value_Temp2[1] < 0 || Value_Temp2[1] > 100) Use_Able = 0;
        if (Value_Temp2[2] < 0 || Value_Temp2[2] > 100) Use_Able = 0;
        if (Value_Temp2[3] < 0 || Value_Temp2[3] > 1) Use_Able = 0;
    }
    if (Use_Able == 1) {
        Looking_For_Input_Ctrl[value][0] = 1;
        Looking_For_Input_Ctrl[value][1] = 0;
        if (If_Chouse_Table == 0) {
            Looking_For_Background_Style[Looking_For_Dark_Light_Style][value] = "hsla(" + Value_Temp2[0] + "," + Value_Temp2[1] + "%," + Value_Temp2[2] + "%," + Value_Temp2[3] + ")";
            Looking_For_Style_Load();
            Looking_For_S_Color_Change_Later(value);
        }
        else {
            Looking_For_Color_Chouse_Table_Load(0, Value_Temp2[0], Value_Temp2[1], Value_Temp2[2], Value_Temp2[3]);
        }
    }
}
function Looking_For_S_Color_Change_Later(value) {
    if (Looking_For_Color_Link_Chouse_Value == 0) return 0;
    let E_N = value;
    if (E_N >= 5) {
        Looking_For_Style_Load();
        return 0;
    }
    let C_V_O = Looking_For_Background_Style[Looking_For_Dark_Light_Style][E_N].split(',');
    E_N++;
    let C_V_H = Number(C_V_O[0].replace(/[^\d]/g, ''));
    let C_V_S = Number(C_V_O[1].replace(/[^\d]/g, ''));
    let C_V_L = Number(C_V_O[2].replace(/[^\d]/g, ''));
    C_V_O = Looking_For_Background_Style[Looking_For_Dark_Light_Style][E_N].split(',')[3];
    if (isNaN(C_V_H) || isNaN(C_V_S) || isNaN(C_V_L)) return -1;
    let C_C_H = 180 - C_V_H, C_C_S = C_V_S, C_C_L = 50 - C_V_L;
    if (C_C_H < 0) C_C_H = -C_C_H;
    if (C_C_L < 0) C_C_L = -C_C_L;
    if (C_C_H < 90) C_C_H = 1;
    else C_C_H = 0;
    if (C_C_S > 50) C_C_S = 1;
    else C_C_S = 0;
    if (C_C_L < 25) C_C_L = 1;
    else C_C_L = 0;
    if (E_N == 1) {
        C_V_S = Looking_For_Number_Fix(C_V_S, 100, 5, C_C_S);
        C_V_L = Looking_For_Number_Fix(C_V_L, 50, 3, C_C_L);
    }
    if (E_N == 2) {
        C_V_H = Looking_For_Number_Fix(C_V_H, 180, 6, C_C_H);
        C_V_S = Looking_For_Number_Fix(C_V_S, 100, 1.2, C_C_S);
        C_V_L = Looking_For_Number_Fix(C_V_L, 50, 2, C_C_L);
    }
    if (E_N == 3) {
        C_V_H = Looking_For_Number_Fix(C_V_H, 180, 5, C_C_H);
        C_V_S = Looking_For_Number_Fix(C_V_S, 100, 4, C_C_S);
        C_V_L = Looking_For_Number_Fix(C_V_L, 50, 3, C_C_L);
    }
    if (E_N == 4) {
        let L_C_T = Looking_For_Background_Style[Looking_For_Dark_Light_Style][1];
        L_C_T = L_C_T.split(',');
        L_C_T = L_C_T[2];
        L_C_T = L_C_T.replace(/[^\d]/g, '');
        L_C_T = Number(L_C_T);
        C_V_H = Looking_For_Number_Fix(C_V_H, 180, 5, C_C_H);
        C_V_S = Looking_For_Number_Fix(C_V_S, 100, 2, C_C_S);
        if (L_C_T < 50) {
            C_V_L = Looking_For_Number_Fix(L_C_T, 100, 1.4);
        }
        else {
            C_V_L = Looking_For_Number_Fix(L_C_T, 0, 1.4);
        }
    }
    if (E_N == 5) {
        C_V_H = C_V_H + 180;
        if (C_V_H >= 360) C_V_H = C_V_H - 360;
        C_V_S = Looking_For_Number_Fix(C_V_S, 100, 1.3);
        C_V_L = Looking_For_Number_Fix(C_V_L, 50, 1.2);
    }
    Looking_For_Background_Style[Looking_For_Dark_Light_Style][E_N] = 'hsla(' + C_V_H + ',' + C_V_S + '%,' + C_V_L + '%,' + C_V_O;
    Looking_For_S_Color_Change_Later(E_N);
}
function Looking_For_Number_Fix(number, value, level, to_or_away = 0, fix_to = 0) {
    let Temp_V = value - number;
    Temp_V = Temp_V / level;
    if (to_or_away == 0) Temp_V = number + Temp_V;
    else {
        Temp_V = number - Temp_V;
        if (Temp_V < 0) Temp_V = 0;
        else if (Temp_V > value * 2) Temp_V = value * 2;
    }
    Temp_V = Temp_V.toFixed(fix_to);
    return Temp_V;
}
function Looking_For_S_Color_R_Change(value) {
    var Value_Temp0 = 0;
    var Value_Temp1 = 0;
    Looking_For_Input_Ctrl[value][0] = 0;
    Looking_For_Input_Ctrl[value][1] = 1;
    Value_Temp0 = document.getElementById('S_Color_R_' + value).value;
    Value_Temp1 = Looking_For_Background_Style[Looking_For_Dark_Light_Style][value].split(',');
    Value_Temp0 = Value_Temp1[0] + "," + Value_Temp1[1] + "," + Value_Temp1[2] + "," + Value_Temp0 + ")";
    Looking_For_Background_Style[Looking_For_Dark_Light_Style][value] = Value_Temp0;
    Looking_For_Style_Load();
}
function Looking_For_S_Line_Change(value, I_or_R) {
    var Temp = 0;
    if (value == 0) {
        if (I_or_R == 0) {
            Looking_For_Input_Ctrl[6][0] = 1;
            Looking_For_Input_Ctrl[6][1] = 0;
            Temp = document.getElementById('S_Color_I_6').value;
        }
        else {
            Looking_For_Input_Ctrl[6][0] = 0;
            Looking_For_Input_Ctrl[6][1] = 1;
            Temp = document.getElementById('S_Color_R_6').value;
        }
        Temp = parseFloat(Temp);
        Temp = Temp.toFixed(0);
        if (Temp >= 0 || Temp <= 25) {
            Looking_For_Background_Style[Looking_For_Dark_Light_Style][6] = Temp + 'px';
            Looking_For_Style_Load();
        }
    }
    if (value == 1) {
        if (I_or_R == 0) {
            Looking_For_Input_Ctrl[7][0] = 1;
            Looking_For_Input_Ctrl[7][1] = 0;
            Temp = document.getElementById('S_Color_I_7').value;
        }
        else {
            Looking_For_Input_Ctrl[7][0] = 0;
            Looking_For_Input_Ctrl[7][1] = 1;
            Temp = document.getElementById('S_Color_R_7').value;
        }
        Temp = parseFloat(Temp);
        Temp = Temp.toFixed(0);
        if (Temp >= 0 || Temp <= 12) {
            Looking_For_Background_Style[Looking_For_Dark_Light_Style][7] = Temp + 'px';
            Looking_For_Style_Load();
        }
    }
}
function Looking_For_Get_Dark_Light_Mode() {
    if (Looking_For_Dark_Light_Auto_Change) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (Looking_For_Dark_Light_Auto_Change) Looking_For_Dark_Light_Style = 0;
        }
        else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            if (Looking_For_Dark_Light_Auto_Change) Looking_For_Dark_Light_Style = 1;
        }
    }
    Looking_For_Style_Load(1);
    Looking_For_Chouse_Load();
    Looking_For_Background_Img();
}
function Looking_For_Listener_Dark_Light() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        Looking_For_Get_Dark_Light_Mode();
    });
}
function Looking_For_Color_Style_Model(value) {
    if (value == 0) {
        if (Looking_For_Dark_Light_Auto_Change == 1) Looking_For_Dark_Light_Auto_Change = 0;
        else Looking_For_Dark_Light_Auto_Change = 1;
        Looking_For_Get_Dark_Light_Mode();
        return 0;
    }
    if (value == 1) {
        if (Looking_For_Dark_Light_Style == 1) return 0;
        Looking_For_Dark_Light_Style = 1;
        Looking_For_Style_Load(1);
        Looking_For_Chouse_Load();
        Looking_For_Background_Img(0);
    }
    if (value == 2) {
        if (Looking_For_Dark_Light_Style == 0) return 0;
        Looking_For_Dark_Light_Style = 0;
        Looking_For_Style_Load(1);
        Looking_For_Chouse_Load();
        Looking_For_Background_Img(0);
    }
}
function Looking_For_Color_I_If_Use(value) {
    let F_C = [
        function () {
            Looking_For_Background_Img_Change_First_Load = [1, 1, 1, 1];
            Looking_For_Background_Img(3);
        },
        function () {
            Looking_For_Background_Img_Change_First_Load[0] = 1;
            Looking_For_Background_Img_B();
        },
        function () {
            Looking_For_Background_Img_Change_First_Load[1] = 1;
            Looking_For_Background_Img_T();
        },
        function () {
            Looking_For_Background_Img_Change_First_Load[2] = 1;
            Looking_For_Background_Img_S();
        },
        function () {
            Looking_For_Background_Img_Change_First_Load[3] = 1;
            Looking_For_Background_Img_I();
        },
    ];
    if (Looking_For_Img_Use[value] == 1) Looking_For_Img_Use[value] = 0;
    else Looking_For_Img_Use[value] = 1;
    Looking_For_S_Background_Img_Link_Input_Show_Null_Way_focus = 1;
    Looking_For_Chouse_Load();
    Looking_For_Img_Show_Box_Show_OR_Close();
    F_C[value]();
}
/*at here*/
async function Looking_For_Img_Batch_Edit(value = 0) {
    /*const Tipes = [
        ['批量编辑', '查询到:', '已添加', '已移除', '未查询到目标', '查询中...', '序数筛选不适用于添加'],
        ['Bulk edit', 'Queried:', 'Added', 'Removed', 'Target not queried', '查询中...', 'Ordinal filtering is not available for adding']
    ];*/
    const Tipes = Looking_For_Language.TX_Img_Batch_Edit;
    let rules_chars = document.getElementById('S_Color_I_B_E_C_V').value.replaceAll("'", '').replaceAll('"', '');
    let rules_group = rules_chars.split(/[,，]/);
    let group_use = Looking_For_Img_Batch_Edit_Group_V;
    let number0 = 0;
    Looking_For_Message_Box([Tipes[0], Tipes[5]]);
    Looking_For_S_Background_Img_Link_Input_Show_Null_Way_focus = 0;
    Looking_For_Img_Batch_Edit_Change_V = '';
    for (; ;) {
        if (rules_group[number0] == undefined) break;
        if (rules_group[number0] != '') {
            if (value == 0) {
                /*add*/
                if (Looking_For_Img_Batch_Edit_Chouse_V == 0) {
                    Looking_For_Message_Box([Tipes[0], Tipes[6]]);
                    return 0;
                }
                else {
                    await Looking_For_Img_Batch_Edit_Add(rules_group[number0], group_use);
                }
            }
            else {
                Looking_For_Img_Batch_Edit_Remove(rules_group[number0], group_use);
            }
        }
        number0++;
    }
    if (Looking_For_Img_Batch_Edit_Change_V.length >= 1) {
        Looking_For_Message_Box([Tipes[0], Tipes[1], Looking_For_Img_Batch_Edit_Change_V, Tipes[2 + value]]);
        Looking_For_Img_Batch_Edit_Re_Load();
    }
    else {
        Looking_For_Message_Box([Tipes[0], Tipes[4]]);
    }
    Looking_For_Background_Img_Get_New();
}
function Looking_For_Img_Batch_Edit_Re_Load() {
    let D_E_B = document.getElementById('S_Color_Img_Show_Door_B');
    let D_E_T = document.getElementById('S_Color_Img_Show_Door_T');
    let D_E_S = document.getElementById('S_Color_Img_Show_Door_S');
    let D_E_I = document.getElementById('S_Color_Img_Show_Door_I');
    let I_E_B = document.getElementById('S_Color_Img_Show_Inter_B');
    let I_E_T = document.getElementById('S_Color_Img_Show_Inter_T');
    let I_E_S = document.getElementById('S_Color_Img_Show_Inter_S');
    let I_E_I = document.getElementById('S_Color_Img_Show_Inter_I');
    let c_v = [0, 0, 0, 0];
    let t_v = Looking_For_Img_Batch_Edit_Group_V;
    if (t_v < 2) c_v[0] = 1;
    if (t_v < 3) c_v[1] = 1;
    if (t_v < 4) c_v[2] = 1;
    if (t_v < 5) c_v[3] = 1;
    if (Looking_For_Img_Use[1] == 0) c_v[0] = 0;
    if (Looking_For_Img_Use[2] == 0) c_v[1] = 0;
    if (Looking_For_Img_Use[3] == 0) c_v[2] = 0;
    if (Looking_For_Img_Use[4] == 0) c_v[3] = 0;
    if (c_v[0]) {
        D_E_B.style['grid-template-rows'] = '0fr';
        I_E_B.style.height = '0px';
    }
    if (c_v[1]) {
        D_E_T.style['grid-template-rows'] = '0fr';
        I_E_T.style.height = '0px';
    }
    if (c_v[2]) {
        D_E_S.style['grid-template-rows'] = '0fr';
        I_E_S.style.height = '0px';
    }
    if (c_v[3]) {
        D_E_I.style['grid-template-rows'] = '0fr';
        I_E_I.style.height = '0px';
    }
    setTimeout(function () {
        if (c_v[0]) {
            Looking_For_Background_Img_S_Batch_New(1);
            D_E_B.style['grid-template-rows'] = '1fr';
        }
        if (c_v[1]) {
            Looking_For_Background_Img_S_Batch_New(2);
            D_E_T.style['grid-template-rows'] = '1fr';
        }
        if (c_v[2]) {
            Looking_For_Background_Img_S_Batch_New(3);
            D_E_S.style['grid-template-rows'] = '1fr';
        }
        if (c_v[3]) {
            Looking_For_Background_Img_S_Batch_New(4);
            D_E_I.style['grid-template-rows'] = '1fr';
        }
    }, 1020);
}
function Looking_For_Img_Batch_Edit_Find_Group(group) {
    let number0 = 0;
    let aero_return = [-1, 0];
    if (group == 0) {
        aero_return[0] = 0;
        aero_return[1] = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style].length;
        aero_return[1]--;
        aero_return[1]--;
        return aero_return;
    }
    for (; ;) {
        if (Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number0][0] > group || Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number0][0] == -2) {
            aero_return[1] = number0;
            break;
        }
        else if (Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number0][0] < group) aero_return[0] = number0;
        number0++;
    }
    aero_return[0] = aero_return[0] + 1;
    aero_return[1] = aero_return[1] - 1;
    return aero_return;
}
function Looking_For_Img_Batch_Edit_Rule_Chack(rule) {
    /*
    model -2 error -1 null   0 no_ctrl   1 -
    ？  0-9
    ??  00-99
    *   0-999
    like 
    model texts*texts
    rule0l rule0r
    rule1l rule1r
    ...
    */
    let rule_return = [
        [0, ''],
        ['', '']
    ];
    let number0 = 0, number1 = 1;
    let rule_temp = rule;
    let chars = '';
    let temps = [0];
    rule_temp = rule_temp.replace(/[？]/g, '?');
    rule_temp = Looking_For_Img_Batch_Edit_Rule_Chack_Split(rule_temp);
    if (rule_temp.length <= 1) {
        rule_return[0][0] = -1;
    }
    else if (rule_temp.length <= 2 && rule_temp[0] == 0) {
        rule_return[0][0] = 0;
    }
    else {
        rule_return[0][0] = 1;
        for (; ;) {
            if (rule_temp[number0] == undefined) break;
            if (rule_temp[number0] == 0) {
                number0++;
                chars = chars + rule_temp[number0];
            }
            else {
                number0++;
                chars = chars + '*';
                rule_return[number1] = Looking_For_Img_Batch_Edit_Rule_Chack_Trun(rule_temp[number0]);
                number1++;
            }
            number0++;
        }
        rule_return[0][1] = chars;
    }
    return rule_return;
}
function Looking_For_Img_Batch_Edit_Rule_Chack_Remove_Chack(chars, RegExps) {
    let R_E = RegExps;
    let re = new RegExp(R_E[0]);
    let n1 = 1;
    let temp0 = chars, temp1 = '', temp2 = 0, temp3 = 0, temp4 = '', temp5 = 0, temp6 = 0, temp7 = '';
    let ret = /\d+/;
    if (re.test(chars)) {
        for (; ;) {
            if (R_E[n1] == undefined) {
                if (n1 == 1) {
                    re = new RegExp(R_E[0]);
                    temp0 = temp0.replace(re, '');
                }
                if (temp0 == '') {
                    return true;
                }
                else {
                    return false;
                }
            }
            re = new RegExp(R_E[n1]);
            temp0 = temp0.replace(re, '');
            if (temp0 == '') {
                n1++;
                n1++;
                if (R_E[n1] == undefined) {
                    return true;
                }
                else {
                    return false;
                }
            }
            n1++;
            if (R_E[n1] == undefined) {
                return false;
            }
            temp2 = Number(R_E[n1]);
            temp4 = '';
            temp4 = temp4 + temp2;
            temp5 = temp4.length;
            n1++;
            if (R_E[n1] == undefined) {
                return false;
            }
            temp3 = Number(R_E[n1]);
            temp4 = '';
            temp4 = temp4 + temp3;
            temp6 = temp4.length;
            for (; ;) {
                temp7 = '';
                temp7 = temp7 + temp6;
                temp7 = '\\d{' + temp7 + '}';
                ret = new RegExp(temp7);
                temp1 = '';
                temp1 = temp1 + ret.exec(temp0);
                temp1 = Number(temp1);
                if (temp1 >= temp2 && temp1 <= temp3) {
                    temp0 = temp0.replace(ret, '');
                    break;
                }
                temp6--;
                if (temp6 < temp5) {
                    return false;
                }
            }
            n1++;
        }
    }
    else {
        return false;
    }
}
function Looking_For_Img_Batch_Edit_Rule_Chack_Be_R_E(chars) {
    let R_E_return = [''];
    let temp_c = chars;
    let temp0 = '', temp1 = 0, temp2 = 0, temp3 = 0, temp4 = 0, temp5 = 0, temp6 = '';
    let number0 = 0;
    let C_R_E = [/\?/, /\*/];
    temp_c = temp_c.replace(/[？]/g, '?');
    temp_c = Looking_For_Img_Batch_Edit_Rule_Chack_Split(temp_c);
    for (; ;) {
        if (temp_c[number0] == undefined) break;
        if (temp_c[number0] == 0) {
            number0++;
            temp0 = temp0 + temp_c[number0];
        }
        else {
            number0++;
            if (C_R_E[1].test(temp_c[number0])) {
                temp0 = temp0 + '\\d+';
            }
            else if (C_R_E[0].test(temp_c[number0])) {
                temp1 = temp_c[number0].length;
                temp0 = temp0 + '\\d{' + temp1 + '}';
            }
            else {
                temp1 = temp_c[number0].replace(/[^\d\-]/g, '');
                temp1 = temp1.split('-');
                temp2 = Number(temp1[0]);
                temp3 = Number(temp1[0]);
                temp4 = 1;
                for (; ;) {
                    if (temp1[temp4] == undefined) break;
                    if (temp1[temp4] != '') {
                        if (temp2 > Number(temp1[temp4])) temp2 = Number(temp1[temp4]);
                        else temp3 = Number(temp1[temp4]);
                    }
                    temp4++;
                }
                temp5++;
                if (temp6 == '') R_E_return[temp5] = temp0;
                else R_E_return[temp5] = temp0.replace(temp6, '');
                temp5++;
                R_E_return[temp5] = temp2;
                temp5++;
                R_E_return[temp5] = temp3;
                temp0 = temp0 + '\\d+';
                temp6 = temp0;
            }
        }
        number0++;
    }
    R_E_return[0] = temp0;
    temp5++;
    if (temp6 == '') R_E_return[temp5] = temp0;
    else R_E_return[temp5] = temp0.replace(temp6, '');
    return R_E_return;
}
function Looking_For_Img_Batch_Edit_Rule_Chack_ID_Create(v_l, v_r, v_n) {
    let n_l = 0, n_r = 0, n_v = 0;
    let n_c = 0, c_l = 0, c_temp = '';
    let v_return = [0, ''];
    n_l = Number(v_l), n_r = Number(v_r), n_v = Number(v_n);
    if (n_l <= n_r) {
        n_c = n_l + n_v;
        if (n_c > n_r) v_return[0] = -1;
    }
    else {
        n_c = n_l - n_v;
        if (n_c < n_r) v_return[0] = -1;
    }
    if (v_return[0] == -1) return v_return;
    if (Looking_For_Img_Batch_Edit_Chouse_V == 0) {
        n_c--;
        if (n_c < 0) v_return[0] = -1;
        else {
            c_temp = c_temp + n_c;
            v_return[1] = c_temp;
        }
    }
    else {
        if (v_l.length < v_r.length) c_l = v_l.length;
        else c_l = v_r.length;
        c_temp = c_temp + n_c;
        for (; ;) {
            if (c_temp.length >= c_l) break;
            c_temp = '0' + c_temp;
        }
        v_return[1] = c_temp;
    }
    return v_return;
}
function Looking_For_Img_Batch_Edit_Rule_Chack_Trun(rule) {
    let rule_return = ['', ''], rule_temp = rule;
    let chack_R_E = /-/;
    let temp0 = 0, temp1 = [0, ''], temp2 = [0, ''];
    let chars = ['0', '9'];
    if (rule_temp.length < 1) {
        rule_return[0] = -1;
    }
    else if (rule_temp[0] == '*') {
        rule_return[0] = '0', rule_return[1] = '999';
    }
    else if (rule_temp[0] == '?') {
        rule_return[0] = '';
        for (; ;) {
            if (rule_temp[temp0] == undefined) {
                break;
            }
            rule_return[0] = rule_return[0] + '0';
            rule_return[1] = rule_return[1] + '9';
            temp0++;
        }
    }
    else if (chack_R_E.test(rule_temp)) {
        rule_temp = rule_temp.replace(/[^\d^\-]/g, '');
        rule_temp = rule_temp.split('-');
        temp1[1] = rule_temp[0], temp2[1] = rule_temp[0];
        for (; ;) {
            temp0++;
            if (rule_temp[temp0] == undefined) break;
            if (rule_temp[temp0] != '') {
                if (Number(rule_temp[temp0] < Number(temp1[1]))) {
                    temp1[0] = temp0, temp1[1] = rule_temp[temp0];
                }
                if (Number(rule_temp[temp0] > Number(temp2[1]))) {
                    temp2[0] = temp0, temp2[1] = rule_temp[temp0];
                }
            }
        }
        if (temp1[0] <= temp2[0]) {
            rule_return[0] = temp1[1], rule_return[1] = temp2[1];
        }
        else {
            rule_return[0] = temp2[1], rule_return[1] = temp1[1];
        }
    }
    return rule_return;
}
function Looking_For_Img_Batch_Edit_Rule_Chack_Split(rule) {
    let rule_return = [0], rule_temp = rule;
    let temp0 = '', temp1 = '', temp2 = '';
    let number0 = 0;
    let chack_R_E = /<\d+[-][-\d]{0,}\d>|\?+|\*+/;
    if (Looking_For_Img_Batch_Edit_Chouse_V == 0) {
        chack_R_E = /\d+[-][-\d]{0,}\d|\?+|\*+/;
        rule_temp = rule_temp.replace(/[^\d^\?^\*^\-]/g, '');
    }
    temp1 = rule_temp;
    for (; ;) {
        if (chack_R_E.test(temp1)) {
            temp2 = '';
            temp2 = temp2 + chack_R_E.exec(temp1);
            temp0 = temp1.replace(chack_R_E, ',');
            temp0 = temp0.split(',');
            temp1 = temp0[1];
            temp0 = temp0[0];
            if (temp0 != '') {
                rule_return[number0] = 0;
                number0++;
                rule_return[number0] = temp0;
                number0++;
            }
            rule_return[number0] = 1;
            number0++;
            rule_return[number0] = temp2;
            number0++;
        }
        else {
            if (temp1 != '') {
                rule_return[number0] = 0;
                number0++;
                rule_return[number0] = temp1;
                number0++;
            }
            break;
        }
    }
    return rule_return;
}
async function Looking_For_Img_Batch_Edit_Add(rule, group) {
    let ruler_temp = rule;
    let rule_use = [''], rule_ctrl = [[0, 0]];
    let aero = Looking_For_Img_Batch_Edit_Find_Group(group);
    let number0 = 0, number1 = 0, number3 = 0, number4 = 0, number5 = 0;
    let temp0 = [0, ''], temp1 = 0, temp2 = 0, temp3 = 0;
    let number_temp = [0];
    let link_part_temp = [''];
    let link_temp = '';
    let link_use_able = [''];
    let temp_error = 0;
    let temp_end = 0;
    ruler_temp = ruler_temp.replace(/[？]/g, '?');
    ruler_temp = Looking_For_Img_Batch_Edit_Rule_Chack_Split(ruler_temp);
    for (; ;) {
        if (ruler_temp[number0] == undefined) break;
        if (ruler_temp[number0] == 0) {
            number0++;
            rule_use[number1] = ruler_temp[number0];
            number1++;
        }
        else {
            number0++;
            rule_use[number1] = null;
            number1++;
            rule_ctrl[number3] = Looking_For_Img_Batch_Edit_Rule_Chack_Trun(ruler_temp[number0]);
            number_temp[number3] = 0;
            number3++;
        }
        number0++;
    }
    number0 = 0, number1 = 0;
    for (; ;) {
        number0 = temp1, number1 = temp2;
        for (; ;) {
            if (rule_use[number0] === undefined) {
                break;
            }
            if (rule_use[number0] === null) {
                temp0 = Looking_For_Img_Batch_Edit_Rule_Chack_ID_Create(rule_ctrl[number1][0], rule_ctrl[number1][1], number_temp[number1]);
                if (temp0[0] == -1 || temp_error == 1) {
                    temp_error = 0;
                    temp2 = 1;
                    for (; ;) {
                        number0--;
                        if (rule_use[number0] === undefined) {
                            temp_end = 1;
                            break;
                        }
                        if (rule_use[number0] === null) {
                            break;
                        }
                    }
                    temp1 = number0;
                    number1--;
                    if (number1 <= -1) {
                        temp_end = 1;
                        break;
                    }
                    number_temp[number1]++;
                    number4 = 0;
                    for (; ;) {
                        if (number_temp[number4] == undefined) {
                            break;
                        }
                        if (number1 < number4) number_temp[number4] = 0;
                        number4++;
                    }
                    temp2 = number1;
                    number0--;
                    number1--;
                }
                else {
                    temp1 = number0;
                    temp2 = number1;
                    link_part_temp[number0] = temp0[1];
                }
                number1++;
            }
            else {
                link_part_temp[number0] = rule_use[number0];
            }
            number0++;
        }
        number4 = number_temp.length;
        number4--;
        number_temp[number4]++;
        if (temp_end == 1) {
            break;
        }
        number4 = 0;
        link_temp = '';
        for (; ;) {
            if (link_part_temp[number4] == undefined) break;
            link_temp = link_temp + link_part_temp[number4];
            number4++;
        }
        link_temp = link_temp.replace(/[\\]/g, '/');
        await Looking_For_Img_Batch_Edit_Add_Path_Chake(link_temp);
        if (Looking_For_Img_Batch_Edit_Add_Path_Chake_V == 1) {
            link_use_able[number5] = link_temp;
            number5++;
        }
        else {
            temp_error = 1;
        }
        if (rule_use[1] === undefined) {
            if (rule_use[0] !== null) {
                break;
            }
        }
    }
    if (link_use_able[0] != '') {
        Looking_For_Img_Batch_Edit_Add_Do(aero, link_use_able, group);
    }
}
function Looking_For_Img_Batch_Edit_Add_Do(aero, part, group) {
    let part_value = [1, "", 50, 25, 1, 1];
    let aero_use = aero, part_use = part, group_use = group;
    let where_use = Looking_For_Img_Batch_Edit_Where_V;
    let Long = part_use.length;
    let number0 = 0;
    let indexs = [0];
    let index_away = 0;
    let index_start = 0;
    let index_temp = 0;
    let group_temp = 0;
    let group_temp_end = false;
    let temp0 = 0, temp1 = [0];
    if (where_use == 0) {
        index_start = aero_use[0];
    }
    else if (where_use == 1) {
        index_start = aero_use[0];
        index_away = aero_use[1] - aero_use[0];
        if (index_away <= 0) index_away = 0;
        else {
            index_away = index_away / (Long + 1);
        }
    }
    else {
        index_start = aero_use[1] + 1;
    }
    temp0 = index_start;
    for (; ;) {
        if (number0 >= Long) break;
        temp0 = index_away + temp0;
        index_temp = temp0.toFixed(0);
        indexs[number0] = index_temp;
        number0++;
    }
    number0 = Long - 1;
    if (group_use == 0) {
        temp1[0] = Long / 4;
        temp1[1] = temp1[0] + temp1[0];
        temp1[2] = temp1[0] + temp1[1];
    }
    for (; ;) {
        if (number0 < 0) break;
        part_value[1] = part_use[number0];
        if (group_use == 0) {
            group_temp = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][indexs[number0]][0];
            if (where_use == 0) group_temp = 1;
            else if (where_use == 2) {
                group_temp = 4;
            }
            else if (group_temp == -2) {
                group_temp_end = true;
            }
            if (group_temp_end) {
                if (Long >= 2) {
                    if (number0 < temp1[0]) group_temp = 1;
                    else if (number0 < temp1[1]) group_temp = 2;
                    else if (number0 < temp1[2]) group_temp = 3;
                    else group_temp = 4;
                }
                else {
                    group_temp = 1;
                }
            }
            part_value[0] = group_temp;
        }
        else {
            part_value[0] = group_use;
        }
        Looking_For_Background_If_Use[Looking_For_Dark_Light_Style] = Looking_For_Array_Add_Or_Remove_Line(Looking_For_Background_If_Use[Looking_For_Dark_Light_Style], indexs[number0], part_value);
        Looking_For_Img_Batch_Edit_Change_V = part_use[number0] + '; ' + Looking_For_Img_Batch_Edit_Change_V;
        number0--;
    }
}
function Looking_For_Img_Batch_Edit_Remove(rule, group) {
    let ruler_temp = rule;
    let aero = Looking_For_Img_Batch_Edit_Find_Group(group);
    let temp0 = 0, temp1 = 0, temp2 = '', temp3 = '';
    let number1;
    let temp_R_E = /a/;
    ruler_temp = ruler_temp.replace(/[/]/g, '\\');
    ruler_temp = ruler_temp.replace(/[\\]/g, '\\\\');
    ruler_temp = ruler_temp.replace(/[(]/g, '\\(');
    ruler_temp = ruler_temp.replace(/[)]/g, '\\)');
    ruler_temp = ruler_temp.replace(/[\[]/g, '\\[');
    ruler_temp = ruler_temp.replace(/[\]]/g, '\\]');
    ruler_temp = ruler_temp.replace(/[{]/g, '\\}');
    ruler_temp = ruler_temp.replace(/[}]/g, '\\{');
    ruler_temp = Looking_For_Img_Batch_Edit_Rule_Chack_Be_R_E(ruler_temp);
    number1 = aero[1];
    if (aero[1] < aero[0]) return 0;
    for (; ;) {
        if (number1 < aero[0]) break;
        temp2 = '';
        if (Looking_For_Img_Batch_Edit_Chouse_V == 0) {
            temp1 = 0;
            temp1 = number1 + 1 - aero[0];
            temp2 = temp2 + temp1;
            temp3 = temp2;
        }
        else {
            temp2 = temp2 + Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number1][1];
            temp3 = temp2;
            temp2 = temp2.replace(/[/]/g, '\\');
            temp_R_E = new RegExp(ruler_temp[0]);
            temp2 = temp_R_E.exec(temp2);
        }
        if (temp2 != null) {
            temp2 = '' + temp2;
            temp0 = Looking_For_Img_Batch_Edit_Rule_Chack_Remove_Chack(temp2, ruler_temp);

            if (temp0) {
                Looking_For_Img_Batch_Edit_Change_V = temp3 + '; ' + Looking_For_Img_Batch_Edit_Change_V; Looking_For_Background_If_Use[Looking_For_Dark_Light_Style] = Looking_For_Array_Add_Or_Remove_Line(Looking_For_Background_If_Use[Looking_For_Dark_Light_Style], number1);
            }
        }
        number1--;
    }
}
function Looking_For_Img_Batch_Edit_Add_Path_Chake(value = '') {
    let Test_E = document.getElementById('Looking_For_Img_Batch_Edit_Img_Load_Chack');
    let Test_T;
    let Test_V = 0;
    return new Promise(function (resolve) {
        function Looking_For_Load_Test() {
            Test_E.removeEventListener('load', Looking_For_Load_Test_Active_1);
            Test_E.removeEventListener('error', Looking_For_Load_Test_Active_2);
            clearTimeout(Test_T);
            Test_E.src = '';
            Looking_For_Img_Batch_Edit_Add_Path_Chake_V = Test_V;
            resolve();
        }
        function Looking_For_Load_Test_Active_1() {
            Test_V = 1;
            Looking_For_Load_Test();
        }
        function Looking_For_Load_Test_Active_2() {
            Test_V = 2;
            Looking_For_Load_Test();
        }
        Test_E.addEventListener('load', Looking_For_Load_Test_Active_1);
        Test_E.addEventListener('error', Looking_For_Load_Test_Active_2);
        Test_T = setTimeout(function () {
            Looking_For_Load_Test();
        }, 3000);
        Test_E.src = value;
    });
}
function Looking_For_Img_Batch_Edit_Group(value = 0) {
    let Tipe = "S_Color_I_B_E_G_V_";
    Looking_For_Img_Batch_Edit_Group_V = value;
    if (value == 0) document.getElementById(Tipe + '0').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '0').style.background = "var(--Back_Color)";
    if (value == 1) document.getElementById(Tipe + '1').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '1').style.background = "var(--Back_Color)";
    if (value == 2) document.getElementById(Tipe + '2').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '2').style.background = "var(--Back_Color)";
    if (value == 3) document.getElementById(Tipe + '3').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '3').style.background = "var(--Back_Color)";
    if (value == 4) document.getElementById(Tipe + '4').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '4').style.background = "var(--Back_Color)";

}
function Looking_For_Img_Batch_Edit_Where(value = 1) {
    let Tipe = "S_Color_I_B_E_W_V_";
    Looking_For_Img_Batch_Edit_Where_V = value;
    if (value == 0) document.getElementById(Tipe + '0').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '0').style.background = "var(--Back_Color)";
    if (value == 1) document.getElementById(Tipe + '1').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '1').style.background = "var(--Back_Color)";
    if (value == 2) document.getElementById(Tipe + '2').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '2').style.background = "var(--Back_Color)";
}
function Looking_For_Img_Batch_Edit_Chouse(value = 0) {
    let Tipe = "S_Color_I_B_E_C_V_";
    Looking_For_Img_Batch_Edit_Chouse_V = value;
    if (value == 0) document.getElementById(Tipe + '0').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '0').style.background = "var(--Back_Color)";
    if (value == 1) document.getElementById(Tipe + '1').style.background = "var(--Back_Color_Active)";
    else document.getElementById(Tipe + '1').style.background = "var(--Back_Color)";
    if (value == 0) document.getElementById('S_Color_I_B_E_C_V').placeholder = '1-3';
    else document.getElementById('S_Color_I_B_E_C_V').placeholder = 'path/img<1-3>.png';
}
function Looking_For_Img_Batch_Edit_Box() {
    let B_E = document.getElementById('S_Color_I_B_E_V');
    let B_D_E = document.getElementById('S_Color_I_B_E_Door');
    if (B_E.className == "Box_Close") {
        B_E.className = "Box_Open";
        B_D_E.style['grid-template-rows'] = '1fr';
        B_D_E.getElementsByTagName('div')[0].style['border-width'] = 'var(--Back_Line_Width)';
    }
    else {
        B_E.className = "Box_Close";
        B_D_E.style['grid-template-rows'] = '0fr';
        B_D_E.getElementsByTagName('div')[0].style['border-width'] = '0px';
    }
}
function Looking_For_Img_Batch_Edit_Chouse_Box() {
    let B_E = document.getElementById('S_Color_I_B_E_C_D_V');
    let B_D_E = document.getElementById('S_Color_I_B_E_C_Door');
    if (B_E.className == "Box_Close") {
        B_E.className = "Box_Open";
        B_D_E.style['grid-template-rows'] = '1fr';
        B_D_E.getElementsByTagName('div')[0].style['border-width'] = 'var(--Back_Line_Width)';
    }
    else {
        B_E.className = "Box_Close";
        B_D_E.style['grid-template-rows'] = '0fr';
        B_D_E.getElementsByTagName('div')[0].style['border-width'] = '0px';
    }
}
function Looking_For_S_Scroll_Change() {
    if (Looking_For_Background_Style[Looking_For_Dark_Light_Style][8] == 'auto') {
        Looking_For_Background_Style[Looking_For_Dark_Light_Style][8] = 'none';
    }
    else {
        Looking_For_Background_Style[Looking_For_Dark_Light_Style][8] = 'auto';
    }
    Looking_For_Chouse_Load_Load('S_O_Scroll_Value', (Looking_For_Background_Style[Looking_For_Dark_Light_Style][8] == 'auto'));
    document.body.style.setProperty('--Style_Scrollbar_Show', Looking_For_Background_Style[Looking_For_Dark_Light_Style][8]);
}
function Looking_For_S_Word_Change(value) {
    let Text_in = event.target.value;
    Text_in = Text_in.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    if (value == 0) {
        Looking_For_Hellow_Word = Text_in;
        Looking_For_Hellow_Word_S = Looking_For_Hellow_Word;
    }
    else if (value == 1) {
        Looking_For_NP_Tips_Word = Text_in;
        Looking_For_NP_Tips_Word_S = Looking_For_NP_Tips_Word;
    }
    else {
        Looking_For_Input_Tips = Text_in;
        Looking_For_Input_Tips_S = Looking_For_Input_Tips;
    }
    Looking_For_Hellow_Words_Lode();
}
function Looking_For_S_Preview_Model_Change(value) {
    if (value == 0) {
        if (Looking_For_Proview_Link_Box_Model == 0) {
            Looking_For_Proview_Link_Box_Model = 1;
        }
        else Looking_For_Proview_Link_Box_Model = 0;
        document.getElementById('S_P_L_M_Value').style.background = Looking_For_Chouse_Value[Looking_For_Proview_Link_Box_Model];
    }
    if (value == 1) {
        if (Looking_For_Preview_Button_Show_Model == 0) {
            Looking_For_Preview_Button_Show_Model = 1;
        }
        else Looking_For_Preview_Button_Show_Model = 0;
        document.getElementById('S_P_B_M_Value').style.background = Looking_For_Chouse_Value[Looking_For_Preview_Button_Show_Model];
    }
    if (value == 2) {
        document.getElementById('S_P_Sleep_Value').style.background = Looking_For_Chouse_Value[Looking_For_Sleep_Background_at_View];
        if (Looking_For_Sleep_Background_at_View == 0) {
            Looking_For_Sleep_Background_at_View = 1;
        }
        else Looking_For_Sleep_Background_at_View = 0;
    }
}
/*function Looking_For_S_Link_No_Group_Name_Load_old() {
    const Tips = ['无分组', 'No Grouping'];
    if (Looking_For_Links[0][1] == '' || Looking_For_Links[0][1] == Tips[0] || Looking_For_Links[0][1] == Tips[1]) Looking_For_Links[0][1] = Tips[Looking_For_Language_Sitting];
    setTimeout(function () {
        document.getElementById('S_Link_Link_0').getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML = Looking_For_Links[0][1];
    }, 200);
}*/
function Looking_For_S_Link_No_Group_Name_Load() {
    let number0 = 0, Long = Looking_For_Texts_Languages.length;
    if (Looking_For_Links[0][1] == '') Looking_For_Links[0][1] = Looking_For_Texts_Languages[Looking_For_Language_Sitting].TX_Link_load_no_group_default;
    else for (; ;) {
        if (number0 >= Long) break;
        if (Looking_For_Links[0][1] == Looking_For_Texts_Languages[number0].TX_Link_load_no_group_default) {
            Looking_For_Links[0][1] = Looking_For_Texts_Languages[Looking_For_Language_Sitting].TX_Link_load_no_group_default;
            break;
        }
        number0++;
    }
    setTimeout(function () {
        document.getElementById('S_Link_Link_0').getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML = Looking_For_Links[0][1];
    }, 200);
}
function Looking_For_S_Link_Go_Model_Change(value = -1) {
    let Test_V = [0, 0, 0, 0];
    if (value == -1) {
        value = Looking_For_Model_Temp_To_Save;
        document.getElementById('S_L_Go_M3_Url_Value').value = Looking_For_Default_Web_Page_In_View;
    }
    else if (value == 3) {
        Looking_For_Default_Web_Page_In_View = document.getElementById('S_L_Go_M3_Url_Value').value.replace(/\\/g, '/').replaceAll("'", '').replaceAll('"', '');
    }
    Test_V[value] = 1;
    Looking_For_Model_Temp_To_Save = value;
    document.getElementById('S_L_Go_M0_Value').style.background = Looking_For_Chouse_Value[Test_V[0]];
    document.getElementById('S_L_Go_M1_Value').style.background = Looking_For_Chouse_Value[Test_V[1]];
    document.getElementById('S_L_Go_M2_Value').style.background = Looking_For_Chouse_Value[Test_V[2]];
    document.getElementById('S_L_Go_M3_Value').style.background = Looking_For_Chouse_Value[Test_V[3]];
}
function Looking_For_S_Link_Auto_Add() {
    if (Looking_For_Button_Sleep(0)) return -1;
    //const Tips = ['请检查链接内容或直接输入。', 'Please check the link content or enter it directly.', '提示', "Error"];
    const Tips = Looking_For_Language.TX_Link_auto_add_tips;
    //const Key_Word_Tips = ['请检查关键词是否完整准确输入。', 'Please check that the keywords are entered completely and accurately.'];
    const Key_Word_Tips = Looking_For_Language.TX_Link_auto_add_key_words;
    //const Next_Tips = ['已自动填写输入框，请前往确认。', 'The input box has been filled in automatically, please go to confirm.', '提示', 'Prompt'];
    const Next_Tips = Looking_For_Language.TX_Link_auto_add_next;
    let Text_V = document.getElementById('S_L_Link_Auto_Add_Input').value.replace(/\\/g, '/').replaceAll("'", '').replaceAll('"', '');
    let Link_V = ['', '', ''];
    let Link_Add_E = document.getElementById('S_L_Link_Add_Input');
    if (Text_V == '') return 0;
    let If_Entered = Text_V.search('Looking_For_Link_Create');
    if (If_Entered == -1) {
        Looking_For_Message_Box([Tips[1], Key_Word_Tips]);
        return -1;
    }
    Link_V[0] = Tips[0];
    Text_V = Text_V.split('Looking_For_Link_Create');
    Link_V[1] = Text_V[0];
    if (Text_V.length > 1) Link_V[2] = Text_V[1];
    Text_V = Text_V[0].split('/');
    if (Text_V.length > 2) Link_V[0] = Text_V[0] + '/' + '/' + Text_V[2];
    else {
        Link_V[1] = '';
        Link_V[2] = '';
        Looking_For_Message_Box([Tips[1], Tips[0]]);
    }
    Link_V = ',' + Link_V;
    Link_Add_E.value = Link_V;
    if ('createEvent' in document) {
        let Change_E = document.createEvent('HTMLEvents');
        Change_E.initEvent('change', false, true);
        Link_Add_E.dispatchEvent(Change_E);
    }
    else {
        Link_Add_E.fireEvent('onChange');
    }
    Looking_For_Message_Box([Next_Tips[1], Next_Tips[0]]);
    Link_Add_E.focus();
}
function Looking_For_S_Link_Auto_Add_Copy_Word(value) {
    let Temp0;
    if (value == 0) {
        document.getElementById('Looking_For_Text_Value_Temp').select();
        Temp0 = document.execCommand('copy');
        if (!Temp0) navigator.clipboard.writeText('Looking_For_Link_Create');
    }
    else if (value == 1) {
        document.getElementById('S_L_Link_Auto_Add_Input').focus();
        Temp0 = document.execCommand('paste');
        if (!Temp0) Temp0 = navigator.clipboard.readText();
        document.getElementById('S_L_Link_Auto_Add_Input').value = Temp0.data;
    }
}
function Looking_For_Link_Add_Group(value = 0) {
    if (Looking_For_Button_Sleep(1)) return -1;
    /*const TE_T = [
        ['组名', '组号'],
        ['Group name', 'Group number'],
        ['提示', 'Error'],
        ['组号仅能在‘1’到‘1000’之间!', "The group number can only be between '1' and '1000'!"],
        ['组名过长！', 'The group name is too long!'],
        ['该组号已使用，请更换组号。', 'The group number has been used, please replace the group number.'],
        ['组已添加', 'The group has been added']
    ];
    let ta=['组名', '组号','提示','组号仅能在‘1’到‘1000’之间!','组名过长！','该组号已使用，请更换组号。','组已添加'];
    let tb=['Group name', 'Group number','Error',"The group number can only be between '1' and '1000'!",'The group name is too long!','The group number has been used, please replace the group number.','The group has been added'];*/
    const TE_T = Looking_For_Language.TX_Link_add_add_group;
    let Element_I = document.getElementById('S_L_Group_Add_Input'), Text_V = [0, ''], If_Error = 0;
    let Text = Element_I.value.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    Text = Text.split(',' + TE_T[1] + ' = ');
    Text_V[1] = Text[0];
    if (Text.length > 1) {
        Text_V[0] = Text[1];
        Text_V[0] = Text_V[0].replace(/[^\d]/g, "");
        if (Text_V[0] < 1) {
            Text_V[0] = 1;
            If_Error = 1;
        }
        if (Text_V[0] > 1000) {
            Text_V[0] = 1000;
            If_Error = 1;
        }
    }
    else Text_V[0] = 1;
    if (If_Error) {
        Looking_For_Message_Box([TE_T[2], TE_T[3]]);
    }
    let Temp0 = Looking_For_Link_Edit_Link_Find_Group(Text_V[0]);
    if (Temp0[0] != -1) {
        Looking_For_Message_Box([TE_T[2], TE_T[5]]);
        If_Error = 1;
    }
    Text = Text_V[1].split(TE_T[0] + ' = ');
    if (Text.length < 2) Text_V[1] = TE_T[0];
    else {
        Text_V[1] = Text[1];
        if (Text_V[1].length < 0) Text_V[1] = TE_T[0];
        if (Text_V[1].length > 50) {
            Text_V[1] = Text_V[1].slice(0, 50);
            Looking_For_Message_Box([TE_T[2], TE_T[4]]);
        }
    }
    Element_I.value = TE_T[0] + ' = ' + Text_V[1].replace(/\\\\/g, '\\') + ',' + TE_T[1] + ' = ' + Text_V[0] + ';';
    if (If_Error) return -1;
    if (value == 1) {
        Looking_For_Link_Add_Group_Add(Text_V[0], Text_V[1]);
        Looking_For_Message_Box([TE_T[6], Text_V[1].replace(/\\\\/g, '\\')]);
    }
}
function Looking_For_Link_Add_Group_Add(number, name) {
    let Where_N = Looking_For_Links.length;
    let Where_W = Where_N - 1;
    Looking_For_Links[Where_N] = Looking_For_Links[Where_W];
    Looking_For_Links[Where_W] = [number, name, 0, 0, 0, 0, 0, 1];
    Looking_For_S_Link_Input_Show_Creater(Where_W);
}
function Looking_For_Link_Add_Link(Type = 0) {
    if (Looking_For_Button_Sleep(2)) return -1;
    /*const Group_Error_Tipes = ['提示', 'Error', '请选择可用的分组！', 'Please select one of the available groups!', '访问方式仅可使用‘0’、‘1’、‘2’！', "Access Mode is only '0', '1', '2'!", '主页链接不能为“0”。', 'The home page link cannot be "0".', '链接已添加', 'The link has been added'];
    let ta=['提示','请选择可用的分组！','访问方式仅可使用‘0’、‘1’、‘2’！','主页链接不能为“0”。','链接已添加'];
    let tb=['Error','Please select one of the available groups!',"Access Mode is only '0', '1', '2'!",'The home page link cannot be "0".','The link has been added'];*/
    const Group_Error_Tipes = Looking_For_Language.TX_Link_add_add_link;
    let Text_S = ['', 'url', '', '', '', '', ''], Temp0 = 0, Long = 0, If_Error = 0, Text_A = [',', ',', ',', '', '', ''];
    let Text_E = document.getElementById('S_L_Link_Add_Input');
    let Text_V = Text_E.value;
    let Number0 = 0;
    let Number1;
    Text_V = Text_V.replace(/，/g, ',').replaceAll("'", '').replaceAll('"', '');
    Text_V = Text_V.split(',');
    Long = Text_V.length;
    for (; ;) {
        if (Temp0 >= Long) {
            break;
        }
        Text_S[Temp0] = Text_V[Temp0];
        if (Temp0 > 3) Text_A[Temp0 - 1] = ',';
        Temp0++;
        if (Temp0 > 6) break;
    }
    Number0 = Temp0;
    if (Number0 > 4) {
        Text_S[4] = Text_S[4].replace(/[^\d]/g, "");
        if (Text_S[4] == '') If_Error = 1;
        else if (Text_S[4] < 0) If_Error = 1;
        else if (Text_S[4] == 0) If_Error = 0;
        else {
            Temp0 = 0;
            Long = Looking_For_Links.length;
            for (; ;) {
                if (Temp0 >= Long) {
                    If_Error = 1;
                    break;
                }
                if (Text_S[4] == Looking_For_Links[Temp0][0]) break;
                Temp0++;
            }
        }
        Number1 = Looking_For_Link_Edit_Link_Find_Group(Text_S[4]);
        if (Number1[0] == -1) If_Error = 1;
        if (If_Error) {
            Text_S[4] = 0;
            Looking_For_Message_Box([Group_Error_Tipes[0], [Group_Error_Tipes[1]]]);
        }
        Text_S[4] = Number(Text_S[4]);
    }
    if (Number0 > 5) {
        Text_S[5] = Text_S[5].replace(/[^\d]/g, "");
        if (Text_S[5] != '0' && Text_S[5] != '1' && Text_S[5] != '2') {
            Text_S[5] = 0;
            Looking_For_Message_Box([Group_Error_Tipes[0], [Group_Error_Tipes[2]]]);
        }
        Text_S[5] = Number(Text_S[5]);
    }
    if (Text_S[1] == 0) {
        Text_S[1] = 'url';
        Looking_For_Message_Box([Group_Error_Tipes[0], [Group_Error_Tipes[3]]]);
    }
    Text_S[1] = Text_S[1].replace(/\\/g, '/');
    Text_S[2] = Text_S[2].replace(/\\/g, '/');
    Text_S[3] = Text_S[3].replace(/\\/g, '/');
    Text_E.value = Text_S[0] + Text_A[0] + Text_S[1] + Text_A[1] + Text_S[2] + Text_A[2] + Text_S[3] + Text_A[3] + Text_S[4] + Text_A[4] + Text_S[5] + Text_A[5] + Text_S[6];
    Text_S[0] = Text_S[0].replace(/\\/g, '\\\\');
    Text_S[6] = Text_S[6].replace(/\\/g, '\\\\');
    if (Type == 1) {
        if (Text_S[4] == '') Text_S[4] = 0;
        Text_S[4] = Number(Text_S[4]);
        if (Text_S[5] == '') Text_S[5] = 0;
        Looking_For_Link_Add_Link_Add(Text_S[4], Text_S[0], Text_S[1], Text_S[2], Text_S[3], Text_S[5], Text_S[6]);
        Looking_For_Message_Box([Group_Error_Tipes[4], Text_S[0]]);
    }
}
function Looking_For_Link_Add_Link_Add(group, name, mainlink, link, linkdress, link_way, errormessage) {
    let Number0 = Looking_For_Link_Edit_Link_Find_Group(group);
    if (group == 0) {
        Number0[2] = Looking_For_Link_Edit_Link_Find_Group_No_Group();
    }
    Looking_For_S_Link_ID_Up_Or_Down(Number0[2] - 1, 1);
    Looking_For_Links = Looking_For_S_Link_Array_Add_Or_Remove_Line(Looking_For_Links, Number0[2], [group, name, mainlink, link, linkdress, link_way, errormessage, 1]);
    Looking_For_S_Link_Add_Link_Box(Number(Number0[2]));
}
function Looking_For_Link_Box_Button(value) {
    if (Looking_For_Button_Disable_Time_Out == 0) {
        Looking_For_Button_Disable_Time_Out = 1;
        setTimeout(function () {
            Looking_For_Button_Disable_Time_Out = 0;
        }, 600);
    }
    else return -1;
    var Number0 = Number(event.target.parentElement.id.replace(/[^\d]/g, ""));
    var Temp0 = 0, Temp1;
    if (value == 0) {
        Looking_For_S_Link_ID_Up_Or_Down(Number0, 1);
        Looking_For_Links = Looking_For_S_Link_Array_Add_Or_Remove_Line(Looking_For_Links, Number(Number0 + 1), Looking_For_Links[Number0]);
        Looking_For_S_Link_Add_Link_Box(Number(Number0 + 1));
    }
    else if (value == 1) {
        Looking_For_S_Link_Remove_Link_Box(Number0);
        Looking_For_Links = Looking_For_S_Link_Array_Add_Or_Remove_Line(Looking_For_Links, Number0, 0);
        Looking_For_S_Link_ID_Up_Or_Down(Number0, -1);
    }
    else if (value == 2) {
        Temp0 = Looking_For_S_Link_Chack_Link_Less_If_Ues(Number0);
        if (Temp0) {
            Temp0 = Number0 - 1;
            Temp1 = Looking_For_Links[Temp0];
            Looking_For_Links[Temp0] = Looking_For_Links[Number0];
            Looking_For_Links[Number0] = Temp1;
            let Group_E1 = document.getElementById('S_Link_Link_' + Number0);
            let Group_E2 = document.getElementById('S_Link_Link_' + Temp0);
            Looking_For_Div_Up_Move_Turn(Group_E1, Group_E2);
        }
    }
    else if (value == 3) {
        if (Looking_For_Links[Number0][7] == 1) Looking_For_Links[Number0][7] = 0;
        else Looking_For_Links[Number0][7] = 1;
        let Div_C = ['Box_Style S_Link_Input_Box Background_Un_Use_Mask', 'Box_Style S_Link_Input_Box'];
        let Div_E = document.getElementById('S_Link_Link_' + Number0).getElementsByTagName('div')[0].getElementsByTagName('div');
        Div_E[0].className = Div_C[Looking_For_Links[Number0][7]];
        Div_E[1].className = Div_C[Looking_For_Links[Number0][7]];
    }
}
function Looking_For_Link_Editer_Go_Way(value = 0) {
    let H_E = document.getElementById('Looking_For_Link_Editer_Go_Way_H');
    let V_E = document.getElementById('Looking_For_Link_Editer_Go_Way_V');
    if (Looking_For_Link_Editer_Go_Way_Temp == 0) {
        H_E.style.background = 'var(--Back_Color_Board)';
        H_E.style['margin-top'] = '-36px';
        H_E.style.height = '108px';
        V_E.style['margin-top'] = '0px';
        Looking_For_Link_Editer_Go_Way_Temp = 1;
    }
    else {
        H_E.style.background = '';
        H_E.style['margin-top'] = '0px';
        H_E.style.height = '30px';
        if (value == 0) V_E.style['margin-top'] = '-3px';
        if (value == 1) V_E.style['margin-top'] = '-36px';
        if (value == 2) V_E.style['margin-top'] = '-69px';
        Looking_For_Link_Editer_Go_Way_Temp = 0;
    }
    Looking_For_Link_Editer_Go_Way_Value = value;
}
function Looking_For_Link_Editer(value) {
    /*var Title = [
        ['分组', '序号', '链接名', '访问方式', '未使用默认访问方式的提示信息', '主页链接', '搜索链接', '搜索链接后缀', '组号', '组名', '删除组', '确认', '转到', '新标签页', '直接访问', '提示'],
        ['Group', 'Serial Number', 'Link Name', 'Access Method', 'Notification that the default access method is not used', 'Home Page Link', 'Search Link', 'Search Link Suffix', 'Group Number', 'Group Name', 'Delete Group', 'Confirm', 'Turn to', 'New tab', 'Go to', 'Tipe']
    ];*/
    const Title = Looking_For_Language.TX_Link_editer;
    var Edit_Table_Height = 100;
    var Edit_E = event.target.parentElement.parentElement;
    var Number0 = Number(Edit_E.id.replace(/[^\d]/g, ""));
    var Temp_V = Looking_For_Links[Number0];
    Edit_E = event.target;
    var To_Top = Edit_E.getBoundingClientRect();
    var To_Left = To_Top.left;
    var Height = Edit_E.offsetHeight;
    var Width = Edit_E.offsetWidth;
    var Height_Mix = document.body.offsetHeight;
    To_Top = To_Top.top;
    var H_Top = Number(To_Top + Number(Height / 2)).toFixed(0);
    var Group_Message = Looking_For_Link_Edit_Link_Get_Group_Message(Number0);
    if (value) {
        Looking_For_Link_Editer_Go_Way_Value = Temp_V[5];
        var Go_Way_Box_V_H = '-3px';
        if (Looking_For_Link_Editer_Go_Way_Value == 1) Go_Way_Box_V_H = '-36px';
        else if (Looking_For_Link_Editer_Go_Way_Value == 2) Go_Way_Box_V_H = '-69px';
        var Go_Way_Box = 
            "<div style='width:100%;height:30px;text-align:center;font-size:24px;border:0px;margin-top:6px;position:relative;'><div  id='Looking_For_Link_Editer_Go_Way_H' style='width:100%;height:30px;overflow:hidden;position:absolute;'><div id='Looking_For_Link_Editer_Go_Way_V' style='width:100%;height=30px;transition:margin-top 0.6s;position:absolute;margin-top:" 
            + Go_Way_Box_V_H + "'><div class='Box_Style' style='width:100%;margin:3px 0px 3px 0px;height:30px;overflow:hidden;cursor:pointer;' onclick='Looking_For_Link_Editer_Go_Way(0)'>" 
            + Title[12] + "</div><div class='Box_Style' style='width:100%;margin:3px 0px 3px 0px;height:30px;overflow:hidden;cursor:pointer;' onclick='Looking_For_Link_Editer_Go_Way(1)'>" 
            + Title[13] + "</div><div class='Box_Style' style='width:100%;margin:3px 0px 3px 0px;height:30px;overflow:hidden;cursor:pointer;' onclick='Looking_For_Link_Editer_Go_Way(2)'>" 
            + Title[14] + "</div></div></div></div>";
        var Edit_Class = 'S_Link_Edit';
        var IN_T = 
            "<div id='S_Link_Edit_Box' class='S_Link_Hind_Edit' style='margin-top:" 
            + H_Top + "px;margin-left:" 
            + To_Left + "px;width:" 
            + Width + "px;text-align:center;' onmouseover='Looking_For_Link_Edit_Use(1)' onmouseout='Looking_For_Link_Edit_Use(0)'><div style='width:65.5%;margin-left:1.5%'><div style='width:23%;margin:10px 1% 10px 0%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[0] + "</div><input placeholder='0' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='" 
            + Group_Message[1].replace(/\\\\/g, '\\') + "'></div><div style='width:23%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[1] + "</div><input placeholder='0' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='" 
        var IN_T = "<div id='S_Link_Edit_Box' class='S_Link_Hind_Edit' style='margin-top:"
            + H_Top + "px;margin-left:"
            + To_Left + "px;width:"
            + Width + "px;text-align:center;' onmouseover='Looking_For_Link_Edit_Use(1)' onmouseout='Looking_For_Link_Edit_Use(0)'><div style='width:65.5%;margin-left:1.5%;float:left;'><div style='width:23%;margin:10px 1% 10px 0%;float:left;'><div style='height:21px;overflow:hidden'>"
            + Title[0] + "</div><input placeholder='0' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='"
            + Group_Message[1].replace(/\\\\/g, '\\') + "'></div><div style='width:23%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>"
            + Title[1] + "</div><input placeholder='0' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='"
            + Group_Message[0] + "'></div><div style='width:23%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>"
            + Title[2] + "</div><input placeholder='" 
            + Title[2] + " 1' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='" 
            + Temp_V[1].replace(/\\\\/g, '\\') + "'></div><div style='width:23%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[3] + "</div>" 
            + Go_Way_Box + "</div></div><div style='width:31%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[4] + "</div><input placeholder='" 
            + Title[15] + "' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='" 
            + Temp_V[6].replace(/\\\\/g, '\\') + "'></div><div style='width:31%;margin:10px 1% 10px 1.5%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[5] + "</div><input placeholder='url' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='" 
            + Temp_V[2] + "'></div><div style='width:31%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[6] + "</div><input placeholder='url?keyword=' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='" 
            + Temp_V[3] + "'></div><div style='width:31%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[7] + "</div><input placeholder='site:url' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin-top:6px;' value='" 
            + Temp_V[4] + "'></div><div class='Box_Style' style='width:40%;height:30px;margin:6px 0px 0px 30%;cursor:pointer;float:left;' onclick='Looking_For_Link_Edit_Link(" 
            + Number0 + ")'>" 
            + Title[11] + "</div></div>";
    }
    else {
        Edit_Table_Height = 40;
        var Edit_Class = 'S_Link_Group_Edit';
        var IN_T = 
            "<div id='S_Link_Edit_Box' class='S_Link_Hind_Edit' style='margin-top:" 
            + H_Top + "px;margin-left:" 
            + To_Left + "px;width:" 
            + Width + "px;text-align:center;' onmouseover='Looking_For_Link_Edit_Use(1)' onmouseout='Looking_For_Link_Edit_Use(0)'><div style='width:25%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[8] + "</div><input placeholder='1' type='number' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin:6px 0px 0px 6px;' value='" 
            + Temp_V[0] + "'></div><div style='width:50%;margin:10px 1% 10px 1%;float:left;'><div style='height:21px;overflow:hidden'>" 
            + Title[9] + "</div><input placeholder='" 
            + Title[9] + " 1' class='Box_Style' style='width:100%;text-align:center;font-size:24px;border:0px;margin:6px 0px 0px 6px;' value='" 
            + Temp_V[1].replace(/\\\\/g, '\\') + "'></div><div style='width:18%;margin:10px 1% 10px 1%;float:right;'> <div class='Box_Style' style='width:100%;height:30px;margin:0px;cursor:pointer;' onclick='Looking_For_Link_Edit_Remove_Group_Button(" 
            + Number0 + ")'>" 
            + Title[10] + "</div><div class='Box_Style' style='width:100%;height:30px;margin:6px 0px 0px 0px;cursor:pointer;' onclick='Looking_For_Link_Edit_Group(" 
            + Number0 + ")'>" 
            + Title[11] + "</div></div></div>";
    }
    H_Top = H_Top - Edit_Table_Height;
    if (H_Top < 80) H_Top = 80;
    if (Number(H_Top) + Number(Edit_Table_Height) * 2 + 80 > Height_Mix) H_Top = Height_Mix - Number(Edit_Table_Height) * 2 - 80;
    document.getElementById('S_Link_Link_Eider_Where').innerHTML = IN_T;
    document.getElementById('S_Link_Link_Eider_Where').style["z-index"] = 2;
    document.getElementById('S_Link_Link_Eider_Where').style.background = 'var(--Back_Color)';
    Edit_E = document.getElementById('S_Link_Edit_Box');
    setTimeout(function () {
        Edit_E.className = Edit_Class;
        Edit_E.style["margin-top"] = H_Top + 'px';
        Edit_E.style.width = '';
        Edit_E.style.marginLeft = '';
        Edit_E.style.background = 'var(--Back_Color_Board)';
    }, 20);
}
function Looking_For_Link_Edit_Link(number) {
    /* let Message = [
         ['链接编辑有误', '请选择可用的组。', '访问方式请使用“0”、“1”或“2”。', '主页链接不能为“0”。', '序号必须大于“0”。'],
         ['The link was edited incorrectly', 'Please select one of the available groups.', 'Use "0", "1", or "2" as the access method.', 'The home page link cannot be "0".', 'The serial number must be greater than "0".']
     ];*/
    const Message = Looking_For_Language.TX_Link_edit_link;
    let If_Error = 0, If_Change = 0;
    let V_IN = event.target.parentElement.getElementsByTagName('input');
    let Link_E = document.getElementById('S_Link_Link_' + number).getElementsByTagName('div')[0].getElementsByTagName('div');
    let Temp_V = [0];
    let Index_Old = Looking_For_Link_Edit_Link_Get_Group_Message(number);
    Temp_V[0] = V_IN[0].value.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    var Group_Message = Looking_For_Link_Edit_Link_Find_Group(Temp_V[0], 1);
    if (Temp_V[0] == 0 || Temp_V[0] == '') {
        Group_Message[0] = 0, Group_Message[1] = 0;
        Group_Message[2] = Looking_For_Link_Edit_Link_Find_Group_No_Group();
    }
    else {
        if (Group_Message[0] == -1) {
            Temp_V[0] = Temp_V[0].replace(/[^\d]/g, "");
            if (Temp_V[0] != '') {
                Temp_V[0] = Number(Temp_V[0]);
                Group_Message = Looking_For_Link_Edit_Link_Find_Group(Temp_V[0]);
            }
        }
        if (Group_Message[0] == -1) {
            Group_Message = Looking_For_Link_Edit_Link_Get_Group_Message(number);
            V_IN[0].value = Group_Message[1].replace(/\\\\/g, '\\');
            Looking_For_Message_Box([Message[0], Message[1]]);
            If_Error = 1;
        }
    }
    if (Looking_For_Links[number][0] != Group_Message[1]) If_Change = 1;
    if (V_IN[1].value < 1) {
        V_IN[1].value = Index_Old[0];
        Looking_For_Message_Box([Message[0], Message[4]]);
        If_Error = 1;
    }
    if (V_IN[1].value > 10000) {
        V_IN[1].value = 10000;
    }
    /*if(V_IN[3].value<0||V_IN[3].value>2){
        V_IN[3].value=Looking_For_Links[number][5];
        Looking_For_Message_Box([Message[0],Message[2]]);
        If_Error=1;
    }*/
    if (V_IN[4] == '0') {
        V_IN[4].value = Looking_For_Links[number][2].replace(/\\\\/g, '\\');
        Looking_For_Message_Box([Message[0], Message[3]]);
        If_Error = 1;
    }
    if (If_Error) return -1;
    if (Index_Old[0] != V_IN[1].value) If_Change = 1;
    Looking_For_Links[number][1] = V_IN[2].value.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    Link_E[0].innerHTML = Looking_For_Links[number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\');
    Looking_For_Links[number][5] = Looking_For_Link_Editer_Go_Way_Value;
    Looking_For_Links[number][6] = V_IN[3].value.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    Looking_For_Links[number][2] = V_IN[4].value.replace(/\\/g, '/').replaceAll("'", '').replaceAll('"', '');
    Link_E[1].innerHTML = Looking_For_Links[number][2];
    Looking_For_Links[number][3] = V_IN[5].value.replace(/\\/g, '/').replaceAll("'", '').replaceAll('"', '');
    Looking_For_Links[number][4] = V_IN[6].value.replace(/\\/g, '/').replaceAll("'", '').replaceAll('"', '');
    if (If_Change) {
        Looking_For_Links[number][0] = Group_Message[1];
        Temp_V[0] = Group_Message[0] + Number(V_IN[1].value);
        if (Temp_V[0] > Group_Message[2]) Temp_V[0] = Group_Message[2];
        /*add*/
        let If_Down = 0;
        if (Temp_V[0] > number) {
            if (Number(Looking_For_Links[Temp_V[0]][0]) == Number(Looking_For_Links[number - 1][0])) {
                if (Group_Message[0] < Temp_V[0] - 1) Temp_V[0]++;
            }
            If_Down = 1;
        }
        Looking_For_S_Link_ID_Up_Or_Down(Temp_V[0] - 1, 1);
        Looking_For_Links = Looking_For_S_Link_Array_Add_Or_Remove_Line(Looking_For_Links, Temp_V[0], Looking_For_Links[number]);
        Looking_For_S_Link_Add_Link_Box(Number(Temp_V[0]));
        if (If_Down == 0) number++;
        Looking_For_S_Link_Remove_Link_Box(number);
        Looking_For_Links = Looking_For_S_Link_Array_Add_Or_Remove_Line(Looking_For_Links, number, 0);
        Looking_For_S_Link_ID_Up_Or_Down(number, -1);
    }
    Looking_For_Link_Editer_Close(1);
}
function Looking_For_Link_Edit_Link_Find_Group_No_Group() {
    let Temp0 = 0, Long = Looking_For_Links.length;
    for (; ;) {
        if (Temp0 >= Long) break;
        if (Looking_For_Links[Temp0][0] != 0) break;
        Temp0++;
    }
    return Temp0;
}
function Looking_For_Link_Edit_Link_Find_Group(group_message, type = 0, arrory = 0) {
    let group = group_message, Temp0 = 0, Long = Looking_For_Links.length;
    let Return = [-1, -10, 0];
    let Arrory = Looking_For_Links;
    if (arrory != 0) {
        Arrory = arrory;
        Long = Arrory.length;
    }
    if (type == 0) {
        if (group > 1000 || group < 1) return Return;
    }
    for (; ;) {
        if (Temp0 >= Long) break;
        if (Arrory[Temp0][type] == group) {
            if (Return[1] == -10) {
                Return[1] = Arrory[Temp0][0];
                Return[0] = Temp0;
                Return[2] = 1;
            }
        }
        if (Return[2]) {
            if (Arrory[Temp0][0] != Return[1]) {
                Return[2] = Temp0;
                break;
            }
        }
        Temp0++;
    }
    return Return;
}
function Looking_For_Link_Edit_Link_Get_Group_Message(number) {
    let Return = [-1, ''];
    let Temp0 = 0, Long = Looking_For_Links.length - 1;
    if (number < 1 || number > 1000) return Return;
    let group = Looking_For_Links[number][0];
    for (; ;) {
        if (Temp0 >= Long) return Return;
        if (Looking_For_Links[Temp0][0] == group) break;
        Temp0++;
    }
    Return[0] = number - Temp0;
    Return[1] = Looking_For_Links[Temp0][1];
    return Return;
}
function Looking_For_Link_Editer_Close(value = 0) {
    if (value == 0) {
        if (Looking_For_Link_Edit_Useing) return 0;
    }
    Looking_For_Link_Edit_Useing = 0;
    Looking_For_Link_Editer_Go_Way_Temp = 0;
    document.getElementById('S_Link_Link_Eider_Where').style.background = 'hsla(0,0%,0%,0.00)';
    var Edit_E = document.getElementById('S_Link_Edit_Box');
    if (Edit_E !== null) {
        Edit_E.style.background = 'hsla(0,0%,0%,0.00)';
        Edit_E.style.height = '0px';
        Edit_E.style["margin-top"] = Number(Edit_E.offsetTop + Edit_E.offsetHeight / 2) + 'px';
    }
    setTimeout(function () {
        document.getElementById('S_Link_Link_Eider_Where').style["z-index"] = -2;
    }, 600);
}
function Looking_For_Link_Input_Show() {
    let Temp0 = 0;
    /*Load No Group Name*/
    Looking_For_S_Link_No_Group_Name_Load();
    for (; ;) {
        if (Looking_For_Links[Temp0][0] == -1) break;
        Looking_For_S_Link_Input_Show_Creater(Temp0);
        Temp0++;
    }
}
function Looking_For_Link_Edit_Use(value) {
    Looking_For_Link_Edit_Useing = value;
}
function Looking_For_Link_Edit_Group(number) {
    /*let Message = [
        ['组号有误', '最小为“0”。', '最大为“1000”。', '不能修改无分组组号！'],
        ['The group number is incorrect', 'The minimum is "1".', 'The maximum is "1000".', "You can't change the group number without grouping!"]
    ];*/
    const Message = Looking_For_Language.TX_Link_edit_group;
    let If_Change = 0, Old_Group = 0, New_Group, Temp0 = 0;
    let Temp_E = event.target.parentElement.parentElement.getElementsByTagName('input');
    let Temp_name = Temp_E[1].value.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    if (Temp_name == '') Temp_E[0].value = 0;
    if (Temp_E[0].value != Looking_For_Links[number][0]) {
        Old_Group = Looking_For_Links[number][0];
        New_Group = Temp_E[0].value;
        if (Temp_E[0].value < 0) {
            Looking_For_Message_Box([Message[0], Message[1]]);
            Temp_E[0].value = Old_Group;
            return -1;
        }
        else if (Temp_E[0].value > 1000) {
            Looking_For_Message_Box([Message[0], Message[2]]);
            Temp_E[0].value = Old_Group;
            return -1;
        }
        if (Old_Group == 0 || New_Group == 0) {
            Temp_E[0].value = Old_Group;
            Looking_For_Message_Box([Message[0], Message[3]]);
            return -1;
        }
        Temp0 = Looking_For_S_Link_Group_Change(Old_Group, New_Group);
        If_Change = 1;
    }
    if (Temp_name != Looking_For_Links[number][1]) {
        let Group_Message = Looking_For_Link_Edit_Link_Find_Group(Temp_name, 1);
        if (Group_Message[0] != -1) {
            Looking_For_Links[Group_Message[0]][1] = Looking_For_Links[number][1];
            document.getElementById('S_Link_Link_' + Group_Message[0]).getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML = Looking_For_Links[Group_Message[0]][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\');
        }
        Looking_For_Links[number][1] = Temp_name;
        document.getElementById('S_Link_Link_' + number).getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML = Looking_For_Links[number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\');
    }
    if (If_Change) {
        Looking_For_Link_Edit_Move_Group(Old_Group, New_Group);
        if (Temp0) Looking_For_Link_Edit_Move_Group(New_Group, Old_Group);
    }
    Looking_For_Link_Editer_Close(1);
}
function Looking_For_Link_Edit_Remove_Group_Button(number) {
    //let Texts = ['确认要删除组吗？', 'Are you sure you want to delete the group?', '提示', 'Prompt', '不能删除无分组组！', "You can't delete an ungrouped group!"];
    //let ta=['确认要删除组吗？','提示','不能删除无分组组！'];
    //let tb=['Are you sure you want to delete the group?','Prompt',"You can't delete an ungrouped group!"];
    const Texts = Looking_For_Language.TX_Link_edit_remove_group;
    var Chouse = 0;
    if (number == 0) {
        Looking_For_Message_Box([Texts[1], Texts[2]]);
        return -1;
    }
    Chouse = confirm(Texts[0]);
    if (Chouse) {
        var Group = Looking_For_Links[number][0];
        Looking_For_Link_Edit_Remove_Group(Group);
        Looking_For_Link_Edit_DisAble_Array_Group(Group);
    }
    Looking_For_Link_Editer_Close(1);
}
function Looking_For_Link_Edit_DisAble_Array_Group(group) {
    let Temp0 = 0, Long = Looking_For_Links.length;
    for (; ;) {
        if (Temp0 >= Long) break;
        if (Looking_For_Links[Temp0][0] == group) Looking_For_Links[Temp0][0] = -2;
        Temp0++;
    }
}
function Looking_For_Link_Edit_Add_Group(group) {
    let Temp0 = 0, Enter0 = 0;
    let nu = 0;
    for (; ;) {
        if (Looking_For_Links[Temp0][0] == group) {
            Looking_For_S_Link_Input_Show_Creater(Temp0);
            nu++;
        }
        else if (Enter0 || Looking_For_Links[Temp0][0] == -1) {
            return 0;
        }
        Temp0++;
    }
}
function Looking_For_Link_Edit_Remove_Group(group) {
    Looking_For_Link_Edit_Move_Group(group, 0, 1);
}
function Looking_For_Link_Edit_Move_Group(old_group, new_group, no_add = 0) {
    let Temp_E = document.getElementById('S_Link_Link_Group_Door_' + old_group);
    Temp_E.style['grid-template-rows'] = '0fr';
    Temp_E.style.transition = 'all 0.6s';
    Temp_E.style["pointer-events"] = 'none';
    setTimeout(function () {
        Temp_E.remove();
        setTimeout(function () {
            if (!no_add) Looking_For_Link_Edit_Add_Group(new_group);
        }, 40);
    }, 620);
}
function Looking_For_S_Link_Group_Change(group_1, group_2) {
    let Long = Looking_For_Links.length - 1;
    let Return = 0;
    let Temp0 = 0;
    for (; ;) {
        if (Temp0 > Long) break;
        if (Looking_For_Links[Temp0][0] == group_1) Looking_For_Links[Temp0][0] = group_2;
        else if (Looking_For_Links[Temp0][0] == group_2) {
            Looking_For_Links[Temp0][0] = group_1;
            Return = 1;
        }
        Temp0++;
    }
    return Return;
}
function Looking_For_S_Link_Chack_Link_Less_If_Ues(number) {
    let Long = Looking_For_Links.length - 1;
    let Temp0 = 0, Return_V = 0;
    for (; ;) {
        if (Temp0 > Long) break;
        if (Temp0 >= number) break;
        if (Looking_For_Links[Temp0][0] == Looking_For_Links[number][0]) {
            if (Temp0 < number) {
                if (Looking_For_Links[Temp0][2] != 0) {
                    Return_V = 1;
                    break;
                }
            }
        }
        Temp0++;
    }
    return Return_V;
}
function Looking_For_Link_Edit_Link_Fix() {
    let Temp0 = 0, Temp1 = 0, Temp_V, If_Fix = 0, Long = 0;
    let Links_Return = [
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];
    Long = Looking_For_Links.length;
    for (; ;) {
        if (Temp1 >= Long) break;
        if (Looking_For_Links[Temp1][0] != -2) {
            var Link_Temp = [];
            Link_Temp[0] = Looking_For_Links[Temp1][0];
            Link_Temp[1] = Looking_For_Links[Temp1][1];
            Link_Temp[2] = Looking_For_Links[Temp1][2];
            Link_Temp[3] = Looking_For_Links[Temp1][3];
            Link_Temp[4] = Looking_For_Links[Temp1][4];
            Link_Temp[5] = Looking_For_Links[Temp1][5];
            Link_Temp[6] = Looking_For_Links[Temp1][6];
            Link_Temp[7] = Looking_For_Links[Temp1][7];
            Links_Return[Temp0] = Link_Temp;
            Temp0++, Temp1++;
        }
        else Temp1++;
    }
    Temp0 = 0, Temp1 = 1;
    for (; ;) {
        if (Links_Return[Temp1][0] == -1) {
            Temp0 = 0, Temp1 = 1;
            if (If_Fix) If_Fix = 0;
            else break;
        }
        if (Number(Links_Return[Temp0][0]) > Number(Links_Return[Temp1][0])) {
            Temp_V = Links_Return[Temp0];
            Links_Return[Temp0] = Links_Return[Temp1];
            Links_Return[Temp1] = Temp_V;
            If_Fix = 1;
        }
        Temp0++, Temp1++;
    }
    return Links_Return;
}
function Looking_For_S_Link_Input_Show_Creater(number) {
    var Team_V = Looking_For_Links[number];
    var ID_T = 'S_Link_Link_', Style = ['Background_Un_Use_Mask', ''];
    var IN_T = 
        "<div onclick='Looking_For_Link_Editer(1)'><div class='Box_Style S_Link_Input_Box " 
        + Style[Team_V[7]] + "' style='width:25%;'>" 
        + Team_V[1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\') + "</div><div class='Box_Style S_Link_Input_Box " 
        + Style[Team_V[7]] + "' style='width:50%;word-wrap:break-word;'>" 
        + Team_V[2] + "</div></div><div class='S_Background_Link_Button Box_Style' style='line-height:28px;' onclick='Looking_For_Link_Box_Button(3)'>╳</div><div class='S_Background_Link_Button Box_Style' style='line-height:15px' onclick='Looking_For_Link_Box_Button(2)'>︿</div><div class='S_Background_Link_Button Box_Style' style='line-height:24px' onclick='Looking_For_Link_Box_Button(1)'>-</div><div class='S_Background_Link_Button Box_Style' style='line-height:24px' onclick='Looking_For_Link_Box_Button(0)'>＋</div>";
    if (Team_V[2] == 0) IN_T = "<div onclick='Looking_For_Link_Editer(0)'><div class='Box_Style S_Link_Input_Group_Box'>" + Team_V[1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\') + "</div></div>";
    if (Team_V[2] == 0) {
        Looking_For_Div_Creater(ID_T + 'Box', ID_T + 'Group_Door_' + Team_V[0], 'S_Link_Group_Box_Box Auto_Door_Open', "<div id='" + ID_T + 'Group_' + Team_V[0] + "'></div>");
        setTimeout(function () {
            document.getElementById(ID_T + 'Group_Door_' + Team_V[0]).style['grid-template-rows'] = '1fr';
        }, 20);
        document.getElementById(ID_T + 'Group_Door_' + Team_V[0]).style.order = Number(Team_V[0]) * 1000;
        document.getElementById(ID_T + 'Group_' + Team_V[0]).style.display = 'grid';
        Looking_For_Div_Creater(ID_T + 'Group_' + Team_V[0], ID_T + number, 'S_Link_Group_Box', IN_T);
    }
    else Looking_For_Div_Creater(ID_T + 'Group_' + Team_V[0], ID_T + number, 'S_Background_Link_Box', IN_T);
    document.getElementById(ID_T + number).style.order = Number(number);
}
function Looking_For_S_Link_Add_Link_Box(number) {
    let Height = 31;
    if (document.getElementById('S_Link_Link_' + Number(number - 1)) != undefined) {
        if (document.getElementById('S_Link_Link_' + Number(number - 1)).className == 'S_Background_Link_Box') Height = document.getElementById('S_Link_Link_' + Number(number - 1)).offsetHeight;
        else if (document.getElementById('S_Link_Link_' + Number(number + 1)) != undefined) {
            if (document.getElementById('S_Link_Link_' + Number(number + 1)).className == 'S_Background_Link_Box') Height = document.getElementById('S_Link_Link_' + Number(number + 1)).offsetHeight;
        }
    }
    Looking_For_S_Link_Input_Show_Creater(number);
    let Div_E = document.getElementById('S_Link_Link_' + number);
    Div_E.style.transition = 'all 0s';
    Div_E.style.height = '0px';
    Div_E.style.overflow = 'hidden';
    setTimeout(function () {
        Div_E.style.transition = '';
        Div_E.style.height = Height + 'px';
        setTimeout(function () {
            Div_E.style.height = '';
            Div_E.style.overflow = '';
        }, 700);
    }, 100);
}
function Looking_For_S_Link_Remove_Link_Box(number) {
    let Div_E = document.getElementById('S_Link_Link_' + number);
    Div_E.style.height = Div_E.offsetHeight + 'px';
    Div_E.style.overflow = 'hidden';
    setTimeout(function () {
        Div_E.style.height = '0px';
        setTimeout(function () {
            Div_E.remove();
        }, 700);
    }, 20);
}
function Looking_For_S_Link_ID_Up_Or_Down(number = 0, value = 0) {
    let Long = Looking_For_Links.length;
    let ID_T = 'S_Link_Link_';
    let Temp0 = number, End = Long;
    let T_E;
    if (value == 1) {
        Temp0 = Long - 2;
        End = number;
    }
    for (; ;) {
        if (Number(Temp0) == Number(End)) {
            return 0;
        }
        T_E = document.getElementById(ID_T + Temp0);
        if (T_E !== null) {
            T_E.style.order = Number(Number(Temp0) + Number(value));
            T_E.id = ID_T + Number(Number(Temp0) + Number(value));
        }
        Temp0 = Temp0 - value;
    }
}
function Looking_For_S_Link_Array_Remove_Group(group) {
    var Array_Temp = [], Temp0 = 0, Temp1 = 0;
    var array = Looking_For_Links;
    for (; ;) {
        if (Temp0 >= array.length) break;
        if (Looking_For_Links[Temp0] != group) {
            Array_Temp[Temp1] = array[Temp0];
            Temp1++;
        }
        Temp0++;
    }
    Looking_For_Links = Array_Temp;
}
function Looking_For_S_Link_Array_Add_Or_Remove_Line(array, line, value) {
    var Array_Temp = [], Change_Value = 0;
    for (var Temp0 = 0; ;) {
        if (Temp0 >= array.length) break;
        if (line == Temp0) {
            if (value) {
                Array_Temp[Temp0] = value;
                var Array_L_V = [value[0], value[1], value[2], value[3], value[4], value[5], value[6], value[7]];
                Array_Temp[Temp0 + Change_Value] = Array_L_V;
                Change_Value = 1;
                var Array_L_V = [array[Temp0][0], array[Temp0][1], array[Temp0][2], array[Temp0][3], array[Temp0][4], array[Temp0][5], array[Temp0][6], array[Temp0][7]];
                Array_Temp[Temp0 + Change_Value] = Array_L_V;
            }
            else Change_Value = -1;
            Temp0++;
            if (Temp0 >= array.length) break;
        }
        var Array_L_V = [array[Temp0][0], array[Temp0][1], array[Temp0][2], array[Temp0][3], array[Temp0][4], array[Temp0][5], array[Temp0][6], array[Temp0][7]];
        Array_Temp[Temp0 + Change_Value] = Array_L_V;
        Temp0++;
    }
    return Array_Temp;
}
function Looking_For_S_Message_S_Change(value) {
    //const Messages = ['显示时间应大于“0”。', 'The display time should be greater than "0".'];
    const Messages = Looking_For_Language.TX_Message_time_over;
    let Temp_V = '';
    if (value == 0) Looking_For_Message_Prompt_Time = -1;
    else if (value == 1) Looking_For_Message_Prompt_Time = 0;
    else if (value == 2) {
        Temp_V = event.target.value;
        Temp_V = Temp_V.replace(/[^\d^\.]/g, "");
        if (Temp_V != '' && Temp_V != '0') {
            Temp_V = Number(Temp_V);
            Temp_V = Temp_V * 1000;
            Looking_For_Message_Prompt_Time = Temp_V;
        }
        else {
            Looking_For_Message_Box([Messages]);
        }
    }
    Looking_For_S_Others_Message_S_Load();
}
function Looking_For_S_Others_Message_S_Load() {
    let Temp_V = [0, 0, 0];
    if (Looking_For_Message_Prompt_Time == -1) Temp_V[0] = 1;
    if (Looking_For_Message_Prompt_Time == 0) Temp_V[1] = 1;
    if (Looking_For_Message_Prompt_Time > 0) {
        Temp_V[2] = Looking_For_Message_Prompt_Time;
        Temp_V[2] = Temp_V[2] / 1000;
        Temp_V[2] = Temp_V[2].toFixed(2);
    }
    Looking_For_Chouse_Load_Load('S_O_Message_0_Value', Temp_V[0]);
    Looking_For_Chouse_Load_Load('S_O_Message_1_Value', Temp_V[1]);
    document.getElementById('S_O_Message_2_Value').value = Temp_V[2] + ' s';
}
function Looking_For_Color_Chouse_Table(value) {
    var Id = "S_Color_C_T_" + value;
    var Box = document.getElementById(Id);
    var T_Style = "";
    var W_Hight = document.body.offsetHeight;
    Looking_For_Color_Chouse_Table_Temp = Looking_For_Background_Style[Looking_For_Dark_Light_Style][value];
    T_Style = Looking_For_Color_Chouse_Table_Temp;
    Looking_For_Color_Chouse_Table_Use = value;
    T_Style = T_Style.match(/\d+(\.\d+)?/g);
    Box = Box.getBoundingClientRect();
    if (Box.top + 400 > W_Hight) W_Hight = W_Hight - 420;
    else W_Hight = Box.top;
    document.getElementById("S_Color_Chouse_Table").style.left = Box.left - 20 + 'px';
    document.getElementById("S_Color_Chouse_Table").style.top = W_Hight + 'px';
    document.getElementById("S_Color_Chouse_Table").style.height = '400px';
    Looking_For_Color_Chouse_Table_Load(-1, T_Style[0], T_Style[1], T_Style[2], T_Style[3]);
}
function Looking_For_Color_Chouse_Table_I(value) {
    Looking_For_S_Color_I_Change(Looking_For_Color_Chouse_Table_Use, 1);
}
function Looking_For_Color_Chouse_Table_R(value) {
    var T_Style = Looking_For_Color_Chouse_Table_Temp;
    T_Style = T_Style.match(/\d+(\.\d+)?/g);
    var Id = "S_Color_Chouse_Table_I_" + value;
    var Value_In = document.getElementById(Id);
    T_Style[value - 1] = Value_In.value;
    Looking_For_Color_Chouse_Table_Load(value, T_Style[0], T_Style[1], T_Style[2], T_Style[3]);
}
function Looking_For_Color_Chouse_Table_Load(usenumber, H, S, L, T) {
    var Color_Temp = "hsla(" + H + "," + S + "%," + L + "%," + T + ")";
    Looking_For_Color_Chouse_Table_Temp = Color_Temp;
    if (usenumber != 0) document.getElementById('S_Color_Chouse_Table_I_0').value = Color_Temp;
    if (usenumber != 1) document.getElementById('S_Color_Chouse_Table_I_1').value = H;
    if (usenumber != 2) document.getElementById('S_Color_Chouse_Table_I_2').value = S;
    if (usenumber != 3) document.getElementById('S_Color_Chouse_Table_I_3').value = L;
    if (usenumber != 4) document.getElementById('S_Color_Chouse_Table_I_4').value = T;
    document.getElementById('S_Color_Chouse_Table_I_2').style.background = "linear-gradient(to right,hsla(" + H + ",0%,50%,1.00),hsla(" + H + ",100%,50%,1.00))";
    document.getElementById('S_Color_Chouse_Table_I_3').style.background = "linear-gradient(to right,hsla(" + H + ",100%,0%,1.00),hsla(" + H + ",100%,100%,1.00))";
    document.getElementById('S_Color_Chouse_Table_I_4').style.background = "linear-gradient(to right,hsla(" + H + ",100%,50%,0.00),hsla(" + H + ",100%,50%,1.00))";
    document.getElementById('S_Color_Chouse_Table_V').style.background = Color_Temp;
}
function Looking_For_Color_Chouse_Table_B(value) {
    let C_T_B = document.getElementById("S_Color_Chouse_Table");
    if (C_T_B.style.height != '0px') {
        if (value == 1) {
            Looking_For_Background_Style[Looking_For_Dark_Light_Style][Looking_For_Color_Chouse_Table_Use] = Looking_For_Color_Chouse_Table_Temp;
            Looking_For_S_Color_Change_Later(Looking_For_Color_Chouse_Table_Use);
            Looking_For_Style_Load(1);
        }
        C_T_B.style.height = '0px';
    }
}
/*0 all 1-4 only one team*/
function Looking_For_S_Background_Img_Link_Input_Show(team) {
    var Temp0 = 0, Return = 0;
    var ID = ['S_Color_Img_Show_Link_', 'S_Color_Img_Show_Show_', 'S_Color_Img_Show_Inter_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    document.getElementById(ID[0] + ID_W[team]).innerHTML = '';
    document.getElementById(ID[1] + ID_W[team]).innerHTML = '';
    for (; ;) {
        if (Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Temp0][0] == -2) break;
        if (team == 0 || team == Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Temp0][0]) {
            Return++;
            Looking_For_S_Background_Input_Show_Creater(Temp0);
            Looking_For_S_Background_Img_Show_Creater(Temp0);
        }
        Temp0++;
    }
    Return = !Return;
    if (!Return) document.getElementById(ID[2] + ID_W[team]).style.height = '0px';
    return Return;
}
function Looking_For_S_Background_Input_Show_Creater(number) {
    var Team_V = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number];
    var ID_T = 'S_Color_Img_Show_Link_', ID_W = ['', 'B', 'T', 'S', 'I'], ID = '', Style = ['S_Link_Show_Input_UNUSE', 'S_Link_Show_Input_USE'];
    ID = ID_T + ID_W[Team_V[0]];
    var IN_T = 
        "<input placeholder='url,X=50%,Y=50%,O=100%' id='" 
        + ID + "I_" 
        + number + "_V' class='" 
        + Style[Team_V[5]] + "' value='" 
        + Team_V[1] + ',X=' 
        + Team_V[2] + '%,Y=' 
        + Team_V[3] + '%,O=' 
        + Team_V[4] * 100 + "%;' onchange='Looking_For_S_Background_Input_Change()' onMouseOver='Looking_For_S_Background_Img_Preview(1)' onMouseOut='Looking_For_S_Background_Img_Preview(0)'><div class='S_Background_Link_Button Box_Style' style='line-height:28px;' onclick='Looking_For_S_Background_Input_Button(3)'>╳</div><div class='S_Background_Link_Button Box_Style' style='line-height:15px' onclick='Looking_For_S_Background_Input_Button(2)'>︿</div><div class='S_Background_Link_Button Box_Style' style='line-height:24px' onclick='Looking_For_S_Background_Input_Button(1)'>-</div><div class='S_Background_Link_Button Box_Style' style='line-height:24px' onclick='Looking_For_S_Background_Input_Button(0)'>＋</div>";
    Looking_For_Div_Creater(ID, ID + '_Box_' + number, 'S_Background_Link_Box', IN_T);
    document.getElementById(ID + '_Box_' + number).style.order = number;
}
function Looking_For_S_Background_Img_Show_Creater(number) {
    var Team_V = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number];
    var ID_T = 'S_Color_Img_Show_Show_', ID_W = ['', 'B', 'T', 'S', 'I'], ID = '', Style = ['S_Link_Show_Img_Mask_UNUSE', 'S_Link_Show_Img_Mask_USE'];
    ID = ID_T + ID_W[Team_V[0]];
    var IN_T = 
        "<div class='S_Background_Link_Show_R_X'><input placeholder='Enter here' id='" 
        + ID + '_' 
        + number + "_R_X' oninput='Looking_For_S_Img_Show_Slid_X_Change()' style='width:100%;margin-top:6px;margin-left:0px;' type='range' min='0' max='100' step='1' value='" 
        + Team_V[2] + "'></div><div class='S_Background_Link_Show'><img class='S_Background_Link_Show_Img' src='" 
        + Team_V[1] + "' alt='' onload='Looking_For_S_Background_Img_Link_Show_Easing()' onerror='Looking_For_S_Background_Img_Link_Close_Easing()'><div id='" 
        + ID + '_' 
        + number + "_W' class='S_Background_Link_Show_R_Y_W' onmousemove='Looking_For_S_Img_Show_Slid_Point_In_R()' onclick='Looking_For_S_Img_Show_Slid_Y_H_Move()' onmousedown='Looking_For_S_Img_Show_Slid_Point_In_R(1)' onmouseup='Looking_For_S_Img_Show_Slid_Point_In_R(-1)' onmouseout='Looking_For_S_Img_Show_Slid_Point_In_R(-1)'><div class='S_Background_Link_Show_R_Y_Slid' style='height:" 
        + Team_V[3] + "%'><div class='S_Background_Link_Show_R_Y_Slid_Lide'></div></div></div><div id='" 
        + ID + '_' 
        + number + "_W_M' class='" 
        + Style[Team_V[5]] + "'></div></div><div class='S_Background_Link_Show_R_X'><input placeholder='Enter here' id='" 
        + ID 
        + number + "_O_R'  oninput='Looking_For_S_Img_Show_Slid_O_R_Change()' style='width:100%;margin-top:6px;margin-left:0px;' type='range' min='0' max='1' step='0.01' value='" 
        + Team_V[4] + "'></div>";
    Looking_For_Div_Creater(ID, ID + '_Box_' + number, 'S_Background_Link_Show_Box', IN_T);
    document.getElementById(ID + '_Box_' + number).style.order = number;
}
function Looking_For_S_Background_Img_Link_Show_Easing() {
    let Img_E = event.target.style.maxHeight = '';
}
function Looking_For_S_Background_Img_Link_Close_Easing() {
    const Title = [0, "B", "T", "S", "I"];
    /*const Tipes = [
        ['错误提示', '背景图片 ', '加载失败', '共 ', ' 张。'],
        ['Error message', 'Background image ', 'Loading failed', 'A total of ', ' sheets.']
    ];*/
    const Tipes = Looking_For_Language.TX_Img_close_easing;
    let Img_E = event.target;
    let F_N = Img_E.parentElement.parentElement.id.replace(/[^\d]/g, "");
    let Img_N = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][F_N][0];
    let I_ID = "S_Color_Img_Show_Link_" + Title[Img_N] + "_Box_" + F_N;
    let Input_E = document.getElementById(I_ID);
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][F_N][5] = 0;
    Looking_For_Img_Preview_Loac_Error_Timeout_Value = Looking_For_Img_Preview_Loac_Error_Timeout_Value + Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][F_N][1] + "; ";
    Looking_For_Img_Preview_Loac_Error_Timeout_Times++;
    Img_E.parentElement.getElementsByTagName("div")[3].className = "S_Link_Show_Img_Mask_UNUSE";
    Input_E.getElementsByTagName('input')[0].className = "S_Link_Show_Input_UNUSE";
    Img_E.style.height = '50vh';
    Img_E.style.width = '1px';
    Img_E.style.maxHeight = '0px';
    setTimeout(function () {
        Img_E.style.height = '';
        Img_E.style.width = '';
    }, 400);
    clearTimeout(Looking_For_Img_Preview_Loac_Error_Timeout);
    Looking_For_Img_Preview_Loac_Error_Timeout = setTimeout(function () {
        Looking_For_Message_Box([Tipes[0], Tipes[1] + Looking_For_Img_Preview_Loac_Error_Timeout_Value, Tipes[2], Tipes[3] + Looking_For_Img_Preview_Loac_Error_Timeout_Times + Tipes[4]]);
        Looking_For_Img_Preview_Loac_Error_Timeout_Value = "";
        Looking_For_Img_Preview_Loac_Error_Timeout_Times = 0;
    }, 600);
}
function Looking_For_S_Background_Img_Link_Input_Show_Null_Way(team) {
    var ID_T = 'S_Color_Img_Show_Inter_', ID_W = ['', 'B', 'T', 'S', 'I'];
    var Element = document.getElementById(ID_T + ID_W[team]);
    var IN_T = 
        "<input placeholder='url,X=50%,Y=50%,O=100%' class='S_Link_Show_Input_USE' style='width:75%;margin-left:3%;' value='url,X=50%,Y=50%,O=100%'><div class='S_Background_Link_Button Box_Style' style='line-height:24px;width:15%;float:right;margin-right:3%' onclick='Looking_For_S_Background_Img_Link_Input_Show_Null_Way_Active(" 
        + team + ")'>＋</div>";
    Element.innerHTML = IN_T;
    Element.style.height = '32px';
    if (Looking_For_S_Background_Img_Link_Input_Show_Null_Way_focus) Element.getElementsByTagName('input')[0].focus();
    Element.getElementsByTagName('input')[0].setSelectionRange(0, 3);
}
function Looking_For_S_Background_Img_Link_Input_Show_Null_Way_Active(team) {
    var ID_T = ['S_Color_Img_Show_Inter_', 'S_Color_Img_Show_Door_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    var Element_T = document.getElementById(ID_T[0] + ID_W[team]), Element_D = document.getElementById(ID_T[1] + ID_W[team]);
    var Text_V = Element_T.getElementsByTagName('input')[0].value;
    Text_V = Looking_For_S_Background_Img_Link_Input_Chack(Text_V);
    Text_V[5] = 1;
    Text_V[4] = Text_V[3];
    Text_V[3] = Text_V[2];
    Text_V[2] = Text_V[1];
    Text_V[1] = Text_V[0];
    Text_V[0] = team;
    for (var Temp1 = 0; ;) {
        if (Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number(Temp1)][0] > team || Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number(Temp1)][0] == -2) {
            Looking_For_S_Img_Show_ID_Up_Or_Down(Temp1 - 1, 1);
            Looking_For_Background_If_Use[Looking_For_Dark_Light_Style] = Looking_For_Array_Add_Or_Remove_Line(Looking_For_Background_If_Use[Looking_For_Dark_Light_Style], Temp1, Text_V);
            break;
        }
        Temp1++;
    }
    Looking_For_S_Background_Img_Link_Input_Show(team);
    Element_T.style.height = '0px';
    Element_D.style['grid-template-rows'] = "1fr";
    Looking_For_Background_Img_Get_New();
}
function Looking_For_S_Background_Img_Link_Input_Chack(chars) {
    var Return = ['', 0, 0, 0];
    var Text_V = chars, Text_VI = [], V_X = 50, V_Y = 50, V_O = 1;
    var t1 = 0;
    Text_V = Text_V.replace(/\\/g, '/');
    Text_VI = Text_V.split('，');
    Text_V = Text_V.split(',');
    if (Text_VI.length > Text_V) Text_V = Text_VI;
    for (var Temp0 = 0; ;) {
        if (Temp0 >= Text_V.length) break;
        if (Text_V[Temp0].search(/[X横左右]/i) != -1) {
            if (Text_V[Temp0].search(/[\d]/) != -1) {
                V_X = Number(Text_V[Temp0].replace(/[^\d^\.]/g, ""));
                t1 = Text_V[Temp0].indexOf('%');
                if (Text_V[Temp0].search(/[%]/) == -1) V_X = V_X * 100;
                if (V_X > 100) V_X = 100;
                if (V_X < 0) V_X = 0;
                if (Text_V[Temp0].search(/[右]/) != -1) V_X = 100 - V_X;
                V_X = V_X.toFixed(0);
            }
        }
        if (Text_V[Temp0].search(/[Y竖纵高低顶底上下]/i) != -1) {
            if (Text_V[Temp0].search(/[\d]/g) != -1) {
                V_Y = Number(Text_V[Temp0].replace(/[^\d^\.]/g, ""));
                if (Text_V[Temp0].search(/[%]/) == -1) V_Y = V_Y * 100;
                if (V_X > 100) V_Y = 100;
                if (V_X < 0) V_Y = 0;
                if (Text_V[Temp0].search(/[底低下]/) != -1) V_Y = 100 - V_Y;
                V_Y = V_Y.toFixed(0);
            }
        }
        if (Text_V[Temp0].search(/[O透明]/i) != -1) {
            if (Text_V[Temp0].search(/[\d]/g) != -1) {
                V_O = Number(Text_V[Temp0].replace(/[^\d^\.]/g, ""));
                if (Text_V[Temp0].search(/[%]/) != -1) V_O = V_O / 100;
                if (V_O > 1) V_O = 1;
                if (V_O < 0) V_O = 0;
                if (Text_V[Temp0].search(/[透明]/i) != -1) {
                    if (Text_V[Temp0].search(/[不]/) == -1) V_O = 1 - V_O;
                }
                V_O = V_O.toFixed(2);
            }
        }
        Temp0++;
    }
    Return = [Text_V[0], V_X, V_Y, V_O];
    return Return;
}
function Looking_For_S_Background_Input_Change() {
    var Number0 = Number(event.target.parentElement.id.replace(/[^\d]/g, ""));
    var Text_V = event.target.value.replaceAll("'", '').replaceAll('"', '');
    Text_V = Looking_For_S_Background_Img_Link_Input_Chack(Text_V);
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][1] = Text_V[0];
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][2] = Text_V[1];
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][3] = Text_V[2];
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][4] = Text_V[3];
    Looking_For_S_Background_Change_User(Number0);
    /*Preview*/
    Looking_For_S_Background_Img_Preview(1, Number0);
}
function Looking_For_S_Background_Change_User(number) {
    var ID = ['S_Color_Img_Show_Link_', 'S_Color_Img_Show_Show_', '_Box_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    var Team_V = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number];
    var Element_T = document.getElementById(ID[0] + ID_W[Team_V[0]] + ID[2] + number).getElementsByTagName('input')[0];
    var Element_I = document.getElementById(ID[1] + ID_W[Team_V[0]] + ID[2] + number);
    let Team_O = Team_V[4] * 100;
    Team_O = Team_O.toFixed(0);
    Element_T.value = Team_V[1] + ',X=' + Team_V[2] + '%,Y=' + Team_V[3] + '%,O=' + Team_O + '%;';
    Element_I.getElementsByTagName('img')[0].src = Team_V[1];
    Element_I.getElementsByTagName('input')[0].value = Team_V[2];
    Element_I.getElementsByTagName('div')[3].style.height = Team_V[3] + '%';
    Element_I.getElementsByTagName('input')[1].value = Team_V[4];
    Looking_For_S_Img_Show_Mask_X_Y_Line(number);
    Looking_For_S_Img_Show_O_R_Show(number);
}
function Looking_For_S_Background_Change_User_Input(number) {
    var ID = ['S_Color_Img_Show_Link_', 'S_Color_Img_Show_Show_', '_Box_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    var Team_V = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number];
    var Element_T = document.getElementById(ID[0] + ID_W[Team_V[0]] + ID[2] + number).getElementsByTagName('input')[0];
    let Team_O = Team_V[4] * 100;
    Team_O = Team_O.toFixed(0);
    Element_T.value = Team_V[1] + ',X=' + Team_V[2] + '%,Y=' + Team_V[3] + '%,O=' + Team_O + '%;';
}
function Looking_For_S_Scroll_Close() {
    Looking_For_S_Background_Img_Preview(-1);
    Looking_For_Color_Chouse_Table_B(0);
}
function Looking_For_S_Background_Img_Preview(value, N_O_V = -1) {
    if (value == 0) {
        if (Looking_For_B_G_I_P_Timeout_C_V == 0) {
            clearTimeout(Looking_For_B_G_I_P_Timeout_H);
            clearTimeout(Looking_For_B_G_I_P_Timeout);
        }
        return 0;
    }
    clearTimeout(Looking_For_B_G_I_P_Timeout);
    clearTimeout(Looking_For_B_G_I_P_Timeout_H);
    let I_E = document.getElementById('S_Background_Img_Preview_Show');
    if (value == -1) {
        if (Looking_For_B_G_I_P_Timeout_V == 1) {
            I_E.style.opacity = 0;
            Looking_For_B_G_I_P_Timeout_V = 0;
            Looking_For_B_G_I_P_Timeout_C_V = 0;
        }
        return -1;
    }
    clearTimeout(Looking_For_B_G_I_P_Timeout_C);
    let I_N = 0;
    if (N_O_V >= 0) I_N = N_O_V;
    else I_N = Number(event.target.parentElement.id.replace(/[^\d]/g, ""));
    let I_S = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][I_N][1];
    Looking_For_B_G_I_P_Timeout_V = 1;
    let Height = event.target.getBoundingClientRect().top;
    let Left = event.target.offsetLeft;
    I_E.src = I_S;
    Looking_For_B_G_I_P_Timeout_H = setTimeout(function () {
        if (Looking_For_B_G_I_P_Timeout_V == 0) return 0;
        let Height_Max = document.getElementById('Sitting_Centel_Table_Id').offsetHeight;
        let Height_V = I_E.offsetHeight;
        if (Height >= Height_Max - Height_V){
            Height = Height - Height_V;
            I_E.style.marginTop = '0px';
        }
        else{
            I_E.style.marginTop = '';
        }
        Height = Height.toFixed(0);
        Left = Left.toFixed(0);
        I_E.style.top = Height + 'px';
        I_E.style.left = Left + 'px';
        Looking_For_B_G_I_P_Timeout = setTimeout(function () {
            I_E.style.opacity = 1;
            Looking_For_B_G_I_P_Timeout_V = 1;
            Looking_For_B_G_I_P_Timeout_C_V = 1;
            Looking_For_B_G_I_P_Timeout_C = setTimeout(function () {
                I_E.style.opacity = 0;
                Looking_For_B_G_I_P_Timeout_V = 0;
                Looking_For_B_G_I_P_Timeout_C_V = 0;
            }, 2000);
        }, 500);
    }, 100);
}
/*0 add 1 less 2 move 3 disable*/
function Looking_For_S_Background_Input_Button(value) {
    var ID_T = event.target.parentElement.id.slice(0, 23);
    var Number0 = event.target.parentElement.id.replace(/[^\d]/g, "");
    var Element, Element_C, Element_I, Element_I_C, Temp0, Temp1, Temp2;
    if (value == 0) {
        if (Looking_For_Button_Disable_Time_Out == 0) {
            Looking_For_S_Img_Show_ID_Up_Or_Down(Number0, 1);
            Looking_For_Background_If_Use[Looking_For_Dark_Light_Style] = Looking_For_Array_Add_Or_Remove_Line(Looking_For_Background_If_Use[Looking_For_Dark_Light_Style], Number(Number0) + 1, Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0]);
            Looking_For_S_Img_Show_Add_Div(Number0);
            Looking_For_Button_Disable_Time_Out = 1;
            setTimeout(function () {
                Looking_For_Button_Disable_Time_Out = 0;
            }, 600);
        }
    }
    else if (value == 1) {
        if (Looking_For_Button_Disable_Time_Out == 0) {
            Looking_For_S_Img_Show_Remove_Div(Number0);
            Looking_For_S_Img_Show_ID_Up_Or_Down(Number0, -1);
            Looking_For_Background_If_Use[Looking_For_Dark_Light_Style] = Looking_For_Array_Add_Or_Remove_Line(Looking_For_Background_If_Use[Looking_For_Dark_Light_Style], Number0, 0);
            Looking_For_Button_Disable_Time_Out = 1;
            setTimeout(function () {
                Looking_For_Button_Disable_Time_Out = 0;
            }, 600);
        }
    }
    else if (value == 2) {
        if (Number0 == 0) return -1;
        if (Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][0] != Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number(Number0) - 1][0]) return -1;
        Temp0 = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0];
        Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0] = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number(Number0) - 1];
        Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number(Number0) - 1] = Temp0;
        Element = event.target.parentElement;
        Number0--;
        Element_C = document.getElementById(ID_T + '_Box_' + Number0);
        Temp0 = Element.id.replace('Link', 'Show');
        Element_I = document.getElementById(Temp0);
        Temp0 = Element_C.id.replace('Link', 'Show');
        Element_I_C = document.getElementById(Temp0);
        Looking_For_Div_Up_Move_Turn(Element, Element_C);
        Looking_For_Div_Up_Move_Turn(Element_I, Element_I_C);
    }
    else {
        if (Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][5] == 1) {
            Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][5] = 0;
        }
        else {
            Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number0][5] = 1;
        }
        Looking_For_S_Img_Link_UseAble_Load(Number0);
    }
    Looking_For_Background_Img_Get_New();
}
function Looking_For_Array_Add_Or_Remove_Line(array, line, value) {
    var Array_Temp = [], Change_Value = 0;
    for (var Temp0 = 0; ;) {
        if (Temp0 >= array.length) break;
        if (line == Temp0) {
            if (value) {
                Array_Temp[Temp0] = value;
                var Array_L_V = [value[0], value[1], value[2], value[3], value[4], value[5]];
                Array_Temp[Temp0 + Change_Value] = Array_L_V;
                Change_Value = 1;
                var Array_L_V = [array[Temp0][0], array[Temp0][1], array[Temp0][2], array[Temp0][3], array[Temp0][4], array[Temp0][5]];
                Array_Temp[Temp0 + Change_Value] = Array_L_V;
            }
            else Change_Value = -1;
            Temp0++;
            if (Temp0 >= array.length) break;
        }
        var Array_L_V = [array[Temp0][0], array[Temp0][1], array[Temp0][2], array[Temp0][3], array[Temp0][4], array[Temp0][5]];
        Array_Temp[Temp0 + Change_Value] = Array_L_V;
        Temp0++;
    }
    return Array_Temp;
}
/*-1 move UP 1 move DOWN*/
function Looking_For_S_Img_Show_ID_Up_Or_Down(number = 0, value = 0) {
    var Long = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style].length;
    var ID = ['S_Color_Img_Show_Link_', 'S_Color_Img_Show_Show_', '_Box_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    var Temp0 = number, End = Long - 1, Team = 0;
    if (value == 1) {
        Temp0 = Long - 2;
        End = number;
    }
    for (; ;) {
        if (Number(Temp0) == Number(End)) {
            return 0;
        }
        Team = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number(Temp0)][0];
        document.getElementById(ID[0] + ID_W[Team] + ID[2] + Temp0).style.order = Number(Number(Temp0) + Number(value));
        document.getElementById(ID[0] + ID_W[Team] + ID[2] + Temp0).id = ID[0] + ID_W[Team] + ID[2] + Number(Number(Temp0) + Number(value));
        document.getElementById(ID[1] + ID_W[Team] + ID[2] + Temp0).style.order = Number(Number(Temp0) + Number(value));
        document.getElementById(ID[1] + ID_W[Team] + ID[2] + Temp0).id = ID[1] + ID_W[Team] + ID[2] + Number(Number(Temp0) + Number(value));
        Temp0 = Temp0 - value;
    }
}
function Looking_For_S_Img_Show_Add_Div(number) {
    var ID = ['S_Color_Img_Show_Link_', 'S_Color_Img_Show_Show_', '_Box_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    var Element_T, Element_I;
    var Team = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number][0];
    var Height_T = document.getElementById(ID[0] + ID_W[Team] + ID[2] + number).offsetHeight;
    var Height_I = document.getElementById(ID[1] + ID_W[Team] + ID[2] + number).offsetHeight;
    number++;
    Looking_For_S_Background_Input_Show_Creater(number);
    Element_T = document.getElementById(ID[0] + ID_W[Team] + ID[2] + number);
    Element_T.style.height = '0px';
    Element_T.style.overflow = 'hidden';
    Looking_For_S_Background_Img_Show_Creater(number);
    Element_I = document.getElementById(ID[1] + ID_W[Team] + ID[2] + number);
    Element_I.style.transition = 'all 0s';
    Element_I.style.height = '0px';
    Element_I.style.overflow = 'hidden';
    Element_T.getElementsByTagName('input')[0].focus();
    Element_T.getElementsByTagName('input')[0].setSelectionRange(0, Element_T.getElementsByTagName('input')[0].value.length);
    setTimeout(function () {
        Element_I.style.transition = 'all 0.6s';
        Element_T.style.height = Height_T + 'px';
        Element_I.style.height = Height_I + 'px';
        setTimeout(function () {
            Element_T.style.height = '';
            Element_T.style.overflow = '';
            Element_I.style.height = '';
            Element_I.style.overflow = '';
        }, 600);
    }, 20);
}
function Looking_For_S_Img_Show_Remove_Div(number) {
    var ID = ['S_Color_Img_Show_Link_', 'S_Color_Img_Show_Show_', '_Box_'], ID_W = ['', 'B', 'T', 'S', 'I'];
    var Element_T, Element_I;
    var Team = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number][0];
    Element_T = document.getElementById(ID[0] + ID_W[Team] + ID[2] + number);
    Element_I = document.getElementById(ID[1] + ID_W[Team] + ID[2] + number);
    Element_T.style.height = Element_T.offsetHeight + 'px';
    Element_I.style.height = Element_I.offsetHeight + 'px';
    Element_T.style.overflowY = 'hidden';
    Element_I.style.overflowY = 'hidden';
    setTimeout(function () {
        Element_T.style.height = '0px';
        Element_I.style.height = '0px';
        setTimeout(function () {
            Element_T.remove();
            Element_I.remove();
        }, 600);
    }, 20);
}
function Looking_For_Div_Up_Move_Turn(E0, E1) {
    let Height0 = E0.offsetHeight;
    let Height1 = E1.offsetHeight;
    let HL = (Height0 + Height1) / 4;
    let HP = HL + HL + HL;
    let Temp0;
    E0.style["z-index"] = 2;
    E1.style["z-index"] = 1;
    E0.style.transition = 'all 0s';
    E1.style.transition = 'all 0s';
    E0.style.height = '0px';
    E1.style.height = '0px';
    E0.style.marginBottom = Height0 + 'px';
    E1.style.marginBottom = Height1 + 'px';
    setTimeout(function () {
        E0.style.transition = 'all 0.3s';
        E1.style.transition = 'all 0.3s';
        E0.style.marginBottom = HP + 'px';
        E1.style.marginTop = HL + 'px';
        E1.style.marginBottom = '0px';
        Temp0 = E0.style.order;
        setTimeout(function () {
            E0.style.transition = 'all 0s';
            E1.style.transition = 'all 0s';
            E1.style.marginBottom = HP + 'px';
            E1.style.marginTop = '0px';
            E0.style.marginTop = HL + 'px';
            E0.style.marginBottom = '0px';
            E0.style.order = E1.style.order;
            E1.style.order = Temp0;
            setTimeout(function () {
                E0.style.transition = 'all 0.3s';
                E1.style.transition = 'all 0.3s';
                E0.style.marginTop = '0px';
                E0.style.marginBottom = Height0 + 'px';
                E1.style.marginBottom = Height1 + 'px';
                setTimeout(function () {
                    E0.style.transition = 'all 0s';
                    E1.style.transition = 'all 0s';
                    E0.style.height = '';
                    E1.style.height = '';
                    E0.style.marginBottom = '0px';
                    E1.style.marginBottom = '0px';
                    Temp0 = E0.id;
                    E0.id = E1.id;
                    E1.id = Temp0;
                    setTimeout(function () {
                        E0.style.transition = '';
                        E1.style.transition = '';
                        E0.style["z-index"] = '';
                        E1.style["z-index"] = '';
                    }, 20);
                }, 300);
            }, 20);
        }, 300);
    }, 20);
}
function Looking_For_S_Img_Show_Slid_X_Change() {
    var Number = event.target.parentElement.parentElement.id.replace(/[^\d]/g, "");
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number][2] = event.target.value;
    Looking_For_S_Img_Show_Mask_X_Y_Line(Number);
    Looking_For_S_Background_Change_User_Input(Number);
}
function Looking_For_S_Img_Show_Slid_Point_In_R(value = 0) {
    var Element = event.target;
    var Temp_X = event.offsetX, Temp_Y = event.offsetY, Max_X = Element.offsetWidth, Max_Y = Element.offsetHeight, Temp_R = 0;
    if (Max_X > Max_Y) Temp_R = Temp_X / Max_X;
    else Temp_R = Temp_Y / Max_Y;
    Temp_R = Temp_R * 100;
    Looking_For_S_Img_Mix_R_Value = Temp_R.toFixed(0);
    if (value == 1) Looking_For_S_Img_Show_R_Y_If_Use = 1;
    if (value == -1) Looking_For_S_Img_Show_R_Y_If_Use = 0;
    if (Looking_For_S_Img_Show_R_Y_If_Use == 1) Looking_For_S_Img_Show_Slid_Y_H_Move();
}
function Looking_For_S_Img_Show_Slid_Y_H_Move() {
    var Element = event.target.id;
    var ID = event.target.parentElement.parentElement.id;
    ID = ID.replace(/[^\d]/g, "");
    Looking_For_S_Img_Show_Mask_X_Y_Line(ID);
    Element = event.target.getElementsByTagName('div')[0];
    Element.style.height = Looking_For_S_Img_Mix_R_Value + "%";
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][ID][3] = Looking_For_S_Img_Mix_R_Value;
    Looking_For_S_Background_Change_User_Input(ID);
}
/*  Be less*/
function Looking_For_S_Img_Show_Mask_X_Y_Line(number) {
    var Style_V = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number];
    var ID_W = ['', 'B', 'T', 'S', 'I'];
    var EL = document.getElementById('S_Color_Img_Show_Show_' + ID_W[Style_V[0]] + '_Box_' + number).getElementsByClassName('S_Background_Link_Show')[0].getElementsByTagName('div')[3], value = number;
    var Colorx = "", Colory = 0;
    var M_X = EL.offsetWidth, M_Y = EL.offsetHeight;
    var ll = 0, mm = 0;
    M_X = M_X * Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][value][2] / 100;
    ll = M_X - 1;
    mm = M_X + 2;
    Colorx = "linear-gradient( to right ,#00000000 " + ll + "px," + Looking_For_Background_Style[Looking_For_Dark_Light_Style][5] + " 3px," + Looking_For_Background_Style[Looking_For_Dark_Light_Style][5] + " " + mm + "px, #00000000 1px)";
    M_Y = M_Y * Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][value][3] / 100;
    ll = M_Y - 1;
    mm = M_Y + 2;
    Colory = "linear-gradient( to bottom ,#00000000 " + ll + "px," + Looking_For_Background_Style[Looking_For_Dark_Light_Style][5] + " 3px," + Looking_For_Background_Style[Looking_For_Dark_Light_Style][5] + " " + mm + "px, #00000000 1px)";
    M_Y = M_Y * Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][value][3] / 100;
    EL.style.background = Colorx + "," + Colory;
    clearTimeout(Looking_For_S_Img_Show_Mask_X_Y_Line_Clean_Time);
    Looking_For_S_Img_Show_Mask_X_Y_Line_Clean_Time = setTimeout(function () {
        EL.style.background = "";
    }, 1000);
    /*document.getElementById('in1').value=Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][value][2]+';'+Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][value][3];*/
}
function Looking_For_S_Img_Show_Slid_O_R_Change() {
    var Number1 = event.target.parentElement.parentElement.id.replace(/[^\d]/g, "");
    var O_V = event.target.value;
    O_V = Number(O_V);
    O_V = O_V.toFixed(2);
    Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][Number1][4] = O_V;
    Looking_For_S_Img_Show_O_R_Show(Number1);
}
function Looking_For_S_Img_Show_O_R_Show(number) {
    var Team = ['', 'B', 'T', 'S', 'I'];
    var EL = document.getElementById('S_Color_Img_Show_Show_' + Team[Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number][0]] + '_Box_' + number).getElementsByTagName('img')[0];
    EL.style.opacity = Looking_For_Background_If_Use[Looking_For_Dark_Light_Style][number][4];
    Looking_For_S_Background_Change_User_Input(number);
    clearTimeout(Looking_For_S_Img_Show_O_R_Clean_Time);
    Looking_For_S_Img_Show_O_R_Clean_Time = setTimeout(function () {
        EL.style.opacity = 1;
    }, 1000);
}
function Looking_For_Div_Creater(where_id, id = 0, class_style = 0, inner_value = 0, onclick_function = 0) {
    var Home = document.getElementById(where_id);
    var Div = document.createElement('div');
    if (id != 0) Div.id = id;
    if (class_style != 0) Div.className = class_style;
    if (inner_value != 0) Div.innerHTML = inner_value;
    Home.appendChild(Div);
    if (onclick_function != 0) Div.onclick = onclick_function;
}
function Looking_For_Message_Box_Wite() {
    setTimeout(function () {
        Looking_For_Message_Box_Wite_Time_At_Start = 0;
    }, Looking_For_Message_Box_Wite_Time_At_Start);
}
function Looking_For_Message_Box(chars_show, if_space = 0) {
    setTimeout(function () {
        Looking_For_Message_Box_Show(chars_show, if_space);
    }, Looking_For_Message_Box_Wite_Time_At_Start);
}
function Looking_For_Message_Box_Show(chars_show, if_space = 0) {
    //const Text_Over = ['通知框错误<br>通知数量过多，不再显示。', 'The notification box error <br>Notification is too numerous and is no longer displayed.'];
    const Text_Over = Looking_For_Language.TX_Message_box_over;
    let Text_Value = '', Temp0 = 1, Text_T = ['', '&emsp;&emsp;'], IN_T = '', ID_V = 0;
    if (Looking_For_Message_ID_Spase[9]) return -1;
    if (Looking_For_Message_Prompt_Time == 0) return 0;
    if (Looking_For_Message_Prompt_Time == -1) {
        Text_Value = Text_Value + chars_show[0];
        for (; ;) {
            if (Temp0 >= chars_show.length) break;
            Text_Value = Text_Value + '\n' + chars_show[Temp0];
            Temp0++;
        }
        alert(Text_Value);
    }
    else {
        Text_Value = Text_Value + chars_show[0];
        for (; ;) {
            if (Temp0 >= chars_show.length) break;
            Text_Value = Text_Value + '<br>' + Text_T[if_space] + chars_show[Temp0];
            Temp0++;
        }
        Temp0 = 0;
        for (; ;) {
            if (Temp0 > 8) {
                ID_V = 9;
                Looking_For_Message_ID_Spase[9] = 1;
                break;
            }
            if (Looking_For_Message_ID_Spase[Temp0]) Temp0++;
            else {
                Looking_For_Message_ID_Spase[Temp0] = 1;
                ID_V = Temp0;
                break;
            }
        }
        if (ID_V == 9) {
            Text_Value = Text_Over;
        }
        IN_T = "<div><p class='Message_Box_Test'>" + Text_Value + "</p></div>";
        Looking_For_Div_Creater('Message_Space', 'Message_Box_ID_' + ID_V, 'Message_Box Auto_Door_Open', IN_T);
        setTimeout(function () {
            document.getElementById('Message_Box_ID_' + ID_V).style['grid-template-rows'] = "1fr";
            setTimeout(function () {
                document.getElementById('Message_Box_Up_Space').style.height = '78px';
            }, 100);
        }, 20);
        if (!Looking_For_Message_Box_Hover_Keep) {
            Looking_For_Message_Box_Timeout[ID_V] = setTimeout(function () {
                document.getElementById('Message_Box_ID_' + ID_V).style['grid-template-rows'] = "0fr";
                document.getElementById('Message_Box_ID_' + ID_V).style["margin-top"] = '0px';
                Looking_For_Message_Box_ID_Remove_Timeout[ID_V] = setTimeout(function () {
                    document.getElementById('Message_Box_ID_' + ID_V).remove();
                    Looking_For_Message_ID_Spase[ID_V] = 0;
                }, 1000);
            }, Looking_For_Message_Prompt_Time);
            clearTimeout(Looking_For_Message_Box_Clear_Timeout);
            Looking_For_Message_Box_Clear_Timeout = setTimeout(function () {
                document.getElementById('Message_Box_Up_Space').style.height = '0px';
            }, Number(Looking_For_Message_Prompt_Time) - 100);
        }
    }
}
function Looking_For_Message_Box_Stop() {
    let ID_V = 0;
    let temp0 = false;
    clearTimeout(Looking_For_Message_Box_Hover_Keep_Timeout);
    clearTimeout(Looking_For_Message_Box_Remove_Timeout);
    if (Looking_For_Message_Box_Hover_Keep) return 0;
    Looking_For_Message_Box_Hover_Keep = 1;
    clearTimeout(Looking_For_Message_Box_Clear_Timeout);
    for (; ;) {
        if (ID_V > 9) break;
        if (Looking_For_Message_ID_Spase[ID_V]) {
            clearTimeout(Looking_For_Message_Box_Timeout[ID_V]);
            clearTimeout(Looking_For_Message_Box_ID_Remove_Timeout[ID_V]);
            document.getElementById('Message_Box_ID_' + ID_V).style['grid-template-rows'] = "1fr";
            document.getElementById('Message_Box_ID_' + ID_V).style['margin-top'] = "";
            temp0 = true;
        }
        ID_V++;
    }
    if (temp0) document.getElementById('Message_Box_Up_Space').style.height = '78px';
}
function Looking_For_Message_Box_Stop_Break() {
    let ID_V = 0;
    let temp = 0;
    clearTimeout(Looking_For_Message_Box_Hover_Keep_Timeout);
    clearTimeout(Looking_For_Message_Box_Remove_Timeout);
    Looking_For_Message_Box_Hover_Keep_Timeout = setTimeout(function () {
        Looking_For_Message_Box_Hover_Keep = 0;
        document.getElementById('Message_Box_Up_Space').style.height = '0px';
        for (; ;) {
            if (ID_V > 9) break;
            if (Looking_For_Message_ID_Spase[ID_V]) {
                document.getElementById('Message_Box_ID_' + ID_V).style['grid-template-rows'] = "0fr";
                document.getElementById('Message_Box_ID_' + ID_V).style["margin-top"] = '0px';
            }
            ID_V++;
        }
        Looking_For_Message_Box_Remove_Timeout = setTimeout(function () {
            ID_V = 0;
            for (; ;) {
                if (ID_V > 9) break;
                if (Looking_For_Message_ID_Spase[ID_V]) {
                    document.getElementById('Message_Box_ID_' + ID_V).remove();
                    Looking_For_Message_ID_Spase[ID_V] = 0;
                }
                ID_V++;
            }
        }, 1000);
    }, 600);
}
function Looking_For_Button_Sleep(number = 0) {
    if (Looking_For_Button_Sleep_Value[number]) {
        return 1;
    }
    else {
        Looking_For_Button_Sleep_Value[number] = 1;
        setTimeout(function () {
            Looking_For_Button_Sleep_Value[number] = 0;
        }, 200);
        return 0;
    }
}
function Looking_For_Preview_Table_Show_Button_Model_Load() {
    if (Looking_For_Preview_Button_Show_Model) {
        document.getElementById('top_button_space').style["margin-top"] = '-95px';
        document.getElementById('side_button_space').style.width = '55px';
        document.getElementById('side_button_space').style.maxWidth = '55px';
        document.getElementById('side_button_dis').remove();
        document.getElementById('side_table_img_box').style.zIndex = 668;
        document.getElementById('side_table').style.zIndex = 668;
        document.getElementById('active_box').style["pointer-events"] = 'none';
    }
    else {
        Looking_For_View_Whell_Run_Active();
        Looking_For_View_Run_In_Times();
    }
}
function Looking_For_Preview_Button_Move(value) {
    if (value == -1) Looking_For_Preview_Button_Down = 0;
    if (value == 0) Looking_For_Preview_Button_Down = 1;
    if (Looking_For_Preview_Button_Down) {
        var Temp_V = 0, Max_V = 0;
        if (value == 1) {
            Temp_V = event.clientY;
            Max_V = document.body.offsetHeight;
            Temp_V = Temp_V - 30;
        }
        else if (value == 2) {
            Temp_V = event.clientX;
            Max_V = document.body.offsetWidth;
            Temp_V = Temp_V + 30;
        }
        if (Temp_V < 0) Temp_V = 0;
        if (Temp_V > Max_V - 90) Temp_V = Max_V - 90;
        Temp_V = Temp_V / Max_V;
        Temp_V = Temp_V * 100;
        Temp_V = Temp_V.toFixed(2);
        if (value == 1) {
            document.getElementById('side_up_space_id').style.height = Temp_V + '%';
        }
        else if (value == 2) {
            Temp_V = 100 - Temp_V;
            document.getElementById('top_right_space').style.width = Temp_V + '%';
        }
    }
}
function Looking_For_Preview_Tables_Open_or_Close() {
    if (Looking_For_Preview_Table_Open[0] == 0 && Looking_For_Preview_Table_Open[1] == 0) {
        document.getElementById('active_box').style["pointer-events"] = 'none';
    }
    else {
        document.getElementById('active_box').style["pointer-events"] = 'auto';
    }
    if (Looking_For_Preview_Button_Show_Model) {
        let T_B_S_E = document.getElementById('top_button_space');
        let S_B_S_E = document.getElementById('side_button_space');
        if (Looking_For_Preview_Table_Open[1]) {
            T_B_S_E.style["margin-top"] = '';
        }
        else {
            T_B_S_E.style["margin-top"] = '-95px';
        }
        if (Looking_For_Preview_Table_Open[0]) {
            S_B_S_E.style.maxWidth = '';
        }
        else {
            S_B_S_E.style.maxWidth = '55px';
        }
    }
}
function Looking_For_S_Save_Cookie() {
    /*const Messages = [
        ['保存提示', '已保存到 Cookie', 'Cookie 未保存。'],
        ['Save the prompt', 'Saved to cookies', 'Cookies are not saved.']
    ];*/
    const Messages = Looking_For_Language.TX_Message_save_cookie;
    let Text_S = Looking_For_S_Sitting_Be_Number_Texts();
    Text_S = 'LF0Xs;V' + Looking_For_Version + 'LF0Xe;' + Text_S;
    Text_S = Text_S.replaceAll(';', 'LF&4b');
    let If_Save = Looking_For_Set_Cookie(Text_S);
    if (If_Save != -1) Looking_For_Message_Box([Messages[0], Messages[1]]);
    else Looking_For_Message_Box([Messages[0], Messages[2]]);
}
function Looking_For_Load_Sitting_From_Cookie() {
    if (Looking_For_Load_Sitting_Local) return 0;
    /*const Messages = [
        ['提示', '已从Cookie加载配置', 'Cookie配置版本与页面不一致，已弃用。', '检测到Cookie配置损坏，已弃用。'],
        ['Prompt', 'The configuration was loaded from cookies', 'The cookies configuration version is inconsistent with the page and is deprecated.', 'Cookie configuration corruption detected and deprecated. ']
    ];*/
    let Messages = Looking_For_Language.TX_Message_load_cookie;
    let Texts = document.cookie;
    if (Texts != '' && Texts != null) {
        Texts = Looking_For_Cookie_Mix_Texts(Texts);
        if (Texts[0] == -1) {
            Looking_For_Message_Box([Messages[0], Messages[3]]);
            return -1;
        }
        Texts = Texts[1];
        Texts = Texts.split(';');
        Texts = Texts[0];
        Texts = Texts.replaceAll('LF&4b', ';');
        Texts = Texts.split('LF0Xe;');
        Texts[0] = Texts[0].replace('LF0Xs;V', '');
        if (Texts[0] != '') Texts[0] = Number(Texts[0]).toFixed(1);
        if (Texts[0] != Looking_For_Version) {
            Looking_For_Message_Box([Messages[0], Messages[2]]);
            return -2;
        }
        let If_Error = 0;
        If_Error = Looking_For_Load_Sitting_From_Number_Texts(Texts[1]);
        if (If_Error == -1) {
            Looking_For_Message_Box([Messages[0], Messages[3]]);
            return -1;
        }
        Looking_For_Language_Load(1);
        Messages = Looking_For_Language.TX_Message_load_cookie;
        Looking_For_Message_Box([Messages[0], Messages[1]]);
        return 0;
    }
}
function Looking_For_Remove_Sitting_From_Cookie() {
    /*const Messages = [
        ['保存提示', '已移除Cookie'],
        ['Save the prompt', 'The Cookies has been removed']
    ];*/
    const Messages = Looking_For_Language.TX_Message_remove_cookie;
    Looking_For_Remove_Cookies();
    Looking_For_Message_Box([Messages[0], Messages[1]]);
}
function Looking_For_Set_Cookie(Texts, Exdays = 31) {
    const C_ID = 'Looking_For_Cookie_';
    /*const Tipes = [
        ['错误', 'Cookie长度过大，请减少配置字符量或保存到本地缓存。', 'Cookie保存出错！'],
        ['Error', 'Cookie length is too large, please reduce the amount of configured characters or save to a local cache.', 'Cookie saved error!']
    ];*/
    const Tipes = Looking_For_Language.TX_Message_set_cookie;
    const Time = new Date();
    Time.setTime(Time.getTime() + (Exdays * 24 * 60 * 60 * 1000));
    let Expires = "expires=" + Time.toGMTString();
    let S_Test_Long = Looking_For_Get_Chars_Long(Texts);
    if (S_Test_Long > 48000) {
        Looking_For_Message_Box([Tipes[0], Tipes[1]]);
        return -1;
    }
    const C_Foot = "; " + Expires + "; SameSite=Strict; path=/";
    const C_Array = Looking_For_Cookie_Slit_Texts(Texts);
    let Temp0 = 0;
    let S_Test_N = C_Array.length;
    for (; ;) {
        if (Temp0 >= S_Test_N) break;
        document.cookie = C_ID + Temp0 + '=' + C_Array[Temp0] + C_Foot;
        Temp0++;
    }
    let Cookie_Chack = document.cookie;
    if (Cookie_Chack != undefined) {
        let Cookie_Chack_L = Looking_For_Cookie_Mix_Texts(Cookie_Chack);
        let If_Break = Cookie_Chack_L[0];
        Cookie_Chack_L = Looking_For_Get_Chars_Long(Cookie_Chack_L[1]);
        if (If_Break || Cookie_Chack_L != S_Test_Long) {
            Looking_For_Message_Box([Tipes[0], Tipes[2]]);
            Looking_For_Remove_Sitting_From_Cookie();
            return -1;
        }
    }
    else {
        Looking_For_Message_Box([Tipes[0], Tipes[2]]);
        return -1;
    }
    return 0;
}
function Looking_For_Cookie_Mix_Texts(Texts) {
    const C_ID = 'Looking_For_Cookie_';
    let Array_Temp = [''], Temp_A = Texts.split(';');
    let Temp0 = 0, Long = Temp_A.length;
    let Temp_V = '', Temp_N = 0;
    let Return_V = [0, ''];
    for (; ;) {
        if (Temp0 >= Long) break;
        Temp_V = Temp_A[Temp0].replace('=', 'LF0&Eb;');
        Temp_V = Temp_V.split('LF0&Eb;');
        if (Temp_V[0].search(C_ID) != -1) {
            Temp_N = Number(Temp_V[0].replace(/[^\d]/g, ''));
            if (!isNaN(Temp_N)) Array_Temp[Temp_N] = Temp_V[1];
        }
        Temp0++;
    }
    Temp0 = 0, Long = Array_Temp.length;
    for (; ;) {
        if (Temp0 >= Long) break;
        if (Array_Temp[Temp0] == undefined) {
            Return_V[0] = -1;
            break;
        }
        Return_V[1] = Return_V[1] + Array_Temp[Temp0];
        Temp0++;
    }
    return Return_V;
}
function Looking_For_Cookie_Slit_Texts(Texts) {
    let Array = [''];
    let Temp0 = 0, A_S = 0, A_E = 3000, Long = Texts.length;
    for (; ;) {
        if (A_E >= Long) {
            A_E = Long;
            Array[Temp0] = Texts.slice(A_S, A_E);
            break;
        }
        Array[Temp0] = Texts.slice(A_S, A_E);
        Temp0++, A_S = A_E;
        A_E = A_E + 3000;
    }
    return Array;
}
function Looking_For_Remove_Cookies() {
    const C_ID = 'Looking_For_Cookie_';
    let Cookies = document.cookie;
    let C_N = '';
    Cookies = Cookies.split(';');
    let Long = Cookies.length;
    let Temp0 = 0;
    for (; ;) {
        if (Temp0 >= Long) break;
        C_N = Cookies[Temp0].split('=')[0];
        if (C_N.search(C_ID) != -1) document.cookie = C_N + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        Temp0++;
    }
    return 0;
}
function Looking_For_Get_Chars_Long(Texts) {
    let Temp0 = 0, Char_V = 0, Char_L = 0, Long = Texts.length, Return_Long = 0;
    const Chars = Texts;
    for (; ;) {
        if (Temp0 >= Long) break;
        Char_V = Chars.charCodeAt(Temp0);
        if (Char_V < 0x80) Char_L = 1;
        else if (Char_V < 0x800) Char_L = 2;
        else if (Char_V < 0x10000) Char_L = 3;
        else if (Char_V < 0x200000) Char_L = 4;
        else if (Char_V < 0x4000000) Char_L = 5;
        else Char_L = 6;
        Return_Long = Return_Long + Char_L;
        Temp0++;
    }
    return Return_Long;
}
function Looking_For_S_Save_Local() {
    /*const Messages = [
        ['保存提示', '已保存到本地缓存', '本地缓存未保存。', '错误', '本地缓存长度过大，请减少配置字符量或保存到文件。'],
        ['Save the prompt', 'Saved to a local cache', 'Error', 'The local cache length is too large, please reduce the configuration character size or save to a file.']
    ];*/
    const Messages = Looking_For_Language.TX_Message_save_local;
    let Text_S = Looking_For_S_Sitting_Be_Number_Texts();
    let Text_S_L = Looking_For_Get_Chars_Long(Text_S);
    if (Text_S_L > 5000000) {
        Looking_For_Message_Box([Messages[3], Messages[4]]);
        Looking_For_Message_Box([Messages[0], Messages[2]]);
        return -1;
    }
    Text_S = 'LF0Xs;V' + Looking_For_Version + 'LF0Xe;' + Text_S;
    window.localStorage.setItem('Looking_For_Sitting_Local', Text_S);
    Looking_For_Message_Box([Messages[0], Messages[1]]);
}
function Looking_For_Load_Sitting_From_Local() {
    /*const Messages = [
        ['提示', '已从本地缓存加载配置', '本地缓存配置版本与页面不一致，已弃用。', '检测到本地缓存损坏，已弃用。'],
        ['Prompt', 'The configuration was loaded from the local cache', 'The local cache configuration version is inconsistent with the page and is deprecated.', 'Local cache corruption detected and deprecated.']
    ];*/
    let Messages = Looking_For_Language.TX_Message_load_local;
    let Texts = window.localStorage.getItem('Looking_For_Sitting_Local');
    if (Texts != '' && Texts != null) {
        Texts = Texts.split('LF0Xe;');
        Texts[0] = Texts[0].replace('LF0Xs;V', '');
        if (Texts[0] != '') Texts[0] = Number(Texts[0]).toFixed(1);
        if (Texts[0] != Looking_For_Version) {
            Looking_For_Message_Box([Messages[0], Messages[2]]);
            return 0;
        }
        let If_Error = 0;
        If_Error = Looking_For_Load_Sitting_From_Number_Texts(Texts[1]);
        if (If_Error == -1) {
            Looking_For_Message_Box([Messages[0], Messages[3]]);
            return -1;
        }
        Looking_For_Language_Load(1);
        Messages = Looking_For_Language.TX_Message_load_local;
        Looking_For_Message_Box([Messages[0], Messages[1]]);
        Looking_For_Load_Sitting_Local = 1;
    }
}
function Looking_For_Remove_Sitting_From_Local() {
    /*const Messages = [
        ['保存提示', '已移除本地缓存'],
        ['Save the prompt', 'The local cache has been removed']
    ];*/
    const Messages = Looking_For_Language.TX_Message_remove_local;
    window.localStorage.removeItem('Looking_For_Sitting_Local');
    Looking_For_Message_Box([Messages[0], Messages[1]]);
}
function Looking_For_S_Save_File(if_reset_language = 0) {
    /*const Messages = [
        ['保存提示', '保存中。。。', '已保存到文件', '请将新文件替换到原始位置。'],
        ['Save the prompt', 'Saving . . .', 'Saved to a file', 'Please replace the new file with the original location.']
    ];*/
    const Messages = Looking_For_Language.TX_Message_save_file;
    Looking_For_Message_Box([Messages[0], Messages[1]]);
    const Text_L = Looking_For_S_Sitting_Be_Texts(if_reset_language);
    let Text_H = "<!doctype html><html lang='zh-CN'><head><meta charset='utf-8'><!--请注意，本页面仅供学习使用，未得到所有相关方的同意，不得用于任何商业活动！--><meta name='viewport' content='width=device-width, initial-scale=1'><link id='Looking_For_Icon' rel='icon'><title>路亭 | Looking_For...</title><script>";
    let Text_B = document.getElementById('Looking_For_S_Save_Body').value;
    let Text_F = '"></div></body></html>';

    //let Code_Temp=['"', 'LF34b;', '<', 'LF60b;', '>', 'LF62b;'];
    // this variable is a tag don`t edit.
    let Looking_For_Code_Change_Where_Code_Identifier_Start;
    let Code_Temp = ['"', 'LF34b;', '<', 'LF60b;', '>', 'LF62b;'];
    let Looking_For_Code_Change_Where_Code_Identifier_End;
    // this variable is a tag don`t edit.

    let Text_S = Text_B.replaceAll(Code_Temp[1], Code_Temp[0]);
    Text_S = Text_S.replaceAll(Code_Temp[3], Code_Temp[2]);
    Text_S = Text_S.replaceAll(Code_Temp[5], Code_Temp[4]);

    //Text_S = Text_S.replaceAll("let Code_Temp=['" + Code_Temp[0] + "','" + Code_Temp[0] + "','" + Code_Temp[2] + "','" + Code_Temp[2] + "','" + Code_Temp[4] + "','" + Code_Temp[4] + "'];", "let Code_Temp=['" + Code_Temp[0] + "','" + Code_Temp[1] + "','" + Code_Temp[2] + "','" + Code_Temp[3] + "','" + Code_Temp[4] + "','" + Code_Temp[5] + "'];");
    Text_S = 
        Text_S.replace(/Looking_For_Code_Change_Where_Code_Identifier_Start[^1]{0,}Looking_For_Code_Change_Where_Code_Identifier_End;/, "Looking_For_Code_Change_Where_Code_Identifier_Start;let Code_Temp=['" 
            + Code_Temp[0] + "', '" + Code_Temp[1] + "', '" + Code_Temp[2] + "', '" + Code_Temp[3] + "', '" + Code_Temp[4] + "', '" + Code_Temp[5] 
            + "'];let Looking_For_Code_Change_Where_Code_Identifier_End;");

    const Text_Save = Text_H + Text_L + Text_S + Text_B + Text_F;
    Looking_For_File_Download(Text_Save);
    Looking_For_Message_Box([Messages[0], Messages[2]]);
    Looking_For_Message_Box([Messages[0], Messages[3]]);
    Looking_For_Remove_Sitting_From_Cookie();
    Looking_For_Remove_Sitting_From_Local();
}
function Looking_For_S_Sitting_Be_Number_Texts() {
    /*
    LF00b&      ;
    LF01b&      []
    LF02b&      [[]]
    LF03b&      [[[]]]
    LF0E&0n0d&b end
    */
    let S_Text_0 = '';
    S_Text_0 = 
        Looking_For_Model_Temp_To_Save + 'LF00b&' 
        + Looking_For_File_Name_Temp_To_Save + 'LF00b&' 
        + Looking_For_Default_Web_Page_In_View + 'LF00b&' 
        + Looking_For_Input_Tips_S + 'LF00b&' 
        + Looking_For_NP_Tips_Word_S + 'LF00b&' 
        + Looking_For_Error_Message_S + 'LF00b&' 
        + Looking_For_Ctrl_Move_Web_Side + 'LF00b&' 
        + Looking_For_Ctrl_Move_Web_Top + 'LF00b&' 
        + ctrl_go_link_as + 'LF00b&' 
        + Looking_For_Message_Prompt_Time + 'LF00b&' 
        + Looking_For_Language_Sitting + 'LF00b&' 
        + Looking_For_Hellow_Word_S + 'LF00b&' 
        + Looking_For_Dark_Light_Style + 'LF00b&' 
        + Looking_For_Dark_Light_Auto_Change + 'LF00b&' 
        + Looking_For_Img_Use[0] + 'LF00b&' 
        + Looking_For_Img_Use[1] + 'LF00b&' 
        + Looking_For_Img_Use[2] + 'LF00b&' 
        + Looking_For_Img_Use[3] + 'LF00b&' 
        + Looking_For_Img_Use[4] + 'LF00b&' 
        + Looking_For_Color_Link_Chouse_Value + 'LF00b&' 
        + Looking_For_Navigation_Sleep + 'LF00b&' 
        + Looking_For_Sleep_Time + 'LF00b&' 
        + Looking_For_Sleep_Background_at_View + 'LF00b&' 
        + Looking_For_Background_Turn_Way + 'LF00b&' 
        + Looking_For_Background_Turn_Time + 'LF00b&' 
        + Looking_For_Preview_Button_Show_Model + 'LF00b&' 
        + Looking_For_Proview_Link_Box_Model + 'LF00b&' 
        + Looking_For_Background_Style[0][0] + 'LF00b&' 
        + Looking_For_Background_Style[0][1] + 'LF00b&' 
        + Looking_For_Background_Style[0][2] + 'LF00b&' 
        + Looking_For_Background_Style[0][3] + 'LF00b&' 
        + Looking_For_Background_Style[0][4] + 'LF00b&' 
        + Looking_For_Background_Style[0][5] + 'LF00b&' 
        + Looking_For_Background_Style[0][6] + 'LF00b&' 
        + Looking_For_Background_Style[0][7] + 'LF00b&' 
        + Looking_For_Background_Style[0][8] + 'LF00b&' 
        + Looking_For_Background_Style[1][0] + 'LF00b&' 
        + Looking_For_Background_Style[1][1] + 'LF00b&' 
        + Looking_For_Background_Style[1][2] + 'LF00b&' 
        + Looking_For_Background_Style[1][3] + 'LF00b&' 
        + Looking_For_Background_Style[1][4] + 'LF00b&' 
        + Looking_For_Background_Style[1][5] + 'LF00b&' 
        + Looking_For_Background_Style[1][6] + 'LF00b&' 
        + Looking_For_Background_Style[1][7] + 'LF00b&' 
        + Looking_For_Background_Style[1][8];
    let S_Text_1 = '';
    let Temp0 = 0, Temp1 = 0, Long = 0;
    Long = Looking_For_Background_If_Use[0].length;
    for (; ;) {
        if (Temp0 >= Long) {
            Temp1++;
            if (Temp1 >= 2) break;
            Temp0 = 0;
            Long = Looking_For_Background_If_Use[1].length;
            if (Temp0 >= Long) break;
            S_Text_1 = S_Text_1 + 'LF02b&';
        }
        else if (Temp0) S_Text_1 = S_Text_1 + 'LF03b&';
        S_Text_1 = 
            S_Text_1 + Looking_For_Background_If_Use[Temp1][Temp0][0] + 'LF00b&' 
            + Looking_For_Background_If_Use[Temp1][Temp0][1] + 'LF00b&'
             + Looking_For_Background_If_Use[Temp1][Temp0][2] + 'LF00b&' 
             + Looking_For_Background_If_Use[Temp1][Temp0][3] + 'LF00b&' 
             + Looking_For_Background_If_Use[Temp1][Temp0][4] + 'LF00b&' 
             + Looking_For_Background_If_Use[Temp1][Temp0][5];
        Temp0++;
    }
    let S_Text_2 = '';
    let Links_Temp = Looking_For_Link_Edit_Link_Fix();
    Temp0 = 0;
    Long = Links_Temp.length;
    for (; ;) {
        if (Temp0 >= Long) break;
        else if (Temp0) S_Text_2 = S_Text_2 + 'LF02b&';
        S_Text_2 = 
            S_Text_2 + Links_Temp[Temp0][0] + 'LF00b&' 
            + Links_Temp[Temp0][1] + 'LF00b&' 
            + Links_Temp[Temp0][2] + 'LF00b&' 
            + Links_Temp[Temp0][3] + 'LF00b&' 
            + Links_Temp[Temp0][4] + 'LF00b&' 
            + Links_Temp[Temp0][5] + 'LF00b&' 
            + Links_Temp[Temp0][6] + 'LF00b&' 
            + Links_Temp[Temp0][7];
        Temp0++;
    }
    const S_Text = S_Text_0 + 'LF01b&' + S_Text_1 + 'LF01b&' + S_Text_2 + 'LF0E&0n0d&b';
    return S_Text;
}
function Looking_For_Load_Sitting_From_Number_Texts(Texts) {
    let Temp_V = Texts.length;
    let Temp_C = Texts.slice(Temp_V - 11, Temp_V);
    if (Temp_C != 'LF0E&0n0d&b') return -1;
    Temp_V = Texts.slice(0, Temp_V - 11);
    Temp_V = Temp_V.split('LF01b&');
    if (Temp_V[1] == undefined || Temp_V[2] == undefined) return -1;
    let Temp_V_0 = Temp_V[0].split('LF00b&');
    let Temp_V_1 = Temp_V[1].split('LF02b&');
    if (Temp_V_1[1] == undefined) return -1;
    let Temp_V_1_0 = Temp_V_1[0].split('LF03b&');
    let Temp_V_1_1 = Temp_V_1[1].split('LF03b&');
    let Temp_V_2 = Temp_V[2].split('LF02b&');
    Looking_For_Model_Temp_To_Save = Number(Temp_V_0[0]);
    Looking_For_Model = Looking_For_Model_Temp_To_Save;
    Looking_For_File_Name_Temp_To_Save = Temp_V_0[1];
    Looking_For_File_Name = Looking_For_File_Name_Temp_To_Save;
    Looking_For_Default_Web_Page_In_View = Temp_V_0[2];
    Looking_For_Input_Tips = Temp_V_0[3];
    Looking_For_NP_Tips_Word = Temp_V_0[4];
    Looking_For_Error_Message = Temp_V_0[5];
    Looking_For_Ctrl_Move_Web_Side = Number(Temp_V_0[6]);
    Looking_For_Ctrl_Move_Web_Top = Number(Temp_V_0[7]);
    ctrl_go_link_as = Number(Temp_V_0[8]);
    Looking_For_Message_Prompt_Time = Number(Temp_V_0[9]);
    Looking_For_Language_Sitting = Number(Temp_V_0[10]);
    Looking_For_Hellow_Word = Temp_V_0[11];
    Looking_For_Dark_Light_Style = Number(Temp_V_0[12]);
    Looking_For_Dark_Light_Auto_Change = Number(Temp_V_0[13]);
    Looking_For_Img_Use[0] = Number(Temp_V_0[14]);
    Looking_For_Img_Use[1] = Number(Temp_V_0[15]);
    Looking_For_Img_Use[2] = Number(Temp_V_0[16]);
    Looking_For_Img_Use[3] = Number(Temp_V_0[17]);
    Looking_For_Img_Use[4] = Number(Temp_V_0[18]);
    Looking_For_Color_Link_Chouse_Value = Number(Temp_V_0[19]);
    Looking_For_Navigation_Sleep = Number(Temp_V_0[20]);
    Looking_For_Sleep_Time = Number(Temp_V_0[21]);
    Looking_For_Sleep_Background_at_View = Number(Temp_V_0[22]);
    Looking_For_Background_Turn_Way = Number(Temp_V_0[23]);
    Looking_For_Background_Turn_Time = Number(Temp_V_0[24]);
    Looking_For_Preview_Button_Show_Model = Number(Temp_V_0[25]);
    Looking_For_Proview_Link_Box_Model = Number(Temp_V_0[26]);
    Looking_For_Background_Style[0][0] = Temp_V_0[27];
    Looking_For_Background_Style[0][1] = Temp_V_0[28];
    Looking_For_Background_Style[0][2] = Temp_V_0[29];
    Looking_For_Background_Style[0][3] = Temp_V_0[30];
    Looking_For_Background_Style[0][4] = Temp_V_0[31];
    Looking_For_Background_Style[0][5] = Temp_V_0[32];
    Looking_For_Background_Style[0][6] = Temp_V_0[33];
    Looking_For_Background_Style[0][7] = Temp_V_0[34];
    Looking_For_Background_Style[0][8] = Temp_V_0[35];
    Looking_For_Background_Style[1][0] = Temp_V_0[36];
    Looking_For_Background_Style[1][1] = Temp_V_0[37];
    Looking_For_Background_Style[1][2] = Temp_V_0[38];
    Looking_For_Background_Style[1][3] = Temp_V_0[39];
    Looking_For_Background_Style[1][4] = Temp_V_0[40];
    Looking_For_Background_Style[1][5] = Temp_V_0[41];
    Looking_For_Background_Style[1][6] = Temp_V_0[42];
    Looking_For_Background_Style[1][7] = Temp_V_0[43];
    Looking_For_Background_Style[1][8] = Temp_V_0[44];
    let Img_Link_Temp = [
        [[0, '', 0, 0, 0, 0], [0, '', 0, 0, 0, 0]],
        [[0, '', 0, 0, 0, 0], [0, '', 0, 0, 0, 0]]
    ];
    let Temp0 = 0;
    let Long = Temp_V_1_0.length;
    for (; ;) {
        if (Temp0 >= Long) break;
        var Temp_V_T = Temp_V_1_0[Temp0].split('LF00b&');
        Img_Link_Temp[0][Temp0] = Temp_V_T;
        Temp0++;
    }
    Temp0 = 0;
    Long = Temp_V_1_1.length;
    for (; ;) {
        if (Temp0 >= Long) break;
        var Temp_V_T = Temp_V_1_1[Temp0].split('LF00b&');
        Img_Link_Temp[1][Temp0] = Temp_V_T;
        Temp0++;
    }
    Looking_For_Background_If_Use = Img_Link_Temp;
    let Url_Link_Temp = [
        [0, '', '', '', 0, 0, 0, 0]
    ];
    Temp0 = 0;
    Long = Temp_V_2.length;
    for (; ;) {
        if (Temp0 >= Long) break;
        var Temp_V_T = Temp_V_2[Temp0].split('LF00b&');
        Url_Link_Temp[Temp0] = Temp_V_T;
        Temp0++;
    }
    Looking_For_Links = Url_Link_Temp;
}
function Looking_For_S_Sitting_Be_Texts(if_reset_language = 0) {
    let Language_Sitting_Save_Temp = Looking_For_Language_Sitting;
    if (if_reset_language) Language_Sitting_Save_Temp = -1;
    let Texts_Sittings = 
        'const Looking_For_Release_Version_Message={Version:"' 
        + Looking_For_Release_Version_Message.Version + '",Date:{Year:"' 
        + Looking_For_Release_Version_Message.Date.Year + '",Day:"' 
        + Looking_For_Release_Version_Message.Date.Day + '"}' + '};var Looking_For_Model=' 
        + Looking_For_Model_Temp_To_Save + ';var Looking_For_File_Name="' 
        + Looking_For_File_Name_Temp_To_Save + '";var Looking_For_Default_Web_Page_In_View="' 
        + Looking_For_Default_Web_Page_In_View + '";var Looking_For_Input_Tips="' 
        + Looking_For_Input_Tips_S + '";var Looking_For_NP_Tips_Word="' 
        + Looking_For_NP_Tips_Word_S + '";var Looking_For_Error_Message="' 
        + Looking_For_Error_Message_S + '";var Looking_For_Ctrl_Move_Web_Side=' 
        + Looking_For_Ctrl_Move_Web_Side + ';var Looking_For_Ctrl_Move_Web_Top=' 
        + Looking_For_Ctrl_Move_Web_Top + ';var ctrl_go_link_as=' 
        + ctrl_go_link_as + ';var Looking_For_Message_Prompt_Time=' 
        + Looking_For_Message_Prompt_Time + ';var Looking_For_Language_Sitting=' 
        + Language_Sitting_Save_Temp + ';var Looking_For_Hellow_Word="' 
        + Looking_For_Hellow_Word_S + '";var Looking_For_Dark_Light_Style=' 
        + Looking_For_Dark_Light_Style + ';var Looking_For_Dark_Light_Auto_Change=' 
        + Looking_For_Dark_Light_Auto_Change + ';var Looking_For_Img_Use=[' 
        + Looking_For_Img_Use + '];var Looking_For_Color_Link_Chouse_Value=' 
        + Looking_For_Color_Link_Chouse_Value + ';var Looking_For_Navigation_Sleep=' 
        + Looking_For_Navigation_Sleep + ';var Looking_For_Sleep_Time=' 
        + Looking_For_Sleep_Time + ';var Looking_For_Sleep_Background_at_View=' 
        + Looking_For_Sleep_Background_at_View + ';var Looking_For_Background_Turn_Way=' 
        + Looking_For_Background_Turn_Way + ';var Looking_For_Background_Turn_Time=' 
        + Looking_For_Background_Turn_Time + ';var Looking_For_Preview_Button_Show_Model=' 
        + Looking_For_Preview_Button_Show_Model + ';var Looking_For_Proview_Link_Box_Model=' 
        + Looking_For_Proview_Link_Box_Model + ';';
    let Texts_Background_Style = 
        'var Looking_For_Background_Style=[["' 
        + Looking_For_Background_Style[0][0] + '","' 
        + Looking_For_Background_Style[0][1] + '","' 
        + Looking_For_Background_Style[0][2] + '","' 
        + Looking_For_Background_Style[0][3] + '","' 
        + Looking_For_Background_Style[0][4] + '","' 
        + Looking_For_Background_Style[0][5] + '","' 
        + Looking_For_Background_Style[0][6] + '","' 
        + Looking_For_Background_Style[0][7] + '","' 
        + Looking_For_Background_Style[0][8] + '"],["' 
        + Looking_For_Background_Style[1][0] + '","' 
        + Looking_For_Background_Style[1][1] + '","' 
        + Looking_For_Background_Style[1][2] + '","' 
        + Looking_For_Background_Style[1][3] + '","' 
        + Looking_For_Background_Style[1][4] + '","' 
        + Looking_For_Background_Style[1][5] + '","' 
        + Looking_For_Background_Style[1][6] + '","' 
        + Looking_For_Background_Style[1][7] + '","' 
        + Looking_For_Background_Style[1][8] + '"]];';
    let Text_Background_Img = 'var Looking_For_Background_If_Use=[[';
    let Temp0 = 0, Temp1 = '', Long = Looking_For_Background_If_Use[0].length, Temp2 = Looking_For_Background_If_Use[0], Temp3 = '';
    for (; ;) {
        if (Temp0 >= Long) break;
        Temp1 = '[' + Temp2[Temp0][0] + ',"' + Temp2[Temp0][1] + '",' + Temp2[Temp0][2] + ',' + Temp2[Temp0][3] + ',' + Temp2[Temp0][4] + ',' + Temp2[Temp0][5] + ']';
        Temp0++;
        if (Temp0 < Long) Temp1 = Temp1 + ',';
        Temp3 = Temp3 + Temp1;
    }
    Text_Background_Img = Text_Background_Img + Temp3 + '],[';
    Temp0 = 0, Temp1 = '', Long = Looking_For_Background_If_Use[1].length, Temp2 = Looking_For_Background_If_Use[1], Temp3 = '';
    for (; ;) {
        if (Temp0 >= Long) break;
        Temp1 = '[' + Temp2[Temp0][0] + ',"' + Temp2[Temp0][1] + '",' + Temp2[Temp0][2] + ',' + Temp2[Temp0][3] + ',' + Temp2[Temp0][4] + ',' + Temp2[Temp0][5] + ']';
        Temp0++;
        if (Temp0 < Long) Temp1 = Temp1 + ',';
        Temp3 = Temp3 + Temp1;
    }
    Text_Background_Img = Text_Background_Img + Temp3 + ']];';
    let Text_Links = 'var Looking_For_Links=[';
    let Links_Temp = Looking_For_Link_Edit_Link_Fix();
    Temp0 = 0, Temp1 = '', Long = Links_Temp.length, Temp2 = Links_Temp, Temp3 = '';
    for (; ;) {
        if (Temp0 >= Long) break;
        Temp1 = '[' + Temp2[Temp0][0] + ',"' + Temp2[Temp0][1] + '","' + Temp2[Temp0][2] + '","' + Temp2[Temp0][3] + '","' + Temp2[Temp0][4] + '",' + Temp2[Temp0][5] + ',"' + Temp2[Temp0][6] + '",' + Temp2[Temp0][7] + ']';
        Temp0++;
        if (Temp0 < Long) Temp1 = Temp1 + ',';
        Temp3 = Temp3 + Temp1;
    }
    Text_Links = Text_Links + Temp3 + '];';
    const Text_Return = Texts_Sittings + Texts_Background_Style + Text_Background_Img + Text_Links;
    return Text_Return;
}
function Looking_For_File_Download(texts) {
    const url = window.URL || window.webkitURL || window;
    const blob = new Blob([texts]);
    document.getElementById('A_Down_Load').href = url.createObjectURL(blob);
    document.getElementById('A_Down_Load').click();
}
function Looking_For_S_Other_File_Name_Change() {
    /*const Tipes = [
        ['提示', '文件名已修改为：'],
        ['Prompt', 'The file name has been modified to: ']
    ];*/
    const Tipes = Looking_For_Language.TX_Message_change_file_name;
    Looking_For_File_Name_Temp_To_Save = document.getElementById('S_O_F_N_Value').value.replace(/\\/g, '\\\\').replaceAll("'", '').replaceAll('"', '');
    Looking_For_Message_Box([Tipes[0], Tipes[1] + Looking_For_File_Name_Temp_To_Save.replace(/\\\\/g, '\\')]);
}
function Looking_For_Hellow_Words_Lode() {
    document.getElementById('Hellow_Word_S').innerHTML = Looking_For_Hellow_Word.replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\');
    document.getElementById('hellow_word').innerHTML = Looking_For_Hellow_Word.replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\');
    document.getElementById('Looking_For_NP_Tips_Word').innerHTML = Looking_For_NP_Tips_Word.replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\');
    document.getElementById('wellcome_chars_input').placeholder = Looking_For_Input_Tips.replace(/\\\\/g, '\\');
    document.getElementById('putin_value').placeholder = Looking_For_Input_Tips.replace(/\\\\/g, '\\');
}
function Looking_For_Chouse_Lode_Page() {
    if (Looking_For_Model > -1 && Looking_For_Model < 3) {
        value_welcome_page = 1;
        value_view_page = 0;
        creat_wellcome_box_button_divs();
        setTimeout(function(){
            document.getElementById('wellcome_page').className = "wellcome_page";
            document.getElementById('Navigation_Box').style.height = '100%';
        },40);
    }
    else if (Looking_For_Model == 3) {
        value_welcome_page = 0;
        value_view_page = 1;
        creat_side_table_divs();
        setTimeout(function(){
            document.getElementById('web_mix').className = "web_mix";
            document.getElementById('View_Box').style.height = '100%';
        },40);
    }
    else {
        setTimeout(function () {
            Looking_For_Page_Change();
        }, 200);
    }
}
function Looking_For_Get_Url_Messages() {
    var url_chars = location.hash;
    url_chars = decodeURI(url_chars);
    var url_arrays = url_chars.split('&');
    var url_href = location.href;
    if (Looking_For_File_Name == '') {
        let File_name = url_href.split('#');
        File_name = File_name[0].split('/');
        Looking_For_File_Name = File_name[File_name.length - 1];
    }
    document.getElementById('input_chars').value = url_arrays[0];
    var number_chars_is = 0;
    for (; ;) {
        if ('undefined' == document.getElementById('input_chars').value) {
            break;
        }
        if (number_chars_is == 0) {
            url_arrays[number_chars_is] = url_arrays[number_chars_is].split('#');
            url_arrays[number_chars_is] = url_arrays[number_chars_is][1];
        }
        if (url_arrays[number_chars_is]) {
            var url_id_key = url_arrays[number_chars_is].split('=');
            if (url_id_key[0] == 'urllink') {
                Looking_For_Model = 3;
                ctrl_lode_in_ids_open_twices = 0;
                var url_link = location.hash;
                url_link = decodeURI(url_link);
                url_link = url_link.split('urllink=');
                Looking_For_Default_Web_Page_In_View = url_link[1];
                infram_useing_number[0] = -2;
                return 0;
            }
            if (url_id_key[0] == 'mode') {
                if (url_id_key[1] == undefined) return -1;
                if (url_id_key[1].search(/[s0123]/i) == -1) return -1;
                if (url_id_key[1] == -1 || url_id_key[1].search(/[s]/i) != -1) {
                    Looking_For_Model = -1;
                    return 0;
                }
                url_id_key[1] = url_id_key[1].replace(/[^\d]/g, '');
                url_id_key[1] = Number(url_id_key[1]);
                if (url_id_key[1] > -1 && url_id_key[1] < 4) Looking_For_Model = url_id_key[1];
            }
            if (url_id_key[0] == 'urlnumber') {
                value_temp_search_url = url_id_key[1];
            }
            if (url_id_key[0] == 'keyword') {
                document.getElementById('putin_value').value = url_id_key[1];
                document.getElementById('wellcome_chars_input').value = url_id_key[1];
                link_go_way = 1;
                ctrl_lode_in_ids_open_twices = 1;
            }
        }
        number_chars_is = number_chars_is + 1;
        document.getElementById('input_chars').value = url_arrays[number_chars_is];
    }
    if (ctrl_lode_in_ids_open_twices == 1) link_go();
}
function Looking_For_View_Run_In_Times() {
    /*setInterval(time_out_run,active_box_time_speed);
    setInterval(time_add_and_run_function,20);*/
    if (Looking_For_Background_Change_Sleep_Value[0] && value_view_page) setTimeout(function () {
        Looking_For_View_Run_In_Times();
    }, 20);
    Looking_For_Time_Add_And_Run_Function();
}
function Looking_For_Time_Add_And_Run_Function() {
    time_mouse_active = time_mouse_active + 1;
    Looking_For_View_Mouse_Tach_Time_Active();
    /*mouse_moved_show_button();*/
}
function mouse_moved_show_button(value) {
    if (value == -1) {
        time_mouse_active = 100;
    }
    var var_x = event.clientX;
    var var_y = event.clientY;
    if (mouse_point_at_x != var_x && mouse_point_at_y != var_y) time_mouse_active = -20, mouse_point_at_x = var_x, mouse_point_at_y = var_y;
    mouse_moved_show_button_move();
}
function Looking_For_View_Mouse_Tach_Time_Active() {
    if (time_mouse_active == 50) {
        time_mouse_active = 0;
        document.getElementById('active_box').style['pointer-events'] = 'auto';
        setTimeout(() => {
            document.getElementById('active_box').style['pointer-events'] = 'none';
        }, 20);
    }
    else if (time_mouse_active < 0) document.getElementById('active_box').style['pointer-events'] = 'auto';
    else if (time_mouse_active > 100) {
        if (time_mouse_active > 150) time_mouse_active = 0;
        document.getElementById('active_box').style['pointer-events'] = 'none';
    }
}
function Looking_For_View_Whell_Run_Active() {
    document.getElementById('active_box').onmousewheel = function () { time_mouse_active = 100; }
}
function mouse_moved_show_button_move() {
    var var_x = mouse_point_at_x;
    var var_y = mouse_point_at_y;
    Element_sx = document.getElementById('side_button_space');
    Element_ty = document.getElementById('top_button_space');
    if (var_x == 0) {
    }
    else if (var_x < 150) {
        if (ctrl_hide_side_button) {
            Element_sx.className = "side_button_space_show";
        }
    }
    else if (var_x > 250) {
        Element_sx.className = "side_button_space";
        ctrl_hide_side_button = 1;
        side_table(0);
    }
    if (var_y == 0) {
    }
    else if (var_y < 200) {
        if (ctrl_hide_top_button) {
            Element_ty.className = "top_button_space_show";
        }
    }
    else if (var_y > 200) {
        if (ctrl_hide_top_button) {
            Element_ty.className = "top_button_space";
        }
        ctrl_hide_top_button = 1;
        top_table(0);
    }
}
function side_button_onclick(value_in) {
    ctrl_hide_side_button = 0;
    Element_sx = document.getElementById('side_button_space');
    Element_sx.className = "side_button_space";
    if (value_in == 1) {
        side_table(1);
    }
}
function top_button_onclick(value_in) {
    ctrl_hide_top_button = 0;
    Element_sy = document.getElementById('top_button_space');
    Element_sy.className = "top_button_space";
    if (value_in == 1) {
        top_table(1);
    }
}
function side_table(value01) {
    var Element_box_table = document.getElementById('side_table');
    var Element_Img_SideTable = document.getElementById('side_table_img_box');
    Element_box_web = document.getElementById('web_desk');
    Element_box_top_box = document.getElementById('top_over_trigger');
    if (value01 == 1) {
        Element_box_table.className = "side_table_show";
        Element_Img_SideTable.style.width = '210px';
        if (Looking_For_Ctrl_Move_Web_Side == 1) {
            Element_box_web.className = "web_desk_side_table";
            Element_box_top_box.className = "top_over_trigger_side_on";
        }
        value_side_table = 1;
        Looking_For_Preview_Table_Open[0] = 1;
        setTimeout(function () {
            Looking_For_Background_Img_S();
        }, 1000);
    }
    else if (value01 == 0) {
        Element_box_table.className = "side_table_hide";
        Element_Img_SideTable.style.width = '0px';
        setTimeout(function () {
            Element_box_table.scrollTop = '0';
        }, 600);
        if (value_side_table == 1) {
            Element_box_web.className = "web_desk";
            Element_box_top_box.className = "top_over_trigger";
        }
        value_side_table = 0;
        Looking_For_Preview_Table_Open[0] = 0;
    }
    Looking_For_Preview_Tables_Open_or_Close();
}
function top_table(value01) {
    Element_box_table = document.getElementById('top_table');
    Element_Top_Input = Element_box_table.getElementsByTagName('input')[0];
    Element_box_web_in = document.getElementById('web_home');
    if (value01 == 1) {
        Element_box_table.className = "top_table_show";
        if (Looking_For_Ctrl_Move_Web_Top == 1) {
            Element_box_web_in.className = "web_home_top_table";
        }
        value_top_table = 1;
        Element_Top_Input.focus();
        if (Looking_For_Auto_Selet_Input_At_Open) Element_Top_Input.setSelectionRange(0, Element_Top_Input.value.length);
        Looking_For_Preview_Table_Open[1] = 1;
        setTimeout(function () {
            Looking_For_Background_Img_I();
        }, 1000);
    }
    else if (value01 == 0) {
        Element_box_table.className = "top_table_hide";
        if (value_top_table == 1) {
            Element_box_web_in.className = "web_home";
        }
        value_top_table = 0;
        Element_Top_Input.blur();
        Looking_For_Preview_Table_Open[1] = 0;
        Looking_For_Sitting_Button_Hind(1);
    }
    Looking_For_Preview_Tables_Open_or_Close();
}
function creat_wellcome_box_button_divs() {
    var var_number = 0;
    var var_box_open_id = 0;
    var var_box_id = 0;
    for (var_number = 0; Looking_For_Links[var_number][0] != -1; var_number++) {
        if (Looking_For_Links[var_number][7] == 0) continue;
        if (Looking_For_Links[var_number][2] == 0) {
            var_box_id = "wellcome_button_box_box";
            if (Looking_For_Links[var_number][0] != 0) {
                creat_div(var_number, "wellcome_button_box", "wellcome_button_box", Looking_For_Links[var_number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\'), var_box_id, 0);
                var_box_id = "wellcome_button_box" + var_number;
                var_box_open_id = "wellcome_button_box_open" + var_number;
                Looking_For_Div_Creater(var_box_id, var_box_open_id, "grid_box_open");
            }
        }
        else {
            if (Looking_For_Links[var_number][0] == 0) {
                creat_div(var_number, "wellcome_button_box", "wellcome_button_box_no_group", '', var_box_id, 0);
                var_box_id = "wellcome_button_box" + var_number;
                document.getElementById(var_box_id).getElementsByTagName('p')[0].remove();
                creat_div(var_number, "wellcome_button", "side_table_link", Looking_For_Links[var_number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\'), var_box_id, 1);
                var_box_id = "wellcome_button_box_box";
            }
            else creat_div(var_number, "wellcome_button", "side_table_link", Looking_For_Links[var_number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\'), var_box_open_id, 1);
        }
    }
}
function creat_side_table_divs() {
    var var_number = 0;
    var var_box_id = 0;
    var var_box_open_id = 0;
    Looking_For_Div_Creater('side_table', 'side_table_space_up', 'side_table_space_up');
    for (var_number = 0; Looking_For_Links[var_number][0] != -1; var_number++) {
        if (Looking_For_Links[var_number][7] == 0) continue;
        if (Looking_For_Links[var_number][2] == 0) {
            var_box_id = "side_table";
            if (Looking_For_Links[var_number][0] != 0) {
                if (Looking_For_Proview_Link_Box_Model == 1) {
                    /*box_width*/
                    creat_div(var_number, "side_table_width_send", "side_table_width_send", "", var_box_id, 0);
                    /*move_links_box*/
                    var_box_id = "side_table_width_send" + var_number;
                }
                else {
                    document.getElementById(var_box_id).style.width = '200px';
                    /*box_width*/
                    creat_div(var_number, "side_table_width_send", "", "", var_box_id, 0);
                    /*move_links_box*/
                    var_box_id = "side_table_width_send" + var_number;
                }
                /*bix_width_end*/
                creat_div(var_number, "side_table_links_box", "side_table_links_box", Looking_For_Links[var_number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\'), var_box_id, -1);
                var_box_id = "side_table_links_box" + var_number;
                var_box_open_id = "side_table_links_box_open" + var_number;
                Looking_For_Div_Creater(var_box_id, var_box_open_id, "grid_box_open");
                if (Looking_For_Proview_Link_Box_Model != 1) document.getElementById(var_box_id).style["margin-top"] = '9px';
            }
        }
        else {
            if (Looking_For_Links[var_number][0] == 0) {
                var_box_id = "side_table";
                if (Looking_For_Proview_Link_Box_Model == 1) {
                    /*box_width*/
                    creat_div(var_number, "side_table_width_send", "side_table_width_send_no_group", "", var_box_id, 0);
                    /*move_links_box*/
                    var_box_id = "side_table_width_send" + var_number;
                    document.getElementById(var_box_id).getElementsByTagName('p')[0].style.margin = '6px 0px 0px 0px';
                }
                else {
                    /*box_width*/
                    creat_div(var_number, "side_table_width_send", "", "", var_box_id, 0);
                    /*move_links_box*/
                    var_box_id = "side_table_width_send" + var_number;
                    document.getElementById(var_box_id).getElementsByTagName('p')[0].remove();
                }
                /*link*/
                creat_div(var_number, "side_table_link", "side_table_link", Looking_For_Links[var_number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\'), var_box_id, 1);
                if (Looking_For_Proview_Link_Box_Model != 1) {
                    document.getElementById("side_table_link" + var_number).className = 'side_table_links_box';
                    document.getElementById("side_table_link" + var_number).style["margin-top"] = '9px';
                    document.getElementById("side_table_link" + var_number).style.position = 'relative';
                    document.getElementById("side_table_link" + var_number).style.height = '36px';
                }
                /*duibi-box*/
                creat_div(var_number, "side_table_link_ex", "side_table_link_ex", 0, "side_table_link" + var_number, 2);
                document.getElementById("side_table_link_ex" + var_number).innerHTML = "<p style='font-size:14px;margin-top:3px;'>口|口</p>";
                creat_div(var_number, "side_table_link_ol", "side_table_link_ol", 0, "side_table_link" + var_number, 3);
                document.getElementById("side_table_link_ol" + var_number).innerHTML = "<p style='font-size:25px;margin-top:-5px;'>⇱</p>";
                continue;
            }
            creat_div(var_number, "side_table_link", "side_table_link", Looking_For_Links[var_number][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\'), var_box_open_id, 1);
            /*duibi-box*/
            creat_div(var_number, "side_table_link_ex", "side_table_link_ex", 0, "side_table_link" + var_number, 2);
            document.getElementById("side_table_link_ex" + var_number).innerHTML = "<p style='font-size:14px;margin-top:3px;'>口|口</p>";
            creat_div(var_number, "side_table_link_ol", "side_table_link_ol", 0, "side_table_link" + var_number, 3);
            document.getElementById("side_table_link_ol" + var_number).innerHTML = "<p style='font-size:25px;margin-top:-5px;'>⇱</p>";
        }
    }
    Looking_For_Div_Creater('side_table', 'side_table_space_down', 'side_table_space_down');
}
function creat_div(number, id_type, class_style, link_name, creat_in, onclick_function) {
    const div = document.createElement("div");
    div.id = id_type + number;
    div.className = class_style;
    div.innerHTML = "<p class=" + "side_table_link_text" + ">" + link_name + "</p>";
    Element_creat_box_in = document.getElementById(creat_in);
    Element_creat_box_in.appendChild(div);
    if (onclick_function == 1) {
        div.onclick = function () {
            side_table_link_onclick(number);
        }
    }
    else if (onclick_function == 0) {
        div.onclick = function () {
            side_table_link_box_onclick(number);
        }
    }
    else if (onclick_function == 2) {
        div.onclick = function () {
            side_table_link_go_type(1);
        }
    }
    else if (onclick_function == 3) {
        div.onclick = function () {
            side_table_link_go_type(2);
        }
    }
    else if (onclick_function == -1) {
        return -1;
    }
}
function side_table_link_go_type(value) {
    link_go_way = value;
}
function side_table_link_onclick(value_input) {
    value_temp_search_url = value_input;
    /*link_go();*/
}
function side_table_link_box_onclick(value_in) {
    if (Looking_For_Links[value_in][0] != Looking_For_Links[value_temp_search_url][0]) {
        value_temp_search_url = value_in + 1;
    }
    link_go();
}
function iframe_open() {
    var temp = 0;
    if (infram_use_number[0] && infram_use_number[1]) {
        document.getElementById('iframe_box_01').style.width = "50%";
        document.getElementById('iframe_box_02').style.width = "50%";
    }
    else if (infram_use_number[0]) {
        document.getElementById('iframe_box_01').style.width = "100%";
        document.getElementById('iframe_box_02').style.width = "0%";
    }
    else if (infram_use_number[1]) {
        document.getElementById('iframe_box_01').style.width = "0%";
        document.getElementById('iframe_box_02').style.width = "100%";
    }
    if (infram_use_number[2] && infram_use_number[3]) {
        document.getElementById('iframe_box_03').style.width = "50%";
        document.getElementById('iframe_box_04').style.width = "50%";
    }
    else if (infram_use_number[2]) {
        document.getElementById('iframe_box_03').style.width = "100%";
        document.getElementById('iframe_box_04').style.width = "0%";
    }
    else if (infram_use_number[3]) {
        document.getElementById('iframe_box_03').style.width = "0%";
        document.getElementById('iframe_box_04').style.width = "100%";
    }
    if ((infram_use_number[0] || infram_use_number[1]) && (infram_use_number[2] || infram_use_number[3])) {
        document.getElementById('iframe_box_01').style.height = "50%";
        document.getElementById('iframe_box_02').style.height = "50%";
        document.getElementById('iframe_box_03').style.height = "50%";
        document.getElementById('iframe_box_04').style.height = "50%";
    }
    else if (infram_use_number[0] || infram_use_number[1]) {
        document.getElementById('iframe_box_01').style.height = "100%";
        document.getElementById('iframe_box_02').style.height = "100%";
        document.getElementById('iframe_box_03').style.height = "0%";
        document.getElementById('iframe_box_04').style.height = "0%";
    }
    else if (infram_use_number[2] || infram_use_number[3]) {
        document.getElementById('iframe_box_01').style.height = "0%";
        document.getElementById('iframe_box_02').style.height = "0%";
        document.getElementById('iframe_box_03').style.height = "100%";
        document.getElementById('iframe_box_04').style.height = "100%";
    }
    for (var temp0 = 0; ;) {
        if (infram_use_number[temp0] == 1) temp++;
        temp0++;
        if (temp0 >= 4) break;
    }
    if (temp > 1) document.body.style.setProperty('--Iframe_clos_button_height', '25px');
    else document.body.style.setProperty('--Iframe_clos_button_height', '0px');
}
function Looking_For_Link_Go_Inframes_Go(key_word = '') {
    let I_E_temp;
    if (infram_use_number[0]) {
        if (infram_useing_number[0] != -2) {
            I_E_temp = document.getElementById('iframe_id01');
            if (key_word != '') {
                I_E_temp.src = Looking_For_Links[infram_useing_number[0]][3] + key_word + Looking_For_Links[infram_useing_number[0]][4];
            }
            else {
                I_E_temp.src = Looking_For_Links[infram_useing_number[0]][2];
            }
        }
    }
    if (infram_use_number[1]) {
        I_E_temp = document.getElementById('iframe_id02');
        if (key_word != '') {
            I_E_temp.src = Looking_For_Links[infram_useing_number[1]][3] + key_word + Looking_For_Links[infram_useing_number[1]][4];
        }
        else {
            I_E_temp.src = Looking_For_Links[infram_useing_number[1]][2];
        }
    }
    if (infram_use_number[2]) {
        I_E_temp = document.getElementById('iframe_id03');
        if (key_word != '') {
            I_E_temp.src = Looking_For_Links[infram_useing_number[2]][3] + key_word + Looking_For_Links[infram_useing_number[2]][4];
        }
        else {
            I_E_temp.src = Looking_For_Links[infram_useing_number[2]][2];
        }
    }
    if (infram_use_number[3]) {
        I_E_temp = document.getElementById('iframe_id04');
        if (key_word != '') {
            I_E_temp.src = Looking_For_Links[infram_useing_number[3]][3] + key_word + Looking_For_Links[infram_useing_number[3]][4];
        }
        else {
            I_E_temp.src = Looking_For_Links[infram_useing_number[3]][2];
        }
    }
    return 0;
}
function Looking_For_Link_UseAble_Load_At_Start() {
    let Temp0 = 0, Long = Looking_For_Links.length - 1;
    for (; ;) {
        if (Temp0 >= Long) {
            Looking_For_Start_Add_Links_Mast();
            break;
        }
        if (Looking_For_Links[Temp0][2] != 0 && Looking_For_Links[Temp0][7] != 0) {
            value_temp_search_url = Temp0;
            Looking_For_Get_Url_Messages();
            lode_deauf_page_at_start();
            Looking_For_Chouse_Lode_Page();
            break;
        }
        Temp0++;
    }
}
function Looking_For_Start_Add_Links_Mast() {
    /*let Tipes = [
        ['提示', '未查找到链接，请添加链接'], 
        ['Tip', 'Link not found, please add link']
    ];*/
    const Tipes = Looking_For_Language.TX_Message_link_less;
    let Message_Box_Time_Out = Looking_For_Message_Prompt_Time;
    if (Looking_For_Message_Prompt_Time != -1) Looking_For_Message_Prompt_Time = 5000;
    Looking_For_Message_Box([Tipes[0], Tipes[1]]);
    Looking_For_Model = 1;
    Looking_For_Chouse_Lode_Page();
    setTimeout(function () {
        Looking_For_Message_Prompt_Time = Message_Box_Time_Out;
        Looking_For_Sitting_Button();
        setTimeout(function () {
            Looking_For_S_Index_To(3);
        }, 1500);
    }, 1000);
}
function link_go() {
    /*model_clr 0 在本页面跳转
                1 跳转到本页面的新标签页
                2 直接跳转到目标页*/
    var model_clr = Looking_For_Links[value_temp_search_url][5];
    var url_go_number = value_temp_search_url;
    if (link_go_way == 2) {
        /*go no any with*/
        model_clr = 2;
    }
    if (link_go_way == 1) {
        /*add no any with*/
        model_clr = 0;
    }
    else if (value_welcome_page == 1) {
        if (Looking_For_Model == 0) {
            if (model_clr == 0) {
                Looking_For_Page_Change();
            }
            else if (model_clr == 2) {
                if (ctrl_go_link_as != 2) {
                    if (ctrl_if_wite == 0) {
                        if (Looking_For_Message_Prompt_Time > 0) {
                            ctrl_if_wite = 1;
                            show_message_box(url_go_number);
                            setTimeout(() => { link_go() }, Number(Looking_For_Message_Prompt_Time) + 500);
                            return -1;
                        }
                        else {
                            show_message_box(url_go_number);
                        }
                    }
                    else {
                        ctrl_if_wite = 0;
                    }
                }
            }
        }
        else if (Looking_For_Model == 1) {
            if (model_clr == 0) {
                model_clr = 1;
            }
            else if (model_clr == 2) {
                if (ctrl_go_link_as != 2) {
                    if (ctrl_go_link_as != 2) {
                        if (ctrl_if_wite == 0) {
                            if (Looking_For_Message_Prompt_Time > 0) {
                                ctrl_if_wite = 1;
                                show_message_box(url_go_number);
                                setTimeout(() => { link_go() }, Number(Looking_For_Message_Prompt_Time) + 500);
                                return -1;
                            }
                            else {
                                show_message_box(url_go_number);
                            }
                        }
                        else {
                            ctrl_if_wite = 0;
                        }
                    }
                }
            }
        }
        else if (Looking_For_Model == 2) {
            model_clr = 2;
        }
    }
    else if (value_view_page == 1) {
        if (model_clr == 2) {
            if (ctrl_go_link_as != 2) {
                if (ctrl_if_wite == 0) {
                    if (Looking_For_Message_Prompt_Time > 0) {
                        ctrl_if_wite = 1;
                        show_message_box(url_go_number);
                        setTimeout(() => { link_go() }, Number(Looking_For_Message_Prompt_Time) + 500);
                        link_go_way = 0;
                        return -1;
                    }
                    else {
                        show_message_box(url_go_number);
                        link_go_way = 0;
                    }
                }
                else {
                    ctrl_if_wite = 0;
                }
            }
        }
    }
    /*防止无限自指*/
    if (model_clr == 1 && ctrl_lode_in_ids_open_twices == 1) {
        model_clr = 0;
        ctrl_lode_in_ids_open_twices = 0;
    }
    var Element_creat_box_in_keyword = document.getElementById('putin_value').value;
    var Element_creat_box_in_url;
    /*添加主页链接*/
    var value_inframe_temp = -2;
    var ex_time_out = 0;
    if (link_go_way == 1) {
        value_inframe_temp = -1;
        for (var temp0 = 0; ;) {
            if (infram_use_number[temp0] == 0) {
                value_inframe_temp = temp0;
                infram_use_number[temp0] = 1;
                break;
            }
            else temp0++;
            if (temp0 >= 4) break;
        }
    }
    if (value_inframe_temp == -1) {
        model_clr = 1;
        ex_time_out = Number(Looking_For_Message_Prompt_Time) + 500;
    }
    if (value_inframe_temp == -2) {
        if (infram_useing_number[0] === null) {
            value_inframe_temp = 0;
            infram_use_number[0] = 1;
        }
    }
    if (model_clr == 0) {
        if (value_inframe_temp != -2) infram_useing_number[value_inframe_temp] = url_go_number;
        Looking_For_Link_Go_Inframes_Go(Element_creat_box_in_keyword);
        iframe_open();
    }
    else if (model_clr == 1) {
        Element_creat_box_in_url = document.getElementById('link_go_active');
        Element_creat_box_in_url.href = Looking_For_File_Name.replace(/\\\\/g, '\\') + "#mode=3&urlnumber=" + url_go_number + "&keyword=" + Element_creat_box_in_keyword;
        if (ex_time_out > 0) {
            if (link_go_way) show_message_box(-2);
            else show_message_box(url_go_number);
            setTimeout(() => {
                Element_creat_box_in_url.click();
            }, Number(Looking_For_Message_Prompt_Time) + 500);
        }
        else {
            Element_creat_box_in_url.click();
        }
    }
    else if (model_clr == 2) {
        Element_creat_box_in_url = document.getElementById('link_go_active');
        if (Element_creat_box_in_keyword != '') Element_creat_box_in_url.href = Looking_For_Links[url_go_number][3] + Element_creat_box_in_keyword + Looking_For_Links[url_go_number][4];
        else Element_creat_box_in_url.href = Looking_For_Links[url_go_number][2];
        Element_creat_box_in_url.click();
    }
    side_table_link_go_type(0);
}
function show_message_box(chars_show) {
    var error_message_temp = 0;
    /*const Tipes = [
        ["提示!", "，将为您在新标签页打开。", "超过最大分块数量，将为您在新标签页打开。"],
        ["Tips!", ", which will open for you in a new tab. ", "If you exceed the maximum number of tiles, it will open in a new tab for you. "]
    ];*/
    const Tipes = Looking_For_Language.TX_Message_iframe_over;
    if (chars_show == -2) {

    }
    else if (Looking_For_Links[chars_show][6] == 0) {
        error_message_temp = Looking_For_Error_Message;
    }
    else {
        if (chars_show != -2) error_message_temp = Looking_For_Links[chars_show][6];
    }
    if (Looking_For_Message_Prompt_Time == -1) {
        if (chars_show != -2) alert(Tipes[0] + "\n" + Looking_For_Links[chars_show][1].replace(/\\\\/g, '\\') + " " + error_message_temp.replace(/\\\\/g, '\\') + Tipes[1]);
        else alert(Tipes[0] + "\n" + Tipes[2]);
    }
    else if (Looking_For_Message_Prompt_Time == 0) { }
    else {
        if (chars_show != -2) Looking_For_Message_Box([Tipes[0], Looking_For_Links[chars_show][1].replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\') + " " + error_message_temp.replace(/[ ]/g, '&ensp;').replace(/\\\\/g, '\\') + Tipes[1]]);
        else Looking_For_Message_Box([Tipes[0], Tipes[2]]);
    }
}
function putin_enter_start() {
    var input_enter_temp = document.getElementById("putin_value");
    input_enter_temp.addEventListener("keyup", function (event) {
        Looking_For_Enter_Start_Lock = 0;
    }
    );
    input_enter_temp.addEventListener("focus", function (event) {
        Looking_For_Enter_Start_Lock = 0;
    }
    );
    input_enter_temp.addEventListener("keydown", function (event) {
        if (Looking_For_Enter_Start_Lock) return 0;
        if (event.isComposing) return 0;
        if (event.key === 'Enter' || event.keyCode === 13) {
            document.getElementById("putin_button").click();
        }
        Looking_For_Enter_Start_Lock = 1;
    }
    );
    var input_enter_temp_wellcome = document.getElementById("wellcome_chars_input");
    input_enter_temp_wellcome.addEventListener("keyup", function (event) {
        Looking_For_Enter_Start_Lock = 0;
    }
    );
    input_enter_temp_wellcome.addEventListener("focus", function (event) {
        Looking_For_Enter_Start_Lock = 0;
    }
    );
    input_enter_temp_wellcome.addEventListener("keydown", function (event) {
        if (Looking_For_Enter_Start_Lock) return 0;
        if (event.isComposing) return 0;
        if (event.key === 'Enter' || event.keyCode === 13) {
            document.getElementById("putin_button").click();
        }
        Looking_For_Enter_Start_Lock = 1;
    }
    );
}
function button_link_likely_go() {
    link_go();
}
function lode_deauf_page_at_start() {
    if (Looking_For_Model == 3) {
        if (ctrl_lode_in_ids_open_twices == 0) {
            ctrl_lode_in_ids_open_twices = 1;
            infram_use_number[0] = 1;
            document.getElementById('iframe_id01').src = Looking_For_Default_Web_Page_In_View;
            iframe_open();
            setTimeout(function () {
                let Point_Get_E = document.getElementsByTagName('input');
                let Long = Point_Get_E.length;
                let Temp0 = 0;
                for (; ;) {
                    if (Temp0 >= Long) break;
                    Point_Get_E[Temp0].blur();
                    Temp0++;
                }
            }, 200);
        }
    }
}
function input_value_be_same(crl_wellcome_or_view) {
    var in_put_value_wellcome = document.getElementById('wellcome_chars_input');
    var in_put_value_view = document.getElementById('putin_value');
    in_put_value_wellcome.onkeyup = function () {
        in_put_value_view.value = in_put_value_wellcome.value;
    };
    in_put_value_view.onkeyup = function () {
        in_put_value_wellcome.value = in_put_value_view.value;
    }
}
function iframe_button(number, value) {
    var url_temp;
    infram_use_number[number - 1] = 0;
    infram_useing_number[number - 1] = 0;
    iframe_open();
    url_temp = document.getElementById('iframe_id0' + number).src;
    if (value == 2) {
        document.getElementById('link_go_active').href = url_temp;
        document.getElementById('link_go_active').click();
    }
    document.getElementById('iframe_id0' + number).src = "";
}