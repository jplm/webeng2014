var i;
var minInterval;
var changer = function() {
	startButton.setText(String("0" + Math.floor(i/60)).slice(-2)+':'+String("0" + i % 60).slice(-2));
	if(i == 0) {
		Ext.getCmp('alarmSound').play();
	}
	if(i == -1) {
		startButton.setText("Die Zeit ist vorüber!");
		cancelButton.setText("OK");
		clearInterval(minInterval);
	}
	i--;
};
var spinner = Ext.create('Ext.field.Spinner', {
    label: 'Zeit in Minuten:',
    value: 10,
    minValue: 0,
    maxValue: 20,
    increment: 1,
    cycle: false
});
var myAudio = {
	xtype: 'audio',
	hidden: true,
	id: 'alarmSound',
	url: 'audio/alert.mp3'
};
var startButton = Ext.create('Ext.Button', {
	text: 'Start',
	ui: 'action',
	handler: function () {
		i = spinner.getValue()*60;
		//startButton.setText("Noch "+i+" Minuten");
		changer();
		minInterval = setInterval(function(){ changer(); }, 1000);
		startButton.disable();
		}
});
var setCancelButton = function() {
	cancelButton.setText("Abbruch");
}
var cancelButton = Ext.create('Ext.Button', {
	text: 'Abbruch',
	ui: 'action',
	handler: function () {
		setCancelButton();
		clearInterval(minInterval);
		startButton.setText("Start");
		Ext.getCmp('alarmSound').stop();
		startButton.enable();
		}
	});
	Ext.define('CountdownTimer.view.Main', {
		extend: 'Ext.Container',
		xtype: 'main',
		requires: [
		'Ext.TitleBar'
		],
		config: {
			items: [
				{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Countdown Timer'
				},
				spinner,
				startButton,
				cancelButton,
				myAudio,
				{
				xtype: 'toolbar',
				docked: 'bottom',
				title: '',
				layout: {
					pack: 'center'
					},
				items: [
					{
					xtype: 'button',
					text: 'Home',
					handler: function(){
						window.open("/index.html");
						}
					},
					{
					xtype: 'button',
					text: 'Datenschutz',
					handler: function(){
						window.open("/datenschutz.html");
						}
					},
					{
					xtype: 'button',
					text: 'Impressum',
					handler: function(){
						window.open("/impressum.html");
						}
					}
					]
				}
            ]
    }
});

