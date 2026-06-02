import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinClassHeader$Kind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/KotlinClassHeader$Kind.d.ts'
import type { MetadataVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
export class KotlinClassHeader extends Object {
    constructor(arg0: KotlinClassHeader$Kind, arg1: MetadataVersion, arg2: string[], arg3: string[], arg4: string[], arg5: string, arg6: number, arg7: string, arg8: number[])
    readonly data: string[];
    // private extraInt: number;
    // private extraString: string;
    readonly incompatibleData: string[];
    readonly kind: KotlinClassHeader$Kind;
    readonly metadataVersion: MetadataVersion;
    // private packageName: string;
    // private serializedIr: number[];
    readonly strings: string[];
    getData(): string[];
    getIncompatibleData(): string[];
    getKind(): KotlinClassHeader$Kind;
    getMetadataVersion(): MetadataVersion;
    getMultifileClassName(): string;
    getMultifilePartNames(): string[];
    getStrings(): string[];
    // private has(arg0: number, arg1: number): boolean;
    isPreRelease(): boolean;
    isUnstableJvmIrBinary(): boolean;
    toString(): string;
}