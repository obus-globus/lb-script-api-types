import type { MacroProps } from '../../../../com/ibm/icu/impl/number/MacroProps.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberSkeletonImpl extends Object {
    static create(paramarg0: string): UnlocalizedNumberFormatter;
    static generate(paramarg0: MacroProps): string;
    static getOrCreate(paramarg0: string): UnlocalizedNumberFormatter;
    constructor()
}