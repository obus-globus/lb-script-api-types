import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MipmapStrategy } from '../../../../../../net/minecraft/client/renderer/texture/MipmapStrategy.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class TextureMetadataSection extends Record {
    static CODEC: Codec<TextureMetadataSection>;
    static DEFAULT_ALPHA_CUTOFF_BIAS: number;
    static DEFAULT_BLUR: boolean;
    static DEFAULT_CLAMP: boolean;
    static TYPE: MetadataSectionType<TextureMetadataSection>;
    // private alphaCutoffBias: number;
    // private blur: boolean;
    // private clamp: boolean;
    // private mipmapStrategy: MipmapStrategy;
    alphaCutoffBias(): number;
    blur(): boolean;
    clamp(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mipmapStrategy(): MipmapStrategy;
    toString(): string;
}