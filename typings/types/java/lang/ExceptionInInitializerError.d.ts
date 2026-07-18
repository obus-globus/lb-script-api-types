import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { LinkageError } from '../../java/lang/LinkageError.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class ExceptionInInitializerError extends LinkageError {
    constructor()
    constructor(arg0: string)
    constructor(arg0: Throwable)
    getException(): Throwable;
    // private readObject(arg0: ObjectInputStream): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}