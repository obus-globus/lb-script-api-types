import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
export abstract class CheckResult extends Object {
    private constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: DefaultConstructorMarker)
    // private isSuccess: boolean;
    isSuccess(): boolean;
}