import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BakedQuad } from '../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class QuadCollection extends Object {
    static EMPTY: QuadCollection;
    constructor(all: BakedQuad[], unculled: BakedQuad[], north: BakedQuad[], south: BakedQuad[], east: BakedQuad[], west: BakedQuad[], up: BakedQuad[], down: BakedQuad[])
    readonly all: BakedQuad[];
    // private down: BakedQuad[];
    // private east: BakedQuad[];
    // private materialFlags: number;
    // private north: BakedQuad[];
    // private south: BakedQuad[];
    // private unculled: BakedQuad[];
    // private up: BakedQuad[];
    // private west: BakedQuad[];
    getAll(): BakedQuad[];
    getQuads(direction: Direction): BakedQuad[];
    hasMaterialFlag(flag: number): boolean;
    materialFlags(): number;
}