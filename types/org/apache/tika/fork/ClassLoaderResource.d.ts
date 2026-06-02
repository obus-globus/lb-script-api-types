import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ForkResource } from '../../../../org/apache/tika/fork/ForkResource.d.ts'
export class ClassLoaderResource extends Object implements ForkResource {
    constructor(arg0: ClassLoader)
    // private loader: ClassLoader;
    process(arg0: DataInputStream, arg1: DataOutputStream): Throwable;
    // private writeAndCloseStream(arg0: DataOutputStream, arg1: InputStream): void;
}