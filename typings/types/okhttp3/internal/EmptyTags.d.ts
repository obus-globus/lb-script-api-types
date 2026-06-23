import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { Tags } from '../../okhttp3/internal/Tags.d.ts'
export class EmptyTags extends Tags {
    static INSTANCE: EmptyTags;
    get<T extends unknown>(key: KClass<T>): T | null;
    plus<T extends unknown>(key: KClass<T>, value: T | null): Tags;
    toString(): string;
}