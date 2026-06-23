import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { SimpleTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeArgumentListMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentListMarker.d.ts'
export abstract class SimpleType extends UnwrappedType implements SimpleTypeMarker, TypeArgumentListMarker {
    constructor()
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
    toString(): string;
}