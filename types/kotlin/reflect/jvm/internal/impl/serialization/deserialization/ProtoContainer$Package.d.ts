import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
export class ProtoContainer$Package extends ProtoContainer {
    constructor(arg0: FqName, arg1: NameResolver, arg2: TypeTable, arg3: SourceElement)
    // private fqName: FqName;
    debugFqName(): FqName;
}