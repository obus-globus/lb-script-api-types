import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { OverridingUtil } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingUtil.d.ts'
import type { ErrorReporter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
export class DescriptorResolverUtils extends Object {
    static getAnnotationParameterByName(paramarg0: Name, paramarg1: ClassDescriptor): ValueParameterDescriptor;
    static resolveOverridesForNonStaticMembers(paramarg0: Name, paramarg1: E[], paramarg2: E[], paramarg3: ClassDescriptor, paramarg4: ErrorReporter, paramarg5: OverridingUtil): E[];
    static resolveOverridesForStaticMembers(paramarg0: Name, paramarg1: E[], paramarg2: E[], paramarg3: ClassDescriptor, paramarg4: ErrorReporter, paramarg5: OverridingUtil): E[];
}