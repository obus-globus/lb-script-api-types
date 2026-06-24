import type { Parser } from '../../../../com/oracle/js/parser/Parser.d.ts'
import type { BinaryNode } from '../../../../com/oracle/js/parser/ir/BinaryNode.d.ts'
import type { Expression } from '../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LiteralNode } from '../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { ObjectNode } from '../../../../com/oracle/js/parser/ir/ObjectNode.d.ts'
import type { PropertyNode } from '../../../../com/oracle/js/parser/ir/PropertyNode.d.ts'
import type { NodeVisitor } from '../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Parser$VerifyDestructuringPatternNodeVisitor extends NodeVisitor<LexicalContext> {
    constructor(null_: Parser, lc: LexicalContext)
    enterBinaryNode(binaryNode: BinaryNode): boolean;
    enterLiteralNode(literalNode: LiteralNode<Object>): boolean;
    enterObjectNode(objectNode: ObjectNode): boolean;
    enterPropertyNode(propertyNode: PropertyNode): boolean;
    verifySpreadElement(lvalue: Expression): void;
}