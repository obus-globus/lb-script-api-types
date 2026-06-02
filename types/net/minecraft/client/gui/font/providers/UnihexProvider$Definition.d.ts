import type { GlyphProvider } from '../../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphProviderDefinition } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
import type { GlyphProviderDefinition$Loader } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Loader.d.ts'
import type { GlyphProviderDefinition$Reference } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Reference.d.ts'
import type { GlyphProviderType } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderType.d.ts'
import type { UnihexProvider } from '../../../../../../net/minecraft/client/gui/font/providers/UnihexProvider.d.ts'
import type { UnihexProvider$OverrideRange } from '../../../../../../net/minecraft/client/gui/font/providers/UnihexProvider$OverrideRange.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class UnihexProvider$Definition extends Object implements GlyphProviderDefinition {
    static CODEC: MapCodec<UnihexProvider$Definition>;
    static MAP_CODEC: MapCodec<GlyphProviderDefinition>;
    private constructor(hexFile: Identifier, sizeOverrides: UnihexProvider$OverrideRange[])
    // private hexFile: Identifier;
    // private sizeOverrides: UnihexProvider$OverrideRange[];
    // private load(resourceManager: ResourceManager): GlyphProvider;
    // private loadData(zipFile: InputStream): UnihexProvider;
    type(): GlyphProviderType;
    unpack(): Either<GlyphProviderDefinition$Loader, GlyphProviderDefinition$Reference>;
}