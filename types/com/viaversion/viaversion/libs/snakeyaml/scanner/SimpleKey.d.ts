import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SimpleKey extends Object {
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: Mark)
    readonly column: number;
    readonly index: number;
    readonly line: number;
    readonly mark: Mark;
    readonly required: boolean;
    readonly tokenNumber: number;
    getColumn(): number;
    getIndex(): number;
    getLine(): number;
    getMark(): Mark;
    getTokenNumber(): number;
    isRequired(): boolean;
    toString(): string;
}