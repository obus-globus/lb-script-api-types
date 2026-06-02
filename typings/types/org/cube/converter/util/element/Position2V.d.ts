import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Position2V extends Object {
    constructor(arg0: number, arg1: number)
    readonly x: number;
    readonly y: number;
    add(arg0: number, arg1: number): Position2V;
    add(arg0: Position2V): Position2V;
    clone(): Position2V;
    getX(): number;
    getY(): number;
    setX(arg0: number): void;
    setY(arg0: number): void;
    toJson(): JsonElement[];
}