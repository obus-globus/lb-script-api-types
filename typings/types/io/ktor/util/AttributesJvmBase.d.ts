import type { JavaMap } from '../../../JavaMap.d.ts'
import type { AttributeKey } from '../../../io/ktor/util/AttributeKey.d.ts'
import type { Attributes } from '../../../io/ktor/util/Attributes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AttributesJvmBase extends Object implements Attributes {
    constructor()
    readonly allKeys: AttributeKey<Object>[];
    // private /*not mapped: */ getMap(): JavaMap<AttributeKey<Object>, Object | null>;
    contains(key: AttributeKey<Object>): boolean;
    get<T extends unknown>(key: AttributeKey<T>): T;
    getOrNull<T extends unknown>(key: AttributeKey<T>): T | null;
    put<T extends unknown>(key: AttributeKey<T>, value: T): void;
    remove<T extends unknown>(key: AttributeKey<T>): void;
    set<T extends unknown>(key: AttributeKey<T>, value: T): void;
    take<T extends unknown>(key: AttributeKey<T>): T;
    takeOrNull<T extends unknown>(key: AttributeKey<T>): T | null;
}