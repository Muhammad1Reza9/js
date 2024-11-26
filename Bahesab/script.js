var button = document.getElementById('btnC')
var height = document.getElementById('height')
var weight = document.getElementById('weight')

button.addEventListener('click', function () {
    if(!height.value || !weight.value) {
        return alert('Please write sth ')
    }


    var heightInm = height.value / 100;
    var bmi = (weight.value / (heightInm**2)).toFixed(3)

    

    if (bmi <= 18.5) {
        result = 'you are thin'
    }else if (bmi > 18.5 && bmi <= 25) {
         result = 'you are normal'
    }else if  (bmi > 25 && bmi >= 30 ) {
        result = 'you are not normal'
    }else if (bmi > 30) {
        result = ' you are fat '
    }

    alert(bmi)
    alert(result)
       
})