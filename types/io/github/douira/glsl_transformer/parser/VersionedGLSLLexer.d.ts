import type { Version } from '../../../../../io/github/douira/glsl_transformer/ast/node/Version.d.ts'
import type { CharStream } from '../../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../org/antlr/v4/runtime/Lexer.d.ts'
export abstract class VersionedGLSLLexer extends Lexer {
    static DEFAULT_MODE: number;
    static DEFAULT_TOKEN_CHANNEL: number;
    static EOF: number;
    static HIDDEN: number;
    static MAX_CHAR_VALUE: number;
    static MIN_CHAR_VALUE: number;
    static MORE: number;
    static SKIP: number;
    constructor()
    constructor(arg0: CharStream)
    enableCustomDirective: boolean;
    enableIncludeDirective: boolean;
    enableMeshShaders: boolean;
    enableStrings: boolean;
    version: Version;
    enableAllFlags(): void;
    isAfter(arg0: number): boolean;
}