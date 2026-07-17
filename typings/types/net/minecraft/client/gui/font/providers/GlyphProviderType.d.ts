import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GlyphProviderDefinition } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class GlyphProviderType extends Enum<GlyphProviderType> implements StringRepresentable {
    static BITMAP: GlyphProviderType;
    static CODEC: Codec<GlyphProviderType>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REFERENCE: GlyphProviderType;
    static SPACE: GlyphProviderType;
    static TTF: GlyphProviderType;
    static UNIHEX: GlyphProviderType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GlyphProviderType;
    static values(): GlyphProviderType[];
    private constructor(name: string, codec: MapCodec<GlyphProviderDefinition>)
    // private codec: MapCodec<GlyphProviderDefinition>;
    // private name: string;
    getSerializedName(): string;
    mapCodec(): MapCodec<GlyphProviderDefinition>;
    name(): "BITMAP" | "TTF" | "SPACE" | "UNIHEX" | "REFERENCE";
}