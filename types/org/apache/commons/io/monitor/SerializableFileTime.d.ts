import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SerializableFileTime extends Object implements Serializable {
    constructor(arg0: FileTime)
    // private fileTime: FileTime;
    compareTo(arg0: FileTime): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    to(arg0: TimeUnit): number;
    toInstant(): Instant;
    toMillis(): number;
    toString(): string;
    unwrap(): FileTime;
    // private writeObject(arg0: ObjectOutputStream): void;
}