import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Striped64 } from '../../../../java/util/concurrent/atomic/Striped64.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LongAdder extends Striped64 implements Serializable {
    constructor()
    add(arg0: number): void;
    decrement(): void;
    increment(): void;
    // private readObject(arg0: ObjectInputStream): void;
    reset(): void;
    sum(): number;
    sumThenReset(): number;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    // private writeReplace(): Object;
}