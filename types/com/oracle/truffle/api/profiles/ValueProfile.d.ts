import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedExactClassProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ValueProfile extends Profile {
    static create(): ValueProfile;
    static createClassProfile(): ValueProfile;
    static createIdentityProfile(): ValueProfile;
    static getUncached(): ValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedExactClassProfile;
    constructor()
    profile<T extends Object | number | string | boolean>(value: T): T;
}