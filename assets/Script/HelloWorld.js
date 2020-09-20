cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        cocosCreatorBtnLabel: {
            default: null,
            type: cc.Label
        },
        isRockBtnLabel: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },

    onCocosCreatorButtonClicked: function() {
        cc.log('CocosCreatorButtonClicked')
        this.label.string = this.cocosCreatorBtnLabel.string
    },

    onIsRockButtonClicked: function() {
        cc.log('IsRockButtonClicked')
        this.label.string = this.isRockBtnLabel.string;
    }
});
