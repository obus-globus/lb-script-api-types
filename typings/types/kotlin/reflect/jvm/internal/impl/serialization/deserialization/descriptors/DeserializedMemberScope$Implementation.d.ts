import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
export interface DeserializedMemberScope$Implementation extends Object{
    addFunctionsAndPropertiesTo(arg0: E[], arg1: DescriptorKindFilter, arg2: (param0: Name) => boolean, arg3: LookupLocation): void;
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getTypeAliasByName(arg0: Name): TypeAliasDescriptor;
    getTypeAliasNames(): Name[];
    getVariableNames(): Name[];
}