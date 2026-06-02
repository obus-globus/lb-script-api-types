import type { InterpolationHandler } from '../../../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { AbstractBoat } from '../../../../../../net/minecraft/world/entity/vehicle/boat/AbstractBoat.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PositionInterpolator1_8 extends InterpolationHandler {
    static DEFAULT_INTERPOLATION_STEPS: number;
    constructor(arg0: AbstractBoat)
    // private boatEntity: AbstractBoat;
    interpolate(): void;
    interpolateTo(arg0: Vec3, arg1: number, arg2: number): void;
}