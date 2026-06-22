import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { Transparency } from '../../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureAtlasSpriteExtension } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/TextureAtlasSpriteExtension.d.ts'
import type { TextureAtlasSpriteAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/TextureAtlasSpriteAccessor.d.ts'
import type { SpriteContents } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteContents$AnimationState } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimationState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class TextureAtlasSprite extends Object implements AutoCloseable, TextureAtlasSpriteExtension, TextureAtlasSpriteAccessor {
    constructor(atlasLocation: Identifier, contents: SpriteContents, atlasWidth: number, atlasHeight: number, x: number, y: number, padding: number)
    // private atlasLocation: Identifier;
    // private contents: SpriteContents;
    // private hasUnknownImageContents: boolean;
    readonly padding: number;
    readonly u0: number;
    readonly u1: number;
    readonly v0: number;
    readonly v1: number;
    readonly x: number;
    readonly y: number;
    atlasLocation(): Identifier;
    close(): void;
    contents(): SpriteContents;
    createAnimationState(uboSlice: GpuBufferSlice, spriteUboSize: number): SpriteContents$AnimationState;
    getPadding(): number;
    getU(offset: number): number;
    getU0(): number;
    getU1(): number;
    getV(offset: number): number;
    getV0(): number;
    getV1(): number;
    getX(): number;
    getY(): number;
    isAnimated(): boolean;
    sodium$hasUnknownImageContents(): boolean;
    toString(): string;
    transparency(): Transparency;
    uploadFirstFrame(destination: GpuTexture, level: number): void;
    uploadSpriteUbo(uboBuffer: ByteBuffer, startOffset: number, maxMipLevel: number, atlasWidth: number, atlasHeight: number, spriteUboSize: number): void;
    wrap(buffer: VertexConsumer): VertexConsumer;
}