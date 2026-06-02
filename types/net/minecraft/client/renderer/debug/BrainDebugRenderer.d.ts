import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DebugBrainDump } from '../../../../../net/minecraft/util/debug/DebugBrainDump.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class BrainDebugRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor(minecraft: Minecraft)
    // private lastLookedAtUuid: UUID;
    // private minecraft: Minecraft;
    // private doRender(debugValues: DebugValueAccess): void;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
    getGhostPois(debugValues: DebugValueAccess): Map<BlockPos, string[]>;
    // private isMobSelected(entity: Entity): boolean;
    // private renderBrainInfo(entity: Entity, brainDump: DebugBrainDump): void;
    // private updateLastLookedAtUuid(): void;
}