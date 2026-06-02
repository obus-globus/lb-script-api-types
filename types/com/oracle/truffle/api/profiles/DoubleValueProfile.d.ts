import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedDoubleValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedDoubleValueProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class DoubleValueProfile extends Profile {
    static create(): DoubleValueProfile;
    static createRawIdentityProfile(): DoubleValueProfile;
    static getUncached(): DoubleValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedDoubleValueProfile;
    constructor()
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