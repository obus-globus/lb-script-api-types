import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { ExtendedTextureAtlas } from '../../../../../net/caffeinemc/mods/sodium/client/render/texture/ExtendedTextureAtlas.d.ts'
import type { SodiumSpriteFinder } from '../../../../../net/caffeinemc/mods/sodium/client/render/texture/SodiumSpriteFinder.d.ts'
import type { TextureAtlasAccessor } from '../../../../../net/caffeinemc/mods/sodium/mixin/core/render/texture/TextureAtlasAccessor.d.ts'
import type { FabricTextureAtlas } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/FabricTextureAtlas.d.ts'
import type { SpriteFinder } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { TextureAtlasAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/TextureAtlasAccessor.d.ts'
import type { PBRAtlasHolder } from '../../../../../net/irisshaders/iris/pbr/texture/PBRAtlasHolder.d.ts'
import type { TextureAtlasExtension } from '../../../../../net/irisshaders/iris/pbr/texture/TextureAtlasExtension.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Dumpable } from '../../../../../net/minecraft/client/renderer/texture/Dumpable.d.ts'
import type { SpriteContents$AnimationState } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimationState.d.ts'
import type { SpriteLoader$Preparations } from '../../../../../net/minecraft/client/renderer/texture/SpriteLoader$Preparations.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { TickableTexture } from '../../../../../net/minecraft/client/renderer/texture/TickableTexture.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class TextureAtlas extends AbstractTexture implements ExtendedTextureAtlas, TextureAtlasAccessor, FabricTextureAtlas, TextureAtlasAccessor, TextureAtlasExtension, Dumpable, TickableTexture {
    static LOCATION_BLOCKS: Identifier;
    static LOCATION_ITEMS: Identifier;
    static LOCATION_PARTICLES: Identifier;
    constructor(location: Identifier)
    // private animatedTexturesStates: SpriteContents$AnimationState[];
    // private height: number;
    // private isBlocks: boolean;
    // private location: Identifier;
    // private maxMipLevel: number;
    // private maxSupportedTextureSize: number;
    // private mipLevelCount: number;
    // private mipViews: GpuTextureView[];
    // private missingSprite: TextureAtlasSprite;
    // private pbrHolder: PBRAtlasHolder;
    // private spriteFinder: SpriteFinder;
    // private spriteUbos: GpuBuffer;
    // private sprites: TextureAtlasSprite[];
    readonly texturesByName: Map<Identifier, TextureAtlasSprite>;
    // private width: number;
    clearTextureData(): void;
    close(): void;
    // private createTexture(newWidth: number, newHeight: number, newMipLevel: number): void;
    cycleAnimationFrames(): void;
    dumpContents(selfId: Identifier, dir: Path[]): void;
    getHeight(): number;
    getOrCreatePBRHolder(): PBRAtlasHolder;
    getPBRHolder(): PBRAtlasHolder;
    getSprite(location: Identifier): TextureAtlasSprite;
    getWidth(): number;
    location(): Identifier;
    maxSupportedTextureSize(): number;
    missingSprite(): TextureAtlasSprite;
    sodium$getSpriteFinder(): SodiumSpriteFinder;
    spriteFinder(): SpriteFinder;
    spriteFinder(): SpriteFinder;
    tick(): void;
    upload(preparations: SpriteLoader$Preparations): void;
    // private uploadAnimationFrames(): void;
    // private uploadInitialContents(): void;
}