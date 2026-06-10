import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DebugBeeInfo } from '../../../../../net/minecraft/util/debug/DebugBeeInfo.d.ts'
import type { DebugGoalInfo } from '../../../../../net/minecraft/util/debug/DebugGoalInfo.d.ts'
import type { DebugHiveInfo } from '../../../../../net/minecraft/util/debug/DebugHiveInfo.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class BeeDebugRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor(minecraft: Minecraft)
    // private lastLookedAtUuid: UUID;
    // private minecraft: Minecraft;
    // private createHiveBlacklistMap(debugValues: DebugValueAccess): Map<BlockPos, UUID[]>;
    // private doRender(debugValues: DebugValueAccess): void;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
    // private getCamera(): Camera;
    // private getGhostHives(debugValues: DebugValueAccess): Map<BlockPos, string[]>;
    // private getHiveMembers(hivePos: BlockPos, debugValues: DebugValueAccess): UUID[];
    // private getPosDescription(entity: Entity, pos: BlockPos): string;
    // private isBeeSelected(entity: Entity): boolean;
    // private renderBeeInfo(entity: Entity, beeInfo: DebugBeeInfo, goalInfo: DebugGoalInfo): void;
    // private renderFlowerInfos(debugValues: DebugValueAccess): void;
    // private renderGhostHive(ghostHivePos: BlockPos, hiveMemberNames: string[]): void;
    // private renderHiveInfo(hivePos: BlockPos, hive: DebugHiveInfo, beesWhoBlacklistThisHive: UUID[], debugValues: DebugValueAccess): void;
    // private updateLastLookedAtUuid(): void;
}