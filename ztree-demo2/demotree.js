
var showNodes=[];	//用于存储查询到的结点


$(function(){
    init();
    setCheck();
});

// 关联选择设置
function setCheck() {
    var zTree = $.fn.zTree.getZTreeObj("treedemo"),
        py = $("#py").attr("checked") ? "p" : "",
        sy = $("#sy").attr("checked") ? "s" : "",
        pn = $("#pn").attr("checked") ? "p" : "",
        sn = $("#sn").attr("checked") ? "s" : "",
        type = {"Y": py + sy, "N": pn + sn};
    zTree.setting.check.chkboxType = {"Y": "s", "N": "s"};
}

function init(){
    var zNodes=[
        { id:123456, pId:0, name:"根节点", open:true},
        { id:1, pId:123456, name:"部门1"},
        { id:11, pId:1, name:"部门1.1"},
        { id:111, pId:11, name:"部门1.1.1"},
        { id:112, pId:11, name:"部门1.1.2"},
        { id:12, pId:1, name:"部门1.2"},
        { id:121, pId:12, name:"部门1.2.1"},
        { id:122, pId:12, name:"部门1.2.2"},
        { id:123, pId:12, name:"部门1.2.3"},
        { id:124, pId:12, name:"部门1.2.4"},
        { id:125, pId:12, name:"部门1.2.5"},
        { id:126, pId:12, name:"部门1.2.6"},
        { id:127, pId:12, name:"部门1.2.7"},
        { id:128, pId:12, name:"部门1.2.8"},
        { id:2, pId:123456, name:"部门2", checked:true},
        { id:21, pId:2, name:"部门2.1"},
        { id:22, pId:2, name:"部门2.2"},
        { id:221, pId:22, name:"部门2.2.1", checked:true},
        { id:222, pId:22, name:"部门2.2.2"},
        { id:23, pId:2, name:"部门2.3"},
        { id:24, pId:2, name:"部门2.4"},
        { id:25, pId:2, name:"部门2.5"},
        { id:26, pId:2, name:"部门2.6"},
        { id:27, pId:2, name:"部门2.7"},
        { id:28, pId:2, name:"部门2.8"},
        { id:29, pId:2, name:"部门2.9"}
    ];

    var setting = {
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        }
    };

    zTreeObj = $.fn.zTree.init($("#treedemo"), setting, zNodes);
    $("#search-bt").click(searchNodes);
}

//用按钮查询节点
function searchNodes(){
    var treeObj = $.fn.zTree.getZTreeObj("treedemo");
    var keywords=$("#keyword").val();
    var nodes = treeObj.getNodesByParamFuzzy("name", keywords, null);
    if (nodes.length>0) {
        treeObj.selectNode(nodes[0]);
        //选中搜索到的节点
        treeObj.checkNode(nodes[0]);
    }

}

// 定义节点保存的输入框
var $inp_sel_name = $("#sel-ztree-name").val();
var $inp_sel_id =  $("#sel-ztree-id").val();
// 保存按钮点击
function onCheck(e, treeId, treeNode) {
    var treeObj = $.fn.zTree.getZTreeObj("treedemo"),
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
    var treeObj = $.fn.zTree.getZTreeObj("treedemo");
    treeObj.checkAllNodes(true);
}

//全取消
function CancelAllNodes() {
    var treeObj = $.fn.zTree.getZTreeObj("treedemo");
    treeObj.checkAllNodes(false);
}
