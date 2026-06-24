import type { GlyphProvider } from '../../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphProviderDefinition } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
import type { GlyphProviderDefinition$Loader } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Loader.d.ts'
import type { GlyphProviderDefinition$Reference } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Reference.d.ts'
import type { GlyphProviderType } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class BitmapProvider$Definition extends Record implements GlyphProviderDefinition {
    static CODEC: MapCodec<BitmapProvider$Definition>;
    static MAP_CODEC: MapCodec<GlyphProviderDefinition>;
    constructor(file: Identifier, height: number, ascent: number, codepointGrid: number[][])
    // private ascent: number;
    // private codepointGrid: number[][];
    // private file: Identifier;
    // private height: number;
    ascent(): number;
    codepointGrid(): number[][];
    equals(o: Object | null): boolean;
    file(): Identifier;
    // private getActualGlyphWidth(image: NativeImage, glyphWidth: number, glyphHeight: number, xGlyph: number, yGlyph: number): number;
    hashCode(): number;
    height(): number;
    // private load(resourceManager: ResourceManager): GlyphProvider;
    toString(): string;
    type(): GlyphProviderType;
    unpack(): Either<GlyphProviderDefinition$Loader, GlyphProviderDefinition$Reference>;
}