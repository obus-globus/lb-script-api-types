import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { OverridingUtil } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingUtil.d.ts'
import type { ErrorReporter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
export class DescriptorResolverUtils extends Object {
    static getAnnotationParameterByName(paramarg0: Name, paramarg1: ClassDescriptor): ValueParameterDescriptor;
    static resolveOverridesForNonStaticMembers<D extends CallableMemberDescriptor>(paramarg0: Name, paramarg1: D[], paramarg2: D[], paramarg3: ClassDescriptor, paramarg4: ErrorReporter, paramarg5: OverridingUtil): D[];
    static resolveOverridesForStaticMembers<D extends CallableMemberDescriptor>(paramarg0: Name, paramarg1: D[], paramarg2: D[], paramarg3: ClassDescriptor, paramarg4: ErrorReporter, paramarg5: OverridingUtil): D[];
}