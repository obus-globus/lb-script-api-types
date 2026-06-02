import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SimpleFilter } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/simple/SimpleFilter.d.ts'
export class X86 extends Object implements SimpleFilter {
    constructor(isEncoder: boolean, startPos: number)
    // private isEncoder: boolean;
    // private pos: number;
    // private prevMask: number;
    code(buf: number[], off: number, len: number): number;
}