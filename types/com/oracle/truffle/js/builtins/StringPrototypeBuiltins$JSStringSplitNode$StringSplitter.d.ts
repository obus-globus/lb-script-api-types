import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringPrototypeBuiltins$JSStringSplitNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringSplitNode.d.ts'
import type { StringPrototypeBuiltins$JSStringSplitNode$Splitter } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringSplitNode$Splitter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringSplitNode$StringSplitter extends StringPrototypeBuiltins$JSStringSplitNode$Splitter<TruffleString> {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(node: Node, input: TruffleString, limit: number, separator: TruffleString, groupCount: number, parent: StringPrototypeBuiltins$JSStringSplitNode): Object[];
}