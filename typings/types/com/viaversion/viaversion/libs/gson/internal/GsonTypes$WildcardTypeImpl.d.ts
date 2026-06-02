import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GsonTypes$WildcardTypeImpl extends Object implements Serializable, WildcardType {
    constructor(arg0: Type[], arg1: Type[])
    // private lowerBound: Type;
    // private upperBound: Type;
    equals(arg0: Object | null): boolean;
    getLowerBounds(): Type[];
    getUpperBounds(): Type[];
    hashCode(): number;
    toString(): string;
}