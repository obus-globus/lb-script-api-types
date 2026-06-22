import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$BeforeAnalysisAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$BeforeAnalysisAccess.d.ts'
import type { Feature$QueryReachabilityAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$QueryReachabilityAccess.d.ts'
import type { FieldValueTransformer } from '../../../../org/graalvm/nativeimage/hosted/FieldValueTransformer.d.ts'
export interface Feature$DuringAnalysisAccess extends Object, Feature$BeforeAnalysisAccess, Feature$QueryReachabilityAccess{
    getApplicationClassLoader(): ClassLoader;
    isReachable(method: Executable): boolean;
    isReachable(field: Field): boolean;
    registerAsAccessed(field: Field): void;
    registerAsUnsafeAccessed(field: Field): void;
    registerFieldValueTransformer(field: Field, transformer: FieldValueTransformer): void;
    requireAnalysisIteration(): void;
}