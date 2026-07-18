import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
export class Tokenizer$ProblemException extends Exception {
    constructor(arg0: Token)
    // private problem: Token;
    problem(): Token;
}