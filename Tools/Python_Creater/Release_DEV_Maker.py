#!/usr/bin/env python
# Sittings
Be_one_file = True
Shot_code_name = True
Default_style = ""
Default_links = ""
Home_file_dir = "Code"
Home_file_name = "Looking_For.html"

import sys, os

class Sitting :
    be_one_file =Be_one_file
    short_code_name =Shot_code_name
    default_style =Default_style
    default_links = Default_links
    home_file_path = ""

    def __init__(self):
        pass
    def get_argv(self):
        path_after=False
        tin = sys.argv
        for arg in tin :
            if(path_after):
                Sitting.home_file_path=arg
                path_after=False
                continue
            if(arg.lower() == "-onefile"):
                Sitting.be_one_file=True
                continue
            elif(arg.lower() == "-onefile=true"):
                Sitting.be_one_file=True
                continue
            elif(arg.lower() == "-onefile=false"):
                Sitting.be_one_file=False
                continue
            
            if(arg.lower() == "-shortname"):
                Sitting.short_code_name=True
                continue
            elif(arg.lower() == "-shortname=true"):
                Sitting.short_code_name=True
                continue
            elif(arg.lower() == "-shortname=false"):
                Sitting.short_code_name=False
                continue
            if (arg.lower() == "-homefile"):
                path_after=True
                continue
            arg_t = arg.split("=",1)
            if(arg_t[0].lower() == "-homefile"):
                try:
                    Sitting.home_file_path=arg_t[1]
                except:
                    pass
                continue
    def get_home_dir(self):
        file_name = Home_file_name
        folder_name = Home_file_dir + "\\"
        work_dir = os.getcwd()
        temp_dir = work_dir.split("\\")
        home_dir = ""
        for t_dir in temp_dir[0:-2]:
            home_dir = home_dir + t_dir + "\\"
        home_dir = home_dir + folder_name
        
        print("\t\tSet Home URL is:",home_dir)
        print("\t\tSet file name is:",file_name)
        return (home_dir, file_name)
            
    def get_home_path(self):
        if(Sitting.home_file_path == ""):
            dir,name = self.get_home_dir()
            Sitting.home_file_path=dir + name
            print("\n\tAuto load Home file path: %s" % Sitting.home_file_path)
            return (True)
        else:
            print("\n\tGet Home file path: %s" % Sitting.home_file_path)
            return(True)
            

    def show_sitting(self):
        print("\n\tBuild sitting:")
        print("\t\tBe one file: %s" % str((Sitting.be_one_file)))
        print("\t\tShort code name: %s" % str(Sitting.short_code_name))
        print("\t\tDefault style: %s" % Sitting.default_style)
        print("\t\tDefault links: %s" % Sitting.default_links)

class Builder:
    home_file_dir=""
    home_file=""
    home_file_type=""
    js_files_dir=[""]
    js_files=[""]
    js_files_type=[""]
    css_files_dir=[""]
    css_files=[""]
    css_files_type=[""]

    def __init__(self):
        pass
    def get_home_file(self,path):
        state,text = get_file_text(path)
        if(state):
            print("\tLoad Home file %s success!" % path)
            Builder.home_file = text
            return True
        else:
            print("\tLoad Home file %s failed!" % path)
            return False
    def get_home_file_type(self):
        Builder.home_file_type=Builder.get_code_type(self,Builder.home_file)

    def get_code_type(self,code):
        in_m  = ['<!--', '//' , '/*' , '"' , "'"]
        out_m = ['->' , '\\n', '*/' , '"' , "'"]
        #code     0
        #comments 1
        #data     2
        type_v =[ '1' ,  '1' ,  '1' , '2' , '2']
        in_m_l = []
        out_m_l = []
        type_i = []
        return_v = ""
        type_t = -1
        type_t_leave = 1
        type_t_leave_l = 0
        index = 0
        def get_remean(i,t):
            i -= 1
            if(code[i] == '\\'):
                t = not t
                t = get_remean(i,t)
            return t




        for i in range(len(in_m)):
            type_i.append(i)
            i+=1
        for c in in_m:
            in_m_l.append(len(c))
        for c in out_m:
            out_m_l.append(len(c))
        
        def check():
            nonlocal return_v
            nonlocal type_t
            nonlocal type_t_leave
            nonlocal type_t_leave_l
            nonlocal index
            if(type_t == -1):
                if(type_t_leave_l>=1):
                    return_v = return_v + type_v[type_t_leave]
                    type_t_leave_l -= 1
                else:
                    for (t,l,t_i) in zip(in_m,in_m_l,type_i):
                        if(code[index:index+l] == t):
                            type_t = t_i
                            return_v = return_v + type_v[t_i]
                            break
                    else:
                        return_v = return_v + '0'
            else:
                if(code[index:index+out_m_l[type_t]]==out_m[type_t]):
                    if get_remean(index,False):
                        return_v = return_v + type_v[type_t]
                    else:
                        type_t_leave = type_t
                        type_t_leave_l = out_m_l[type_t] - 1
                        return_v = return_v + type_v[type_t]
                        type_t = -1
                else:
                    return_v = return_v + type_v[type_t]
            index += 1

        for _ in code:
            check()
        
        return return_v
    
    def rm_home_file_comments(self):
        return Builder.rm_comments(self,Builder.home_file,Builder.home_file_type)
    
    def rm_comments(self,code,type_in):
        return_v = ""
        for c,t in zip(code,type_in):
            if t == '1':
                return_v = return_v + ' '
            else:
                return_v = return_v + c
        return return_v
    def rm_home_file_data(self):
        return Builder.rm_data(self,Builder.home_file,Builder.home_file_type)
    
    def rm_data(self,code,type_in):
        return_v = ""
        type_leave = '0'
        type_leave_leave = '0'
        v_leave = ''
        for c,t in zip(code,type_in):
            if t == '2':
                if type_leave == '2':
                    if type_leave_leave == '2':
                        v_leave = ' '
            return_v = return_v + v_leave
            type_leave_leave = type_leave
            type_leave = t
            v_leave = c
        return_v = return_v + v_leave
        return return_v
    
