import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { TypeDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/TypeDeserializer.d.ts'
export interface ContractDeserializer extends Object{
    deserializeContractFromFunction(arg0: ProtoBuf$Function, arg1: FunctionDescriptor, arg2: TypeTable, arg3: TypeDeserializer): Pair<CallableDescriptor$UserDataKey<Object>, Object>;
}