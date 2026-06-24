import type { Quadrant } from '../../../../../../com/mojang/math/Quadrant.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
export class Variant$SimpleModelState extends Record {
    static DEFAULT: Variant$SimpleModelState;
    static MAP_CODEC: MapCodec<Variant$SimpleModelState>;
    constructor(x: Quadrant, y: Quadrant, z: Quadrant, uvLock: boolean)
    // private uvLock: boolean;
    // private x: Quadrant;
    // private y: Quadrant;
    // private z: Quadrant;
    asModelState(): ModelState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    uvLock(): boolean;
    withUvLock(uvLock: boolean): Variant$SimpleModelState;
    withX(x: Quadrant): Variant$SimpleModelState;
    withY(y: Quadrant): Variant$SimpleModelState;
    withZ(z: Quadrant): Variant$SimpleModelState;
    x(): Quadrant;
    y(): Quadrant;
    z(): Quadrant;
}