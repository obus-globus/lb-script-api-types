import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { OutOfMemoryError } from '../../../../java/lang/OutOfMemoryError.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TikaConfig } from '../../../../org/apache/tika/config/TikaConfig.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { DigestingParser$Digester } from '../../../../org/apache/tika/parser/DigestingParser$Digester.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { FetchEmitTuple } from '../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { HandlerConfig } from '../../../../org/apache/tika/pipes/HandlerConfig.d.ts'
import type { PipesServer$MetadataListAndEmbeddedBytes } from '../../../../org/apache/tika/pipes/PipesServer$MetadataListAndEmbeddedBytes.d.ts'
import type { PipesServer$STATUS } from '../../../../org/apache/tika/pipes/PipesServer$STATUS.d.ts'
import type { EmitData } from '../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
import type { EmitKey } from '../../../../org/apache/tika/pipes/emitter/EmitKey.d.ts'
import type { Emitter } from '../../../../org/apache/tika/pipes/emitter/Emitter.d.ts'
import type { EmitterManager } from '../../../../org/apache/tika/pipes/emitter/EmitterManager.d.ts'
import type { Fetcher } from '../../../../org/apache/tika/pipes/fetcher/Fetcher.d.ts'
import type { FetcherManager } from '../../../../org/apache/tika/pipes/fetcher/FetcherManager.d.ts'
export class PipesServer extends Object implements Runnable {
    static TIMEOUT_EXIT_CODE: number;
    static main(paramarg0: (Object | null)[]): void;
    constructor(arg0: Path[], arg1: InputStream, arg2: PrintStream, arg3: number, arg4: number, arg5: number)
    // private autoDetectParser: Parser;
    // private checkForTimeoutMs: number;
    // private detector: Detector;
    // private digester: DigestingParser$Digester;
    // private emitterManager: EmitterManager;
    // private fetcherManager: FetcherManager;
    // private input: DataInputStream;
    // private lock: Object[];
    // private maxForEmitBatchBytes: number;
    // private output: DataOutputStream;
    // private parsing: boolean;
    // private rMetaParser: Parser;
    // private serverParseTimeoutMillis: number;
    // private serverWaitTimeoutMillis: number;
    // private since: number;
    // private tikaConfig: TikaConfig;
    // private tikaConfigPath: Path[];
    // private _preParse(arg0: FetchEmitTuple, arg1: TikaInputStream, arg2: Metadata, arg3: ParseContext): void;
    // private actuallyParse(arg0: FetchEmitTuple): void;
    // private emit(arg0: string, arg1: EmitKey, arg2: boolean, arg3: PipesServer$MetadataListAndEmbeddedBytes, arg4: string, arg5: ParseContext): void;
    // private emitContentsAndBytes(arg0: Emitter, arg1: EmitKey, arg2: PipesServer$MetadataListAndEmbeddedBytes): void;
    // private emitParseData(arg0: FetchEmitTuple, arg1: PipesServer$MetadataListAndEmbeddedBytes): void;
    // private exit(arg0: number): void;
    // private filterMetadata(arg0: FetchEmitTuple, arg1: Metadata[]): void;
    // private filterMetadataList(arg0: FetchEmitTuple, arg1: PipesServer$MetadataListAndEmbeddedBytes): void;
    // private getContainerStacktrace(arg0: FetchEmitTuple, arg1: Metadata[]): string;
    // private getFetcher(arg0: FetchEmitTuple): Fetcher;
    // private getNoEmitterMsg(arg0: string): string;
    // private getNoFetcherMsg(arg0: string): string;
    // private handleOOM(arg0: string, arg1: OutOfMemoryError): void;
    initializeResources(): void;
    // private injectUserMetadata(arg0: Metadata, arg1: Metadata[]): void;
    // private metadataIsEmpty(arg0: Metadata[]): boolean;
    // private parseConcatenated(arg0: FetchEmitTuple, arg1: HandlerConfig, arg2: InputStream, arg3: Metadata, arg4: ParseContext): Metadata[];
    parseFromTuple(arg0: FetchEmitTuple, arg1: Fetcher): PipesServer$MetadataListAndEmbeddedBytes;
    // private parseOne(): void;
    // private parseRecursive(arg0: FetchEmitTuple, arg1: HandlerConfig, arg2: InputStream, arg3: Metadata, arg4: ParseContext): Metadata[];
    // private parseWithStream(arg0: FetchEmitTuple, arg1: InputStream, arg2: Metadata): PipesServer$MetadataListAndEmbeddedBytes;
    // private preParse(arg0: FetchEmitTuple, arg1: InputStream, arg2: Metadata, arg3: ParseContext): void;
    processRequests(): void;
    // private readFetchEmitTuple(): FetchEmitTuple;
    run(): void;
    // private setupParseContext(arg0: FetchEmitTuple): ParseContext;
    // private write(arg0: PipesServer$STATUS): void;
    // private write(arg0: PipesServer$STATUS, arg1: number[]): void;
    // private write(arg0: PipesServer$STATUS, arg1: string): void;
    // private write(arg0: EmitData): void;
    // private writeIntermediate(arg0: EmitKey, arg1: Metadata): void;
}