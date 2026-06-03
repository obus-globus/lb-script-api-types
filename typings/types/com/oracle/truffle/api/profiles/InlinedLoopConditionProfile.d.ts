import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$IntField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$IntField.d.ts'
import type { InlineSupport$LongField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$LongField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlinedLoopConditionProfile extends InlinedProfile {
    static getUncached(): InlinedLoopConditionProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedLoopConditionProfile;
    private constructor()
    private constructor(target: InlineSupport$InlineTarget)
    // private falseCount: InlineSupport$IntField;
    // private trueCount: InlineSupport$LongField;
    disable(node: Node): void;
    getFalseCount(node: Node): number;
    getTrueCount(node: Node): number;
    inject(node: Node, condition: boolean): boolean;
    isGeneric(node: Node): boolean;
    isUninitialized(node: Node): boolean;
    profile(node: Node, condition: boolean): boolean;
    profileCounted(node: Node, length: number): void;
    reset(node: Node): void;
    toString(): string;
    toString(node: Node): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
    wasFalse(node: Node): boolean;
    wasTrue(node: Node): boolean;
}