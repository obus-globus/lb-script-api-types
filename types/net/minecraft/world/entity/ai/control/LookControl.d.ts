import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Control } from '../../../../../../net/minecraft/world/entity/ai/control/Control.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LookControl extends Object implements Control {
    constructor(mob: Mob)
    // private lookAtCooldown: number;
    // private mob: Mob;
    wantedX: number;
    wantedY: number;
    wantedZ: number;
    // private xMaxRotAngle: number;
    // private yMaxRotSpeed: number;
    clampHeadRotationToBody(): void;
    getWantedX(): number;
    getWantedY(): number;
    getWantedZ(): number;
    getXRotD(): Optional<number>;
    getYRotD(): Optional<number>;
    isLookingAtTarget(): boolean;
    resetXRotOnTick(): boolean;
    rotateTowards(fromAngle: number, toAngle: number, maxRot: number): number;
    setLookAt(x: number, y: number, z: number): void;
    setLookAt(x: number, y: number, z: number, yMaxRotSpeed: number, xMaxRotAngle: number): void;
    setLookAt(target: Entity): void;
    setLookAt(target: Entity, yMaxRotSpeed: number, xMaxRotAngle: number): void;
    setLookAt(vec: Vec3): void;
    tick(): void;
}