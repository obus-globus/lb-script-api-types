import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class SodiumResourcePackMetadata extends Record {
    static CODEC: Codec<SodiumResourcePackMetadata>;
    static SERIALIZER: MetadataSectionType<SodiumResourcePackMetadata>;
    constructor(ignoredShaders: string[])
    // private ignoredShaders: string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    ignoredShaders(): string[];
    toString(): string;
}