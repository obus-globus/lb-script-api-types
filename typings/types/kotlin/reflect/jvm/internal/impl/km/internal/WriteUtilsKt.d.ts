import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmAnnotationArgument } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
import type { WriteContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/WriteContext.d.ts'
import type { ProtoBuf$Annotation$Argument$Value$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value$Builder.d.ts'
import type { ProtoBuf$Annotation$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Builder.d.ts'
import type { ProtoBuf$CompilerPluginData$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData$Builder.d.ts'
import type { StringTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/serialization/StringTable.d.ts'
export class WriteUtilsKt extends Object {
    static getClassNameIndex(paramarg0: StringTable, paramarg1: string): number;
    static writeAnnotation(paramarg0: KmAnnotation, paramarg1: StringTable): ProtoBuf$Annotation$Builder;
    static writeAnnotationArgument(paramarg0: KmAnnotationArgument, paramarg1: StringTable): ProtoBuf$Annotation$Argument$Value$Builder;
    static writeCompilerPluginData(paramarg0: string, paramarg1: number[], paramarg2: WriteContext): ProtoBuf$CompilerPluginData$Builder;
}