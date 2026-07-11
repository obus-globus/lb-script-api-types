import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class FormattedException extends RuntimeException {
    static ofLocalized(paramarg0: string, paramarg1: string): FormattedException;
    static ofLocalized(paramarg0: string, paramarg1: string, ...paramarg2: (Object | null)[]): FormattedException;
    static ofLocalized(paramarg0: string, paramarg1: string, paramarg2: Throwable): FormattedException;
    static ofLocalized(paramarg0: string, paramarg1: Throwable): FormattedException;
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, ...arg2: Object[])
    constructor(arg0: string, arg1: string, arg2: Throwable)
    constructor(arg0: string, arg1: Throwable)
    readonly mainText: string;
    // private translatedText: string;
    // private addTranslation(arg0: string): FormattedException;
    getDisplayedText(): string;
    getMainText(): string;
}