import type { Object } from '../../../java/lang/Object.d.ts'
export class Cursor3D extends Object {
    static TYPE_CORNER: number;
    static TYPE_EDGE: number;
    static TYPE_FACE: number;
    static TYPE_INSIDE: number;
    constructor(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number)
    // private depth: number;
    // private end: number;
    // private height: number;
    // private index: number;
    // private originX: number;
    // private originY: number;
    // private originZ: number;
    // private width: number;
    // private x: number;
    // private y: number;
    // private z: number;
    advance(): boolean;
    getNextType(): number;
    nextX(): number;
    nextY(): number;
    nextZ(): number;
}