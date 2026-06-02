import type { InlineSupport$InlineTarget } from '../../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$StateField } from '../../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedProfileBag } from '../../../../../../../com/oracle/truffle/js/runtime/util/InlinedProfileBag.d.ts'
export class AbstractWritableArray$SetSupportedProfileAccess extends InlinedProfileBag {
    static getUncached(): AbstractWritableArray$SetSupportedProfileAccess;
    static inline(paraminlineTarget: InlineSupport$InlineTarget): AbstractWritableArray$SetSupportedProfileAccess;
    constructor(stateField: InlineSupport$StateField)
    ensureCapacityGrow(node: Node, condition: boolean): boolean;
    ensureCapacityGrowLeft(node: Node, condition: boolean): boolean;
    enterArrayTooLargeBranch(node: Node): void;
    fillHolesLeft(node: Node, condition: boolean): boolean;
    fillHolesRight(node: Node, condition: boolean): boolean;
    inBoundsZeroBasedSetLength(node: Node, condition: boolean): boolean;
    inBoundsZeroBasedSetUsedLength(node: Node, condition: boolean): boolean;
    updateHolesStateIsHole(node: Node, condition: boolean): boolean;
    updateStateAppend(node: Node, condition: boolean): boolean;
    updateStatePrepend(node: Node, condition: boolean): boolean;
    updateStateSetLength(node: Node, condition: boolean): boolean;
}