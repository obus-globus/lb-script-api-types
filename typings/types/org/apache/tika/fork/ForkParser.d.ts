import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ForkClient } from '../../../../org/apache/tika/fork/ForkClient.d.ts'
import type { ParserFactoryFactory } from '../../../../org/apache/tika/fork/ParserFactoryFactory.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class ForkParser extends Object implements Closeable, Parser {
    constructor()
    constructor(arg0: ClassLoader)
    constructor(arg0: ClassLoader, arg1: Parser)
    constructor(arg0: Path[], arg1: ParserFactoryFactory)
    constructor(arg0: Path[], arg1: ParserFactoryFactory, arg2: ClassLoader)
    // private currentlyInUse: number;
    // private java: string[];
    // private loader: ClassLoader;
    // private maxFilesProcessedPerClient: number;
    // private parser: Parser;
    // private parserFactoryFactory: ParserFactoryFactory;
    // private pool: ForkClient[];
    readonly poolSize: number;
    readonly serverParseTimeoutMillis: number;
    readonly serverPulseMillis: number;
    readonly serverWaitTimeoutMillis: number;
    // private tikaBin: Path[];
    // private acquireClient(): ForkClient;
    close(): void;
    getJavaCommandAsList(): string[];
    getPoolSize(): number;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    // private newClient(): ForkClient;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    // private releaseClient(arg0: ForkClient, arg1: boolean): void;
    setJavaCommand(arg0: string[]): void;
    setMaxFilesProcessedPerServer(arg0: number): void;
    setPoolSize(arg0: number): void;
    setServerParseTimeoutMillis(arg0: number): void;
    setServerPulseMillis(arg0: number): void;
    setServerWaitTimeoutMillis(arg0: number): void;
}