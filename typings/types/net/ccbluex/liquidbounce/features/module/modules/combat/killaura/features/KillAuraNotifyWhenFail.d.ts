import type { PoseStack } from '../../../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ObjectLongMutablePair } from '../../../../../../../../../it/unimi/dsi/fastutil/objects/ObjectLongMutablePair.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AABB } from '../../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class KillAuraNotifyWhenFail extends Object {
    static INSTANCE: KillAuraNotifyWhenFail;
    // private POINT_BOX: AABB;
    // private /*not mapped: */ getBoxFadeSeconds(): number;
    // private failedHits: ObjectLongMutablePair<Vec3>[];
    /*not mapped: */ getFailedHits$liquidbounce(): ObjectLongMutablePair<Vec3>[];
    failedHitsIncrement: number;
    notifyForFailedHit(entity: Entity, rotation: Rotation): void;
    renderFailedHits(matrixStack: PoseStack): void;
}