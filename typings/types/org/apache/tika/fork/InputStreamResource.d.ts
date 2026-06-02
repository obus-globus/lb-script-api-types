import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ForkResource } from '../../../../org/apache/tika/fork/ForkResource.d.ts'
export class InputStreamResource extends Object implements ForkResource {
    constructor(arg0: InputStream)
    // private stream: InputStream;
    process(arg0: DataInputStream, arg1: DataOutputStream): Throwable;
}