/**
 *
 * @title 编辑表格基本示例
 * @description 编辑表格基本示例
 *
 */
import React, { Component } from 'react';
import Button from 'bee-button';

class BtnDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFlag: false,
            copyFlag: false
        }
    }

    getRowEditStatus = () =>{
        return this.state.editFlag;
    }

    openRowEdit = () =>{
        this.setState({
            editFlag : true
        })
    }

    closeRowEdit = () =>{
        this.setState({
            editFlag : false
        })
    }

    closeAllEdit = () =>{
        this.setState({
            copyFlag : false,
            editFlag:true
        })
    }

    render () {
        return (
        <div style={{'marginBottom':'20px'}}>
            <Button onClick={()=>{this.props.changPag()}} colors="primary" >改变分页</Button>
            <Button onClick={()=>{this.props.getAllData()}} colors="primary" style={{'marginLeft':'20px'}} >获得所有数据</Button>
            <Button onClick={()=>{this.props.getSelectData()}} colors="primary" style={{'marginLeft':'20px'}} >获得选中数据</Button>
            <Button onClick={()=>{this.props.validate()}} colors="primary" style={{'marginLeft':'20px'}}>主动校验</Button>
            <Button onClick={()=>this.props.validateSelect()} colors="primary" style={{'marginLeft':'20px'}}>主动校验选中数据</Button>
            <Button onClick={()=>{
                this.props.addRow()
            }} colors="primary" style={{'marginLeft':'20px'}}>增行</Button>
            <Button onClick={()=>{
                this.props.updateAll()
            }} colors="primary" style={{'marginLeft':'20px'}}>修改</Button>
            <Button onClick={()=>{this.props.delRow()}} colors="primary" style={{'marginLeft':'20px'}}>删行</Button>
            <Button onClick={() => {
                this.props.copyRow()
            }} colors="primary" style={{'marginLeft':'20px'}}>复制行</Button>
            { this.state.copyFlag ? <Button onClick={() =>
            {
                this.props.copyToEnd()
            }} colors="primary" style={{'marginLeft':'20px'}}>粘贴到末行</Button> : ""}
            {/*动态判断是否显示*/}
            { this.state.editFlag ? <Button onClick={()=>{
                this.props.save()
            }} colors="primary" style={{'marginLeft':'20px'}}>保存</Button> : ""}
            {/*动态判断是否显示*/}
            { this.state.editFlag ? <Button onClick={()=>{
                this.props.cancelEdit()
            }} colors="primary" style={{'marginLeft':'20px'}}>取消</Button> : ""}
        </div>
        )
    }
}
export default BtnDiv