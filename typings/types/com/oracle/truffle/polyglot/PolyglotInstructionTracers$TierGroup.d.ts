import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotInstructionTracers$TierGroup extends Enum<PolyglotInstructionTracers$TierGroup> {
    static TIER_0_INTERPRETED_UNCACHED: PolyglotInstructionTracers$TierGroup;
    static TIER_1_INTERPRETED_CACHED: PolyglotInstructionTracers$TierGroup;
    static TIER_2_COMPILED_FIRST: PolyglotInstructionTracers$TierGroup;
    static TIER_3_COMPILED_LAST: PolyglotInstructionTracers$TierGroup;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotInstructionTracers$TierGroup;
    static values(): PolyglotInstructionTracers$TierGroup[];
    private constructor()
    toString(): string;
    name(): "TIER_3_COMPILED_LAST" | "TIER_2_COMPILED_FIRST" | "TIER_1_INTERPRETED_CACHED" | "TIER_0_INTERPRETED_UNCACHED";
}