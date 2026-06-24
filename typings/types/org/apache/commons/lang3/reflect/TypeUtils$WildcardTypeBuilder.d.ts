import type { TypeUtils$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
export class TypeUtils$WildcardTypeBuilder extends Object implements Builder<WildcardType> {
    private constructor()
    constructor(arg0: TypeUtils$1)
    // private lowerBounds: Type[];
    // private upperBounds: Type[];
    build(): WildcardType;
    withLowerBounds(arg0: Type[]): TypeUtils$WildcardTypeBuilder;
    withUpperBounds(arg0: Type[]): TypeUtils$WildcardTypeBuilder;
}