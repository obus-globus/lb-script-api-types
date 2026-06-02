import type { TokenType } from '../../../../../com/oracle/js/parser/TokenType.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export abstract class Node extends Object implements Cloneable {
    constructor(node: Node)
    constructor(node: Node, finish: number)
    constructor(token: number, finish: number)
    constructor(token: number, start: number, finish: number)
    readonly finish: number;
    readonly start: number;
    readonly token: number;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    clone(): Object;
    protected clone(): Object;
    equals(other: Object | null): boolean;
    getFinish(): number;
    getSourceOrder(): number;
    getStart(): number;
    getToken(): number;
    hashCode(): number;
    isAssignment(): boolean;
    isLoop(): boolean;
    isTokenType(type: TokenType): boolean;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
    tokenType(): TokenType;
}