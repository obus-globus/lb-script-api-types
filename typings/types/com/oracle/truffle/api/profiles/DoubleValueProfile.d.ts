import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedDoubleValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedDoubleValueProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}