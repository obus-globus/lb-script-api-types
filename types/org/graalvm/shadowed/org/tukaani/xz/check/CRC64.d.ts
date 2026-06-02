import type { Check } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
export class CRC64 extends Check {
    static getInstance(paramcheckType: number): Check;
    constructor()
    // private crc: number;
    finish(): number[];
    update(buf: number[], off: number, len: number): void;
}