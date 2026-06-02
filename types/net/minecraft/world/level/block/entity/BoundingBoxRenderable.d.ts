import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BoundingBoxRenderable$Mode } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$Mode.d.ts'
import type { BoundingBoxRenderable$RenderableBox } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$RenderableBox.d.ts'
export interface BoundingBoxRenderable extends Object{
    getRenderableBox(): BoundingBoxRenderable$RenderableBox;
    renderMode(): BoundingBoxRenderable$Mode;
}