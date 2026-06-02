import type { CRC32 } from '../../../../../../../java/util/zip/CRC32.d.ts'
import type { Check } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
export class CRC32 extends Check {
    static getInstance(paramcheckType: number): Check;
    constructor()
    // private state: CRC32;
    finish(): number[];
    update(buf: number[], off: number, len: number): void;
}