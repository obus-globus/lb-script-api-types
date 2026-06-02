import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class SAXException extends Exception {
    constructor()
    constructor(arg0: Exception)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Exception)
    readonly cause: Throwable | null;
    readonly message: string | null;
    getException(): Exception;
    // private getExceptionInternal(): Exception;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}