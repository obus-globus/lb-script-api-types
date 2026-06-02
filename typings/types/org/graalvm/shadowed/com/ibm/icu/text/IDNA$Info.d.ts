import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IDNA$Error } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/IDNA$Error.d.ts'
export class IDNA$Info extends Object {
    constructor()
    readonly errors: IDNA$Error[];
    // private isBiDi: boolean;
    // private isOkBiDi: boolean;
    // private isTransDiff: boolean;
    // private labelErrors: IDNA$Error[];
    getErrors(): IDNA$Error[];
    hasErrors(): boolean;
    isTransitionalDifferent(): boolean;
    // private reset(): void;
}