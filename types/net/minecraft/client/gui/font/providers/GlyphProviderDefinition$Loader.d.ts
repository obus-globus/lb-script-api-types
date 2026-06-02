import type { GlyphProvider } from '../../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export interface GlyphProviderDefinition$Loader extends Object{
    load(resourceManager: ResourceManager): GlyphProvider;
}