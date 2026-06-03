import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedExactClassProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { ValueProfile } from '../../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueProfile$Disabled extends ValueProfile {
    static create(): ValueProfile;
    static createClassProfile(): ValueProfile;
    static createIdentityProfile(): ValueProfile;
    static getUncached(): ValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedExactClassProfile;
    constructor()
    clone(): Object;
    profile<T extends Object | number | string | boolean>(value: T): T;
    toString(): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}