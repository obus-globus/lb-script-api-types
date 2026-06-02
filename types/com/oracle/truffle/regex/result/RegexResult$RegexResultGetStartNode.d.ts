import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { DispatchNode } from '../../../../../com/oracle/truffle/regex/runtime/nodes/DispatchNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegexResult$RegexResultGetStartNode extends Node {
    static getUncached(): RegexResult$RegexResultGetStartNode;
    constructor()
    doResult(receiver: RegexResult, groupNumber: number, lazyProfile: InlinedBranchProfile, getIndicesCall: DispatchNode): number;
    execute(receiver: Object, groupNumber: number): number;
}