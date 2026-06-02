import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedProfileBag } from '../../../../../../com/oracle/truffle/js/runtime/util/InlinedProfileBag.d.ts'
export class ScriptArray$CreateWritableProfileAccess extends InlinedProfileBag {
    static getUncached(): ScriptArray$CreateWritableProfileAccess;
    static inline(paraminlineTarget: InlineSupport$InlineTarget): ScriptArray$CreateWritableProfileAccess;
    constructor(stateField: InlineSupport$StateField)
    indexLessThanLength(node: Node, condition: boolean): boolean;
    indexZero(node: Node, condition: boolean): boolean;
    newArrayLengthBelowLimit(node: Node, condition: boolean): boolean;
    newArrayLengthZero(node: Node, condition: boolean): boolean;
}