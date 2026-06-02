import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Types$WildcardTypeImpl extends Object implements Serializable, WildcardType {
    constructor(lowerBounds: Type[], upperBounds: Type[])
    readonly lowerBounds: Type[];
    readonly upperBounds: Type[];
    equals(obj: Object | null): boolean;
    getLowerBounds(): Type[];
    getUpperBounds(): Type[];
    hashCode(): number;
    toString(): string;
}