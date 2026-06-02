import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { CommentType } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentType.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { StreamReader } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/reader/StreamReader.d.ts'
import type { Scanner } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/scanner/Scanner.d.ts'
import type { ScannerImpl$Chomping } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/scanner/ScannerImpl$Chomping.d.ts'
import type { SimpleKey } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/scanner/SimpleKey.d.ts'
import type { CommentToken } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/CommentToken.d.ts'
import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
import type { ArrayStack } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/ArrayStack.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScannerImpl extends Object implements Scanner {
    static ESCAPE_CODES: { [key: string]: number };
    static ESCAPE_REPLACEMENTS: { [key: string]: string };
    constructor(arg0: StreamReader, arg1: LoaderOptions)
    // private allowSimpleKey: boolean;
    // private done: boolean;
    // private flowLevel: number;
    // private indent: number;
    // private indents: ArrayStack<number>;
    // private lastToken: Token;
    // private loaderOptions: LoaderOptions;
    // private parseComments: boolean;
    // private possibleSimpleKeys: { [key: number]: SimpleKey };
    // private reader: StreamReader;
    // private tokens: Token[];
    // private tokensTaken: number;
    // private addAllTokens(arg0: Token[]): void;
    // private addIndent(arg0: number): boolean;
    // private addToken(arg0: Token): void;
    // private addToken(arg0: number, arg1: Token): void;
    // private atEndOfPlain(): boolean;
    // private checkBlockEntry(): boolean;
    // private checkDirective(): boolean;
    // private checkDocumentEnd(): boolean;
    // private checkDocumentStart(): boolean;
    // private checkKey(): boolean;
    // private checkPlain(): boolean;
    checkToken(arg0: Token$ID): boolean;
    checkToken(arg0: Token$ID): boolean;
    checkToken(arg0: Token$ID[]): boolean;
    // private checkValue(): boolean;
    // private escapeChar(arg0: string): string;
    // private fetchAlias(): void;
    // private fetchAnchor(): void;
    // private fetchBlockEntry(): void;
    // private fetchBlockScalar(arg0: string): void;
    // private fetchDirective(): void;
    // private fetchDocumentEnd(): void;
    // private fetchDocumentIndicator(arg0: boolean): void;
    // private fetchDocumentStart(): void;
    // private fetchDouble(): void;
    // private fetchFlowCollectionEnd(arg0: boolean): void;
    // private fetchFlowCollectionStart(arg0: boolean): void;
    // private fetchFlowEntry(): void;
    // private fetchFlowMappingEnd(): void;
    // private fetchFlowMappingStart(): void;
    // private fetchFlowScalar(arg0: string): void;
    // private fetchFlowSequenceEnd(): void;
    // private fetchFlowSequenceStart(): void;
    // private fetchFolded(): void;
    // private fetchKey(): void;
    // private fetchLiteral(): void;
    // private fetchMoreTokens(): void;
    // private fetchPlain(): void;
    // private fetchSingle(): void;
    // private fetchStreamEnd(): void;
    // private fetchStreamStart(): void;
    // private fetchTag(): void;
    // private fetchValue(): void;
    getToken(): Token;
    // private makeTokenList(arg0: Token[]): Token[];
    // private needMoreTokens(): boolean;
    // private nextPossibleSimpleKey(): number;
    peekToken(): Token;
    // private removePossibleSimpleKey(): void;
    resetDocumentIndex(): void;
    // private savePossibleSimpleKey(): void;
    // private scanAnchor(arg0: boolean): Token;
    // private scanBlockScalar(arg0: string): Token[];
    // private scanBlockScalarBreaks(arg0: number): Object[];
    // private scanBlockScalarIgnoredLine(arg0: Mark): CommentToken;
    // private scanBlockScalarIndentation(): Object[];
    // private scanBlockScalarIndicators(arg0: Mark): ScannerImpl$Chomping;
    // private scanComment(arg0: CommentType): CommentToken;
    // private scanDirective(): Token[];
    // private scanDirectiveIgnoredLine(arg0: Mark): CommentToken;
    // private scanDirectiveName(arg0: Mark): string;
    // private scanFlowScalar(arg0: string): Token;
    // private scanFlowScalarBreaks(arg0: Mark): string;
    // private scanFlowScalarNonSpaces(arg0: boolean, arg1: Mark, arg2: StringBuilder): void;
    // private scanFlowScalarSpaces(arg0: Mark, arg1: StringBuilder): void;
    // private scanLineBreak(): string;
    // private scanPlain(): Token;
    // private scanPlainSpaces(): string;
    // private scanTag(): Token;
    // private scanTagDirectiveHandle(arg0: Mark): string;
    // private scanTagDirectivePrefix(arg0: Mark): string;
    // private scanTagDirectiveValue(arg0: Mark): string[];
    // private scanTagHandle(arg0: string, arg1: Mark): string;
    // private scanTagUri(arg0: string, arg1: Mark): string;
    // private scanToNextToken(): void;
    // private scanUriEscapes(arg0: string, arg1: Mark): string;
    // private scanYamlDirectiveNumber(arg0: Mark): number;
    // private scanYamlDirectiveValue(arg0: Mark): number[];
    // private stalePossibleSimpleKeys(): void;
    // private unwindIndent(arg0: number): void;
}