import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedByteValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedByteValueProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class ByteValueProfile extends Profile {
    static create(): ByteValueProfile;
    static createIdentityProfile(): ByteValueProfile;
    static getUncached(): ByteValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedByteValueProfile;
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