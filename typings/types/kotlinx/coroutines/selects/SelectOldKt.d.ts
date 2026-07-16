import type { Object } from '../../../java/lang/Object.d.ts'
import type { SelectBuilder } from '../../../kotlinx/coroutines/selects/SelectBuilder.d.ts'
export class SelectOldKt extends Object {
    static selectOld<R extends unknown>(builder: (param0: SelectBuilder<R>) => void): R;
    static selectUnbiasedOld<R extends unknown>(builder: (param0: SelectBuilder<R>) => void): R;
}