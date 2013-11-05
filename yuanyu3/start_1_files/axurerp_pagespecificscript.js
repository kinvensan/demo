for(var i = 0; i < 254; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('isPlaying', '0');

SetGlobalVariableValue('albumShow', '0');

SetGlobalVariableValue('albumListMore', '0');

SetGlobalVariableValue('comefromlist', '0');

SetGlobalVariableValue('headerpopup', '0');

}

});
gv_vAlignTable['u115'] = 'center';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	SetPanelState('u119', 'pd1u119','none','',500,'none','',500);

	SetPanelVisibility('u116','','fade',200);

}
});
document.getElementById('u241_img').tabIndex = 0;
HookClick('u241', false);

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	MoveWidgetTo('u97', GetNum('-321'), GetNum('0'),'linear',200);

}
});
document.getElementById('u132_img').tabIndex = 0;
HookClick('u132', false);

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">跳到下一首</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitub5b166b93d504d11a5a3d2ebb600ac671() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitub5b166b93d504d11a5a3d2ebb600ac671, 2000);

}
});
gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u32'] = 'center';document.getElementById('u243_img').tabIndex = 0;
HookClick('u243', false);

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	SetPanelState('u0', 'pd7u0','none','',500,'swing','left',200);

}
});
document.getElementById('u207_img').tabIndex = 0;
HookClick('u207', false);

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u88'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelStateNext('u35',false,'none','',500,'none','',500);

}
});
document.getElementById('u226_img').tabIndex = 0;
HookClick('u226', false);

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd0u1','none','',500,'none','',500);

}
});
document.getElementById('u171_img').tabIndex = 0;
HookClick('u171', false);

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if ((GetGlobalVariableValue('headerpopup')) == ('0')) {

	SetPanelVisibility('u176','','fade',200);

	SetPanelState('u176', 'pd0u176','none','',500,'none','',500);

SetGlobalVariableValue('headerpopup', '1');

}
else
if (true) {

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

}
});
document.getElementById('u222_img').tabIndex = 0;
HookClick('u222', false);

u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd0u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u103'] = 'center';document.getElementById('u76_img').tabIndex = 0;
HookClick('u76', false);

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';document.getElementById('u235_img').tabIndex = 0;
HookClick('u235', false);

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	SetPanelState('u232', 'pd1u232','none','',500,'none','',500);

	SetPanelState('u215', 'pd0u215','none','',500,'none','',500);

	SetPanelState('u198', 'pd0u198','none','',500,'none','',500);
function waitu596da3e4b9c84d729959c02c0797dac91() {

	SetPanelState('u101', 'pd1u101','none','',500,'fade','',200);

	SetPanelState('u124', 'pd1u124','none','',500,'none','',500);

	SetPanelState('u160', 'pd1u160','none','',500,'none','',500);

SetWidgetRichText('u173', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">猜我喜欢</span></p>');

	MoveWidgetTo('u97', GetNum('-321'), GetNum('0'),'linear',200);

SetGlobalVariableValue('isPlaying', '1');

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">播放“猜我喜欢”</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitu216b86211a7c4b6bb454d23400d2de261() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu216b86211a7c4b6bb454d23400d2de261, 1000);
}
setTimeout(waitu596da3e4b9c84d729959c02c0797dac91, 200);

}
});
gv_vAlignTable['u15'] = 'center';document.getElementById('u85_img').tabIndex = 0;
HookClick('u85', false);

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u192'] = 'center';document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	SetPanelState('u119', 'pd0u119','none','',500,'none','',500);

	SetPanelVisibility('u116','hidden','fade',200);

}
});
document.getElementById('u189_img').tabIndex = 0;
HookClick('u189', false);

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'swing','left',200);

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

}
});
document.getElementById('u163_img').tabIndex = 0;
HookClick('u163', false);

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if ((GetGlobalVariableValue('headerpopup')) == ('0')) {

	SetPanelVisibility('u176','','fade',200);

	SetPanelState('u176', 'pd1u176','none','',500,'none','',500);

SetGlobalVariableValue('headerpopup', '1');

}
else
if (true) {

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

}
});
document.getElementById('u205_img').tabIndex = 0;
HookClick('u205', false);

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u238'] = 'center';gv_vAlignTable['u62'] = 'center';document.getElementById('u11_img').tabIndex = 0;
HookClick('u11', false);

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if ((GetGlobalVariableValue('albumListMore')) == ('0')) {

	SetPanelVisibility('u13','','fade',200);

SetGlobalVariableValue('albumListMore', '1');

}
else
if ((GetGlobalVariableValue('albumListMore')) == ('1')) {

	SetPanelVisibility('u13','hidden','fade',200);

SetGlobalVariableValue('albumListMore', '0');

}
});
document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'fade','',200);

	MoveWidgetTo('u97', GetNum('-321'), GetNum('0'),'none',500);

