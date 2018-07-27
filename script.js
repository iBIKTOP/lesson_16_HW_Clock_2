//*******************************************************************
var Clock = function(hh,mm,ss,dd){
    this.hour = hh;
    this.minute = mm;
    this.second = ss;
    this.date = dd;

    setInterval(function () {
        if (this.second<59) this.second++;
        else{
            this.second = 0;
            if (this.minute<59) this.minute++;
            else{
                this.minute = 0;
                if (this.hour<11) this.hour++;
                else{
                    this.hour = 0;
                    if (this.date<31) this.date++;
                    else{
                        this.date = 1;
                    }
                }
            }
        }
    }.bind(this),1000);
};

Clock.prototype.setDateUp = function () {
    if (this.date < 31) this.date++;
    else this.date = 1;
};
Clock.prototype.setHourUp = function () {
    if (this.hour < 11) this.hour++;
    else{
        this.hour = 0;
        this.setDateUp();
    }
};
Clock.prototype.setMinuteUp = function () {
    if (this.minute < 59) this.minute++;
    else {
        this.minute = 0;
        this.setHourUp();
    }
};
Clock.prototype.setHourDown = function () {
    if (this.hour > 0) this.hour--;
    else{
        this.hour = 11;
    }
};
Clock.prototype.setMinuteDown = function () {
    if (this.minute > 0) this.minute--;
    else {
        this.minute = 59;
        this.setHourDown();
    }
};
//*********************************************************************
var myClock = new Clock(0,0,0,1);
var clock = document.getElementById('myClock');
function upDate() {
    if (myClock.hour < 10) myClock.hour = '0' + Number(myClock.hour);
    clock.children[0].innerHTML = myClock.hour;

    if (myClock.minute < 10) myClock.minute = '0' + Number(myClock.minute);
    clock.children[1].innerHTML = myClock.minute;

    if (myClock.second < 10) myClock.second = '0' + Number(myClock.second);
    clock.children[2].innerHTML = myClock.second;
    clock.children[4].innerHTML = myClock.date;
}

setInterval(upDate, 1000);
upDate();
