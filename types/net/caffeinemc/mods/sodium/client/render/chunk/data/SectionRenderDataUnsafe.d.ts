import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SectionRenderDataUnsafe extends Object {
    static allocateHeap(paramarg0: number): number;
    static clearFull(paramarg0: number): void;
    static clearIndexData(paramarg0: number): void;
    static clearVertexData(paramarg0: number): void;
    static freeHeap(paramarg0: number): void;
    static getBaseElement(paramarg0: number): number;
    static getBaseVertex(paramarg0: number): number;
    static getFacingList(paramarg0: number): number;
    static getSliceMask(paramarg0: number): number;
    static getVertexCount(paramarg0: number, paramarg1: number): number;
    static heapPointer(paramarg0: number, paramarg1: number): number;
    static isLocalIndex(paramarg0: number): boolean;
    static setBaseVertex(paramarg0: number, paramarg1: number): void;
    static setFacingList(paramarg0: number, paramarg1: number): void;
    static setLocalBaseElement(paramarg0: number, paramarg1: number): void;
    static setSharedBaseElement(paramarg0: number, paramarg1: number): void;
    static setSliceMask(paramarg0: number, paramarg1: number): void;
    static setVertexCount(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}