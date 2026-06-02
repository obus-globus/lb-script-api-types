import type { Object } from '../../../java/lang/Object.d.ts'
import type { SelectClause0 } from '../../../kotlinx/coroutines/selects/SelectClause0.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class OnTimeout extends Object {
    constructor(timeMillis: number)
    readonly selectClause: SelectClause0;
    // private timeMillis: number;
    // private register(select: SelectInstance<Object>, ignoredParam: Object | null): void;
}