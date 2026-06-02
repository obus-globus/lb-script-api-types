import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class ConditionProfile extends Profile {
    static create(): ConditionProfile;
    static createBinaryProfile(): ConditionProfile;
    static createCountingProfile(): ConditionProfile;
    static getUncached(): ConditionProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedConditionProfile;
    constructor()
    // private wasFalse: boolean;
    // private wasTrue: boolean;
    disable(): void;
    profile(value: boolean): boolean;
    reset(): void;
    toString(): string;
    wasFalse(): boolean;
    wasTrue(): boolean;
}