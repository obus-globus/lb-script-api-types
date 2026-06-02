import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$IntField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$IntField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInlinedValueProfile } from '../../../../../com/oracle/truffle/api/profiles/AbstractInlinedValueProfile.d.ts'
export class InlinedFloatValueProfile extends AbstractInlinedValueProfile {
    static getUncached(): InlinedFloatValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedFloatValueProfile;
    private constructor()
    private constructor(target: InlineSupport$InlineTarget)
    // private cachedValue: InlineSupport$IntField;
    getCachedValue(node: Node): number;
    profile(node: Node, value: number): number;
    toString(node: Node): string;
}