import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataSectionType } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class MetadataSectionType$WithValue<T extends Object | number | string | boolean> extends Record {
    constructor(type: MetadataSectionType<T>, value: T)
    // private type: MetadataSectionType<T>;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MetadataSectionType<T>;
    unwrapToType(type: MetadataSectionType<U>): Optional<U>;
    value(): T;
}