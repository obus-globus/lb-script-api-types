import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$StateField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedProfile.d.ts'
export abstract class AbstractInlinedValueProfile extends InlinedProfile {
    constructor()
    constructor(target: InlineSupport$InlineTarget)
    // private state: InlineSupport$StateField;
    disable(node: Node): void;
    isGeneric(node: Node): boolean;
    isUninitialized(node: Node): boolean;
    reset(node: Node): void;
}