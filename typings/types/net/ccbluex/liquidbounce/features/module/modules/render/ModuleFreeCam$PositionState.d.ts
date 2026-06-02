import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleFreeCam$PositionState extends Object {
    static INSTANCE: ModuleFreeCam$PositionState;
    available: boolean;
    // private lastPos: Vec3;
    readonly pos: Vec3;
    interpolate(partialTicks: number): Vec3;
    set(target: Vec3): void;
    update(velocity: Vec3): void;
}