import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$StateField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlinedConditionProfile extends InlinedProfile {
    static getUncached(): InlinedConditionProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedConditionProfile;
    private constructor()
    private constructor(target: InlineSupport$InlineTarget)
    // private state: InlineSupport$StateField;
    disable(node: Node): void;
    isGeneric(node: Node): boolean;
    isUninitialized(node: Node): boolean;
    profile(node: Node, value: boolean): boolean;
    reset(node: Node): void;
    toString(): string;
    toString(node: Node): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
    wasFalse(node: Node): boolean;
    wasTrue(node: Node): boolean;
}