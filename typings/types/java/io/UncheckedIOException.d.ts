import type { IOException } from '../../java/io/IOException.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
export class UncheckedIOException extends RuntimeException {
    constructor(arg0: IOException)
    constructor(arg0: string, arg1: IOException)
    readonly cause: IOException | null;
    // private readObject(arg0: ObjectInputStream): void;
}