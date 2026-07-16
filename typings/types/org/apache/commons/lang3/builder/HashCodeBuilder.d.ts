import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
export class HashCodeBuilder extends Object implements Builder<number> {
    static reflectionHashCode<T extends unknown>(paramarg0: number, paramarg1: number, paramarg2: T, paramarg3: boolean, paramarg4: Class<Object>, ...paramarg5: string[]): number;
    static reflectionHashCode(paramarg0: number, paramarg1: number, paramarg2: Object): number;
    static reflectionHashCode(paramarg0: number, paramarg1: number, paramarg2: Object, paramarg3: boolean): number;
    static reflectionHashCode(paramarg0: Object, paramarg1: boolean): number;
    static reflectionHashCode(paramarg0: Object, ...paramarg1: string[]): number;
    static reflectionHashCode(paramarg0: Object, paramarg1: string[]): number;
    constructor()
    constructor(arg0: number, arg1: number)
    // private iConstant: number;
    // private iTotal: number;
    append(arg0: Object): HashCodeBuilder;
    append(arg0: Object[]): HashCodeBuilder;
    append(arg0: boolean): HashCodeBuilder;
    append(arg0: boolean[]): HashCodeBuilder;
    append(arg0: number): HashCodeBuilder;
    append(arg0: number[]): HashCodeBuilder;
    append(arg0: string): HashCodeBuilder;
    append(arg0: string[]): HashCodeBuilder;
    // private appendArray(arg0: Object): void;
    appendSuper(arg0: number): HashCodeBuilder;
    build(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toHashCode(): number;
}