import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedExactClassProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { ValueProfile } from '../../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueProfile$Identity extends ValueProfile {
    static create(): ValueProfile;
    static createClassProfile(): ValueProfile;
    static createIdentityProfile(): ValueProfile;
    static getUncached(): ValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedExactClassProfile;
    constructor()
    cachedValue: Object;
    disable(): void;
    getCachedValue(): Object;
    isGeneric(): boolean;
    isUninitialized(): boolean;
    profile<T extends Object | number | string | boolean>(newValue: T): T;
    reset(): void;
    toString(): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}