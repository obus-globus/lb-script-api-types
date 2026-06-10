import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export class DeserializedClassDescriptor$EnumEntryClassDescriptors extends Object {
    constructor(null_: DeserializedClassDescriptor$EnumEntryClassDescriptors)
    // private enumEntryByName: MemoizedFunctionToNullable<Name, ClassDescriptor>;
    // private enumEntryProtos: Map<Name, ProtoBuf$EnumEntry>;
    // private enumMemberNames: NotNullLazyValue<Name[]>;
    all(): ClassDescriptor[];
    // private computeEnumMemberNames(): Name[];
    findEnumEntry(arg0: Name): ClassDescriptor;
}