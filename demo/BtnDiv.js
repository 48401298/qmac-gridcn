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

    render () {
        return (
        <div style={{'marginBottom':'20px'}}>
            <Button onClick={()=>{this.props.changPag()}} colors="primary" >改变分页</Button>
            <Button onClick={()=>{this.props.getAllData()}} colors="primary" style={{'marginLeft':'20px'}} >获得所有数据</Button>
            <Button onClick={()=>{this.props.getSelectData()}} colors="primary" style={{'marginLeft':'20px'}} >获得选中数据</Button>
            <Button onClick={()=>{this.props.validate()}} colors="primary" style={{'marginLeft':'20px'}}>主动校验</Button>
            <Button onClick={()=>this.props.validateSelect()} colors="primary" style={{'marginLeft':'20px'}}>主动校验选中数据</Button>
            <Button onClick={()=>{
                this.setState({
                    editFlag : true
                })
                this.props.addRow()
            }} colors="primary" style={{'marginLeft':'20px'}}>增行</Button>
            <Button onClick={()=>{
                this.setState({
                    editFlag : true
                })
                this.props.updateAll()
            }} colors="primary" style={{'marginLeft':'20px'}}>修改</Button>
            <Button onClick={()=>{this.props.delRow()}} colors="primary" style={{'marginLeft':'20px'}}>删行</Button>
            <Button onClick={() => {
                if(this.state.editFlag)
                {
                    alert("请先结束编辑!");
                    return false;
                }
                this.setState({
                    copyFlag : true
                })
                this.props.copyRow()
            }} colors="primary" style={{'marginLeft':'20px'}}>复制行</Button>
            { this.state.copyFlag ? <Button onClick={() =>
            {
                this.setState({
                    copyFlag : false,
                    editFlag:true
                })
                this.props.copyToEnd()
            }} colors="primary" style={{'marginLeft':'20px'}}>粘贴到末行</Button> : ""}
            {/*动态判断是否显示*/}
            { this.state.editFlag ? <Button onClick={()=>{
                this.props.save()
                this.setState({
                    editFlag : false
                })
            }} colors="primary" style={{'marginLeft':'20px'}}>保存</Button> : ""}
            {/*动态判断是否显示*/}
            { this.state.editFlag ? <Button onClick={()=>{
                this.props.cancelEdit()
                this.setState({
                    editFlag : false
                })
            }} colors="primary" style={{'marginLeft':'20px'}}>取消</Button> : ""}
        </div>
        )
    }
}
export default BtnDiv