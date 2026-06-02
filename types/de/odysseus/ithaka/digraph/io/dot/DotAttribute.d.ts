import type { Color } from '../../../../../../java/awt/Color.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class DotAttribute extends Object {
    constructor(arg0: string, arg1: Color)
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: Number)
    constructor(arg0: string, arg1: string)
    readonly name: string;
    // private quotes: boolean;
    readonly value: string;
    getName(): string;
    getValue(): string;
    write(arg0: Writer): void;
}