SetGlobalVariableValue('isPlaying', '1');

}
});
document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	SetPanelStateNext('u40',false,'none','',500,'none','',500);

}
});
document.getElementById('u220_img').tabIndex = 0;
HookClick('u220', false);

u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd0u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u155'] = 'center';document.getElementById('u112_img').tabIndex = 0;
HookClick('u112', false);

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	SetPanelState('u108', 'pd0u108','none','',500,'fade','',200);

}
});
gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u44'] = 'center';document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">分享成功</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitubaff3fc10d2b4da784ab514c29aab9d01() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitubaff3fc10d2b4da784ab514c29aab9d01, 1000);

}
});
document.getElementById('u89_img').tabIndex = 0;
HookClick('u89', false);

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

	SetPanelState('u0', 'pd6u0','none','',500,'swing','left',200);

}
});
document.getElementById('u179_img').tabIndex = 0;
HookClick('u179', false);

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','none','',500,'swing','left',200);

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

}
});
document.getElementById('u48_img').tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	SetPanelStateNext('u45',false,'none','',500,'none','',500);

}
});
document.getElementById('u57_img').tabIndex = 0;
HookClick('u57', false);

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u253'] = 'center';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u168'] = 'center';document.getElementById('u8_img').tabIndex = 0;
HookClick('u8', false);

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u246'] = 'center';document.getElementById('u158_img').tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">不喜欢这首，跳～</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitu41bc9ff92b1d4d41a24ce6f0f01e9a8e1() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu41bc9ff92b1d4d41a24ce6f0f01e9a8e1, 2000);

}
});
gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u52'] = 'center';document.getElementById('u174_img').tabIndex = 0;
HookClick('u174', false);

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	MoveWidgetTo('u97', GetNum('0'), GetNum('0'),'linear',200);

}
});
document.getElementById('u145_img').tabIndex = 0;
HookClick('u145', false);

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">跳到下一首</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waituc8d547fad19f479f97b7f96c8675b1381() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waituc8d547fad19f479f97b7f96c8675b1381, 2000);

}
});
document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	SetPanelStatePrevious('u50',false,'none','',500,'none','',500);

}
});
document.getElementById('u191_img').tabIndex = 0;
HookClick('u191', false);

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">谢谢您的心意 ：）</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitu1394acf10ba047df8e817e46640c0f0b1() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu1394acf10ba047df8e817e46640c0f0b1, 2000);

}
});
document.getElementById('u249_img').tabIndex = 0;
HookClick('u249', false);

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

	SetPanelState('u193', 'pd2u193','none','',500,'none','',200);

}
});
gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u202'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u219'] = 'center';document.getElementById('u61_img').tabIndex = 0;
HookClick('u61', false);

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u56'] = 'center';document.getElementById('u114_img').tabIndex = 0;
HookClick('u114', false);

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'fade','',200);

}
});
document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	SetPanelStateNext('u30',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u92'] = 'center';document.getElementById('u46_img').tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	SetPanelStatePrevious('u45',false,'none','',500,'none','',500);

}
});
document.getElementById('u183_img').tabIndex = 0;
HookClick('u183', false);

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">谢谢您的心意 ：）</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitu358a4b796f41481fa17e474666070e241() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu358a4b796f41481fa17e474666070e241, 2000);

}
});
gv_vAlignTable['u126'] = 'center';document.getElementById('u65_img').tabIndex = 0;
HookClick('u65', false);

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'swing','right',200);

}
});
document.getElementById('u181_img').tabIndex = 0;
HookClick('u181', false);

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'swing','left',200);

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u223'] = 'center';document.getElementById('u136_img').tabIndex = 0;
HookClick('u136', false);

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

