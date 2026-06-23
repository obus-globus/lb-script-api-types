import type { Serializer } from '../../../io/jsonwebtoken/io/Serializer.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractSerializer<T extends unknown> extends Object implements Serializer<T> {
    constructor()
    doSerialize(arg0: T, arg1: OutputStream): void;
    serialize(arg0: T): number[];
    serialize(arg0: T, arg1: OutputStream): void;
}