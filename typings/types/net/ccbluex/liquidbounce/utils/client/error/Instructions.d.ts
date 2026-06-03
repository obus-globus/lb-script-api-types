import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class Instructions extends Object {
    constructor(showStepIndex: boolean, steps: (param0: Throwable) => string[] | null)
    readonly showStepIndex: boolean;
    readonly steps: (param0: Throwable) => string[] | null;
}