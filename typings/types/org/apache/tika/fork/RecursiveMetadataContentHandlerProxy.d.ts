import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ForkProxy } from '../../../../org/apache/tika/fork/ForkProxy.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Property } from '../../../../org/apache/tika/metadata/Property.d.ts'
import type { ContentHandlerFactory } from '../../../../org/apache/tika/sax/ContentHandlerFactory.d.ts'
import type { RecursiveParserWrapperHandler } from '../../../../org/apache/tika/sax/RecursiveParserWrapperHandler.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class RecursiveMetadataContentHandlerProxy extends RecursiveParserWrapperHandler implements ForkProxy {
    static COMPLETE: number;
    static EMBEDDED_DOCUMENT: number;
    static EMBEDDED_RESOURCE_LIMIT_REACHED: Property;
    static HANDLER_AND_METADATA: number;
    static MAIN_DOCUMENT: number;
    static METADATA_ONLY: number;
    constructor(arg0: number, arg1: ContentHandlerFactory)
    // private output: DataOutputStream;
    // private resource: number;
    // private doneSending(): void;
    endDocument(): void;
    endDocument(arg0: ContentHandler, arg1: Metadata): void;
    endEmbeddedDocument(arg0: ContentHandler, arg1: Metadata): void;
    init(arg0: DataInputStream, arg1: DataOutputStream): void;
    // private proxyBackToClient(arg0: number, arg1: ContentHandler, arg2: Metadata): void;
    // private send(arg0: Object): void;
    // private sendBytes(arg0: number[]): void;
    // private serialize(arg0: Object): number[];
}