import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InlinedProfileBag extends Object {
    constructor(state: InlineSupport$StateField)
    // private state: InlineSupport$StateField;
    enter(node: Node, offset: number): void;
    profile(node: Node, value: boolean, offset: number): boolean;
}