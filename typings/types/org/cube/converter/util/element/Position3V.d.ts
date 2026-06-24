import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Position3V extends Object {
    static fromOrigin(paramarg0: JsonElement[], paramarg1: JsonElement[]): Position3V;
    static zero(): Position3V;
    constructor(arg0: JsonElement[])
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number[])
    readonly x: number;
    readonly y: number;
    readonly z: number;
    add(arg0: number, arg1: number, arg2: number): Position3V;
    add(arg0: Position3V): Position3V;
    asBedrockPosition(arg0: Position3V): Position3V;
    asJavaPosition(arg0: Position3V): Position3V;
    clone(): Position3V;
    getJavaOverlap(): Position3V;
    getX(): number;
    getY(): number;
    getZ(): number;
    isZero(): boolean;
    multiply(arg0: number, arg1: number, arg2: number): Position3V;
    scale(arg0: number): void;
    set(arg0: number, arg1: number, arg2: number): void;
    set(arg0: Position3V): void;
    setX(arg0: number): void;
    setY(arg0: number): void;
    setZ(arg0: number): void;
    subtract(arg0: number, arg1: number, arg2: number): Position3V;
    subtract(arg0: Position3V): Position3V;
    toArray(): number[];
    toJson(): JsonElement[];
    toString(): string;
    withJavaOffset(): Position3V;
}