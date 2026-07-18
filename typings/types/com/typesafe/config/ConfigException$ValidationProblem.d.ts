import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigException$ValidationProblem extends Object implements Serializable {
    constructor(arg0: string, arg1: ConfigOrigin, arg2: string)
    // private origin: ConfigOrigin;
    // private path: string;
    // private problem: string;
    origin(): ConfigOrigin;
    path(): string;
    problem(): string;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}