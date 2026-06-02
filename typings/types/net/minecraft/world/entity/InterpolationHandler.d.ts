import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InterpolationHandler$InterpolationData } from '../../../../net/minecraft/world/entity/InterpolationHandler$InterpolationData.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class InterpolationHandler extends Object {
    static DEFAULT_INTERPOLATION_STEPS: number;
    constructor(entity: Entity)
    constructor(entity: Entity, onInterpolationStart: (param0: InterpolationHandler) => void)
    constructor(entity: Entity, interpolationSteps: number)
    constructor(entity: Entity, interpolationSteps: number, onInterpolationStart: (param0: InterpolationHandler) => void)
    // private entity: Entity;
    interpolationData: InterpolationHandler$InterpolationData;
    // private interpolationSteps: number;
    // private onInterpolationStart: (param0: InterpolationHandler) => void;
    // private previousTickPosition: Vec3;
    // private previousTickRot: Vec2;
    cancel(): void;
    hasActiveInterpolation(): boolean;
    interpolate(): void;
    interpolateTo(position: Vec3, yRot: number, xRot: number): void;
    position(): Vec3;
    setInterpolationLength(steps: number): void;
    xRot(): number;
    yRot(): number;
}