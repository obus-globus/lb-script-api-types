import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TextureTarget } from '../../../../../com/mojang/blaze3d/pipeline/TextureTarget.d.ts'
import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Atlas } from '../../../../../net/ccbluex/liquidbounce/render/gui/Atlas.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Projection } from '../../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { FeatureRenderDispatcher } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { TrackingItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/TrackingItemStackRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * @see net.minecraft.client.gui.render.GuiItemAtlas
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L116 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:116}
 */
export class ItemTextureRenderer extends Object implements MinecraftShortcuts {
    constructor(items: Item[], count: number, scale: number)
    readonly count: number;
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
    // private projection: Projection;
    // private projectionMatrixBuffer: ProjectionMatrixBuffer;
    readonly scale: number;
    // private submitNodeCollector: SubmitNodeStorage;
    // private textureSize: number;
    readonly world: ClientLevel;
    // private close(): void;
    // private findBlockToItemAliases(): JavaMap<Identifier, Identifier>;
    /**
     * @see net.minecraft.client.gui.render.GuiRenderer.prepareItemElements
From 1.21.5 DrawContext code
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L157 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:157}
     */
    render(): CompletableFuture<Atlas>;
    // private renderItemToAtlas(state: TrackingItemStackRenderState, matrices: PoseStack, scaledX: number, scaledY: number, itemPixelSize: number): void;
}