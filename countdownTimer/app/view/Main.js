var i;
var minInterval;
var changer = function() {
	if(i > 1) startButton.setText("Noch "+i+" Minuten");
	if(i == 1) startButton.setText("Letzte Minute!");
	if(i <= 0) {
		startButton.setText("Die Zeit ist vorüber");
		clearInterval(minInterval);
		Ext.getCmp('alarmSound').play();
		cancelButton.setText("OK");
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
	url: 'audio/Alarm Alert Effect-SoundBible.com-462520910.mp3'
};
var startButton = Ext.create('Ext.Button', {
	text: 'Start',
	ui: 'action',
	handler: function () {
		i = spinner.getValue();
		//startButton.setText("Noch "+i+" Minuten");
		changer();
		minInterval = setInterval(function(){ changer(); }, 60000);
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
				myAudio
            ]
    }
});