def get_file_text(url):
    text = ""
    print("\t\tLoading file :",url)
    try:
        file = open(url, 'r',encoding='UTF-8')
    except:
        print("\t\tLoad file :",url," error.")
        return (False,text)
    text = file.read()
    file.close()
    return (True,text)

def get_links(text):
    in_v = []

def get_markup(markup_texts_start,markup_text_out,text_find,all = True):
    in_m  = ['<!-','//',   '/*', '"', "'"]
    in_m_l = [3,     2,      2,   1,   1 ]
    out_m = ['->',  '\\n', '*/', '"', "'"]
    out_m_l = [2,     2,     2,   1,   1 ]
    
    text_in = text_find
    text_in_len = len(text_in)
    mark_s_len = len(markup_texts_start)
    mark_o_len = len(markup_text_out)
    i = 0
    find_text_re = False
    find_text = []
    find_text_index = 0

    finded_index = 0
    finded_lst = ['']
    finded_li = 0

    while(1):
        ts = 0
        print('ts:',ts)
        try:
            if i >= text_in_len:
                break
            while(1):
                if i >= text_in_len:
                    break
                print("ex_pass i = ",i)
                cked_0 = True
                ts = 0
                for tsmt in in_m:
                    print('find ing in: ',text_in[i:i+in_m_l[ts]],'|||',in_m[ts],'<<<<',i)
                    if text_in[i:i+in_m_l[ts]] == in_m[ts]:
                        finded_index = i
                        finded_lst[finded_li] = text_in[finded_index - 5:finded_index + 10]
                        finded_li += 1
                        print('ex finded!')
                        cked_0 = False
                        while(1):
                            i += 1
                            if i >= text_in_len:
                                break
                            print('find ing out: ',text_in[i:i+out_m_l[ts]],'|||',out_m[ts],'<<<',i,':',i + out_m_l[ts],'in:',text_in_len,text_in[i-2:i+out_m_l[ts]+2],finded_index,'>>>',text_in[finded_index - 5:finded_index + 100])
                            if text_in[i:i+out_m_l[ts]] == out_m[ts]:
                                print('ex outed!')
                                break
                    ts += 1
                if cked_0:
                    print('ex pass pass out 0 out')
                    break
            print('Finding :',text_in[i:i+mark_s_len] ,'||',markup_texts_start)
            if text_in[i:i+mark_s_len] == markup_texts_start:
                print('find----------------------------------------------------------------')
                find_text_re = True
                find_text[find_text_index] = ""
                while(1):
                    if i >= text_in_len:
                        break
                    while(1):
                        if i >= text_in_len:
                            break
                        print("expass 2")
                        chkd_1 = True
                        ts = 0
                        for tsmt in in_m:
                            if text_in[i:i+in_m_l[ts]] == in_m[ts]:
                                chkd_1 = False
                                while(1):
                                    if i >= text_in_len:
                                        break
                                    i += 1
                                    if text_in[i:i+out_m_l[ts]] == out_m[ts]:
                                        break
                            ts += 1
                        if chkd_1:
                            break
                    print('Finding out :',text_in[i:i+mark_o_len],'////',markup_text_out)
                    if text_in[i:i+mark_o_len] == markup_text_out:
                        print("find out")
                        find_text[find_text_index] = find_text[find_text_index] + text_in[i:i+mark_o_len]
                        find_text_index += 1
                        break
                    find_text[find_text_index] = find_text[find_text_index] + text_in[i]
            print('index: ',i)
            i += 1
        except Exception as e:
            print('ex out: ',e)
            break
    print(finded_lst)
    return (find_text_re, find_text)

def remove_no_title_code(text):
    pass

def check_code_error_HTML(text):
    pass

def start():
    sitting=Sitting()
    sitting.get_argv()
    sitting.show_sitting()
    
    home_url, HTML_file_name = Sitting.get_home_dir()
    t,a = get_file_text(home_url + HTML_file_name)
    if t:
        print('get file!')
        t,a = get_markup("<head ",'</head>',a)
        print(a)
    else:
        print("Main HTML file load fall!")
        return False
    
def run():
    sitting=Sitting()
    (a,b)=sitting.get_home_dir()
    fo = open(a+b,'r',encoding="utf-8")
    print(fo.read())
#start()
#get_home_dir()
#run()
def test0():
    sitting=Sitting()
    sitting.get_argv()
    sitting.show_sitting()
def test():
    sitting=Sitting()
    sitting.get_argv()
    sitting.show_sitting()
    sitting.get_home_path()
    builder=Builder()
    builder.get_home_file(sitting.home_file_path)
    builder.get_home_file_type()
    print("len %d %d" % (len(builder.home_file),len(builder.home_file_type)))
    type_temp = builder.rm_home_file_data()
    #type_temp=builder.get_code_type(builder.home_file)
    print(type_temp)
    """
    i = 0
    temp_1 = builder.home_file
    temp_2 = builder.home_file_type
    for a in temp_1:
        if a == "\n":
            temp_2= temp_2[0:i] + '\n' + temp_2[i+1:]
        i+=1
    temp_1=temp_1.split('\n')
    temp_2=temp_2.split('\n')
    for a,b in zip(temp_1,temp_2):
        print(a," || ",len(a))
        print(b, " || ",len(b))
    
"""
test()
