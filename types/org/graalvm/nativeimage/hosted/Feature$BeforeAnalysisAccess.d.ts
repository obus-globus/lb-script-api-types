import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$DuringAnalysisAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$DuringAnalysisAccess.d.ts'
import type { Feature$FeatureAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$FeatureAccess.d.ts'
import type { FieldValueTransformer } from '../../../../org/graalvm/nativeimage/hosted/FieldValueTransformer.d.ts'
export interface Feature$BeforeAnalysisAccess extends Object, Feature$FeatureAccess{
    registerAsAccessed(field: Field): void;
    registerAsInHeap(type: Class<Object>): void;
    registerAsUnsafeAccessed(field: Field): void;
    registerAsUnsafeAllocated(type: Class<Object>): void;
    registerAsUsed(type: Class<Object>): void;
    registerClassInitializerReachabilityHandler(callback: (param0: Feature$DuringAnalysisAccess) => void, clazz: Class<Object>): void;
    registerFieldValueTransformer(field: Field, transformer: FieldValueTransformer): void;
    registerMethodOverrideReachabilityHandler(callback: (param0: Feature$DuringAnalysisAccess, param1: Executable) => void, baseMethod: Executable): void;
    registerReachabilityHandler(callback: (param0: Feature$DuringAnalysisAccess) => void, elements: Object[]): void;
    registerSubtypeReachabilityHandler(callback: (param0: Feature$DuringAnalysisAccess, param1: Class<Object>) => void, baseClass: Class<Object>): void;
}