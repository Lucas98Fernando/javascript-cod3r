// Create a range function
// range(5) -> [1, 2 , 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

function range(...nums) {
    if (nums.length == 1) {
        let valInicial = 1
        for (valInicial; valInicial <= nums; valInicial++) {
            console.log(valInicial)
        }
    } else if (nums.length == 2) {
        let valInicial = nums[0]
        let valFinal = nums[1]
        if (valInicial < valFinal) {
            for (valInicial; valInicial <= valFinal; valInicial++) {
                console.log(valInicial)
            }
        } else {
            for (valInicial; valInicial >= valFinal; valInicial--) {
                console.log(valInicial)
            }
        }
    } else if (nums.length == 3) {
        let valInicial = nums[0]
        let valFinal = nums[1]
        const incremento = nums[2]
        if (valInicial < valFinal) {
            for (valInicial; valInicial <= valFinal; valInicial += incremento) {
                console.log(valInicial)
            }
        } else {
            for (valInicial; valInicial >= valFinal; valInicial -= incremento) {
                console.log(valInicial)
            }
        }
    }
}

range(10, -5, 4)