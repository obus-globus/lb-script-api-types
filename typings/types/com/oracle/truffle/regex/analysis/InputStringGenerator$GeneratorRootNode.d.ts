import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { ToLongNode } from '../../../../../com/oracle/truffle/regex/runtime/nodes/ToLongNode.d.ts'
import type { RegexAST } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InputStringGenerator$GeneratorRootNode extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    private constructor(language: RegexLanguage, ast: RegexAST)
    // private ast: RegexAST;
    // private toLongNode: ToLongNode;
    execute(frame: VirtualFrame): Object;
}