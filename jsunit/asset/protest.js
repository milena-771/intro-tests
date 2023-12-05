const suite = (desc, subject) => {
    console.log('O=======================================================================O');
    console.log(desc);
    console.group();
    console.time('Duration');
    subject();
    console.groupEnd();
    console.timeEnd('Duration');
};

function run(test, actual, expected) {
    const success = test(actual, expected);
    console.log(`${success ? '\u2705' : '\u274C'} | Expected: ${expected} | Got: ${actual}`);
};

const should = (actual) => {
    return {
        be(expected){
            run((a,e) => a === e, actual, expected);
        },
        beNaN(){
            run((a,e) => isNaN(a), actual, NaN);
        },
        notBe(expected){
            run((a,e) => a !== e, actual, expected);
        },
        beTrue(){
            run((a,e) => a === e, actual, true);
        },
        beFalse(){
            run((a,e) => a === e, actual, false);
        }
    };
};

export {suite,should};


