import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Synchronized$SynchronizedObject extends Object implements Serializable {
    constructor(delegate: Object, mutex: Object)
    // private delegate: Object;
    // private mutex: Object;
    delegate(): Object;
    toString(): string;
    // private writeObject(stream: ObjectOutputStream): void;
}