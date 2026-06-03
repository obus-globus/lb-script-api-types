import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoopConditionProfile extends ConditionProfile {
    static create(): ConditionProfile;
    static create(): LoopConditionProfile;
    static createBinaryProfile(): ConditionProfile;
    static createCountingProfile(): ConditionProfile;
    static createCountingProfile(): LoopConditionProfile;
    static getUncached(): ConditionProfile;
    static getUncached(): LoopConditionProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedConditionProfile;
    constructor()
    // private falseCount: number;
    // private trueCount: number;
    disable(): void;
    getFalseCount(): number;
    getTrueCount(): number;
    inject(condition: boolean): boolean;
    profile(condition: boolean): boolean;
    profileCounted(length: number): void;
    reset(): void;
    toString(): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}