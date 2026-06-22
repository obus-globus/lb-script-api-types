import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Transparency } from '../../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContentsExtension } from '../../../../../net/caffeinemc/mods/sodium/client/render/texture/SpriteContentsExtension.d.ts'
import type { SpriteContentsAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/SpriteContentsAccessor.d.ts'
import type { SpriteContentsExtension as SpriteContentsExtension_2 } from '../../../../../net/irisshaders/iris/pbr/SpriteContentsExtension.d.ts'
import type { PBRSpriteHolder } from '../../../../../net/irisshaders/iris/pbr/texture/PBRSpriteHolder.d.ts'
import type { SpriteContentsExtension as SpriteContentsExtension_3 } from '../../../../../net/irisshaders/iris/pbr/texture/SpriteContentsExtension.d.ts'
import type { MipmapStrategy } from '../../../../../net/minecraft/client/renderer/texture/MipmapStrategy.d.ts'
import type { SpriteContents$AnimatedTexture } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimatedTexture.d.ts'
import type { SpriteContents$AnimationState } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimationState.d.ts'
import type { Stitcher$Entry } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Entry.d.ts'
import type { AnimationMetadataSection } from '../../../../../net/minecraft/client/resources/metadata/animation/AnimationMetadataSection.d.ts'
import type { FrameSize } from '../../../../../net/minecraft/client/resources/metadata/animation/FrameSize.d.ts'
import type { TextureMetadataSection } from '../../../../../net/minecraft/client/resources/metadata/texture/TextureMetadataSection.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MetadataSectionType } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { MetadataSectionType$WithValue } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType$WithValue.d.ts'
export class SpriteContents extends Object implements AutoCloseable, SpriteContentsExtension, SpriteContentsAccessor, SpriteContentsExtension_2, SpriteContentsExtension_3, Stitcher$Entry {
    static UBO_SIZE: number;
    constructor(name: Identifier, frameSize: FrameSize, image: NativeImage)
    constructor(name: Identifier, frameSize: FrameSize, image: NativeImage, animationInfo: Optional<AnimationMetadataSection>, additionalMetadata: MetadataSectionType$WithValue<Object>[], textureInfo: Optional<TextureMetadataSection>)
    // private active: boolean;
    // private additionalMetadata: MetadataSectionType$WithValue<Object>[];
    // private alphaCutoffBias: number;
    readonly animatedTexture: SpriteContents$AnimatedTexture;
    // private byMipLevel: NativeImage[];
    // private height: number;
    // private mipmapStrategy: MipmapStrategy;
    // private name: Identifier;
    // private originalImage: NativeImage;
    // private pbrHolder: PBRSpriteHolder;
    // private transparency: Transparency;
    // private width: number;
    close(): void;
    computeTransparency(u0: number, v0: number, u1: number, v1: number): Transparency;
    // private createAnimatedTexture(frameSize: FrameSize, fullWidth: number, fullHeight: number, metadata: AnimationMetadataSection): SpriteContents$AnimatedTexture;
    createAnimationState(uboSlice: GpuBufferSlice, spriteUboSize: number): SpriteContents$AnimationState;
    getAdditionalMetadata<T extends Object | number | string | boolean>(type: MetadataSectionType<T>): Optional<T>;
    getAnimatedTexture(): SpriteContents$AnimatedTexture;
    // private getFrameCount(): number;
    getOrCreatePBRHolder(): PBRSpriteHolder;
    getPBRHolder(): PBRSpriteHolder;
    getUniqueFrames(): (Object | null)[];
    height(): number;
    increaseMipLevel(mipLevel: number): void;
    isAnimated(): boolean;
    isTransparent(frame: number, x: number, y: number): boolean;
    name(): Identifier;
    sodium$hasAnimation(): boolean;
    sodium$isActive(): boolean;
    sodium$setActive(arg0: boolean): void;
    toString(): string;
    transparency(): Transparency;
    uploadFirstFrame(destination: GpuTexture, level: number): void;
    width(): number;
}