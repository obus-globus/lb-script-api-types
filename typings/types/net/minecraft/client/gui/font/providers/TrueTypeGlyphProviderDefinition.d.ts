import type { GlyphProvider } from '../../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphProviderDefinition } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
import type { GlyphProviderDefinition$Loader } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Loader.d.ts'
import type { GlyphProviderDefinition$Reference } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Reference.d.ts'
import type { GlyphProviderType } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderType.d.ts'
import type { TrueTypeGlyphProviderDefinition$Shift } from '../../../../../../net/minecraft/client/gui/font/providers/TrueTypeGlyphProviderDefinition$Shift.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class TrueTypeGlyphProviderDefinition extends Record implements GlyphProviderDefinition {
    static CODEC: MapCodec<TrueTypeGlyphProviderDefinition>;
    static MAP_CODEC: MapCodec<GlyphProviderDefinition>;
    constructor(location: Identifier, size: number, oversample: number, shift: TrueTypeGlyphProviderDefinition$Shift, skip: string)
    // private location: Identifier;
    // private oversample: number;
    // private shift: TrueTypeGlyphProviderDefinition$Shift;
    // private size: number;
    // private skip: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    // private load(resourceManager: ResourceManager): GlyphProvider;
    location(): Identifier;
    oversample(): number;
    shift(): TrueTypeGlyphProviderDefinition$Shift;
    size(): number;
    skip(): string;
    toString(): string;
    type(): GlyphProviderType;
    unpack(): Either<GlyphProviderDefinition$Loader, GlyphProviderDefinition$Reference>;
}