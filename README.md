# 路亭 Looking_For
A quick navigation page.

[English](README.md) • [中文](README_ZH.md)

# Overview
The program is a quick navigation page, and you only need to enter a keyword once to get the search results for each landing page.
The program is a single-file web page that is small and easy to deploy.
This program supports a high degree of customization configuration, and users can freely decide the target page link, color scheme, background image, launch method, etc.

# Preview
The following link preview page is available:<br>
<https://rainanxu.github.io/Looking_For/><br>
<https://looking-for.rainanxu.top/>

# Using
This program supports direct interaction and link control.
Link examples:<br>
`file:///C://Web/Looking_For.html#mode=3&urlnumber=8&keyword=aaa`

## parameters
When the program uses link control, it recognizes only the parameters of a specific rule:

Parameter|Explain
----|----
mode|mode control.
urlnumber|The numeric number of the access link.
keyword|keyword to search for.
URLlink|the link to be accessed.
#|Link Controls Start Tag.
=|Link control content start tag.
&|Link control delimited tags.

## Mode
The Mode has three different operating modes, which may be switched between them when running.

Mode|Explain
----|----
0|mode 0, when accessing the link, you will go from the navigation page to the preview page.
1|Mode 1, open a new tab page and open the preview page when you access the link.
2|Mode 2, when you visit a link, you open a new tab page and visit the landing page.
3|Mode 3, directly open the preview page.
-1<br>s<br>sitting|Setup mode, open the settings page, and modify the program configuration.

## Advice & Tips
Configurations can be migrated using a variety of saving methods using federation.
* Migrate the configuration to a new file by saving it to a local cache and then deploying the new file to the target location.
* Save the configuration to a file and migrate the file to the new device to migrate the configuration to the new device.
* If you need to rename images in bulk, you can use the My Rename tool[Rename_tool](https://github.com/Rainanxu/Rename_tool/).

The aspect ratio of the background image can be inconsistent with the target screen, and additional dynamic effects will appear when switching.

# Development

Due to browser permission restrictions, the save function requires additional operations to work properly, and the release can be completed in the following ways.

## Use the export tool

### HTML Creater
After modifying the `Code/Looking_For.html`, use the `Tools/HTML_Creater/Release_DEV_Maker.html` to generate the release.

The export tool checks the program code, and the rule displays a download button, otherwise the defect location is displayed.

## Manually modify the code
The code of this program is special, and all the code will be merged into a single line when saved, and part of the code will be kept in the label attributes, so some special characters need to be modified.

Modify the code according to the following principles:
* 1 Replace all link codes to the link location.
* 2 The program can still run normally after removing all line breaks.
* * Try to keep the omissionable `;`.
* 3 Copy the code in the front of `/*Looking_For_CoNfiG_EnD_sign*/` and the end of `Looking_For_Code_SaVe_RmFilE_In_SiGn` and between the two, and paste it in `<input placeholder="I" id="Looking_For_S_Save_Body" value="Looking_For_Code_SaVe_RmFilE_In_SiGn">` `value`*Does not contain `Looking_For_Code_SaVe_RmFilE_In_SiGn`*.
* * Replace `"` with `LF34b;`.
* * Replace `<` with `LF60b;`.
* * Replace `>` with `LF62b;`.
* * Remove all line breaks.

After this modification, the program will run normally.

