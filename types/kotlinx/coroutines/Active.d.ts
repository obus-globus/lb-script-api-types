import type { Object } from '../../java/lang/Object.d.ts'
import type { NotCompleted } from '../../kotlinx/coroutines/NotCompleted.d.ts'
export class Active extends Object implements NotCompleted {
    static INSTANCE: Active;
    toString(): string;
}