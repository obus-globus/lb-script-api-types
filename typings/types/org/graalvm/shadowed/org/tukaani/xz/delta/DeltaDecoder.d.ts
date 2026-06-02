import type { DeltaCoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/delta/DeltaCoder.d.ts'
export class DeltaDecoder extends DeltaCoder {
    constructor(distance: number)
    decode(buf: number[], off: number, len: number): void;
}