import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { JavaClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaClassFinder.d.ts'
import type { JavaSourceElementFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElementFactory.d.ts'
import type { DeserializationComponentsForJava$Companion$ModuleData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializationComponentsForJava$Companion$ModuleData.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { ErrorReporter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
export class DeserializationComponentsForJava$Companion extends Object {
    constructor(arg0: DefaultConstructorMarker)
    createModuleData(arg0: KotlinClassFinder, arg1: KotlinClassFinder, arg2: JavaClassFinder, arg3: string, arg4: ErrorReporter, arg5: JavaSourceElementFactory): DeserializationComponentsForJava$Companion$ModuleData;
}