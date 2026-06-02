import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedFloatValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedFloatValueProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class FloatValueProfile extends Profile {
    static create(): FloatValueProfile;
    static createRawIdentityProfile(): FloatValueProfile;
    static getUncached(): FloatValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedFloatValueProfile;
    private constructor()
    // private cachedRawValue: number;
    // private cachedValue: number;
    // private state: number;
    disable(): void;
    getCachedValue(): number;
    isGeneric(): boolean;
    isUninitialized(): boolean;
    profile(value: number): number;
    reset(): void;
    toString(): string;
}