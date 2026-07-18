import type { AttributeKey } from '../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Attributes extends Object {
    readonly allKeys: AttributeKey<Object>[];
    computeIfAbsent<T extends unknown>(key: AttributeKey<T>, block: () => T): T;
    contains(key: AttributeKey<Object>): boolean;
    get<T extends unknown>(key: AttributeKey<T>): T;
    getOrNull<T extends unknown>(key: AttributeKey<T>): T | null;
    put<T extends unknown>(key: AttributeKey<T>, value: T): void;
    remove<T extends unknown>(key: AttributeKey<T>): void;
    set<T extends unknown>(key: AttributeKey<T>, value: T): void;
    take<T extends unknown>(key: AttributeKey<T>): T;
    takeOrNull<T extends unknown>(key: AttributeKey<T>): T | null;
}