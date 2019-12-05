/**
 * Created by kange666 on 2019/3/22.
 */
var setting = {
    check: {
        enable: true
//				开启元素不能选中功能
//				nocheckInherit: true
    },
    data: {
        simpleData: {
            enable: true
        }
    }
};
// nocheck:true  设置节点不能选中
var zNodes =[
    { id:1, pId:0, name:"随意勾选 1", open:true},
    { id:11, pId:1, name:"随意勾选 1-1", open:true},
    { id:111, pId:11, name:"无 checkbox 1-1-1"},
    { id:112, pId:11, name:"随意勾选 1-1-2"},
    { id:12, pId:1, name:"无 checkbox 1-2", open:true},
    { id:121, pId:12, name:"无 checkbox 1-2-1"},
    { id:122, pId:12, name:"无 checkbox 1-2-2"},
    { id:2, pId:0, name:"随意勾选 2", checked:true, open:true},
    { id:21, pId:2, name:"随意勾选 2-1"},
    { id:22, pId:2, name:"随意勾选 2-2", open:true},
    { id:221, pId:22, name:"随意勾选 2-2-1", checked:true},
    { id:222, pId:22, name:"随意勾选 2-2-2"},
    { id:23, pId:2, name:"随意勾选 2-3"}
];
// 关联选择设置
function setCheck() {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        py = $("#py").attr("checked") ? "p" : "",
        sy = $("#sy").attr("checked") ? "s" : "",
        pn = $("#pn").attr("checked") ? "p" : "",
        sn = $("#sn").attr("checked") ? "s" : "",
        type = {"Y": py + sy, "N": pn + sn};
    zTree.setting.check.chkboxType = {"Y": "s", "N": "s"};
}

//初始化树
$(document).ready(function () {
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    setCheck();
});
// 定义节点保存的输入框
var $inp_sel_name = $("#sel-ztree-name").val();
var $inp_sel_id =  $("#sel-ztree-id").val();
// 保存按钮点击
function onCheck(e, treeId, treeNode) {
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = treeObj.getCheckedNodes(true),
        $getid= "";
    $getname = "";
    // 得到选中节点name和id
    for (var i = 0; i < nodes.length; i++) {
        $getid += nodes[i].id+',';
        $getname += nodes[i].name+',';
        // console.log("节点id:" + id + "节点名称" + name); //获取选中节点的值
    }
    // 赋值
    $inp_sel_name = $getname;
    $inp_sel_id = $getid;
    console.log('选中节点名称为:'+$inp_sel_name);
    console.log('选中节点id为:'+$inp_sel_id);
}
// 全选按钮
// 全选按钮
//全选
function CheckAllNodes() {
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    treeObj.checkAllNodes(true);
}

//全取消
function CancelAllNodes() {
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    treeObj.checkAllNodes(false);
}