import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}