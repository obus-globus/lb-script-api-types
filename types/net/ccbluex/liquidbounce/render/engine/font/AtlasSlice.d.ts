import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AtlasSlice extends Object {
    constructor(x: number, y: number, width: number, height: number)
    readonly children: AtlasSlice[];
    readonly height: number;
    // private isAllocated: boolean;
    /*not mapped: */ isAllocated(): boolean;
    parent: AtlasSlice | null;
    readonly width: number;
    readonly x: number;
    readonly y: number;
}