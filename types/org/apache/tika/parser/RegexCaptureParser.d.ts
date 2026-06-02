import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Initializable } from '../../../../org/apache/tika/config/Initializable.d.ts'
import type { InitializableProblemHandler } from '../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class RegexCaptureParser extends Object implements Initializable, Parser {
    constructor()
    readonly captureMap: { [key: string]: Pattern };
    readonly matchMap: { [key: string]: Pattern };
    readonly writeContent: boolean;
    checkInitialization(arg0: InitializableProblemHandler): void;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    initialize(arg0: { [key: string]: Param<Object> }): void;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    setCaptureMap(arg0: { [key: string]: string }): void;
    setMatchMap(arg0: { [key: string]: string }): void;
    setWriteContent(arg0: boolean): void;
}