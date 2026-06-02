import type { Vec3i } from '../../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpiralIterator$Builder<T extends Vec3i> extends Object{
    build(arg0: number, arg1: number, arg2: number): T;
}