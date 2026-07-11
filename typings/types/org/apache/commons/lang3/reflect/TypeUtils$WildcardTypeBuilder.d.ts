import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
export class TypeUtils$WildcardTypeBuilder extends Object implements Builder<WildcardType> {
    constructor(arg0: any)
    // private lowerBounds: Type[];
    // private upperBounds: Type[];
    build(): WildcardType;
    withLowerBounds(...arg0: Type[]): TypeUtils$WildcardTypeBuilder;
    withUpperBounds(...arg0: Type[]): TypeUtils$WildcardTypeBuilder;
}