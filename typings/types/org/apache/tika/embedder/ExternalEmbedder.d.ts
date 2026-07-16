import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Embedder } from '../../../../org/apache/tika/embedder/Embedder.d.ts'
import type { TemporaryResources } from '../../../../org/apache/tika/io/TemporaryResources.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Property } from '../../../../org/apache/tika/metadata/Property.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
export class ExternalEmbedder extends Object implements Embedder {
    static METADATA_COMMAND_ARGUMENTS_SERIALIZED_TOKEN: string;
    static METADATA_COMMAND_ARGUMENTS_TOKEN: string;
    static check(paramarg0: string, ...paramarg1: number[]): boolean;
    static check(paramarg0: string[], ...paramarg1: number[]): boolean;
    constructor()
    readonly command: string[];
    readonly commandAppendOperator: string;
    readonly commandAssignmentDelimeter: string;
    readonly commandAssignmentOperator: string;
    readonly metadataCommandArguments: Map<Property, string[]>;
    readonly quoteAssignmentValues: boolean;
    readonly supportedEmbedTypes: MediaType[];
    // private tmp: TemporaryResources;
    embed(arg0: Metadata, arg1: InputStream, arg2: OutputStream, arg3: ParseContext): void;
    getCommand(): string[];
    getCommandAppendOperator(): string;
    getCommandAssignmentDelimeter(): string;
    getCommandAssignmentOperator(): string;
    getCommandMetadataSegments(arg0: Metadata): string[];
    getMetadataCommandArguments(): Map<Property, string[]>;
    getSupportedEmbedTypes(): MediaType[];
    getSupportedEmbedTypes(arg0: ParseContext): MediaType[];
    isQuoteAssignmentValues(): boolean;
    // private multiThreadedStreamCopy(arg0: InputStream, arg1: OutputStream): void;
    // private sendInputStreamToStdIn(arg0: InputStream, arg1: Process): void;
    // private sendStdErrToOutputStream(arg0: Process, arg1: OutputStream): void;
    // private sendStdOutToOutputStream(arg0: Process, arg1: OutputStream): void;
    setCommand(...arg0: string[]): void;
    setCommandAppendOperator(arg0: string): void;
    setCommandAssignmentDelimeter(arg0: string): void;
    setCommandAssignmentOperator(arg0: string): void;
    setMetadataCommandArguments(arg0: Map<Property, string[]>): void;
    setQuoteAssignmentValues(arg0: boolean): void;
    setSupportedEmbedTypes(arg0: MediaType[]): void;
}