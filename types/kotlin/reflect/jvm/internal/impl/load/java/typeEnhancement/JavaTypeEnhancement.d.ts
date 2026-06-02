import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { JavaResolverSettings } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/JavaResolverSettings.d.ts'
import type { JavaTypeEnhancement$Result } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeEnhancement$Result.d.ts'
import type { JavaTypeEnhancement$SimpleResult } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeEnhancement$SimpleResult.d.ts'
import type { JavaTypeQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeQualifiers.d.ts'
import type { TypeComponentPosition } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/TypeComponentPosition.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { UnwrappedType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
export class JavaTypeEnhancement extends Object {
    constructor(arg0: JavaResolverSettings)
    // private javaResolverSettings: JavaResolverSettings;
    enhance(arg0: KotlinType, arg1: Function1<number, JavaTypeQualifiers>, arg2: boolean): KotlinType;
    // private enhanceInflexible(arg0: SimpleType, arg1: Function1<number, JavaTypeQualifiers>, arg2: number, arg3: TypeComponentPosition, arg4: boolean, arg5: boolean): JavaTypeEnhancement$SimpleResult;
    // private enhancePossiblyFlexible(arg0: UnwrappedType, arg1: Function1<number, JavaTypeQualifiers>, arg2: number, arg3: boolean): JavaTypeEnhancement$Result;
    // private notNullTypeParameter(arg0: SimpleType): SimpleType;
}