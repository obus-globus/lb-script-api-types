import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Directionality } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Directionality.d.ts'
import type { FormattedValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/FormattedValue.d.ts'
export class FormattedPlaceholder extends Object {
    constructor(inputValue: Object, formattedValue: FormattedValue)
    constructor(inputValue: Object, formattedValue: FormattedValue, directionality: Directionality, isolate: boolean)
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