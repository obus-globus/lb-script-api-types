import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export abstract class ProtoContainer extends Object {
    constructor(arg0: NameResolver, arg1: TypeTable, arg2: SourceElement, arg3: DefaultConstructorMarker)
    readonly nameResolver: NameResolver;
    readonly source: SourceElement;
    readonly typeTable: TypeTable;
    debugFqName(): FqName;
    getNameResolver(): NameResolver;
    getSource(): SourceElement;
    getTypeTable(): TypeTable;
    toString(): string;
}