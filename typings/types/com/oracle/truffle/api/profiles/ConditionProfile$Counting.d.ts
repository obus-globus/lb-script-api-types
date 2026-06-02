import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
export class ConditionProfile$Counting extends ConditionProfile {
    static MAX_VALUE: number;
    static create(): ConditionProfile;
    static createBinaryProfile(): ConditionProfile;
    static createCountingProfile(): ConditionProfile;
    static getUncached(): ConditionProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedConditionProfile;
    constructor()
    // private falseCount: number;
    // private trueCount: number;
    disable(): void;
    getFalseCount(): number;
    getTrueCount(): number;
    profile(value: boolean): boolean;
    reset(): void;
    toString(): string;
}