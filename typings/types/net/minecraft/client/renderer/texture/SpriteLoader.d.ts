import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContents } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteLoader$Preparations } from '../../../../../net/minecraft/client/renderer/texture/SpriteLoader$Preparations.d.ts'
import type { Stitcher } from '../../../../../net/minecraft/client/renderer/texture/Stitcher.d.ts'
import type { TextureAtlas } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MetadataSectionType } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class SpriteLoader extends Object {
    static create(paramatlas: TextureAtlas): SpriteLoader;
    constructor(location: Identifier, maxSupportedTextureSize: number)
    // private location: Identifier;
    // private maxSupportedTextureSize: number;
    // private getStitchedSprites(stitcher: Stitcher<SpriteContents>, atlasWidth: number, atlasHeight: number): JavaMap<Identifier, TextureAtlasSprite>;
    loadAndStitch(manager: ResourceManager, atlasInfoLocation: Identifier, maxMipmapLevels: number, taskExecutor: Executor, additionalMetadata: MetadataSectionType<Object>[]): CompletableFuture<SpriteLoader$Preparations>;
    // private stitch(sprites: SpriteContents[], maxMipmapLevels: number, executor: Executor): SpriteLoader$Preparations;
}