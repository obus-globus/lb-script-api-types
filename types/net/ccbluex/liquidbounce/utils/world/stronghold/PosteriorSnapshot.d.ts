import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PosteriorCandidate } from '../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/PosteriorCandidate.d.ts'
export class PosteriorSnapshot extends Record {
    constructor(candidates: PosteriorCandidate[], confidence: number, sampleCount: number)
    // private candidates: PosteriorCandidate[];
    /*not mapped: */ candidates(): PosteriorCandidate[];
    // private confidence: number;
    /*not mapped: */ confidence(): number;
    // private sampleCount: number;
    /*not mapped: */ sampleCount(): number;
    component1(): PosteriorCandidate[];
    component2(): number;
    component3(): number;
    copy(candidates: PosteriorCandidate[], confidence: number, sampleCount: number): PosteriorSnapshot;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}