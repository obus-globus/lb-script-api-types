import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Triple } from '../../../../../../../kotlin/Triple.d.ts'
import type { ProtoBuf$QualifiedNameTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable.d.ts'
import type { ProtoBuf$StringTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$StringTable.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
export class NameResolverImpl extends Object implements NameResolver {
    constructor(arg0: ProtoBuf$StringTable, arg1: ProtoBuf$QualifiedNameTable)
    // private qualifiedNames: ProtoBuf$QualifiedNameTable;
    // private strings: ProtoBuf$StringTable;
    getQualifiedClassName(arg0: number): string;
    getString(arg0: number): string;
    isLocalClassName(arg0: number): boolean;
    // private traverseIds(arg0: number): Triple<string[], string[], boolean>;
}