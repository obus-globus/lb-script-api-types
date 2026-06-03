import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { DeserializedMemberScope$Implementation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedMemberScope$Implementation.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export class DeserializedMemberScope$OptimizedImplementation extends Object implements DeserializedMemberScope$Implementation {
    constructor(null_: DeserializedMemberScope$OptimizedImplementation, arg2: ProtoBuf$Property[], arg3: ProtoBuf$TypeAlias[])
    // private functionNames$delegate: NotNullLazyValue<Object>;
    // private functionProtosBytes: Map<Name, number[]>;
    // private functions: MemoizedFunctionToNotNull<Name, E[]>;
    // private properties: MemoizedFunctionToNotNull<Name, E[]>;
    // private propertyProtosBytes: Map<Name, number[]>;
    // private typeAliasByName: MemoizedFunctionToNullable<Name, TypeAliasDescriptor>;
    // private typeAliasBytes: Map<Name, number[]>;
    // private variableNames$delegate: NotNullLazyValue<Object>;
    addFunctionsAndPropertiesTo(arg0: E[], arg1: DescriptorKindFilter, arg2: (param0: Name) => boolean, arg3: LookupLocation): void;
    // private computeFunctions(arg0: Name): E[];
    // private computeProperties(arg0: Name): E[];
    // private createTypeAlias(arg0: Name): TypeAliasDescriptor;
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getTypeAliasByName(arg0: Name): TypeAliasDescriptor;
    getTypeAliasNames(): Name[];
    getVariableNames(): Name[];
    // private packToByteArray(arg0: Map<Name, E[]>): Map<Name, number[]>;
}