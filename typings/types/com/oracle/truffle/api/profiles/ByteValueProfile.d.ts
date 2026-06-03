import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedByteValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedByteValueProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}