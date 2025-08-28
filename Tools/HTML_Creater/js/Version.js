const Version = {
    V: '0.1.1',
    D: '2024/10/24',
    U: 'V 2.01.62+'
}
function version_load() {
    document.getElementById('version').innerHTML = 'Version: ' + Version.V+ '<br>Applicable to:&ensp;&ensp;&ensp;&ensp;&ensp;<br>'+Version.U;
}