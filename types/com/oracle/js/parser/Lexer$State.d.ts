import type { Scanner$State } from '../../../../com/oracle/js/parser/Scanner$State.d.ts'
import type { TokenType } from '../../../../com/oracle/js/parser/TokenType.d.ts'
export class Lexer$State extends Scanner$State {
    constructor(position: number, limit: number, line: number, pendingLine: number, linePosition: number, last: TokenType)
    last: TokenType;
    linePosition: number;
    pendingLine: number;
}