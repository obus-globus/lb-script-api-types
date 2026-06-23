import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataSectionType$WithValue } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType$WithValue.d.ts'
export class MetadataSectionType<T extends unknown> extends Record {
    constructor(name: string, codec: Codec<T>)
    // private codec: Codec<T>;
    // private name: string;
    codec(): Codec<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    withValue(value: T): MetadataSectionType$WithValue<T>;
}