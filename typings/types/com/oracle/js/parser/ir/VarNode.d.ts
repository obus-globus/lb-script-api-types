import type { Assignment } from '../../../../../com/oracle/js/parser/ir/Assignment.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class VarNode extends Statement implements Assignment<IdentNode> {
    static IS_ANNEXB_BLOCK_TO_FUNCTION_TRANSFER: number;
    static IS_CONST: number;
    static IS_DESTRUCTURING: number;
    static IS_EXPORT: number;
    static IS_LAST_FUNCTION_DECLARATION: number;
    static IS_LET: number;
    private constructor(varNode: VarNode, name: IdentNode, init: Expression, flags: number)
    constructor(lineNumber: number, token: number, finish: number, name: IdentNode, init: Expression)
    constructor(lineNumber: number, token: number, finish: number, name: IdentNode, init: Expression, flags: number)
    constructor(lineNumber: number, token: number, sourceOrder: number, finish: number, name: IdentNode, init: Expression, flags: number)
    constructor(lineNumber: number, token: number, sourceOrder: number, start: number, finish: number, name: IdentNode, init: Expression, flags: number)
    // private flags: number;
    readonly init: Expression;
    readonly name: IdentNode;
    readonly sourceOrder: number;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getAssignmentDest(): IdentNode;
    getAssignmentSource(): Expression;
    getFlag(flag: number): boolean;
    getInit(): Expression;
    getName(): IdentNode;
    getSourceOrder(): number;
    getSymbolFlags(): number;
    hasInit(): boolean;
    isAssignment(): boolean;
    isBlockScoped(): boolean;
    isClassDeclaration(): boolean;
    isConst(): boolean;
    isDestructuring(): boolean;
    isExport(): boolean;
    isFunctionDeclaration(): boolean;
    isHoistableDeclaration(): boolean;
    isLet(): boolean;
    setFlag(flag: number): VarNode;
    // private setFlags(flags: number): VarNode;
    toString(sb: StringBuilder, printType: boolean): void;
}