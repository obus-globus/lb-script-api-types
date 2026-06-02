import type { BuiltInsBinaryVersion$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/builtins/BuiltInsBinaryVersion$Companion.d.ts'
import type { BinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { BinaryVersion$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion$Companion.d.ts'
export class BuiltInsBinaryVersion extends BinaryVersion {
    static Companion: BuiltInsBinaryVersion$Companion;
    static Companion: BinaryVersion$Companion;
    static INSTANCE: BuiltInsBinaryVersion;
    static INVALID_VERSION: BuiltInsBinaryVersion;
    constructor(arg0: number[])
    isCompatibleWithCurrentCompilerVersion(): boolean;
}