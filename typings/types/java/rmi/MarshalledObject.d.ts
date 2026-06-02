import type { ObjectInputFilter } from '../../java/io/ObjectInputFilter.d.ts'
import type { ObjectInputFilter$FilterInfo } from '../../java/io/ObjectInputFilter$FilterInfo.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MarshalledObject<T extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(arg0: T)
    // private hash: number;
    // private locBytes: number[];
    // private objBytes: number[];
    // private objectInputFilter: (param0: ObjectInputFilter$FilterInfo) => java.io.ObjectInputFilter.Status;
    equals(arg0: Object | null): boolean;
    get(): T;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
}