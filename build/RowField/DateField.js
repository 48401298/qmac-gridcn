'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _asyncValidator = require('async-validator');

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _beeDatepicker = require('bee-datepicker');

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _zh_CN = require('bee-datepicker/build/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _FieldWrap = require('./FieldWrap');

var _FieldWrap2 = _interopRequireDefault(_FieldWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DateField (日期选择框)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//React导入

//类型校验

//日期处理

//验证组件 https://www.npmjs.com/package/async-validator

//日期组件

//本地化日期


//类型校验
var propTypes = {
    value: _propTypes2["default"].any,
    onChange: _propTypes2["default"].func,
    className: _propTypes2["default"].string,
    field: _propTypes2["default"].string,
    index: _propTypes2["default"].number,
    message: _propTypes2["default"].string,
    data: _propTypes2["default"].array,
    required: _propTypes2["default"].bool,
    onValidate: _propTypes2["default"].func,
    isFlag: _propTypes2["default"].bool,
    validate: _propTypes2["default"].bool
};

//默认参数值
var defaultProps = {
    field: '',
    index: '',
    message: '请输入此字段',
    data: [],
    required: false,
    isFlag: false,
    validate: false
};

var DateField = function (_Component) {
    _inherits(DateField, _Component);

    /**
     * Creates an instance of YearField.
     * @param {*} props
     * @memberof YearField
     */
    function DateField(props) {
        _classCallCheck(this, DateField);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handlerChange = function (value) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                field = _this$props.field,
                index = _this$props.index,
                status = _this$props.status;
            //处理是否有修改状态改变、状态同步之后校验输入是否正确

            _this.setState({ value: value, flag: status == 'edit' }, function () {
                _this.validate();
            });
            //回调外部函数
            onChange && onChange(field, value, index);
        };

        _this.validate = function () {
            var _this$props2 = _this.props,
                required = _this$props2.required,
                field = _this$props2.field,
                index = _this$props2.index,
                onValidate = _this$props2.onValidate,
                pattern = _this$props2.pattern,
                message = _this$props2.message;
            var value = _this.state.value;
            //设置校验规则

            var descriptor = _defineProperty({}, field, { type: "any", required: required });
            if (pattern) {
                descriptor[field].push({
                    pattern: pattern, message: message
                });
            }
            var validator = new _asyncValidator2["default"](descriptor);
            validator.validate(_defineProperty({}, field, value), function (errors, fields) {
                if (errors) {
                    _this.setState({
                        error: true
                    });
                } else {
                    _this.setState({
                        error: false
                    });
                }
                onValidate && onValidate(field, fields, index);
            });
        };

        _this.renderFooter = function () {
            var customValue = _this.props.fieldProps.customValue;

            if (customValue) {
                return _react2["default"].createElement(
                    'a',
                    { href: '#', className: 'footerLink', onClick: function onClick() {
                            var _this$props3 = _this.props,
                                onChange = _this$props3.onChange,
                                field = _this$props3.field,
                                index = _this$props3.index,
                                status = _this$props3.status;
                            //处理是否有修改状态改变、状态同步之后校验输入是否正确

                            _this.setState({ value: customValue }, function () {
                                _this.validate();
                            });
                            //回调外部函数
                            onChange && onChange(field, customValue, index);
                        } },
                    '\u4E0D\u6D89\u53CA'
                );
            }
        };

        _this.state = {
            value: (0, _moment2["default"])(props.value), //组件的值
            flag: false, //是否编辑过
            error: false //校验是否有错误
        };
        return _this;
    }
    /**
     *  参数发生变化回调
     *
     * @param {object} nextProps 即将更新Props
     * @param {object} nextState 即将更新State
     * @memberof NumberField
     */


    DateField.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        //当校验外部发生变化，主动校验函数
        if (nextProps.validate == true) {
            this.validate();
        }
        if ('value' in nextProps && !(0, _lodash2["default"])(nextProps.value, this.state.value)) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    /**
     * 有输入值改变的回调
     *
     * @param {string} value
     */

    /**
     * 校验
     *
     */


    //扩展按钮


    //扩展按钮

    DateField.prototype.render = function render() {
        var _state = this.state,
            value = _state.value,
            error = _state.error,
            flag = _state.flag;
        var _props = this.props,
            className = _props.className,
            message = _props.message,
            required = _props.required,
            fieldProps = _props.fieldProps;


        return _react2["default"].createElement(
            _FieldWrap2["default"],
            {
                required: required,
                error: error,
                message: message,
                flag: flag
            },
            _react2["default"].createElement(_beeDatepicker2["default"], _extends({
                showTime: this.props.showTime,
                format: this.props.dateFormat,
                locale: _zh_CN2["default"],
                placeholder: '\u9009\u62E9\u65E5\u671F'
            }, fieldProps, {
                className: className,
                value: value,
                onChange: this.handlerChange,
                open: false,
                renderFooter: this.renderFooter
            }))
        );
    };

    return DateField;
}(_react.Component);

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;
exports["default"] = DateField;
module.exports = exports['default'];