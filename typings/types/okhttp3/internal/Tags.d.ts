import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
export class Tags extends Object {
    protected constructor()
    get<T extends unknown>(key: KClass<T>): T | null;
    plus<T extends unknown>(key: KClass<T>, value: T | null): Tags;
}