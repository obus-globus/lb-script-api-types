import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class ConfigException extends RuntimeException implements Serializable {
    constructor(arg0: ConfigOrigin, arg1: string)
    constructor(arg0: ConfigOrigin, arg1: string, arg2: Throwable)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    // private origin: ConfigOrigin;
    origin(): ConfigOrigin;
    // private readObject(arg0: ObjectInputStream): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}