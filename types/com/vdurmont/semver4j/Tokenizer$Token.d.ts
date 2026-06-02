import type { Tokenizer$TokenType } from '../../../com/vdurmont/semver4j/Tokenizer$TokenType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Tokenizer$Token extends Object {
    constructor(arg0: Tokenizer$TokenType)
    constructor(arg0: Tokenizer$TokenType, arg1: string)
    type: Tokenizer$TokenType;
    value: string;
    append(arg0: string): void;
}