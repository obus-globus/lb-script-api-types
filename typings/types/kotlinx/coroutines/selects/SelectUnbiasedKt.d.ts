import type { Object } from '../../../java/lang/Object.d.ts'
import type { SelectBuilder } from '../../../kotlinx/coroutines/selects/SelectBuilder.d.ts'
export class SelectUnbiasedKt extends Object {
    static selectUnbiased<R extends unknown>(builder: (param0: SelectBuilder<R>) => void): R;
}