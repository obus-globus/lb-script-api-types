import type { AtomicReference } from '../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { Tags } from '../../okhttp3/internal/Tags.d.ts'
export class TagsKt extends Object {
    static computeIfAbsent(paramarg0: AtomicReference<Tags>, paramarg1: KClass<Object>, paramarg2: () => Object | null): Object | null;
}