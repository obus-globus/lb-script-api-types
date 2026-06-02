import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class BoxCuller extends Object {
    constructor(arg0: number)
    // private maxAllowedX: number;
    // private maxAllowedY: number;
    // private maxAllowedZ: number;
    // private maxDistance: number;
    // private minAllowedX: number;
    // private minAllowedY: number;
    // private minAllowedZ: number;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    isCulled(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    isCulled(arg0: AABB): boolean;
    isCulledSodium(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    setPosition(arg0: number, arg1: number, arg2: number): void;
    toString(): string;
}