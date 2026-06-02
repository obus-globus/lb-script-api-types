import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
export class ScriptArray$SetLengthProfileAccess extends ScriptArray$CreateWritableProfileAccess {
    static getUncached(): ScriptArray$CreateWritableProfileAccess;
    static getUncached(): ScriptArray$SetLengthProfileAccess;
    static inline(paraminlineTarget: InlineSupport$InlineTarget): ScriptArray$CreateWritableProfileAccess;
    static inline(paraminlineTarget: InlineSupport$InlineTarget): ScriptArray$SetLengthProfileAccess;
    constructor(stateField: InlineSupport$StateField)
    clearUnusedArea(node: Node, condition: boolean): boolean;
    contiguousNegativeUsed(node: Node, condition: boolean): boolean;
    contiguousShrinkUsed(node: Node, condition: boolean): boolean;
    contiguousZeroUsed(node: Node, condition: boolean): boolean;
    lengthLess(node: Node, condition: boolean): boolean;
    lengthZero(node: Node, condition: boolean): boolean;
    zeroBasedClearUnusedArea(node: Node, condition: boolean): boolean;
    zeroBasedSetUsedLength(node: Node, condition: boolean): boolean;
}