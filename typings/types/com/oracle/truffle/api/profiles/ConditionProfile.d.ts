import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
    wasFalse(): boolean;
    wasTrue(): boolean;
}