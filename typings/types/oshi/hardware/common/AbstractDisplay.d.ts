import type { Object } from '../../../java/lang/Object.d.ts'
import type { Display } from '../../../oshi/hardware/Display.d.ts'
export abstract class AbstractDisplay extends Object implements Display {
    constructor(arg0: number[])
    readonly edid: number[];
    getEdid(): number[];
    toString(): string;
}