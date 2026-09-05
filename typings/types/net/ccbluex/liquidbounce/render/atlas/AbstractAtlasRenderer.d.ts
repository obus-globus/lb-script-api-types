import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { TextureTarget } from '../../../../../com/mojang/blaze3d/pipeline/TextureTarget.d.ts'
import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../kotlin/Lazy.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Projection } from '../../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { Rect2i } from '../../../../../net/minecraft/client/renderer/Rect2i.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { FeatureRenderDispatcher } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class AbstractAtlasRenderer<A extends unknown> extends Object implements MinecraftShortcuts {
    protected constructor(label: string)
    // private closed: AtomicBoolean;
    // private /*not mapped: */ getFeatureRenderDispatcher(): FeatureRenderDispatcher;
    // private featureRenderDispatcherLazy: Lazy<FeatureRenderDispatcher>;
    // private /*not mapped: */ getFramebuffer(): TextureTarget;
    // private framebufferLazy: Lazy<TextureTarget>;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    // private label: string;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    // private poseStack: PoseStack;
    // private projection: Projection;
    // private /*not mapped: */ getProjectionMatrixBuffer(): ProjectionMatrixBuffer;
    // private projectionMatrixBufferLazy: Lazy<ProjectionMatrixBuffer>;
    // private /*not mapped: */ getSubmitNodeStorage(): SubmitNodeStorage;
    // private submitNodeStorageLazy: Lazy<SubmitNodeStorage>;
    // private /*not mapped: */ getTextureSize(): number;
    // private /*not mapped: */ getTileCount(): number;
    // private /*not mapped: */ getTileSize(): number;
    // private /*not mapped: */ getTilesPerRow(): number;
    readonly world: ClientLevel;
    /**
     * Called on {@link Util.backgroundExecutor}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/AbstractAtlasRenderer.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/AbstractAtlasRenderer.kt:103}
     */
    protected buildAtlas(images: JavaMap<Identifier, number[]>): A;
    // private close(): void;
    // private closeReadbackResources(readbackBuffer: GpuBuffer): Throwable | null;
    // private encodeAsync(atlasPixels: ByteBuffer, tileRects: JavaMap<Identifier, Rect2i>, result: CompletableFuture<A>): void;
    // private processReadback(readbackBuffer: GpuBuffer, tileRects: JavaMap<Identifier, Rect2i>, result: CompletableFuture<A>): void;
    // private readbackAsync(tileRects: JavaMap<Identifier, Rect2i>): CompletableFuture<A>;
    render(): CompletableFuture<A>;
    protected renderTiles(): JavaMap<Identifier, Rect2i>;
    protected tileRect(index: number): Rect2i;
    protected withTile(rect: Rect2i, block: (param0: PoseStack) => void): void;
}