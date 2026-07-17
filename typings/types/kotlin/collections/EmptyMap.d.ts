import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class EmptyMap extends Object implements Serializable {
    static INSTANCE: { [key: string]: any };
    readonly entries: Map$Entry<Object, void>[];
    readonly keys: (Object | null)[];
    // private serialVersionUID: number;
    readonly size: number;
    getSize(): number;
    readonly values: void[];
    getValues(): void[];
    containsKey(key: Object | null): boolean;
    containsValue(value: void): boolean;
    equals(other: Object | null): boolean;
    get(key: Object | null): void | null;
    hashCode(): number;
    isEmpty(): boolean;
    // private readResolve(): Object;
    toString(): string;
}