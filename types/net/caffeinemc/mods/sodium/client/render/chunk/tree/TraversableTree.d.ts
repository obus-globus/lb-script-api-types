import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { Tree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Tree.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export class TraversableTree extends Tree {
    static NOT_PRESENT: number;
    static OUT_OF_BOUNDS: number;
    static PRESENT: number;
    static isOutOfBounds(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    constructor(arg0: number, arg1: number, arg2: number)
    // private cameraOffsetX: number;
    // private cameraOffsetY: number;
    // private cameraOffsetZ: number;
    // private distanceLimit: number;
    treeDoubleReduced: number;
    // private treeReduced: number[];
    // private viewport: Viewport;
    // private visitor: CoordinateSectionVisitor;
    getChildOrderModulator(arg0: number, arg1: number, arg2: number, arg3: number): number;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    prepareForTraversal(): void;
    testChild(arg0: number, arg1: number, arg2: number, arg3: number): void;
    testLeafNode(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    traverse(arg0: number, arg1: number, arg2: number, arg3: number): void;
    traverse(arg0: CoordinateSectionVisitor, arg1: Viewport, arg2: number, arg3: number): void;
}