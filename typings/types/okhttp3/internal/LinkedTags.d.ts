import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { Tags } from '../../okhttp3/internal/Tags.d.ts'
export class LinkedTags<K extends unknown> extends Tags {
    constructor(key: KClass<K>, value: K, next: Tags)
    // private key: KClass<K>;
    // private next: Tags;
    // private value: K;
    get<T extends unknown>(key: KClass<T>): T | null;
    plus<T extends unknown>(key: KClass<T>, value: T | null): Tags;
    toString(): string;
}