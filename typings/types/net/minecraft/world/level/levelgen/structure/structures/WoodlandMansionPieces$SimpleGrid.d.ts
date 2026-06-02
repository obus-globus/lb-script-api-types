import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WoodlandMansionPieces$SimpleGrid extends Object {
    constructor(width: number, height: number, valueIfOutside: number)
    // private grid: number[][];
    // private height: number;
    // private valueIfOutside: number;
    // private width: number;
    edgesTo(x: number, y: number, ifValue: number): boolean;
    get(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    set(x0: number, y0: number, x1: number, y1: number, value: number): void;
    setif(x: number, y: number, ifValue: number, value: number): void;
}