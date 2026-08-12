import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { TextureTarget } from '../../../../../com/mojang/blaze3d/pipeline/TextureTarget.d.ts'
import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Atlas } from '../../../../../net/ccbluex/liquidbounce/render/gui/Atlas.d.ts'
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
import type { TrackingItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/TrackingItemStackRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * @see net.minecraft.client.gui.render.GuiItemAtlas
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:109}
 */
export class ItemTextureRenderer extends Object implements MinecraftShortcuts {
    constructor(items: Item[], scale: number)
    // private closed: AtomicBoolean;
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    // private itemAtlasFramebuffer: TextureTarget;
    // private itemPixelSize: number;
    readonly items: Item[];
    // private itemsPerDimension: number;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    // private poseStack: PoseStack;
    // private projection: Projection;
    // private projectionMatrixBuffer: ProjectionMatrixBuffer;
    readonly scale: number;
    // private submitNodeStorage: SubmitNodeStorage;
    // private textureSize: number;
    readonly world: ClientLevel;
    // private close(): void;
    // private completeExceptionally(result: CompletableFuture<Object>, throwable: Throwable): void;
    // private encodeAsync(atlasPixels: ByteBuffer, itemMap: JavaMap<Identifier, Rect2i>, aliasMap: JavaMap<Identifier, Identifier>, result: CompletableFuture<Atlas>): void;
    // private encodeItemImages(atlasPixels: ByteBuffer, itemMap: JavaMap<Identifier, Rect2i>, result: CompletableFuture<Atlas>): JavaMap<Identifier, number[]>;
    // private findBlockToItemAliases(): JavaMap<Identifier, Identifier>;
    // private findItemIdForBlock(blockId: Identifier, blockItem: Item): Identifier | null;
    // private processReadback(readbackBuffer: GpuBuffer, itemMap: JavaMap<Identifier, Rect2i>, aliasMap: JavaMap<Identifier, Identifier>, result: CompletableFuture<Atlas>): void;
    /**
     * @see net.minecraft.client.gui.render.GuiRenderer.prepareItemElements
From 1.21.5 DrawContext code
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L156 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:156}
     */
    render(): CompletableFuture<Atlas>;
    // private renderItemToAtlas(state: TrackingItemStackRenderState, scaledX: number, scaledY: number, itemPixelSize: number): void;
    // private renderItems(): JavaMap<Identifier, Rect2i>;
    // private submitReadback(itemMap: JavaMap<Identifier, Rect2i>, aliasMap: JavaMap<Identifier, Identifier>): CompletableFuture<Atlas>;
}