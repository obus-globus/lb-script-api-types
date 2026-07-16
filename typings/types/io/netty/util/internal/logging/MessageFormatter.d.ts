import type { FormattingTuple } from '../../../../../io/netty/util/internal/logging/FormattingTuple.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MessageFormatter extends Object {
    static arrayFormat(paramarg0: string, paramarg1: Object[]): FormattingTuple;
    static format(paramarg0: string, paramarg1: Object): FormattingTuple;
    static format(paramarg0: string, paramarg1: Object, paramarg2: Object): FormattingTuple;
    private constructor()
}