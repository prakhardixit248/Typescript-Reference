

// API might return following values to determines its validity
// true
// "true"
// 1
// "1"

import { heading } from "../util";

type Validity = boolean | number | string;

function normalizeValidity(isValid: Validity): boolean {
    let normalized = false;

    // typeof TYPE GUARD  narrow down the types
    if (typeof isValid === 'number') {
        normalized = isValid === 1;
    } else if (typeof isValid === 'string') {
        normalized = isValid === '1' || isValid === 'true';
    } else if (typeof isValid === 'boolean') {
        normalized = isValid;
    }
    return normalized;
}

export function validity() {
    heading('normalize validity');
    console.log('normalizeValidity(true): ', normalizeValidity(true));
    console.log('normalizeValidity("true"): ', normalizeValidity('true'));
    console.log('normalizeValidity(1): ', normalizeValidity(1));
    console.log('normalizeValidity("1"): ', normalizeValidity('1'));
    console.log('normalizeValidity(""): ', normalizeValidity(''));
    console.log('normalizeValidity("1345"): ', normalizeValidity('1345'));
}
