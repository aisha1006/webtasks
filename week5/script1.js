function det() {

    var mat = [[],[],[]], i, j, sum, r,c;
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++) {
            r=i+1;
            c=j+1;
            mat[i][j] = parseFloat(document.getElementById("s"+r+c).value);
        }

    sum = mat[0][0] * mat[1][1] * mat[2][2] + mat[1][0] * mat[2][1] * mat[0][2] + mat[2][0] * mat[0][1] * mat[1][2] - mat[0][2] * mat[1][1] * mat[2][0] - mat[1][2] * mat[2][1] * mat[0][0] - mat[2][2] * mat[0][1] * mat[1][0];

    document.getElementById("result").innerHTML = sum;

}