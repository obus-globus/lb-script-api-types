import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParticleLimit extends Record {
    static SPORE_BLOSSOM: ParticleLimit;
    constructor(limit: number)
    // private limit: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    limit(): number;
    toString(): string;
}