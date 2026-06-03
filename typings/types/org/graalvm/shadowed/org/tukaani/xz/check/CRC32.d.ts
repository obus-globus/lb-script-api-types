import type { CRC32 as CRC32_2 } from '../../../../../../../java/util/zip/CRC32.d.ts'
import type { Check } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
export class CRC32 extends Check {
    static getInstance(paramcheckType: number): Check;
    constructor()
    // private state: CRC32_2;
    finish(): number[];
    update(buf: number[]): void;
    update(buf: number[], off: number, len: number): void;
}