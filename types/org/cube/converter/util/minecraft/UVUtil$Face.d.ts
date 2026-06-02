import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../org/cube/converter/util/element/Direction.d.ts'
import type { Position2V } from '../../../../../org/cube/converter/util/element/Position2V.d.ts'
export class UVUtil$Face extends Object {
    constructor(arg0: Direction, arg1: Position2V, arg2: Position2V, arg3: boolean)
    readonly direction: Direction;
    readonly end: Position2V;
    readonly start: Position2V;
    getDirection(): Direction;
    getEnd(): Position2V;
    getStart(): Position2V;
    setEnd(arg0: Position2V): void;
    setStart(arg0: Position2V): void;
}