import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Point extends Object implements Serializable {
    constructor(arg0: number, arg1: number)
    readonly x: number;
    readonly y: number;
    getX(): number;
    getY(): number;
    toString(): string;
}