import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Initializable } from '../../../../../org/apache/tika/config/Initializable.d.ts'
import type { InitializableProblemHandler } from '../../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../../org/apache/tika/config/Param.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../../org/apache/tika/parser/Parser.d.ts'
import type { XHTMLContentHandler } from '../../../../../org/apache/tika/sax/XHTMLContentHandler.d.ts'
import type { FileProcessResult } from '../../../../../org/apache/tika/utils/FileProcessResult.d.ts'
import type { ContentHandler } from '../../../../../org/xml/sax/ContentHandler.d.ts'
export class ExternalParser extends Object implements Initializable, Parser {
    static DEFAULT_TIMEOUT_MS: number;
    static INPUT_FILE_TOKEN: string;
    static OUTPUT_FILE_TOKEN: string;
    constructor()
    readonly commandLine: string[];
    readonly maxStdErr: number;
    readonly maxStdOut: number;
    readonly outputParser: Parser;
    readonly returnStderr: boolean;
    readonly returnStdout: boolean;
    readonly supportedTypes: MediaType[];
    readonly timeoutMs: number;
    checkInitialization(arg0: InitializableProblemHandler): void;
    getOutputParser(): Parser;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    // private handleOutput(arg0: FileProcessResult, arg1: Path, arg2: XHTMLContentHandler, arg3: Metadata, arg4: ParseContext): void;
    initialize(arg0: JavaMap<string, Param<Object>>): void;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    setCommandLine(arg0: string[]): void;
    setMaxStdErr(arg0: number): void;
    setMaxStdOut(arg0: number): void;
    setOutputParser(arg0: Parser): void;
    setReturnStderr(arg0: boolean): void;
    setReturnStdout(arg0: boolean): void;
    setSupportedTypes(arg0: string[]): void;
    setTimeoutMs(arg0: number): void;
}