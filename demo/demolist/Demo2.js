/**
*
* @title 编辑表格基本示例
* @description 编辑表格基本示例
*
*/
import React, { Component } from 'react';
import data from './data';
import { EditGrid } from '../../src/index'
import moment from 'moment';
import Button from 'bee-button';
import BtnDiv from '../BtnDiv'

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.column = [
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 150,
            },
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 150
            },
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 150
            },
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 150
            },
            {
                title: "员工姓名",
                dataIndex: "name",
                key: "name",
                width: 2400,
                renderType:'input',
                required:true,
                validate:true,
                fieldProps:{
                    maxLength:'10',
                    defaultValue:'姓名'
                },
                children: [
                    {
                        title: "姓",
                        dataIndex: "xing",
                        key: "xing",
                        width: 80,
                        renderType:'input',
                        required:true,
                        validate:true,
                        fieldProps:{
                            maxLength:'10',
                            defaultValue:'张'
                        },
                    },
                    {
                        title: "名",
                        dataIndex: "ming",
                        key: "ming",
                        width: 160,
                        renderType:'input',
                        required:true,
                        validate:true,
                        fieldProps:{
                            maxLength:'10',
                            defaultValue:'张'
                        },
                        children: [{
                                title: "中间名",
                                dataIndex: "zhong",
                                key: "zhong",
                                width: 80,
                                align: "center",
                                renderType:'input',
                                required:false,
                                validate:true,
                                fieldProps:{
                                    maxLength:'10',
                                    defaultValue:'小'
                                },
                            },
                            {
                                title: "名",
                                dataIndex: "last",
                                key: "last",
                                width: 80,
                                align: "center",
                                renderType:'input',
                                required:true,
                                validate:true,
                                fieldProps:{
                                    maxLength:'10',
                                    defaultValue:'三'
                                },
                            }
                        ]
                    }
                ]
            },
            {
                title: "员工性别",
                dataIndex: "sex",
                key: "sex",
                width: 120,
                renderType:'select',
                required:true,
                validate:true,
                fieldProps:{
                    allowClear:true,
                    defaultValue:'1',
                    data:[{
                        key: "请选择",
                        value: '',
                    }, {
                        key: "男",
                        value: '1'
                    }, {
                        key: "女",
                        value: '0'
                    }]
                },
            },
            {
                title: "工龄",
                dataIndex: "serviceYears",
                key: "serviceYears",
                width: 130,
                className: 'column-number-right ', // 靠右对齐
                renderType:'inputNumber',
                required:true,
                fieldProps:{
                    defaultValue:2
                }
            },
            {
                title: "司龄",
                dataIndex: "serviceYearsCompany",
                key: "serviceYearsCompany",
                width: 130,
                className: 'column-number-right ', // 靠右对齐
                renderType:'inputNumber',
                required:true,
            },
            {
                title: "年份(时间)",
                dataIndex: "year",
                key: "year",
                width: 300,
                renderType:'datetimepicker',
                required:true,
                fieldProps:{
                    defaultValue: moment(new Date()).format('YYYY-MM-DD HH:mm'),
                    dateFormat: 'YYYY-MM-DD HH:mm',
                    value: '2000-01-01 00:00',
                    showClose: false,
                    onChange: (value) =>{
                        return value == "" ? moment(new Date()).format('YYYY-MM-DD HH:mm') : value;
                    }
                },
                render:(text, record, index)=>{

                    let tmp = text;
                    if(tmp == null)
                    {
                        tmp = new Date();
                    }
                    return moment(tmp).format('YYYY-MM-DD HH:mm');
                }
            },
            {
                title: "年份",
                dataIndex: "year",
                key: "year",
                width: 100,
                renderType:'year',
                required:true,
                fieldProps:{
                    defaultValue:'2018'
                },
                render:(text, record, index)=>{
                    return moment(text).format('YYYY');
                }
            },
            {
                title: "月份",
                dataIndex: "month",
                key: "month",
                width: 120,
                renderType:'select',
                required:true,
                fieldProps:{
                    data:[{//月份
                        key: "请选择",
                        value: "",
                        disabled: true
                    }, {
                        key: "一月",
                        value: 1
                    }, {
                        key: "二月",
                        value: 2
                    }, {
                        key: "三月",
                        value: 3
                    }, {
                        key: "四月",
                        value: 4
                    }, {
                        key: "五月",
                        value: 5
                    }, {
                        key: "六月",
                        value: 6
                    }, {
                        key: "七月",
                        value: 7
                    }, {
                        key: "八月",
                        value: 8
                    }, {
                        key: "九月",
                        value: 9
                    }, {
                        key: "十月",
                        value: 10
                    }, {
                        key: "十一月",
                        value: 11
                    }, {
                        key: "十二月",
                        value: 12
                    }]
                },
            },
            {
                title: "补贴类别",
                dataIndex: "allowanceType",
                key: "allowanceType",
                width: 120,
                renderType:'select',
                required:true,
                fieldProps:{
                    data:[{
                        key: "请选择",
                        value: "",
                        disabled: true
                    }, {
                        key: "电脑补助",
                        value: 1
                    }, {
                        key: "住宿补助",
                        value: 2
                    }, {
                        key: "交通补助",
                        value: 3
                    }]
                },
            },
            {
                title: "补贴标准",
                dataIndex: "allowanceStandard",
                key: "allowanceStandard",
                width: 120,
                className: 'column-number-right ', // 靠右对齐
                renderType:'inputNumber',
                required:true,
                fieldProps:{
                    max: 999999,
                    min: 0,
                    step: 1,
                    precision: 2
                },
            },
            {
                title: "实际补贴",
                dataIndex: "allowanceActual",
                key: "allowanceActual",
                width: 120,
                className: 'column-number-right ', // 靠右对齐
                renderType:'inputNumber',
                required:true,
                fieldProps:{
                    max: 999999,
                    min: 0,
                    step: 1,
                    precision: 2
                },
            },
            {
                title: "是否超标",
                dataIndex: "exdeeds",
                key: "exdeeds",
                width: 120,
                required:true,
                renderType:'select',
                fieldProps:{
                    data:[{
                        key: "请选择",
                        value: "",
                        disabled: true
                    }, {
                        key: "未超标",
                        value: 0
                    }, {
                        key: "超标",
                        value: 1
                    }]
                },
            },
            {
                title: "领取方式",
                dataIndex: "pickType",
                key: "pickType",
                width: 120,
                renderType:'select',
                required:true,
                fieldProps:{
                    data:[{
                        key: "请选择",
                        value: "",
                        disabled: true
                    }, {
                        key: "转账",
                        value: 1
                    }, {
                        key: "现金",
                        value: 2
                    }]
                },
            },
            {
                title: "备注",
                dataIndex: "remark",
                key: "remark",
                width: 100,
                renderType:'input',
                required:false,
            }
        ];
        this.state={
            activePage:1,
            total:100,
            items:10
        }
    }
    /**
     * 跳转指定页码
     *
     * @param {*} pageIndex
     */
    freshData = (pageIndex) => {
        console.log('freshData')
    }

    /**
     * 分页  跳转指定页数和设置一页数据条数
     *
     * @param {*} index
     * @param {*} value
     */
    onDataNumSelect = (index, value) => {
        console.log('onDataNumSelect')
    }

    /**
     * type为0标识为pageIndex,为1标识pageSize
     *
     * @param {*} value
     * @param {*} type
     */
    onPageSelect = (value, type) => {
        console.log('onPageSelect')
    }

    getAllData=()=>{
        console.log(this.grid.allData)
    }
    getSelectData=()=>{
        console.log(this.grid.selectList)
    }
    validate=()=>{
        let error = this.grid.validate();
        if(error){
            alert('数据校验失败，错误信息见控制台');
            console.log(error)
        }else{
            alert('数据校验成功')
        }
    }
    validateSelect=()=>{
        let error = this.grid.validateSelect();
        if(error){
            alert('数据校验失败，错误信息见控制台');
            console.log(error)
        }else{
            alert('数据校验成功')
        }
    }

    changPag=()=>{
        this.setState({
            activePage:2,
            total:50,
            items:20
        })
    }
    addRow=()=>{
        this.grid.addRow()
        this.btnDiv.openRowEdit()
    }
    updateAll=()=>{
        this.grid.updateAll();
        this.btnDiv.openRowEdit();
    }
    delRow=()=>{
        this.grid.delRow()
    }
    copyRow=()=>{
        this.grid.copyRow()
        if(this.btnDiv.getRowEditStatus)
        {
            alert("请先结束编辑!");
            return false;
        }
        this.btnDiv.openRowEdit()
    }
    copyToEnd=()=>{
        this.grid.copyToEnd()
        this.btnDiv.closeAllEdit()
    }
    save=()=>{
        //拿到添加的数据
        //this.grid.selectList
        //进行业务上的其它校验
        //校验没有问题保存记录
        let error = this.grid.validateSelect();
        if(error){
            alert('数据校验失败，错误信息见控制台');
            console.log(error)
        }else{
            alert('数据校验成功')
            this.grid.save()
            this.btnDiv.closeRowEdit()
        }
    }
    cancelEdit=()=>{
        this.grid.cancelEdit();
        this.btnDiv.closeRowEdit()
    }
    openRowEdit=(editItem)=>{
        alert("开启行编辑!" + JSON.stringify(editItem));
    }

    onRowDoubleClick=(editItem)=>{
        this.btnDiv.openRowEdit()
        //alert("双击开启行编辑!" + JSON.stringify(editItem));
    }

    render () {
        let paginationObj = {
            activePage: this.state.activePage,//当前页
            total: this.state.total,//总条数
            items: this.state.items,
            freshData: this.freshData,//刷新数据
            onDataNumSelect: this.onDataNumSelect,//选择记录行
            // disabled: false//分页条禁用状态
        }
        return (
            <div className='grid-parent'>
                {/*<div style={{'marginBottom':'20px'}}>*/}
                    {/*<Button onClick={this.changPag} colors="primary" >改变分页</Button>*/}
                    {/*<Button onClick={this.getAllData} colors="primary" style={{'marginLeft':'20px'}} >获得所有数据</Button>*/}
                    {/*<Button onClick={this.getSelectData} colors="primary" style={{'marginLeft':'20px'}} >获得选中数据</Button>*/}
                    {/*<Button onClick={this.validate} colors="primary" style={{'marginLeft':'20px'}}>主动校验</Button>*/}
                    {/*<Button onClick={this.validateSelect} colors="primary" style={{'marginLeft':'20px'}}>主动校验选中数据</Button>*/}
                    {/*<Button onClick={this.addRow} colors="primary" style={{'marginLeft':'20px'}}>增行</Button>*/}
                    {/*<Button onClick={this.updateAll} colors="primary" style={{'marginLeft':'20px'}}>修改</Button>*/}
                    {/*<Button onClick={this.delRow} colors="primary" style={{'marginLeft':'20px'}}>删行</Button>*/}
                    {/*<Button onClick={this.copyRow} colors="primary" style={{'marginLeft':'20px'}}>复制行</Button>*/}
                    {/*{ this.copyFlag ? <Button onClick={this.copyToEnd} colors="primary" style={{'marginLeft':'20px'}}>粘贴到末行</Button> : ""}*/}
                    {/*<Button onClick={this.save} colors="primary" style={{'marginLeft':'20px'}}>保存</Button>*/}
                    {/*<Button onClick={this.cancelEdit} colors="primary" style={{'marginLeft':'20px'}}>取消</Button>*/}
                {/*</div>*/}
                <BtnDiv
                    ref={(el) => this.btnDiv = el}
                    changPag={this.changPag}
                    getAllData={this.getAllData}
                    getSelectData={this.getSelectData}
                    validate={this.validate}
                    validateSelect={this.validateSelect}
                    addRow={this.addRow}
                    updateAll={this.updateAll}
                    delRow={this.delRow}
                    copyRow={this.copyRow}
                    copyToEnd={this.copyToEnd}
                    save={this.save}
                    cancelEdit={this.cancelEdit}
                ></BtnDiv>
                <EditGrid
                    ref={(el) => this.grid = el}//ref用于调用内部方法
                    data={data}//数据
                    columns={this.column}//定义列
                    paginationObj={paginationObj}//分页数据
                    excludeKeys={['id','ts','lastModified']}
                    delRow={(selectList,newData)=>{
                        console.log('删除，数据如下-----------',selectList)
                        console.log('新的数据如下-----------',newData)
                    }}
                    save={(selectList)=>{
                        console.log('保存，数据如下-----------',selectList)
                        return false;
                    }}
                    multiHeader={true}
                    bordered
                    headerScroll={true}
                    title="我是标题"
                    showTitlePanel={false}
                    openRowEdit={this.openRowEdit}
                    onRowDoubleClick={this.onRowDoubleClick}
                />
            </div>
        )
    }
}
export default Demo2