import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SerializationUtils extends Object {
    static clone(paramarg0: Object | null): Object | null;
    static deserialize(paramarg0: number[]): Object | null;
    static deserialize(paramarg0: InputStream): Object | null;
    static roundtrip(paramarg0: Object | null): Object | null;
    static serialize(paramarg0: Serializable): number[];
    static serialize(paramarg0: Serializable, paramarg1: OutputStream): void;
    constructor()
}