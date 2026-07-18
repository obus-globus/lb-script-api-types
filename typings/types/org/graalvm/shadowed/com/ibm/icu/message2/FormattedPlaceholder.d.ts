import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/FormattedValue.d.ts'
export class FormattedPlaceholder extends Object {
    constructor(inputValue: Object, formattedValue: FormattedValue)
    readonly formattedValue: FormattedValue;
    // private inputValue: Object;
    getFormattedValue(): FormattedValue;
    getInput(): Object;
    toString(): string;
}