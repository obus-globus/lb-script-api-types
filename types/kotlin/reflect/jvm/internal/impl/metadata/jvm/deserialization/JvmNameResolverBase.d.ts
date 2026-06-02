import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { JvmProtoBuf$StringTableTypes$Record } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$Record.d.ts'
import type { JvmNameResolverBase$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmNameResolverBase$Companion.d.ts'
export class JvmNameResolverBase extends Object implements NameResolver {
    static Companion: JvmNameResolverBase$Companion;
    constructor(arg0: string[], arg1: number[], arg2: JvmProtoBuf$StringTableTypes$Record[])
    // private localNameIndices: number[];
    // private records: JvmProtoBuf$StringTableTypes$Record[];
    // private strings: string[];
    getQualifiedClassName(arg0: number): string;
    getString(arg0: number): string;
    isLocalClassName(arg0: number): boolean;
}