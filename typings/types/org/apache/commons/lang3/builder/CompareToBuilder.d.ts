import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
export class CompareToBuilder extends Object implements Builder<number> {
    static reflectionCompare(paramarg0: Object, paramarg1: Object): number;
    static reflectionCompare(paramarg0: Object, paramarg1: Object, paramarg2: boolean): number;
    static reflectionCompare(paramarg0: Object, paramarg1: Object, paramarg2: boolean, paramarg3: Class<Object>, paramarg4: (Object | null)[]): number;
    static reflectionCompare(paramarg0: Object, paramarg1: Object, paramarg2: (Object | null)[]): number;
    static reflectionCompare(paramarg0: Object, paramarg1: Object, paramarg2: string[]): number;
    constructor()
    // private comparison: number;
    append(arg0: Object, arg1: Object): CompareToBuilder;
    append(arg0: Object, arg1: Object, arg2: (param0: Object) => boolean): CompareToBuilder;
    append(arg0: Object[], arg1: Object[]): CompareToBuilder;
    append(arg0: Object[], arg1: Object[], arg2: (param0: Object) => boolean): CompareToBuilder;
    append(arg0: boolean, arg1: boolean): CompareToBuilder;
    append(arg0: (Object | null)[], arg1: (Object | null)[]): CompareToBuilder;
    append(arg0: number, arg1: number): CompareToBuilder;
    append(arg0: number[], arg1: number[]): CompareToBuilder;
    append(arg0: string, arg1: string): CompareToBuilder;
    append(arg0: string[], arg1: string[]): CompareToBuilder;
    // private appendArray(arg0: Object, arg1: Object, arg2: (param0: Object) => boolean): void;
    appendSuper(arg0: number): CompareToBuilder;
    build(): number;
    toComparison(): number;
}