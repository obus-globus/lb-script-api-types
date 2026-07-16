import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SerializationUtils extends Object {
    static clone<T extends Serializable>(paramarg0: T): T;
    static deserialize<T extends unknown>(paramarg0: number[]): T;
    static deserialize<T extends unknown>(paramarg0: InputStream): T;
    static roundtrip<T extends Serializable>(paramarg0: T): T;
    static serialize(paramarg0: Serializable): number[];
    static serialize(paramarg0: Serializable, paramarg1: OutputStream): void;
    constructor()
}