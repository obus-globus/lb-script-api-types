import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class Instructions extends Object {
    constructor(showStepIndex: boolean, steps: Function1<Throwable, string[]>)
    readonly showStepIndex: boolean;
    readonly steps: (param0: Throwable) => string[] | null;
}