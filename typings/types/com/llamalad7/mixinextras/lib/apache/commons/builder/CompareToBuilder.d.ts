import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CompareToBuilder extends Object {
    constructor()
    // private comparison: number;
    append(arg0: Object, arg1: Object): CompareToBuilder;
    append(arg0: Object, arg1: Object, arg2: (param0: Object) => boolean): CompareToBuilder;
    append(arg0: Object[], arg1: Object[], arg2: (param0: Object) => boolean): CompareToBuilder;
    append(arg0: boolean, arg1: boolean): CompareToBuilder;
    append(arg0: (Object | null)[], arg1: (Object | null)[]): CompareToBuilder;
    append(arg0: number, arg1: number): CompareToBuilder;
    append(arg0: number[], arg1: number[]): CompareToBuilder;
    append(arg0: string, arg1: string): CompareToBuilder;
    append(arg0: string[], arg1: string[]): CompareToBuilder;
    toComparison(): number;
}