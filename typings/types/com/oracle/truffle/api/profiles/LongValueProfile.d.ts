import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedLongValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedLongValueProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class LongValueProfile extends Profile {
    static create(): LongValueProfile;
    static createIdentityProfile(): LongValueProfile;
    static getUncached(): LongValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedLongValueProfile;
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