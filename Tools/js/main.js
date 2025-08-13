//Version: 0.1.1


function start_file_load() {
    let file_E = document.getElementById('HTML_file_in');
    get_files(file_E, 0, true);
}
function start_file_loaded() {
    console.log('main HTML file loaded.');
    console.log('main HTML file chacking...');
    chack_HTML_line_break_error();
    console.log('main HTML file chacking links...');
    get_link_list(text_files[0]);
    files_list_step_style_load();
    console.log('main HTML file show links.');
    show_files_list();
}
function link_file_loaded(file_index_in, type_css) {
    let list_index = file_index_in - 1;
    let error_list = [];
    if (type_css) {
        console.log("Loaded link file [" + link_list[list_index].url + "]");
        console.log("chacking link file...");
        error_list = chack_js_css_line_break_error(text_files[file_index_in], true);
        link_list[list_index].use = 3;
        if (error_list.length != 0) {
            link_list[list_index].use = 4;
            link_list[list_index].error_line = error_list;
        }
        console.log('error line index', error_list);
    }
    else {
        list_index = list_index - link_list.length;
        console.log("Loaded link file [" + script_list[list_index].url + "]");
        console.log("chacking link file...");
        error_list = chack_js_css_line_break_error(text_files[file_index_in], false);
        script_list[list_index].use = 3;
        if (error_list.length != 0) {
            script_list[list_index].use = 4;
            script_list[list_index].error_line = error_list;
        }
        console.log('error line index', error_list);
    }
    files_list_step_style_load();
    return 0;
};
//Auto load files
//safe sitting, count run.
/*
let Home_Url = "";
function get_Home_Url() {
    var url_chars = location.href;
    url_chars = url_chars.split(/\/|\\/);
    let long = url_chars.length - 2;
    let number0 = 0;
    for (; ;) {
        if (number0 >= long) break;
        Home_Url = Home_Url + url_chars[number0] + "/";
        number0++;
    }
    console.log(url_chars);
    console.log(Home_Url);
    return 0;
}
let Code_Url = "";
function get_Code_Url() {
    Code_Url = Home_Url + "Code/";
    return 0;
}
function get_files_from_Url(url) {
    let F_I_E = document.getElementById('output_i');
    F_I_E.innerHTML = 'Loading';
    const path = url;
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            F_I_E.innerHTML = 'Loaded';
            return data;
        })
        .catch(err => {
            F_I_E.innerHTML = 'Load fall';
            console.error('Fetch error: ', err);
        });
}
function Auto_Load() {
    get_Home_Url();
    get_Code_Url();
    let HTML_Url = Code_Url + "Looking_For.html";
    get_files_from_Url(HTML_Url);

    text_files = [];
    text_files[0] = file_temp;
    HTML_main_file_use = 1;
    start_file_loaded();

}
*/
let code_url = "";
let chack_line = 0;
let chack_index = 0;
let files_index = 0;
let files_type_in = 0;
let text_files = [];
let file_temp = "";
function get_files(file, file_in_index = -1, main_file = false, type_css = false) {
    let F_E = file;
    let F_I_E = document.getElementById('output_i');
    F_I_E.innerHTML = 'Loading';
    let F_R;
    if (file_in_index == -1) {
        file_in_index = files_index;
    }
    if (F_E.files[0]) {
        F_R = new FileReader();
        F_R.readAsText(F_E.files[0], 'utf-8');
        F_R.onload = function () {
            file_temp = this.result;
            //F_I_E.className = 'output_i output_i_s';
            F_I_E.innerHTML = 'Loaded';
            if (main_file) {
                text_files = [];
                text_files[0] = file_temp;
                HTML_main_file_use = 1;
                start_file_loaded();
            }
            else {
                text_files[file_in_index] = file_temp;
                link_file_loaded(file_in_index, type_css);
            }
        }
    }
    else {
        //F_I_E.className = 'output_i output_i_f';
        F_I_E.innerHTML = 'Load fall';
    }
    return 0;
}

