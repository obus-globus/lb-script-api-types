import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DynamicAtlasAllocator } from '../../../../../net/minecraft/client/gui/render/DynamicAtlasAllocator.d.ts'
import type { GuiItemAtlas$SlotView } from '../../../../../net/minecraft/client/gui/render/GuiItemAtlas$SlotView.d.ts'
import type { Projection } from '../../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { FeatureRenderDispatcher } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { TrackingItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/TrackingItemStackRenderState.d.ts'
export class GuiItemAtlas extends Object implements AutoCloseable {
    static computeTextureSizeFor(paramslotTextureSize: number, paramrequiredSlotCount: number): number;
    constructor(featureRenderDispatcher: FeatureRenderDispatcher, textureSize: number, slotTextureSize: number)
    // private allocator: DynamicAtlasAllocator<Object>;
    // private depthTexture: GpuTexture;
    // private depthTextureView: GpuTextureView;
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private poseStack: PoseStack;
    // private projection: Projection;
    // private projectionMatrixBuffer: ProjectionMatrixBuffer;
    // private slotTextureSize: number;
    // private submitNodeStorage: SubmitNodeStorage;
    // private texture: GpuTexture;
    // private textureSize: number;
    // private textureView: GpuTextureView;
    close(): void;
    // private drawToSlot(slotX: number, slotY: number, clear: boolean, item: ItemStackRenderState): void;
    endFrame(): void;
    getOrUpdate(item: TrackingItemStackRenderState): GuiItemAtlas$SlotView;
    textureSize(): number;
    tryPrepareFor(items: Object[]): boolean;
}