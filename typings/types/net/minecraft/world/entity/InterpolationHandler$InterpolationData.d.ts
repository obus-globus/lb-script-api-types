import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class InterpolationHandler$InterpolationData extends Object {
    private constructor(steps: number, position: Vec3, yRot: number, xRot: number)
    position: Vec3;
    // private steps: number;
    xRot: number;
    yRot: number;
    addDelta(delta: Vec3): void;
    addRotation(yRot: number, xRot: number): void;
    decrease(): void;
}