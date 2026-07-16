import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class FqNamesUtilKt extends Object {
    static findValueForMostSpecificFqname<V extends unknown>(paramarg0: FqName, paramarg1: Map<FqName, V>): V;
    static isChildOf(paramarg0: FqName, paramarg1: FqName): boolean;
    static isSubpackageOf(paramarg0: FqName, paramarg1: FqName): boolean;
    static isValidJavaFqName(paramarg0: string): boolean;
    static parentOrNull(paramarg0: FqName): FqName;
    static tail(paramarg0: FqName, paramarg1: FqName): FqName;
}