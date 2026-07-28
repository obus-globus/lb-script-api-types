import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleFreeCam$PositionState extends Object {
    static INSTANCE: ModuleFreeCam$PositionState;
    static lastPos: Vec3;
    static lastRot: Rotation;
    static pos: Vec3;
    static rot: Rotation;
    available: boolean;
    lastPos: Vec3;
    lastRot: Rotation;
    pos: Vec3;
    rot: Rotation;
    interpolate(partialTicks: number): Vec3;
    interpolateRot(partialTicks: number): Rotation;
    rotation(xDelta: number, yDelta: number): void;
    set(target: Rotation): void;
    set(target: Vec3): void;
    update(velocity: Vec3): void;
}