import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConditionProfile$Disabled extends ConditionProfile {
    static create(): ConditionProfile;
    static createBinaryProfile(): ConditionProfile;
    static createCountingProfile(): ConditionProfile;
    static getUncached(): ConditionProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedConditionProfile;
    constructor()
    clone(): Object;
    profile(value: boolean): boolean;
    toString(): string;
}