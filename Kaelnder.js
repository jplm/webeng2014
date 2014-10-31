function Kalenderwoche(){
var DatumAktuell = new Date();
var DieseWoche = "";
var DiesesJahrJan1 = new Date(DatumAktuell.getFullYear(),0,1);
DiesesJahrJan1 = DiesesJahrJan1.getTime()-(DiesesJahrJan1.getDay()-1)*(24*60*60*1000)
DieseWoche = Math.ceil((DatumAktuell.getTime() - DiesesJahrJan1)/(7*24*60*60*1000))-1
return DieseWoche+1;
}
