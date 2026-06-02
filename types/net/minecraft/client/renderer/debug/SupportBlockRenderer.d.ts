import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class SupportBlockRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor(minecraft: Minecraft)
    // private lastUpdateTime: number;
    // private minecraft: Minecraft;
    // private surroundEntities: Entity[];
    // private drawHighlights(entity: Entity, biasGetter: () => kotlin.Double, color: number): void;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
    // private getBias(entity: Entity): number;
    // private highlightPosition(pos: BlockPos, offset: number, color: number): void;
}