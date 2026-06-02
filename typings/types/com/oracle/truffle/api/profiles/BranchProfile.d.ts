import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { Profile } from '../../../../../com/oracle/truffle/api/profiles/Profile.d.ts'
export class BranchProfile extends Profile {
    static create(): BranchProfile;
    static getUncached(): BranchProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedBranchProfile;
    constructor()
    // private visited: boolean;
    disable(): void;
    enter(): void;
    reset(): void;
    toString(): string;
}