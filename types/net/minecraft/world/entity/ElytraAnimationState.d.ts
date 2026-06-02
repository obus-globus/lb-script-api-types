import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ElytraAnimationState extends Object {
    constructor(entity: LivingEntity)
    // private entity: LivingEntity;
    // private rotX: number;
    // private rotXOld: number;
    // private rotY: number;
    // private rotYOld: number;
    // private rotZ: number;
    // private rotZOld: number;
    getRotX(partialTicks: number): number;
    getRotY(partialTicks: number): number;
    getRotZ(partialTicks: number): number;
    tick(): void;
}