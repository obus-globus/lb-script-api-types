import type { Type } from '../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { TypeImpl } from '../../kotlin/reflect/TypeImpl.d.ts'
import type { WildcardTypeImpl$Companion } from '../../kotlin/reflect/WildcardTypeImpl$Companion.d.ts'
export class WildcardTypeImpl extends Object implements WildcardType, TypeImpl {
    static Companion: WildcardTypeImpl$Companion;
    constructor(upperBound: Type | null, lowerBound: Type | null)
    // private lowerBound: Type | null;
    // private upperBound: Type | null;
    equals(other: Object | null): boolean;
    getLowerBounds(): Type[];
    getTypeName(): string;
    getUpperBounds(): Type[];
    hashCode(): number;
    toString(): string;
}