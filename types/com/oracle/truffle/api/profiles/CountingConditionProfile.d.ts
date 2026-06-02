import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class CountingConditionProfile extends Profile {
    static create(): CountingConditionProfile;
    static getUncached(): CountingConditionProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedCountingConditionProfile;
    private constructor()
    // private falseCount: number;
    // private trueCount: number;
    disable(): void;
    getFalseCount(): number;
    getTrueCount(): number;
    profile(value: boolean): boolean;
    reset(): void;
    toString(): string;
}