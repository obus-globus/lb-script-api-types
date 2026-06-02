import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { FormattingTuple } from '../../../org/slf4j/helpers/FormattingTuple.d.ts'
import type { NormalizedParameters } from '../../../org/slf4j/helpers/NormalizedParameters.d.ts'
export class MessageFormatter extends Object {
    static arrayFormat(paramarg0: string, paramarg1: (Object | null)[]): FormattingTuple;
    static arrayFormat(paramarg0: string, paramarg1: (Object | null)[], paramarg2: Throwable): FormattingTuple;
    static basicArrayFormat(paramarg0: string, paramarg1: (Object | null)[]): string;
    static basicArrayFormat(paramarg0: NormalizedParameters): string;
    static format(paramarg0: string, paramarg1: Object): FormattingTuple;
    static format(paramarg0: string, paramarg1: Object, paramarg2: Object): FormattingTuple;
    static getThrowableCandidate(paramarg0: (Object | null)[]): Throwable;
    static trimmedCopy(paramarg0: (Object | null)[]): (Object | null)[];
    constructor()
}