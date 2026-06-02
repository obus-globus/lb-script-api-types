import type { Directionality } from '../../../../com/ibm/icu/message2/Directionality.d.ts'
import type { FormattedValue } from '../../../../com/ibm/icu/text/FormattedValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FormattedPlaceholder extends Object {
    constructor(arg0: Object, arg1: FormattedValue)
    constructor(arg0: Object, arg1: FormattedValue, arg2: Directionality, arg3: boolean)
    readonly directionality: Directionality;
    readonly formattedValue: FormattedValue;
    // private inputValue: Object;
    readonly isolate: boolean;
    getDirectionality(): Directionality;
    getFormattedValue(): FormattedValue;
    getInput(): Object;
    getIsolate(): boolean;
    toString(): string;
}