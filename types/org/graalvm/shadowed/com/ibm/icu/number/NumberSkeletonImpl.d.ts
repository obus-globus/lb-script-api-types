import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MacroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MacroProps.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
export class NumberSkeletonImpl extends Object {
    static create(paramskeletonString: string): UnlocalizedNumberFormatter;
    static generate(parammacros: MacroProps): string;
    static getOrCreate(paramskeletonString: string): UnlocalizedNumberFormatter;
    constructor()
}