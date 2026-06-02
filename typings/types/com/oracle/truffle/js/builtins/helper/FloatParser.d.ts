import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { FloatParserNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/FloatParserNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FloatParser extends Object {
    constructor(s: TruffleString, node: FloatParserNode)
    // private input: TruffleString;
    // private isNaN: boolean;
    // private pos: number;
    // private value: number;
    // private current(node: FloatParserNode): string;
    // private decimalDigits(node: FloatParserNode): void;
    // private exponentPart(node: FloatParserNode): void;
    getResult(): number;
    // private hasNext(): boolean;
    // private isExponentPart(node: FloatParserNode): boolean;
    // private next(): void;
    // private parse(node: FloatParserNode): number;
    // private parseValidSubstring(node: FloatParserNode): number;
    // private strDecimalLiteral(node: FloatParserNode): void;
    // private strUnsignedDecimalLiteral(node: FloatParserNode): void;
}