var i = 2;
var minInterval;
var changer = function() {
	i--;
	startButton.setText("Noch "+i+" Minuten");
	if(i <= 0) {
		startButton.setText("Die Zeit ist vorrüber");
		clearInterval(minInterval);
		Ext.getCmp('sound1').play();
		cancelButton.setText("OK");
	}
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
	id: 'sound1',
	url: 'audio/crash.mp3'
};
var startButton = Ext.create('Ext.Button', {
	text: 'Start',
	ui: 'action',
	handler: function () {
		i = spinner.getValue();
		startButton.setText("Noch "+i+" Minuten");
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
		Ext.getCmp('sound1').stop();
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

