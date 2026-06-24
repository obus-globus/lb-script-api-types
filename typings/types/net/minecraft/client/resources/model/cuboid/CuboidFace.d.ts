import type { Quadrant } from '../../../../../../com/mojang/math/Quadrant.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidFace$UVs } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidFace$UVs.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class CuboidFace extends Record {
    static NO_TINT: number;
    static getU(paramuvs: CuboidFace$UVs, paramrotation: Quadrant, paramvertex: number): number;
    static getV(paramuvs: CuboidFace$UVs, paramrotation: Quadrant, paramindex: number): number;
    constructor(cullForDirection: Direction, tintIndex: number, texture: string, uvs: CuboidFace$UVs, rotation: Quadrant)
    // private cullForDirection: Direction;
    // private rotation: Quadrant;
    // private texture: string;
    // private tintIndex: number;
    // private uvs: CuboidFace$UVs;
    cullForDirection(): Direction;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rotation(): Quadrant;
    texture(): string;
    tintIndex(): number;
    toString(): string;
    uvs(): CuboidFace$UVs;
}