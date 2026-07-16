import type { Object } from '../../../java/lang/Object.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
import type { SelectBuilder } from '../../../kotlinx/coroutines/selects/SelectBuilder.d.ts'
export class SelectKt extends Object {
    static getPARAM_CLAUSE_0(): Symbol;
    static select<R extends unknown>(builder: (param0: SelectBuilder<R>) => void): R;
}