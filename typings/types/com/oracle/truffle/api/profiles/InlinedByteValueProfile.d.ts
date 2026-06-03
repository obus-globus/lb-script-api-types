import type { InlineSupport$ByteField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$ByteField.d.ts'
import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInlinedValueProfile } from '../../../../../com/oracle/truffle/api/profiles/AbstractInlinedValueProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlinedByteValueProfile extends AbstractInlinedValueProfile {
    static getUncached(): InlinedByteValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedByteValueProfile;
    private constructor()
    private constructor(target: InlineSupport$InlineTarget)
    // private cachedValue: InlineSupport$ByteField;
    getCachedValue(node: Node): number;
    profile(node: Node, value: number): number;
    toString(): string;
    toString(node: Node): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}