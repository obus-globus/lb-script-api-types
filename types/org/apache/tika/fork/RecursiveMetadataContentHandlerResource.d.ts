import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ForkResource } from '../../../../org/apache/tika/fork/ForkResource.d.ts'
import type { AbstractRecursiveParserWrapperHandler } from '../../../../org/apache/tika/sax/AbstractRecursiveParserWrapperHandler.d.ts'
import type { RecursiveParserWrapperHandler } from '../../../../org/apache/tika/sax/RecursiveParserWrapperHandler.d.ts'
export class RecursiveMetadataContentHandlerResource extends Object implements ForkResource {
    constructor(arg0: RecursiveParserWrapperHandler)
    // private handler: AbstractRecursiveParserWrapperHandler;
    // private internalProcess(arg0: DataInputStream): void;
    process(arg0: DataInputStream, arg1: DataOutputStream): Throwable;
    // private readObject(arg0: DataInputStream): Object;
}