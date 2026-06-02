import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { FogData } from '../../../../../../net/minecraft/client/renderer/fog/FogData.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { FogType } from '../../../../../../net/minecraft/world/level/material/FogType.d.ts'
export abstract class FogEnvironment extends Object {
    constructor()
    getBaseColor(level: ClientLevel, camera: Camera, renderDistance: number, partialTicks: number): number;
    getModifiedDarkness(entity: LivingEntity, darkness: number, partialTickTime: number): number;
    isApplicable(fogType: FogType, entity: Entity): boolean;
    modifiesDarkness(): boolean;
    providesColor(): boolean;
    setupFog(fog: FogData, camera: Camera, level: ClientLevel, renderDistance: number, deltaTracker: DeltaTracker): void;
}