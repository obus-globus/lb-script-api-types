import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { AtlasPBRLoader$PBRTextureAtlasSprite } from '../../../../../net/irisshaders/iris/pbr/loader/AtlasPBRLoader$PBRTextureAtlasSprite.d.ts'
import type { PBRDumpable } from '../../../../../net/irisshaders/iris/pbr/texture/PBRDumpable.d.ts'
import type { PBRType } from '../../../../../net/irisshaders/iris/pbr/texture/PBRType.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { SpriteContents$AnimatedTexture } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimatedTexture.d.ts'
import type { SpriteContents$AnimationState } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimationState.d.ts'
import type { TextureAtlas } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class PBRAtlasTexture extends AbstractTexture implements PBRDumpable {
    static syncAnimation(paramarg0: SpriteContents$AnimatedTexture, paramarg1: SpriteContents$AnimationState): void;
    constructor(arg0: TextureAtlas, arg1: PBRType)
    // private animatedTexturesStates: SpriteContents$AnimationState[];
    // private atlasTexture: TextureAtlas;
    // private height: number;
    // private location: Identifier;
    // private maxMipLevel: number;
    // private mipLevelCount: number;
    // private mipViews: GpuTextureView[];
    // private missingSprite: TextureAtlasSprite;
    // private spriteUbos: GpuBuffer;
    // private sprites: AtlasPBRLoader$PBRTextureAtlasSprite[];
    // private texturesByName: Map<Identifier, AtlasPBRLoader$PBRTextureAtlasSprite>;
    // private texturesByNameToAdd: Map<Identifier, AtlasPBRLoader$PBRTextureAtlasSprite>;
    readonly type: PBRType;
    // private width: number;
    addSprite(arg0: AtlasPBRLoader$PBRTextureAtlasSprite): void;
    clearTextureData(): void;
    close(): void;
    // private createTexture(arg0: number, arg1: number, arg2: number): void;
    cycleAnimationFrames(): void;
    dumpContents(arg0: Identifier, arg1: Path[]): void;
    getAtlasId(): Identifier;
    getDefaultDumpLocation(): Identifier;
    getSprite(arg0: Identifier): AtlasPBRLoader$PBRTextureAtlasSprite;
    getType(): PBRType;
    releaseTextures(): void;
    tryUpload(arg0: number, arg1: number, arg2: number): boolean;
    upload(arg0: number, arg1: number, arg2: number): void;
    // private uploadInitialContents(): void;
}