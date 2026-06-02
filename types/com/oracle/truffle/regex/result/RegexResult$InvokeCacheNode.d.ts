import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegexResult$InvokeCacheNode extends Node {
    constructor()
    execute(receiver: RegexResult, symbol: string, groupNumber: number): Object;
}