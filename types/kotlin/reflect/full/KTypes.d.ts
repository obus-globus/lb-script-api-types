import type { Object } from '../../../java/lang/Object.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export class KTypes extends Object {
    static isSubtypeOf(paramarg0: KType, paramarg1: KType): boolean;
    static isSupertypeOf(paramarg0: KType, paramarg1: KType): boolean;
    static withNullability(paramarg0: KType, paramarg1: boolean): KType;
}