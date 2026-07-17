import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { DeserializedMemberScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedMemberScope.d.ts'
import type { DeserializedMemberScope$Implementation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedMemberScope$Implementation.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export class DeserializedMemberScope$NoReorderImplementation extends Object implements DeserializedMemberScope$Implementation {
    constructor(null_: DeserializedMemberScope, arg1: ProtoBuf$Function[], arg2: ProtoBuf$Property[], arg3: ProtoBuf$TypeAlias[])
    // private allFunctions$delegate: NotNullLazyValue<Object>;
    // private allProperties$delegate: NotNullLazyValue<Object>;
    // private allTypeAliases$delegate: NotNullLazyValue<Object>;
    // private declaredFunctions$delegate: NotNullLazyValue<Object>;
    // private declaredProperties$delegate: NotNullLazyValue<Object>;
    // private functionList: ProtoBuf$Function[];
    // private functionNames$delegate: NotNullLazyValue<Object>;
    // private functionsByName$delegate: NotNullLazyValue<Object>;
    // private propertiesByName$delegate: NotNullLazyValue<Object>;
    // private propertyList: ProtoBuf$Property[];
    // private typeAliasList: ProtoBuf$TypeAlias[];
    // private typeAliasesByName$delegate: NotNullLazyValue<Object>;
    // private variableNames$delegate: NotNullLazyValue<Object>;
    addFunctionsAndPropertiesTo(arg0: DeclarationDescriptor[], arg1: DescriptorKindFilter, arg2: (param0: Name) => boolean, arg3: LookupLocation): void;
    // private computeAllNonDeclaredFunctions(): SimpleFunctionDescriptor[];
    // private computeAllNonDeclaredProperties(): PropertyDescriptor[];
    // private computeFunctions(): SimpleFunctionDescriptor[];
    // private computeNonDeclaredFunctionsForName(arg0: Name): SimpleFunctionDescriptor[];
    // private computeNonDeclaredPropertiesForName(arg0: Name): PropertyDescriptor[];
    // private computeProperties(): PropertyDescriptor[];
    // private computeTypeAliases(): TypeAliasDescriptor[];
    // private getAllFunctions(): SimpleFunctionDescriptor[];
    // private getAllProperties(): PropertyDescriptor[];
    // private getAllTypeAliases(): TypeAliasDescriptor[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    // private getDeclaredFunctions(): SimpleFunctionDescriptor[];
    // private getDeclaredProperties(): PropertyDescriptor[];
    getFunctionNames(): Name[];
    // private getFunctionsByName(): JavaMap<Name, SimpleFunctionDescriptor[]>;
    // private getPropertiesByName(): JavaMap<Name, PropertyDescriptor[]>;
    getTypeAliasByName(arg0: Name): TypeAliasDescriptor;
    getTypeAliasNames(): Name[];
    // private getTypeAliasesByName(): JavaMap<Name, TypeAliasDescriptor>;
    getVariableNames(): Name[];
}