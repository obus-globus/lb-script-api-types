import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Score$Packed } from '../../../../net/minecraft/world/scores/Score$Packed.d.ts'
export class Scoreboard$PackedScore extends Record {
    static CODEC: Codec<Scoreboard$PackedScore>;
    constructor(owner: string, objective: string, score: Score$Packed)
    // private objective: string;
    // private owner: string;
    // private score: Score$Packed;
    equals(o: Object | null): boolean;
    hashCode(): number;
    objective(): string;
    owner(): string;
    score(): Score$Packed;
    toString(): string;
}