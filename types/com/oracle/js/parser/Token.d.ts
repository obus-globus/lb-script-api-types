import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { TokenType } from '../../../../com/oracle/js/parser/TokenType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Token extends Object {
    static LENGTH_MASK: number;
    static descLength(paramtoken: number): number;
    static descPosition(paramtoken: number): number;
    static descType(paramtoken: number): TokenType;
    static recast(paramtoken: number, paramnewType: TokenType): number;
    static toDesc(paramtype: TokenType, paramposition: number, paramlength: number): number;
    static toString(paramsource: Source, paramtoken: number): string;
    static toString(paramsource: Source, paramtoken: number, paramverbose: boolean): string;
    static withDelimiter(paramtoken: number): number;
    private constructor()
}