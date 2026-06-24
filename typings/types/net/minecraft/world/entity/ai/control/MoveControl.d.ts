import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Control } from '../../../../../../net/minecraft/world/entity/ai/control/Control.d.ts'
import type { MoveControl$Operation } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl$Operation.d.ts'
export class MoveControl<T extends Mob> extends Object implements Control {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(mob: T)
    // private mob: T;
    // private operation: MoveControl$Operation;
    speedModifier: number;
    // private strafeForwards: number;
    // private strafeRight: number;
    wantedX: number;
    wantedY: number;
    wantedZ: number;
    getSpeedModifier(): number;
    getWantedX(): number;
    getWantedY(): number;
    getWantedZ(): number;
    hasWanted(): boolean;
    // private isWalkable(dx: number, dz: number): boolean;
    rotateTowards(fromAngle: number, toAngle: number, maxRot: number): number;
    rotlerp(a: number, b: number, max: number): number;
    setWait(): void;
    setWantedPosition(x: number, y: number, z: number, speedModifier: number): void;
    strafe(forwards: number, right: number): void;
    tick(): void;
}