function be_line(text_in) {
    let return_T = "";
    return_T = text_in.split('/\r\n/');
    return return_T;
}
function chack_in_data_or_exegesis(text_in) {
    let text_T = text_in;
    let RE_0 = /("([^"\r\n]){0,}")|('([^'\r\n]){0,}')/;
    let RE_1 = /(\/\/([^\r\n]){0,})|(\/\*([\s\S]){0,}?\*\/)/;
    let RE_2 = /<!--([\s\S]){0,}?-->/;
    let RE_0_1 = /(")|(')/;
    let RE_1_1 = /(\/\/)|(\/*)/;
    let RE_2_1 = /<!--/;
    //let number0 = 0, number1 = 0,number2=0;
    let V_T = [0, 0, 0];
    let R0 = 0, R1 = 1, R2 = 2, RT = 0;
    let chack_A_R = [
        function () {
            V_T[0] = text_T.search(RE_0);
        },
        function () {
            V_T[1] = text_T.search(RE_1);
        },
        function () {
            V_T[2] = text_T.search(RE_2);
        }
    ];
    let remove_A_R = [
        function () {
            text_T = text_T.slice(V_T[0]);
            text_T = text_T.replace(RE_0, 'data');
        },
        function () {
            text_T = text_T.slice(V_T[1]);
            text_T = text_T.replace(RE_1, '');
        },
        function () {
            text_T = text_T.slice(V_T[2]);
            text_T = text_T.replace(RE_2, '');
        }
    ];
    function chack_A(index_in) {
        remove_A_R[index_in]();
        chack_A_R[index_in]();
    }
    V_T[R0] = text_T.search(RE_0);
    V_T[R1] = text_T.search(RE_1);
    V_T[R2] = text_T.search(RE_2);
    for (; ;) {
        if (V_T[R1] <= V_T[R2]) {
            RT = R2;
            R2 = R1;
            R1 = RT;
        }
        if (V_T[R0] <= V_T[R2]) {
            RT = R2;
            R2 = R0;
            R0 = RT;
        }
        if (V_T[R2] == -1) {
            for (; ;) {
                if (V_T[R0] <= V_T[R1]) {
                    RT = R1;
                    R1 = R0;
                    R0 = RT;
                }
                if (V_T[R1] == -1) {
                    for (; ;) {
                        if (V_T[R0] == -1) break;
                        chack_A(R0);
                    }
                    break;
                }
                chack_A(R1);
                chack_A_R[R0]();
            }
            break;
        }
        chack_A(R2);
        chack_A_R[R1]();
        chack_A_R[R0]();
    }
    R0 = text_T.search(RE_0_1);
    R1 = text_T.search(RE_1_1);
    R1 = text_T.search(RE_2_1);
    if (R0 != -1) return false;
    else if (R1 != -1) return false;
    else if (R2 != -1) return false;
    else return true;
}
function remove_data_or_exegesis_keep_line(text_in) {
    let text_T = text_in;
    let RE_0 = /("([^"\r\n]){0,}")|('([^'\r\n]){0,}')/;
    let RE_1 = /(\/\/([^\r\n]){0,})|(\/\*([\s\S]){0,}?\*\/)/;
    let RE_2 = /<!--([\s\S]){0,}?-->/;
    let line_temp = "";
    let V_T = [0, 0, 0];
    let R0 = 0, R1 = 1, R2 = 2, RT = 0;
    let chack_A_R = [
        function () {
            V_T[0] = text_T.search(RE_0);
        },
        function () {
            V_T[1] = text_T.search(RE_1);
        },
        function () {
            V_T[2] = text_T.search(RE_2);
        }
    ];
    let remove_A_R = [
        function () {
            text_T = text_T.replace(RE_0, 'data');
        },
        function () {
            line_temp = RE_1.exec(text_T)[0];
            line_temp = line_temp.replace(/[^ \r\n]/g, '');
            text_T = text_T.replace(RE_1, line_temp);
        },
        function () {
            line_temp = RE_2.exec(text_T)[0];
            line_temp = line_temp.replace(/[^ \r\n]/g, '');
            text_T = text_T.replace(RE_2, line_temp);
        }
    ];
    function chack_A(index_in) {
        remove_A_R[index_in]();
        chack_A_R[index_in]();
    }
    V_T[R0] = text_T.search(RE_0);
    V_T[R1] = text_T.search(RE_1);
    V_T[R2] = text_T.search(RE_2);
    for (; ;) {
        if (V_T[R1] <= V_T[R2]) {
            RT = R2;
            R2 = R1;
            R1 = RT;
        }
        if (V_T[R0] <= V_T[R2]) {
            RT = R2;
            R2 = R0;
            R0 = RT;
        }
        if (V_T[R2] == -1) {
            for (; ;) {
                if (V_T[R0] <= V_T[R1]) {
                    RT = R1;
                    R1 = R0;
                    R0 = RT;
                }
                if (V_T[R1] == -1) {
                    for (; ;) {
                        if (V_T[R0] == -1) {
                            break;
                        }
                        chack_A(R0);
                    }
                    break;
                }
                chack_A(R1);
                chack_A_R[R0]();
            }
            break;
        }
        chack_A(R2);
        chack_A_R[R1]();
        chack_A_R[R0]();
    }
    return text_T;
}
let HTML_main_file = "";
let HTML_main_file_use = 0;
let HTML_main_file_error_lines_script = [];
let HTML_main_file_error_lines_style = [];
let link_list = [
    {
        url: "",
        /*
        0 unload
        1 load
        2 keep
        3 pass
        4 error
        */
        use: 0,
        error_line: []
    }
];
let script_list = [
    {
        url: "",
        /*
        0 unload
        1 load
        2 keep
        3 pass
        4 error
        */
        use: 0,
        error_line: []
    }
];
let link_cut_in_code = "||--|Looking_For_LInK_cUt_In_||--|";
let script_cut_in_code = "||--|Looking_For_SCRIpT_cUt_In_||--|";
function get_link_list(text_in) {
    let list_cut_out_temp = []
    let cut_index = 0;
    let cut_reload_index = 0;
    let link_list_index = 0;
    let RE_link = /((<)|(\\x3C))link((\s){1,}((rel)|(type)|(href))(\s){0,}=(\s){0,}(('([^'\r\n]){0,}')|("([^"\r\n]){0,}"))){2,}(\s){0,}(\/){0,1}>/i;
    let RE_link_css = /(\s){1,}rel(\s){0,}=(\s){0,}(("( ){0,}stylesheet( ){0,}")|('( ){0,}stylesheet( ){0,}'))/i;
    let RE_link_css_url = /(\s){1,}href(\s){0,}=(\s){0,}(("([^\r\n]){0,}")|('([^\r\n]){0,}'))/i;
    let RE_link_css_utl_clean = /("([^\r\n]){0,}")|('([^\r\n]){0,}')/i;
    let RE_script = /((<)|(\\x3C))script((\s){1,}((type)|(src))(\s){0,}=(\s){0,}(('([^'\r\n]){0,}')|("([^"\r\n]){0,}"))){1,}((\s)){0,}>(\s){0,}((<)|(\\x3C))\/script>/i;
    let RE_script_utl = /(\s){1,}src(\s){0,}=(\s){0,}(("([^\r\n]){0,}")|('([^\r\n]){0,}'))/i;
    let RE_script_utl_clean = /("([^\r\n]){0,}")|('([^\r\n]){0,}')/i;
    let cut_in_temp = link_cut_in_code + "||--tEmP--cUt-|-|";
    let text_T = "";
    let number0 = 0, number1 = 0, number2 = 0;
    let temp0 = true, temp1 = 0;
    let HTML_main_file_T = text_in;
    link_list = [];
    // link
    for (; ;) {
        number0 = HTML_main_file_T.search(RE_link);
        if (number0 >= 0) {
            list_cut_out_temp[cut_index] = RE_link.exec(HTML_main_file_T)[0];
            number1 = list_cut_out_temp[cut_index].length;
            text_T = HTML_main_file_T.slice(number2, number0);
            temp0 = chack_in_data_or_exegesis(text_T);
            if (temp0) {
                //temp tag
                HTML_main_file_T = HTML_main_file_T.slice(0, number0) + cut_in_temp + HTML_main_file_T.slice(number1 + number0);
                cut_index++;
            }
            else {
                number2 = number0;
                temp1 = list_cut_out_temp[cut_index].search(RE_link_css);
                if (temp1 >= 0) {
                    //console.log('link true')
                    //console.log('ikkkkkkkkkkkkkkkkkk',RE_link_css_utl.exec(list_cut_out_temp[cut_index]),list_cut_out_temp,cut_index);
                    link_list[link_list_index] = { url: "", use: 0, error_line: [] };
                    link_list[link_list_index].url = RE_link_css_url.exec(list_cut_out_temp[cut_index]);
                    if (link_list[link_list_index].url !== null) {
                        link_list[link_list_index].url = link_list[link_list_index].url[0];
                        link_list[link_list_index].url = RE_link_css_utl_clean.exec(link_list[link_list_index].url)[0];
                        link_list[link_list_index].url = link_list[link_list_index].url.slice(1, -1);
                    }
                    else {
                        link_list[link_list_index].url = list_cut_out_temp[cut_index], link_list[link_list_index].use = 3;
                    }
                    link_list_index++;
                    //tag
                    HTML_main_file_T = HTML_main_file_T.slice(0, number0) + link_cut_in_code + HTML_main_file_T.slice(number1 + number0);
                }
                else {
                    //temp tag
                    HTML_main_file_T = HTML_main_file_T.slice(0, number0) + cut_in_temp + HTML_main_file_T.slice(number1 + number0);
                    cut_index++;
                }
            }
        }
        else {
            break;
        }
    }
    for (; ;) {
        if (cut_reload_index >= cut_index) break;
        HTML_main_file_T = HTML_main_file_T.replace(cut_in_temp, list_cut_out_temp[cut_reload_index]);
        cut_reload_index++;
    }
    //script
    list_cut_out_temp = [];
    script_list = [];
    cut_in_temp = script_cut_in_code + "||--tEmP--cUt-|-|";
    cut_index = 0, cut_reload_index = 0, link_list_index = 0;
    number2 = 0;
    for (; ;) {
        number0 = HTML_main_file_T.search(RE_script);
        if (number0 >= 0) {
            list_cut_out_temp[cut_index] = RE_script.exec(HTML_main_file_T)[0];
            number1 = list_cut_out_temp[cut_index].length;
            text_T = HTML_main_file_T.slice(number2, number0);
            temp0 = chack_in_data_or_exegesis(text_T);
            if (temp0) {
                //temp tag
                HTML_main_file_T = HTML_main_file_T.slice(0, number0) + cut_in_temp + HTML_main_file_T.slice(number1 + number0);
                cut_index++;
            }
            else {
                number2 = number0;
                //console.log('iddddddddddddddddd',RE_script_utl.exec(list_cut_out_temp[cut_index]),list_cut_out_temp,cut_index);
                script_list[link_list_index] = { url: "", use: 0, error_line: [] };
                script_list[link_list_index].url = RE_script_utl.exec(list_cut_out_temp[cut_index]);
                if (script_list[link_list_index].url !== null) {
                    script_list[link_list_index].url = script_list[link_list_index].url[0];
                    script_list[link_list_index].url = RE_script_utl_clean.exec(script_list[link_list_index].url)[0];
                    script_list[link_list_index].url = script_list[link_list_index].url.slice(1, -1);
                }
                else {
                    script_list[link_list_index].url = list_cut_out_temp[cut_index], script_list[link_list_index].use = 3;
                }
                link_list_index++;
                //tag
                HTML_main_file_T = HTML_main_file_T.slice(0, number0) + script_cut_in_code + HTML_main_file_T.slice(number1 + number0);
            }
        }
        else {
            break;
        }
    }
    for (; ;) {
        if (cut_reload_index >= cut_index) break;
        HTML_main_file_T = HTML_main_file_T.replace(cut_in_temp, list_cut_out_temp[cut_reload_index]);
        cut_reload_index++;
    }
    HTML_main_file = HTML_main_file_T;
    return 0;
}
function show_files_list() {
    let home_D = document.getElementById('files_list_box_home');
    let home_E = document.getElementById('files_list_box');
    let box_T = [
        '<div id="files_box_list_',
        '" class="files_box_list ',
        '"><div class="files_list_chack">',
        ' <i>wait upload</i></div><label class="files_list_button" for="files_in" onclick="files_list_upload_lable(',
        ')">upload file</label><div class="files_list_button" onclick="files_list_keep_link(',
        ')">keep_link</div></div>'
    ];
    let number0 = 0;
    let text_input = "";
    let Long = link_list.length;
    for (; ;) {
        if (number0 >= Long) {
            break;
        }
        if (link_list[number0].use != 3) {
            text_input = text_input + box_T[0] + 'css_' + number0 + box_T[1] + "list_unload" + box_T[2] + 'type:[<em class="files_type_css">css</em>] url:[' + link_list[number0].url + "]" + box_T[3] + number0 + ',0' + box_T[4] + number0 + ',0' + box_T[5];
        }
        else {
            text_input = text_input + box_T[0] + 'css_' + number0 + box_T[1] + "list_error" + box_T[2] + 'type:[<em class="files_type_css">css</em>] url:[' + link_list[number0].url + "]" + box_T[3] + number0 + ',0' + box_T[4] + number0 + ',0' + box_T[5];
        }
        number0++;
    }
    number0 = 0;
    Long = script_list.length;
    for (; ;) {
        if (number0 >= Long) {
            break;
        }
        if (script_list[number0].use != 3) {
            text_input = text_input + box_T[0] + 'js_' + number0 + box_T[1] + "list_unload" + box_T[2] + 'type:[<em class="files_type_js">JavaScript</em>] url:[' + script_list[number0].url + "]" + box_T[3] + number0 + ',1' + box_T[4] + number0 + ',1' + box_T[5];
        }
        else {
            text_input = text_input + box_T[0] + 'js_' + number0 + box_T[1] + "list_error" + box_T[2] + 'type:[<em class="files_type_js">JavaScript</em>] url:[' + script_list[number0].url + "]" + box_T[3] + number0 + ',1' + box_T[4] + number0 + ',1' + box_T[5];
        }
        number0++;
    }
    home_E.innerHTML = text_input;
    home_D.style['grid-template-rows'] = '1fr';
    return 0;
}
function files_list_upload_lable(index_in = 0, type = 0) {
    files_index = index_in + 1, files_type_in = type;
    return 0;
}
function files_list_upload() {
    let F_E = document.getElementById('files_in');
    let E_M = document.getElementById('output_i');
    let home_E;
    let number0 = files_index - 1;
    E_M.innerHTML = "Loading...";
    if (files_type_in == 0) {
        console.log('get_file', files_index, 'type css');
        home_E = document.getElementById('files_box_list_css_' + number0);
        if (home_E != null) home_E.getElementsByTagName('i')[0].innerHTML = "chacking...";
        get_files(F_E, files_index, false, true);
    }
    else if (files_type_in == 1) {
        files_index = link_list.length + files_index;
        console.log('get_file', files_index, 'type JavaScript');
        home_E = document.getElementById('files_box_list_js_' + number0);
        if (home_E != null) home_E.getElementsByTagName('i')[0].innerHTML = "chacking...";
        get_files(F_E, files_index, false, false);
    }
    return 0;
}
function files_list_keep_link(index_in = 0, type = 0) {
    let home_E;
    let list_array;
    if (type == 0) {
        home_E = document.getElementById('files_box_list_css_' + index_in);
        list_array = link_list;
    }
    else if (type == 1) {
        home_E = document.getElementById('files_box_list_js_' + index_in);
        list_array = script_list;
    }
    list_array[index_in].use = 2;
    home_E.className = "files_box_list list_keep_link";
    files_list_step_style_load();
    return 0;
}
function files_list_step_style_load() {
    let E_M = document.getElementById('output_i');
    let home_E;
    let number0 = 0, number1 = 1, number2 = 2;
    let Long = 1, Long1 = link_list.length, Long2 = script_list.length;
    let color = ['#e1ff75', '#98e1fd', '#04d1f5', '#04f518', '#ff1b1b'];
    let color_class = ['list_unload', 'list_load', 'list_keep_link', 'list_pass', 'list_error'];
    let type_text = ['wait load', 'wait chack', 'keep link', 'pass', 'error'];
    let style_T = ['linear-gradient(90deg', ')']
    let text_input = "";
    Long = 1 + Long1 + Long2;
    Long = 100 / Long;
    text_input = style_T[0] + ',' + color[HTML_main_file_use] + ' ' + Long + '%';
    for (; ;) {
        if (number0 >= Long1) break;
        home_E = document.getElementById('files_box_list_css_' + number0);
        if (home_E != null) {
            home_E.className = "files_box_list " + color_class[link_list[number0].use];
            home_E.getElementsByTagName('i')[0].innerHTML = type_text[link_list[number0].use];
        }
        text_input = text_input + ',' + color[link_list[number0].use] + ' ' + number1 * Long + '%' + ',' + color[link_list[number0].use] + ' ' + number2 * Long + '%';
        number0++, number1++, number2++;
    }
    number0 = 0;
    for (; ;) {
        if (number0 >= Long2) break;
        home_E = document.getElementById('files_box_list_js_' + number0);
        if (home_E != null) {
            home_E.className = "files_box_list " + color_class[script_list[number0].use];
            home_E.getElementsByTagName('i')[0].innerHTML = type_text[script_list[number0].use];
        }
        text_input = text_input + ',' + color[script_list[number0].use] + ' ' + number1 * Long + '%' + ',' + color[script_list[number0].use] + ' ' + number2 * Long + '%';
        number0++, number1++, number2++;
    }
    text_input = text_input + style_T[1];
    //console.log(text_input);
    E_M.style.background = text_input;
    chack_files_loaded();
    return 0;
}
function chack_files_loaded() {
    console.log('loaded chack');
    let if_error = false;
    let long = link_list.length;
    let number0 = 0;
    let load = [true, false, false, false, false];
    let error = [false, false, false, false, true];
    if (load[HTML_main_file_use]) return 0;
    for (; ;) {
        if (number0 >= long) break;
        if (load[link_list[number0].use]) return 0;
        number0++;
    }
    number0 = 0, long = script_list.length;
    for (; ;) {
        if (number0 >= long) break;
        if (load[script_list[number0].use]) return 0;
        number0++;
    }
    // chack error
    if (error[HTML_main_file_use]) if_error = true;
    else {
        number0 = 0, long = link_list.length;
        for (; ;) {
            if (number0 >= long) break;
            if (error[link_list[number0].use]) {
                if_error = true;
                break;
            }
            number0++;
        }
        if (!if_error) {
            number0 = 0, long = script_list.length;
            for (; ;) {
                if (number0 >= long) break;
                if (error[script_list[number0].use]) {
                    if_error = true;
                    break;
                }
                number0++;
            }
        }
    }
    if (if_error) {
        console.log('loaded show error');
        mix_code_error_line();
        show_code_error_lines();
    }
    else {
        console.log('loaded show download');
        mix_all_files();
        make_down_load();
        //show_download();
    }
    return 0;
}
function chack_HTML_line_break_error() {
    let text_T = text_files[0];
    let RE_scritp = /((<)|(\\x3C))script([^>]){0,}>([\s\S]){0,}?((<)|(\\x3C))\/script>/i;
    let RE_script_head = /<[^>]{0,}/i;
    let RE_src = /[\s]src([\s]){0,}=/i;
    let cut_in_text = '||----|--|Looking_For_HTML_sCrIpt_cUt_tEmP|-|--||';
    let cut_in_reload_text = cut_in_text + '||---|-srC-TeMp-|--|-|';
    let RE_style = /((<)|(\\x3C))style([^>]){0,}>([\s\S]){0,}?((<)|(\\x3C))\/style>/i;
    let cut_in_text_style = '||----|--|Looking_For_HTML_sTyLe_cUt_tEmP|-|--||';
    let cut_text_T = "";
    let cut_text_T_script = "";
    let cut_text_T_1 = "";
    let cut_get_text = [];
    let cut_get_lines = [];
    let cut_get_lines_temp = [];
    let script_error_lines = [];
    let script_error_line_index = 0;
    let cut_get_text_style = [];
    let cut_get_lines_style = [];
    let style_error_lines = [];
    let style_error_line_index = 0;
    let cut_get_index = 0;
    let cut_reload_text = [];
    let cut_reload_index = 0;
    let number0 = 0, number1 = 0, number2 = 0;
    let if_src = true;
    function src_chack(text_input) {
        let text_temp = RE_script_head.exec(text_input)[0];
        text_temp = text_temp.search(RE_src);
        if (text_temp == -1) return false;
        else return true;
    }
    text_T = remove_data_or_exegesis_keep_line(text_T);
    for (; ;) {
        number0 = text_T.search(RE_scritp);
        if (number0 == -1) break;
        cut_text_T = RE_scritp.exec(text_T)[0];
        //console.log('js line',cut_text_T);
        number1 = cut_text_T.length + number0;
        if_src = src_chack(cut_text_T);
        if (if_src) {
            cut_reload_text[cut_reload_index] = cut_text_T;
            text_T = text_T.slice(0, number0) + cut_in_reload_text + text_T.slice(number1);
            cut_reload_index++;
        }
        else {
            cut_get_text[cut_get_index] = cut_text_T;
            text_T = text_T.slice(0, number0) + cut_in_text + text_T.slice(number1);
            cut_get_index++;
        }
    }
    number0 = 0;
    for (; ;) {
        if (number0 >= cut_reload_index) break;
        text_T = text_T.replace(cut_in_reload_text, cut_reload_text[number0]);
        number0++;
    }
    // chack break error
    // get files start line
    cut_text_T = text_T;
    cut_get_index = 0;
    for (; ;) {
        number0 = cut_text_T.search(/\|\|----\|--\|Looking_For_HTML_sCrIpt_cUt_tEmP\|-\|--\|\|/);
        if (number0 == -1) break;
        cut_text_T_1 = cut_text_T.slice(0, number0);
        cut_text_T_1 = cut_text_T_1.split(/\r\n/);
        cut_get_lines[cut_get_index] = cut_text_T_1.length;
        cut_text_T = cut_text_T.replace(/\|\|----\|--\|Looking_For_HTML_sCrIpt_cUt_tEmP\|-\|--\|\|/, cut_get_text[cut_get_index]);
        cut_get_index++;
    }
    cut_text_T_script = cut_text_T;
    // get error line in files and update line in home test
    number0 = cut_get_text.length;
    cut_get_index = 0;
    for (; ;) {
        if (cut_get_index >= number0) break;
        cut_get_lines_temp = chack_js_css_line_break_error(cut_get_text[cut_get_index]);
        number1 = 0; number2 = cut_get_lines_temp.length;
        for (; ;) {
            if (number1 >= number2) break;
            script_error_lines[script_error_line_index] = cut_get_lines[cut_get_index] + cut_get_lines_temp[number1] - 1;
            number1++, script_error_line_index++;
        }
        cut_get_index++;
    }
    //console.log('js:')
    //console.log('ssl',cut_get_lines);
    //console.log('scl',script_error_lines);

    //chack style code
    text_T = cut_text_T_script;
    cut_get_index = 0;
    for (; ;) {
        number0 = text_T.search(RE_style);
        if (number0 == -1) break;
        cut_text_T = RE_style.exec(text_T)[0];
        number1 = cut_text_T.length + number0;
        cut_get_text_style[cut_get_index] = cut_text_T;
        text_T = text_T.slice(0, number0) + cut_in_text_style + text_T.slice(number1);
        cut_get_index++;
    }
    // chack break error
    // get files start line
    cut_text_T = text_T;
    cut_get_index = 0;
    for (; ;) {
        number0 = cut_text_T.search(/\|\|----\|--\|Looking_For_HTML_sTyLe_cUt_tEmP\|-\|--\|\|/);
        if (number0 == -1) break;
        cut_text_T_1 = cut_text_T.slice(0, number0);
        cut_text_T_1 = cut_text_T_1.split(/\r\n/);
        cut_get_lines_style[cut_get_index] = cut_text_T_1.length;
        cut_text_T = cut_text_T.replace(/\|\|----\|--\|Looking_For_HTML_sTyLe_cUt_tEmP\|-\|--\|\|/, cut_get_text_style[cut_get_index]);
        cut_get_index++;
    }
    // get error line in files and update line in home test
    number0 = cut_get_text_style.length;
    cut_get_index = 0;
    for (; ;) {
        if (cut_get_index >= number0) break;
        cut_get_lines_temp = chack_js_css_line_break_error(cut_get_text_style[cut_get_index], true);
        number1 = 0; number2 = cut_get_lines_temp.length;
        for (; ;) {
            if (number1 >= number2) break;
            style_error_lines[style_error_line_index] = cut_get_lines_style[cut_get_index] + cut_get_lines_temp[number1] - 1;
            number1++, style_error_line_index++;
        }
        cut_get_index++;
    }
    HTML_main_file_error_lines_script = script_error_lines;
    console.log("error line index type:[JavaScript]", HTML_main_file_error_lines_script);
    HTML_main_file_error_lines_style = style_error_lines;
    console.log("error line index type:[css]", HTML_main_file_error_lines_style);
    if (script_error_lines.length >= 1) {
        if (style_error_lines.length >= 1) HTML_main_file_use = 4;
        console.log("main HTML file chack error!s");
    }
    else {
        HTML_main_file_use = 3;
        console.log("main HTML file chack pass.");
    }
    return 0;
}
/**
 * 
 * @param {*} text_in 
 * @param {false} type_css js
 * @param {true} type_css css
 * @returns 
 */
function chack_js_css_line_break_error(text_in, type_css = false) {
    let text_T = text_in;
    let RE_remove_head = /((<)|(\\x3C))script([^>]){0,}>/i;
    let RE_remove_foot = /((<)|(\\x3C))\/script([^>]){0,}>/i;
    let RE_remove_style_head = /((<)|(\\x3C))style([^>]){0,}>/i;
    let RE_remove_style_foot = /((<)|(\\x3C))\/style([^>]){0,}>/i;
    let RE_line_error = /([^;,=\+\-\*\/><\(\)\{\}\s])([\r\n])([\s]){0,}([^;,=\+\-\*\/><\(\)\{\}\s])/i;
    let RE_line_error_1 = /([\]])([\r\n])([\s]){0,}([\[])/i;
    let line_error_cut_in = "|-|-LFble-10-|-|;";
    let text_temp = "";
    let error_array = [];
    let number0 = 0, number1 = 0, number2 = 0;
    if (type_css) {
        RE_remove_head = RE_remove_style_head;
        RE_remove_foot = RE_remove_style_foot;
    }
    //console.log('line_B_chack_in',text_T);
    text_T = remove_data_or_exegesis_keep_line(text_T);
    text_temp = RE_remove_head.exec(text_T);
    if (text_temp !== null && text_temp !== undefined) {
        text_temp = text_temp[0].replace(/[^ \r\n]/g, '');
        text_T = text_T.replace(RE_remove_head, text_temp);
    }
    text_T = text_T.replace(RE_remove_foot, '');
    text_T = text_T.replaceAll(line_error_cut_in, '-cut_in_temp-');
    text_T = text_T.replace(/\[/g, '[;');
    text_T = text_T.replace(/\]/g, ';]');
    for (; ;) {
        number0 = text_T.search(RE_line_error_1);
        if (number0 == -1) break;
        text_temp = RE_line_error.exec(text_T)[0];
        number1 = text_temp.length + number0;
        text_temp = text_temp.slice(0, 1) + ';' + text_temp.slice(1);
        text_T = text_T.slice(0, number0) + text_temp + text_T.slice(number1);
    }
    number0 = 0, number1 = 0;
    for (; ;) {
        number2++;
        if (number2 >= 20) break;
        number0 = text_T.search(RE_line_error);
        if (number0 == -1) break;
        text_temp = RE_line_error.exec(text_T)[0];
        number1 = text_temp.length + number0 - 1;
        text_temp = text_temp.replace(/[^\s]/g, '');
        text_T = text_T.slice(0, number0) + line_error_cut_in + text_temp + text_T.slice(number1);
    }
    text_T = text_T.split(/\r\n/);
    number0 = 0, number2 = 0;
    number1 = text_T.length;
    for (; ;) {
        if (number0 >= number1) break;
        if (text_T[number0].search(/\|-\|-LFble-10-\|-\|;/) != -1) {
            error_array[number2] = number0;
            number2++;
        }
        number0++;
    }
    return error_array;
}
/**
 * name
 * type 0 right
 *      1 error
 *      2 null or ...
 * line 
 * value tests
 */
let files_name_list = ["HTML [JavaScript]", "HTML [css]"];
let code_error_lines_list = [];
function mix_code_error_line() {
    let line_index = 0;
    let text_array = [];
    let long = 0, long1 = 0;
    let number_f = 2;
    let number0 = 0, number1 = 0, number2 = 0
    function name_list_maker() {
        let number_0 = 0, number_1 = 2;
        let long_0 = link_list.length;
        for (; ;) {
            if (number_0 >= long_0) break;
            files_name_list[number_1] = link_list[number_0].url;
            number_0++, number_1++;
        }
        number_0 = 0;
        long_0 = link_list.length;
        for (; ;) {
            if (number_0 >= long_0) break;
            files_name_list[number_1] = script_list[number_0].url;
            number_0++, number_1++;
        }
        return 0;
    }
    function pull_model(name_in, type_in, line_in, value_in) {
        let line_model = {
            name: name_in,
            type: type_in,
            line: line_in,
            value: value_in
        }
        code_error_lines_list[line_index] = line_model;
        line_index++;
        return 0;
    }
    function error_line_end(name, array_in, text_array_in) {
        let number_0 = number0 - 1;
        let end = text_array_in.length;
        number_0 = array_in[number_0] + 1;
        if (isNaN(number_0)) return 0;
        if (array_in[number_0] >= end) return 0;
        pull_model(name, 0, number_0 + 1, text_array_in[number_0]);
        return 0;
    }
    function error_line_mix(name, array_in, text_array_in) {
        if (array_in[number0] == 0) {
            pull_model(name, 1, 1, text_array_in[0]);
            return 0;
        }
        let number_start = 0;
        if (number0 == 0) {
            number_start = array_in[number0];
        }
        else {
            number_start = array_in[number0 - 1];
        }
        let number_now = array_in[number0];
        if (number_now - number_start >= 5) {
            pull_model(name, 0, number_start + 2, text_array_in[number_start + 1]);
            pull_model(name, 2, '...', '');
            pull_model(name, 0, number_now, text_array_in[number_now - 1]);
            pull_model(name, 1, number_now + 1, text_array_in[number_now]);
            return 0;
        }
        else {
            if (number0 == 0) {
                pull_model(name, 0, number_start, text_array_in[number_start - 1]);
                pull_model(name, 1, number_start + 1, text_array_in[number_start]);
                return 0;
            }
            for (; ;) {
                number_start++;
                if (number_start >= number_now) {
                    pull_model(name, 1, number_start + 1, text_array_in[number_start]);
                    break;
                }
                pull_model(name, 0, number_start + 1, text_array_in[number_start]);
            }
            return 0;
        }
    }
    name_list_maker();
    //HTML main file
    text_array = text_files[0];
    text_array = text_array.split(/\r\n/);
    long = HTML_main_file_error_lines_script.length;
    number0 = 0;
    for (; ;) {
        if (number0 >= long) {
            error_line_end(0, HTML_main_file_error_lines_script, text_array);
            break;
        }
        error_line_mix(0, HTML_main_file_error_lines_script, text_array);
        number0++;
    }
    long = HTML_main_file_error_lines_style.length;
    number0 = 0;
    for (; ;) {
        if (number0 >= long) {
            error_line_end(1, HTML_main_file_error_lines_style, text_array);
            break;
        }
        error_line_mix(1, HTML_main_file_error_lines_style, text_array);
        number0++;
    }
    //css files
    long = link_list.length;
    number0 = 0, number1 = 1, number2 = 0;
    for (; ;) {
        if (number2 >= long) break;
        text_array = text_files[number1];
        text_array = text_array.split(/\r\n/);
        long1 = link_list[number2].error_line.length;
        for (; ;) {
            if (number0 >= long1) {
                error_line_end(number_f, link_list[number2].error_line, text_array);
                break;
            }
            error_line_mix(number_f, link_list[number2].error_line, text_array);
            number0++;
        }
        number1++, number2++, number_f++;
    }
    //js files
    long = script_list.length;
    number0 = 0, number2 = 0
    for (; ;) {
        if (number2 >= long) break;
        text_array = text_files[number1];
        text_array = text_array.split(/\r\n/);
        long1 = script_list[number2].error_line.length;
        for (; ;) {
            if (number0 >= long1) {
                error_line_end(number_f, script_list[number2].error_line, text_array);
                break;
            }
            error_line_mix(number_f, script_list[number2].error_line, text_array);
            number0++;
        }
        number1++, number2++, number_f++;
    }
    console.log('error list is:\n', code_error_lines_list);
    return 0;
}
function show_code_error_lines() {
    let divs_T = ['<div class="error_line list_', '"><div class="width_160 file_', '">', '</div><div class="width_40 line">', '</div><div class="width_40 error_type">', '</div><div class="width_to_right">', '</div></div>'];
    let use_type = ['pass', 'error', 'skip'];
    let list = code_error_lines_list;
    let file_name = files_name_list;
    let file_color = [0, 1, 2, 3];
    let home_E = document.getElementById('error_lines_home_box');
    let home_D = document.getElementById('error_lines_home_box_door');
    let text_input = '<div class="error_line error_line_title"><div class="width_160">file name</div><div class="width_40">line</div><div class="width_40">type</div><div class="width_to_right">code</div></div>';
    let long = list.length;
    let number0 = 0;
    function load_file_color() {
        let long_0 = 2 + link_list.length + script_list.length;
        let number_0 = 4, number_1 = 0;
        let file_color_temp = [0, 1, 2, 3];
        for (; ;) {
            if (number_0 >= long_0) break;
            file_color[number_0] = file_color_temp[number_1];
            number_0++;
            number_1 = number_0 % 4;
        }
        return 0;
    }
    load_file_color();
    for (; ;) {
        if (number0 >= long) break;
        text_input = text_input + divs_T[0] + use_type[list[number0].type] + divs_T[1] + file_color[list[number0].name] + divs_T[2] + file_name[list[number0].name] + divs_T[3] + list[number0].line + divs_T[4] + use_type[list[number0].type] + divs_T[5] + list[number0].value + divs_T[6];
        number0++;
    }
    home_E.innerHTML = text_input;
    home_D.style['grid-template-rows'] = '1fr';
    return 0;
}
let HTML_text_all = "";
function mix_all_files() {
    let text_T = HTML_main_file;
    let M_E = document.getElementById('output_i');
    let RE_St = /\|\|--\|Looking_For_LInK_cUt_In_\|\|--\|/;
    let RE_Sc = /\|\|--\|Looking_For_SCRIpT_cUt_In_\|\|--\|/;
    let list = link_list;
    let file_index = 1;
    let number0 = 0, long = list.length;
    console.log('mix files...');
    M_E.innerHTML = 'mixing fies...';
    for (; ;) {
        if (number0 >= long) break;
        if (list[number0].use == 2) {
            text_T = text_T.replace(RE_St, '<link rel="stylesheet" type="text/css" href="' + list[number0].url + '">');
        }
        else {
            text_T = text_T.replace(RE_St, '<style>' + text_files[file_index] + '</style>');
        }
        file_index++;
        number0++;
    }
    list = script_list;
    number0 = 0, long = list.length;
    for (; ;) {
        if (number0 >= long) break;
        if (list[number0].use == 2) {
            text_T = text_T.replace(RE_Sc, '<script type="text/JavaScript" src="' + list[number0].url + '"></script>');
        }
        else {
            text_T = text_T.replace(RE_Sc, '<script>' + text_files[file_index] + '</script>');
        }
        file_index++;
        number0++;
    }
    text_T = put_ex_code_in_input(text_T);
    text_T = reset_default_configuration(text_T);
    HTML_text_all = text_T;
    console.log('file mixed.');
    M_E.innerHTML = 'file mixed.';
    return 0;
}
function remove_ex_spase(text) {
    let T_T = text;
    T_T = T_T.replace(/[ ]{2,}/g, ' ');
    return T_T;
}
function remove_ex_enter(text) {
    let T_T = text;
    T_T = T_T.replace(/[\r\n]/g, '');
    return T_T;
}
function change_LF_code(text) {
    let temp_T = text;
    temp_T = temp_T.replace(/</g, 'LF60b;');
    temp_T = temp_T.replace(/>/g, 'LF62b;');
    temp_T = temp_T.replace(/"/g, 'LF34b;');
    return temp_T;
}
function change_60(text) {
    let temp_T = text;
    temp_T = temp_T.replace(/</g, '&#60;');
    temp_T = temp_T.replace(/>/g, '&#62;');
    temp_T = temp_T.replace(/\n/g, '<br>');
    return temp_T;
}
function remove_exegesis(text_in) {
    let text_T = text_in;
    let RE_0 = /("([^"\r\n]){0,}")|('([^'\r\n]){0,}')/;
    let RE_1 = /(\/\/([^\r\n]){0,})|(\/\*([\s\S]){0,}?\*\/)/;
    let RE_2 = /<!--([\s\S]){0,}?-->/;
    let text_temp = "";
    let data_list = [];
    let long = 0;
    let number0 = 0;
    let V_T = [0, 0, 0];
    let R0 = 0, R1 = 1, R2 = 2, RT = 0;
    let chack_A_R = [
        function () {
            V_T[0] = text_T.search(RE_0);
        },
        function () {
            V_T[1] = text_T.search(RE_1);
        },
        function () {
            V_T[2] = text_T.search(RE_2);
        }
    ];
    let remove_A_R = [
        function () {
            text_temp = text_T.slice(0, V_T[0]);
            text_T = text_T.slice(V_T[0]);
            data_list[number0] = RE_0.exec(text_T)[0];
            number0++;
            text_T = text_temp + text_T.replace(RE_0, 'LF01dAtAb;');
        },
        function () {
            text_temp = text_T.slice(0, V_T[1]);
            text_T = text_T.slice(V_T[1]);
            text_T = text_temp + text_T.replace(RE_1, '');
        },
        function () {
            text_temp = text_T.slice(0, V_T[2]);
            text_T = text_T.slice(V_T[2]);
            text_T = text_temp + text_T.replace(RE_2, '');
        }
    ];
    function chack_A(index_in) {
        remove_A_R[index_in]();
        chack_A_R[index_in]();
    }
    V_T[R0] = text_T.search(RE_0);
    V_T[R1] = text_T.search(RE_1);
    V_T[R2] = text_T.search(RE_2);
    for (; ;) {
        if (V_T[R1] <= V_T[R2]) {
            RT = R2;
            R2 = R1;
            R1 = RT;
        }
        if (V_T[R0] <= V_T[R2]) {
            RT = R2;
            R2 = R0;
            R0 = RT;
        }
        if (V_T[R2] == -1) {
            for (; ;) {
                if (V_T[R0] <= V_T[R1]) {
                    RT = R1;
                    R1 = R0;
                    R0 = RT;
                }
                if (V_T[R1] == -1) {
                    for (; ;) {
                        if (V_T[R0] == -1) break;
                        chack_A(R0);
                    }
                    break;
                }
                chack_A(R1);
                chack_A_R[R0]();
            }
            break;
        }
        chack_A(R2);
        chack_A_R[R1]();
        chack_A_R[R0]();
    }
    number0 = 0, long = data_list.length;
    for (; ;) {
        if (number0 >= long) {
            break;
        }
        text_T = text_T.replace('LF01dAtAb;', data_list[number0]);
        number0++;
    }
    return text_T;
}
function put_ex_code_in_input(text) {
    let T_T = text;
    let RE_sign_in = /Looking_For_Code_SaVe_RmFilE_In_SiGn/;
    let RE_sign_start = /\/\*Looking_For_CoNfiG_EnD_sign\*\//;
    let RE_get_code = /\/\*Looking_For_CoNfiG_EnD_sign\*\/([\s\S]){0,}Looking_For_Code_SaVe_RmFilE_In_SiGn/;
    T_T = RE_get_code.exec(T_T);
    if (T_T === null || T_T === undefined) {
        document.getElementById('output_i').innerHTML = 'Error! Lost code mix tag.';
        return -1;
    }
    T_T = T_T[0];
    T_T = T_T.slice(0, -36);
    T_T = remove_exegesis(T_T);
    T_T = remove_ex_enter(T_T);
    T_T = remove_ex_spase(T_T);
    T_T = change_LF_code(T_T);
    T_T = text.replace(RE_sign_in, T_T);
    return T_T;
}
function make_down_load() {
    let text_T = HTML_text_all;
    let RE_V = /const([\s]){1,}Looking_For_DEV_Version_Message([\s]){0,}=([\s]){0,}{/;
    let RE_V_1 = /Version([\s]){0,}:([^,]){0,},/i;
    let RE_data = /('([^']){0,}')|("([^"]){0,}")/;
    let L_V = "";
    let number0 = 0;
    number0 = RE_V.exec(text_T);
    if (number0 === null | number0 === undefined) {
        document.getElementById('output_i').innerHTML = 'Error! Lost Version message.';
        return -1;
    }
    number0 = text_T.search(RE_V);
    text_T = text_T.slice(number0, number0 + 200);
    text_T = RE_V_1.exec(text_T)[0];
    text_T = RE_data.exec(text_T)[0];
    L_V = text_T.slice(1, -1);
    console.log('chack pass: Looking_For_V_' + L_V + '_DEV.html');
    show_version(L_V);
    console.log('show_code');
    text_T = HTML_text_all;
    text_T = change_60(text_T);
    show_text(text_T);
    console.log('show download');
    show_download(L_V, HTML_text_all);
    return 0;
}
function show_version(lv) {
    let F_I_E = document.getElementById('output_i');
    let B_E = document.getElementById('show_code');
    let B_V_E = document.getElementById('show_version');
    F_I_E.innerHTML = 'Pass';
    B_V_E.innerHTML = 'Looking_For_V_' + lv + '_DEV.html';
    B_E.style.height = '40px';
    B_V_E.style.height = '40px';
    return 0;
}
function show_download(lv, file) {
    let D_E = document.getElementById('download_div');
    let A_E = document.getElementById('download_a');
    const url = window.URL || window.webkitURL || window;
    const blob = new Blob([file]);
    A_E.download = 'Looking_For_V_' + lv + '_DEV.html';
    A_E.href = url.createObjectURL(blob);
    D_E.style.height = '100px';
    return 0;
}
function file_download() {
    let A_E = document.getElementById('download_a');
    A_E.click();
    console.log('download file.');
    return 0;
}
function show_text(file) {
    let temp_F = file;
    let P_E = document.getElementById('output_p');
    P_E.innerHTML = temp_F;
    return 0;
}
let show_code_value = false;
function show_code_a() {
    let B_E = document.getElementById('output_div');
    if (show_code_value) {
        B_E.style['grid-template-rows'] = '0fr';
        console.log('hind code.');
    }
    else {
        B_E.style['grid-template-rows'] = '1fr';
        console.log('show code.');
    }
    show_code_value = !show_code_value;
    return 0;
}
function reset_default_configuration(text_in) {
    const conf_temp_0 = 'var Looking_For_Background_If_Use=[\r\n[\r\n[-2, "0", 0, 0, 0, 0]\r\n],\r\n[\r\n[-2, "0", 0, 0, 0, 0]\r\n]\r\n];\r\n';
    const conf_temp_1 = 'var Looking_For_Links=[\r\n[0,"",0,0,0,ctrl_go_link_as,0,1],\r\n[-1,0,0,0,0,ctrl_go_link_as,0,1],\r\n];\r\n';
    const conf_temp_2 = 'function Looking_For_S_Save_File(if_reset_language = 1)';
    let RE_0 = /((var)|(let))([\s]){1,}Looking_For_Background_If_Use([\s]){0,}=([^;]){0,};/;
    let RE_1 = /((var)|(let))([\s]){1,}Looking_For_Links([\s]){0,}=([^;]){0,};/;
    let RE_2 = /function([\s]){1,}Looking_For_S_Save_File\(([\s]){0,}if_reset_language([\s]){0,}=([\s]){0,}0([\s]){0,}\)/;
    let text_T = text_in;
    text_T = RE_0.exec(text_T);
    if (text_T === null || text_T === undefined) {
        document.getElementById('output_i').innerHTML = 'Error! Lost configuration.';
        return -1;
    }
    text_T = text_in;
    text_T = text_T.replace(RE_0, conf_temp_0);
    text_T = text_T.replace(RE_1, conf_temp_1);
    text_T = text_T.replace(RE_2, conf_temp_2);
    console.log('reseted configuration.');
    return text_T;
}