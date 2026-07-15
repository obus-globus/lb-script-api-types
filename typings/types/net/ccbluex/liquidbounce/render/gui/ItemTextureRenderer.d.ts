import type { TextureTarget } from '../../../../../com/mojang/blaze3d/pipeline/TextureTarget.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Atlas } from '../../../../../net/ccbluex/liquidbounce/render/gui/Atlas.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L116 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:116}
 */
export class ItemTextureRenderer extends Object implements MinecraftShortcuts {
    constructor(items: Item[], count: number, scale: number)
    readonly count: number;
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private itemAtlasFramebuffer: TextureTarget;
    // private itemPixelSize: number;
    readonly items: Item[];
    // private itemsPerDimension: number;
    // private projection: Projection;
    // private projectionMatrixBuffer: ProjectionMatrixBuffer;
    readonly scale: number;
    // private submitNodeCollector: SubmitNodeStorage;
    // private textureSize: number;
    // private close(): void;
    // private findBlockToItemAliases(): Map<Identifier, Identifier>;
    /**
     * @see net.minecraft.client.gui.render.GuiRenderer.prepareItemElements
From 1.21.5 DrawContext code
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L157 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:157}
     */
    render(): CompletableFuture<Atlas>;
    // private renderItemToAtlas(state: TrackingItemStackRenderState, matrices: PoseStack, scaledX: number, scaledY: number, itemPixelSize: number): void;
}