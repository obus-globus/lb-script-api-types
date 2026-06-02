import type { Check } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
export class None extends Check {
    static getInstance(paramcheckType: number): Check;
    constructor()
    finish(): number[];
    update(buf: number[], off: number, len: number): void;
}