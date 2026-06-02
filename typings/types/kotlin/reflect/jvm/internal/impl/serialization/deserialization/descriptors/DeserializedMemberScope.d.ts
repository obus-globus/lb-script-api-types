import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemberScopeImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
import type { DeserializationContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationContext.d.ts'
import type { DeserializedMemberScope$Implementation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedMemberScope$Implementation.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { NullableLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
export abstract class DeserializedMemberScope extends MemberScopeImpl {
    static Companion: MemberScope$Companion;
    constructor(arg0: DeserializationContext, arg1: ProtoBuf$Function[], arg2: ProtoBuf$Property[], arg3: ProtoBuf$TypeAlias[], arg4: Function0<E[]>)
    readonly c: DeserializationContext;
    // private classNames$delegate: NotNullLazyValue<Object>;
    // private classifierNamesLazy$delegate: NullableLazyValue<Object>;
    // private impl: DeserializedMemberScope$Implementation;
    addEnumEntryDescriptors(arg0: E[], arg1: Function1<Name, boolean>): void;
    computeDescriptors(arg0: DescriptorKindFilter, arg1: Function1<Name, boolean>, arg2: LookupLocation): E[];
    computeNonDeclaredFunctions(arg0: Name, arg1: SimpleFunctionDescriptor[]): void;
    computeNonDeclaredProperties(arg0: Name, arg1: PropertyDescriptor[]): void;
    createClassId(arg0: Name): ClassId;
    // private createImplementation(arg0: ProtoBuf$Function[], arg1: ProtoBuf$Property[], arg2: ProtoBuf$TypeAlias[]): DeserializedMemberScope$Implementation;
    // private deserializeClass(arg0: Name): ClassDescriptor;
    getC(): DeserializationContext;
    getClassNames$deserialization(): Name[];
    getClassifierNames(): Name[];
    // private getClassifierNamesLazy(): Name[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getNonDeclaredClassifierNames(): Name[];
    getNonDeclaredFunctionNames(): Name[];
    getNonDeclaredVariableNames(): Name[];
    // private getTypeAliasByName(arg0: Name): TypeAliasDescriptor;
    getVariableNames(): Name[];
    hasClass(arg0: Name): boolean;
    isDeclaredFunctionAvailable(arg0: SimpleFunctionDescriptor): boolean;
}