import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$FeatureAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$FeatureAccess.d.ts'
export interface Feature$CompilationAccess extends Object, Feature$FeatureAccess {
    objectFieldOffset(field: Field): number;
    registerAsImmutable(object: Object): void;
    registerAsImmutable(root: Object, includeObject: (param0: Object) => kotlin.Boolean): void;
}