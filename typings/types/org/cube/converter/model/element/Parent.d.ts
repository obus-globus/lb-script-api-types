import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cube } from '../../../../../org/cube/converter/model/element/Cube.d.ts'
import type { Position3V } from '../../../../../org/cube/converter/util/element/Position3V.d.ts'
export class Parent extends Object {
    constructor(arg0: string, arg1: Position3V, arg2: Position3V)
    readonly cubes: { [key: number]: Cube };
    readonly name: string;
    readonly parent: string;
    readonly pivot: Position3V;
    readonly rotation: Position3V;
    clone(): Parent;
    getCubes(): { [key: number]: Cube };
    getName(): string;
    getParent(): string;
    getPivot(): Position3V;
    getRotation(): Position3V;
    setParent(arg0: string): void;
}