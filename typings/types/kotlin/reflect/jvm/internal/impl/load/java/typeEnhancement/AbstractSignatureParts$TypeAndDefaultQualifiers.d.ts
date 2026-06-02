import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaTypeQualifiersByElementType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeQualifiersByElementType.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
export class AbstractSignatureParts$TypeAndDefaultQualifiers extends Object {
    constructor(arg0: KotlinTypeMarker, arg1: JavaTypeQualifiersByElementType, arg2: TypeParameterMarker)
    readonly defaultQualifiers: JavaTypeQualifiersByElementType;
    readonly type: KotlinTypeMarker;
    readonly typeParameterForArgument: TypeParameterMarker;
    getDefaultQualifiers(): JavaTypeQualifiersByElementType;
    getType(): KotlinTypeMarker;
    getTypeParameterForArgument(): TypeParameterMarker;
}