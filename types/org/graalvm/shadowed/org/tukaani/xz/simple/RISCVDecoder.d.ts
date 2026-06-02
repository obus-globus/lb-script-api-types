import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SimpleFilter } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/simple/SimpleFilter.d.ts'
export class RISCVDecoder extends Object implements SimpleFilter {
    constructor(startPos: number)
    // private pos: number;
    code(buf: number[], off: number, len: number): number;
}