import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedIntValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedIntValueProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class IntValueProfile extends Profile {
    static create(): IntValueProfile;
    static createIdentityProfile(): IntValueProfile;
    static getUncached(): IntValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedIntValueProfile;
    constructor()
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