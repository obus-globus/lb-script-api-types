import type { DeltaCoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/delta/DeltaCoder.d.ts'
export class DeltaEncoder extends DeltaCoder {
    constructor(distance: number)
    encode(in_: number[], in_off: number, len: number, out: number[]): void;
}