import type { Tree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Tree.d.ts'
export class RayOcclusionSectionTree$FlatTree extends Tree {
    static NOT_PRESENT: number;
    static OUT_OF_BOUNDS: number;
    static PRESENT: number;
    static isOutOfBounds(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    constructor(arg0: number, arg1: number, arg2: number)
    getPresence(arg0: number, arg1: number, arg2: number): number;
}