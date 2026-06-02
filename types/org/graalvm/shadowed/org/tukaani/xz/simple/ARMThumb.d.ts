import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SimpleFilter } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/simple/SimpleFilter.d.ts'
export class ARMThumb extends Object implements SimpleFilter {
    constructor(isEncoder: boolean, startPos: number)
    // private isEncoder: boolean;
    // private pos: number;
    code(buf: number[], off: number, len: number): number;
}