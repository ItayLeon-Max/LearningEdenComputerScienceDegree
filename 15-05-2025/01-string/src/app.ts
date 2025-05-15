//string:
/*
    string functions:
    - stringLength: .length()
    - stringUpperCase: .toUpperCase()
    - stringLowerCase: .toLowerCase()
    - stringSplit: .split()
 */

    // Eden ---> ['E' 'd' 'e' 'n']
    //             0   1   2   3

    // .length()
    const str: string = "Eden";
    console.log(str.length)

    // .toUpperCase()
    console.log(str.toUpperCase())

    // .toLowerCase()
    console.log(str.toLowerCase())

    // .split()
    console.log(str.split(''))

    const str2: string = "Eden is a software engineer";
    console.log(str2[1])
    console.log(str2.length)
    console.log(str2[24])
    console.log(str2[4])

    //ex1:
    const str3: string = "this is a string";
    const str4: string = "this is a big string";
    if(str3.length > str4.length){
        console.log(str3.toUpperCase())
    } else {
        console.log(str4.toLowerCase())
    }

    //EX2:
    const str5: string = "Hello World";
    if(str5.length > 10) console.log(false)
    else if(str5.length < 10) console.log(true)
    // else console.log(str5.split(''))

    //1. מה הקוד עושה?
    //2. שני את הקוד בהתאם כך שהתוכנית תדפיס ture או false