SetGlobalVariableValue('comefromlist', '1');

}
});
gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u131'] = 'center';document.getElementById('u187_img').tabIndex = 0;
HookClick('u187', false);

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','none','',500,'swing','left',200);

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

}
});
document.getElementById('u31_img').tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	SetPanelStatePrevious('u30',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u139'] = 'center';document.getElementById('u87_img').tabIndex = 0;
HookClick('u87', false);

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	SetPanelState('u0', 'pd5u0','none','',500,'swing','left',200);

}
});
document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	SetPanelStateNext('u50',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u242'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u221'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">不喜欢这首，跳～</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitu51cad13d9dc24209b7de7cbc09fa498f1() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu51cad13d9dc24209b7de7cbc09fa498f1, 2000);

}
});
document.getElementById('u41_img').tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	SetPanelStatePrevious('u40',false,'none','',500,'none','',500);

}
});
document.getElementById('u209_img').tabIndex = 0;
HookClick('u209', false);

u209.style.cursor = 'pointer';
$axure.eventManager.click('u209', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

}
});
document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	SetPanelStatePrevious('u127',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u9'] = 'center';document.getElementById('u4_img').tabIndex = 0;
HookClick('u4', false);

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u234'] = 'center';document.getElementById('u147_img').tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">不喜欢这首，跳～</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitu523ea7178ff7461d82cab09ca8c49ca81() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu523ea7178ff7461d82cab09ca8c49ca81, 2000);

}
});
gv_vAlignTable['u19'] = 'center';document.getElementById('u18_img').tabIndex = 0;
HookClick('u18', false);

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','left',200);

	SetPanelState('u101', 'pd2u101','none','',500,'fade','',200);

	SetPanelState('u124', 'pd2u124','none','',500,'none','',500);

SetWidgetRichText('u173', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">DJ频道</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-King</span></p>');

	MoveWidgetTo('u97', GetNum('-321'), GetNum('0'),'none',200);

SetGlobalVariableValue('isPlaying', '1');

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">播放“</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">DJ频道</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">”</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waituedf20c92dc5945c68c630f0db8b7a1301() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waituedf20c92dc5945c68c630f0db8b7a1301, 1000);

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u70'] = 'center';document.getElementById('u24_img').tabIndex = 0;
HookClick('u24', false);

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	SetPanelState('u1', 'pd2u1','none','',500,'swing','left',200);

}
});
gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u204'] = 'center';document.getElementById('u156_img').tabIndex = 0;
HookClick('u156', false);

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

}
});
document.getElementById('u247_img').tabIndex = 0;
HookClick('u247', false);

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

	SetPanelState('u193', 'pd1u193','none','',500,'none','',200);

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u148'] = 'center';document.getElementById('u141_img').tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelStatePrevious('u140',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u129'] = 'center';document.getElementById('u143_img').tabIndex = 0;

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if (true) {

	SetPanelStateNext('u140',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u86'] = 'center';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelStatePrevious('u35',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u111'] = 'top';document.getElementById('u22_img').tabIndex = 0;
HookClick('u22', false);

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u21'] = 'center';document.getElementById('u154_img').tabIndex = 0;

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

	SetPanelStateNext('u151',false,'none','',500,'none','',500);

}
});
document.getElementById('u83_img').tabIndex = 0;
HookClick('u83', false);

u83.style.cursor = 'pointer';
$axure.eventManager.click('u83', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u144'] = 'center';document.getElementById('u245_img').tabIndex = 0;
HookClick('u245', false);

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	SetPanelState('u193', 'pd0u193','none','',500,'none','',200);

}
});
document.getElementById('u167_img').tabIndex = 0;
HookClick('u167', false);

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'swing','left',200);

}
});
gv_vAlignTable['u142'] = 'center';document.getElementById('u203_img').tabIndex = 0;
HookClick('u203', false);

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u23'] = 'center';document.getElementById('u237_img').tabIndex = 0;
HookClick('u237', false);

