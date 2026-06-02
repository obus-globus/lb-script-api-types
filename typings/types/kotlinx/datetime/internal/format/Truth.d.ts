import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../kotlinx/datetime/internal/format/Predicate.d.ts'
export class Truth extends Object implements Predicate<Object> {
    static INSTANCE: Truth;
    test(value: Object | null): boolean;
}