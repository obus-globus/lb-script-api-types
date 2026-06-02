import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class AABB$Builder extends Object {
    constructor()
    readonly defined: boolean;
    // private maxX: number;
    // private maxY: number;
    // private maxZ: number;
    // private minX: number;
    // private minY: number;
    // private minZ: number;
    build(): AABB;
    include(v: Vector3fc): void;
    isDefined(): boolean;
}