u237.style.cursor = 'pointer';
$axure.eventManager.click('u237', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'swing','left',200);

}
});
document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	SetPanelStateNext('u127',false,'none','',500,'none','',500);

}
});
document.getElementById('u201_img').tabIndex = 0;
HookClick('u201', false);

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	SetPanelState('u198', 'pd1u198','none','',500,'none','',500);

	SetPanelState('u232', 'pd0u232','none','',500,'none','',500);

	SetPanelState('u215', 'pd0u215','none','',500,'none','',500);
function waitu4a59e7bca6064e03bf4a8b84870dd43b1() {

	SetPanelState('u101', 'pd2u101','none','',500,'fade','',200);

	SetPanelState('u124', 'pd2u124','none','',500,'none','',500);

	SetPanelState('u160', 'pd2u160','none','',500,'none','',500);

SetWidgetRichText('u173', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">DJ频道</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-King</span></p>');

	MoveWidgetTo('u97', GetNum('-321'), GetNum('0'),'linear',200);

SetGlobalVariableValue('isPlaying', '1');

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">播放“</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">DJ频道</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">”</span></p>');

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

	SetPanelVisibility('u251','','fade',300);
function waituf5272adb444340bfbb88fa1ff913082a1() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waituf5272adb444340bfbb88fa1ff913082a1, 1000);
}
setTimeout(waitu4a59e7bca6064e03bf4a8b84870dd43b1, 200);

}
});
gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u248'] = 'center';gv_vAlignTable['u66'] = 'center';document.getElementById('u224_img').tabIndex = 0;
HookClick('u224', false);

u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

	SetPanelState('u0', 'pd8u0','none','',500,'swing','left',200);

	SetPanelState('u1', 'pd0u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u77'] = 'center';document.getElementById('u152_img').tabIndex = 0;

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	SetPanelStatePrevious('u151',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u182'] = 'center';document.getElementById('u69_img').tabIndex = 0;
HookClick('u69', false);

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
document.getElementById('u72_img').tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">发送中</span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">...</span></p>');

	SetPanelVisibility('u251','','fade',300);
function waitu9ed49fe9ccd445e58420b0d20f2453921() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu9ed49fe9ccd445e58420b0d20f2453921, 1000);

}
});
document.getElementById('u218_img').tabIndex = 0;
HookClick('u218', false);

u218.style.cursor = 'pointer';
$axure.eventManager.click('u218', function(e) {

if (true) {

	SetPanelState('u215', 'pd1u215','none','',500,'none','',500);

	SetPanelState('u232', 'pd0u232','none','',500,'none','',500);

	SetPanelState('u198', 'pd0u198','none','',500,'none','',500);
function waituc7127c48e3734e28a52c8f681eec81311() {

	SetPanelState('u101', 'pd0u101','none','',500,'fade','',200);

	SetPanelState('u124', 'pd0u124','none','',500,'none','',500);

	SetPanelState('u160', 'pd0u160','none','',500,'none','',500);

SetWidgetRichText('u173', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#9D9D9D;">流行频道</span></p>');

	MoveWidgetTo('u97', GetNum('-321'), GetNum('0'),'linear',200);

SetGlobalVariableValue('isPlaying', '1');

SetWidgetRichText('u253', '<p style="text-align:center;"><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">播放“</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">流行频道</span><span style="font-family:微软雅黑;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">”</span></p>');

	SetPanelVisibility('u176','hidden','fade',200);

SetGlobalVariableValue('headerpopup', '0');

	SetPanelVisibility('u251','','fade',300);
function waitu5fc75b631a3b460380223b72045d5d671() {

	SetPanelVisibility('u251','hidden','fade',300);
}
setTimeout(waitu5fc75b631a3b460380223b72045d5d671, 1000);
}
setTimeout(waituc7127c48e3734e28a52c8f681eec81311, 200);

}
});
document.getElementById('u28_img').tabIndex = 0;
HookClick('u28', false);

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'swing','right',200);

}
});
