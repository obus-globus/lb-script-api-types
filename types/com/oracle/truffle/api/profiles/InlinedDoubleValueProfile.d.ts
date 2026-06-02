import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$LongField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$LongField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInlinedValueProfile } from '../../../../../com/oracle/truffle/api/profiles/AbstractInlinedValueProfile.d.ts'
export class InlinedDoubleValueProfile extends AbstractInlinedValueProfile {
    static getUncached(): InlinedDoubleValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedDoubleValueProfile;
    private constructor()
    private constructor(target: InlineSupport$InlineTarget)
    // private cachedValue0: InlineSupport$LongField;
    getCachedValue(node: Node): number;
    profile(node: Node, value: number): number;
    toString(node: Node): string;
}