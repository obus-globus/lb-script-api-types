import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { FogData } from '../../../../../../net/minecraft/client/renderer/fog/FogData.d.ts'
import type { FogEnvironment } from '../../../../../../net/minecraft/client/renderer/fog/environment/FogEnvironment.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { FogType } from '../../../../../../net/minecraft/world/level/material/FogType.d.ts'
export class PowderedSnowFogEnvironment extends FogEnvironment {
    constructor()
    getBaseColor(level: ClientLevel, camera: Camera, renderDistance: number, partialTicks: number): number;
    isApplicable(fogType: FogType, entity: Entity): boolean;
    setupFog(fog: FogData, camera: Camera, level: ClientLevel, renderDistance: number, deltaTracker: DeltaTracker): void;
}