import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { HostExecuteNode } from '../../../../com/oracle/truffle/host/HostExecuteNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostExecuteNodeGen extends Object {
    static getUncached(): HostExecuteNode;
    static inline(paramtarget: InlineSupport$InlineTarget): HostExecuteNode;
    constructor()
}