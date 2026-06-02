import type { Object } from '../../java/lang/Object.d.ts'
import type { MatchResult$Destructured } from '../../kotlin/text/MatchResult$Destructured.d.ts'
export interface MatchResult extends Object{
    readonly destructured: MatchResult$Destructured;
    readonly groupValues: string[];
    readonly groups: (Object | null)[];
    readonly range: { start: number; endInclusive: number; step: number };
    readonly value: string;
    next(): MatchResult | null;
}