import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ForkResource } from '../../../../org/apache/tika/fork/ForkResource.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class ContentHandlerResource extends Object implements ForkResource {
    constructor(arg0: ContentHandler)
    // private handler: ContentHandler;
    // private internalProcess(arg0: DataInputStream): void;
    process(arg0: DataInputStream, arg1: DataOutputStream): Throwable;
    // private readCharacters(arg0: DataInputStream): string[];
    // private readString(arg0: DataInputStream): string;
    // private readStringUTF(arg0: DataInputStream): string;
}