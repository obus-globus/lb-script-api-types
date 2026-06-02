import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Cleaner$Cleanable } from '../../../java/lang/ref/Cleaner$Cleanable.d.ts'
import type { Inflater } from '../../../java/util/zip/Inflater.d.ts'
import type { ZipCoder } from '../../../java/util/zip/ZipCoder.d.ts'
import type { ZipFile } from '../../../java/util/zip/ZipFile.d.ts'
import type { ZipFile$Source } from '../../../java/util/zip/ZipFile$Source.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZipFile$CleanableResource extends Object implements Runnable {
    constructor(arg0: ZipFile, arg1: ZipCoder, arg2: File, arg3: number)
    // private cleanable: Cleaner$Cleanable;
    // private inflaterCache: Inflater[];
    // private istreams: InputStream[];
    // private zsrc: ZipFile$Source;
    clean(): void;
    getInflater(): Inflater;
    releaseInflater(arg0: Inflater): void;
    run(): void;
}