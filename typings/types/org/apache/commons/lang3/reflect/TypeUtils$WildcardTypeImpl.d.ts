import type { TypeUtils$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeUtils$WildcardTypeImpl extends Object implements WildcardType {
    private constructor(arg0: Type[], arg1: Type[])
    constructor(arg0: Type[], arg1: Type[], arg2: TypeUtils$1)
    readonly lowerBounds: Type[];
    readonly upperBounds: Type[];
    equals(arg0: Object | null): boolean;
    getLowerBounds(): Type[];
    getUpperBounds(): Type[];
    hashCode(): number;
    toString(): string;
}