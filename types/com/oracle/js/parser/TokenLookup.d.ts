import type { TokenType } from '../../../../com/oracle/js/parser/TokenType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenLookup extends Object {
    static lookupKeyword(paramcontent: string, paramposition: number, paramlength: number): TokenType;
    static lookupOperator(paramch0: string, paramch1: string, paramch2: string, paramch3: string, paramecmaScriptVersion: number): TokenType;
    private constructor()
}