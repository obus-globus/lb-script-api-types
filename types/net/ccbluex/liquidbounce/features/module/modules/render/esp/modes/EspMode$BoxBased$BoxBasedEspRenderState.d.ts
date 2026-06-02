import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AABB } from '../../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EspMode$BoxBased$BoxBasedEspRenderState extends Object {
    constructor()
    entity: LivingEntity | null;
    localBox: AABB;
    position: Vec3;
    worldBox: AABB;
    component1(): LivingEntity;
    component2(): AABB;
    component3(): Vec3;
    component4(): AABB;
    reset(): void;
    update(tickDelta: number): void;
}