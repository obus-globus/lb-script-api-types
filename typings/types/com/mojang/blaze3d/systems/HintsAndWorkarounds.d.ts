import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HintsAndWorkarounds extends Record {
    constructor(writeToBufferIsSlow: boolean, anisotropyHasKnownIssues: boolean)
    // private anisotropyHasKnownIssues: boolean;
    // private writeToBufferIsSlow: boolean;
    anisotropyHasKnownIssues(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    writeToBufferIsSlow(): boolean;
}