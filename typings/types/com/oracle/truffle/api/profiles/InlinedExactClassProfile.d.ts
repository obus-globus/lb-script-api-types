import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInlinedValueProfile } from '../../../../../com/oracle/truffle/api/profiles/AbstractInlinedValueProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlinedExactClassProfile extends AbstractInlinedValueProfile {
    static getUncached(): InlinedExactClassProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedExactClassProfile;
    private constructor()
    private constructor(target: InlineSupport$InlineTarget)
    // private cachedValue: InlineSupport$ReferenceField<Class<Object>>;
    getCachedValue(node: Node): Class<Object>;
    profile<T extends Object | number | string | boolean>(node: Node, value: T): T;
    toString(): string;
    toString(node: Node): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}