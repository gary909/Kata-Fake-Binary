function fakeBin(x){
    var ans = x.split('')
    var result;
    for (var i = 0; i < ans.length; i++) {
        if (ans[i] <= 5) {
            result.push(ans[i])
        }
    }
    
    return ans;
    // for (var i = 0; i < x.Length; i++)
    //     {
    //       if (x[i] <= '5')
    //           ans += '0';
    //     }  else if (x[i] > 5) {
    //           ans += '1';
    //     }
    //     return ans;
    }

    console.log(fakeBin('45385593107843568')) // Returns '01011110001100111'