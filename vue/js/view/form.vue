<template>
    <i-form :model="formItem" :label-width="80">
        <i-form-item label="Input">
            <i-input v-model="formItem.input" placeholder="Enter something..."></i-input>
        </i-form-item>
        <i-form-item label="Select">
            <i-select v-model="formItem.select">
                <i-option value="beijing">New York</i-option>
                <i-option value="shanghai">London</i-option>
                <i-option value="shenzhen">Sydney</i-option>
            </i-select>
        </i-form-item>
        <i-form-item label="DatePicker">
            <i-row>
                <i-col span="11">
                    <i-date-picker type="date" placeholder="Select date" v-model="formItem.date"></i-date-picker>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <i-time-picker type="time" placeholder="Select time" v-model="formItem.time"></i-time-picker>
                </i-col>
            </i-row>
        </i-form-item>

        <i-form-item label="Radio">
            <i-radio-group v-model="formItem.radio">
                <i-radio label="male">Male</i-radio>
                <i-radio label="female">Female</i-radio>
            </i-radio-group>
        </i-form-item>

        <i-form-item label="Checkbox">
            <i-checkbox-group v-model="formItem.checkbox">
                <i-checkbox label="Eat"></i-checkbox>
                <i-checkbox label="Sleep"></i-checkbox>
                <i-checkbox label="Run"></i-checkbox>
                <i-checkbox label="Movie"></i-checkbox>
            </i-checkbox-group>
        </i-form-item>


        <i-form-item label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </i-form-item>


        <i-form-item label="Slider">
            <i-slider v-model="formItem.slider" range></i-slider>
        </i-form-item>


        <i-form-item label="Text">
            <i-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>
        </i-form-item>

        <i-form-item>
            <i-button type="primary">Submit</i-button>
            <i-button style="margin-left: 8px">Cancel</i-button>
        </i-form-item>
    </i-form>
</template>
<script lang="babel">
import { Input,Form,FormItem,Button,Slider,Select,Option,Row,Col,DatePicker,TimePicker,RadioGroup,Radio,
    CheckboxGroup,Checkbox,Switch


} from 'iview';
    export default {
        name: 'form_page',
        components: {
            iInput:Input,
            iForm:Form,
            iFormItem:FormItem,
            iButton:Button,
            iSlider:Slider,
            iSelect:Select,
            iOption:Option,
            iRow:Row,
            iCol:Col,
            iDatePicker:DatePicker,
            iTimePicker:TimePicker,
            iRadioGroup:RadioGroup,
            iRadio:Radio,
            iCheckboxGroup:CheckboxGroup,
            iCheckbox:Checkbox,
            iSwitch:Switch
        },
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>