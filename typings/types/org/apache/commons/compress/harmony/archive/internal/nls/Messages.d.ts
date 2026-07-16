import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class Messages extends Object {
    static format(paramarg0: string, paramarg1: Object[]): string;
    static getString(paramarg0: string): string;
    static getString(paramarg0: string, paramarg1: string): string;
    static getString(paramarg0: string, paramarg1: number): string;
    static getString(paramarg0: string, paramarg1: Object): string;
    static getString(paramarg0: string, paramarg1: Object, paramarg2: Object): string;
    static getString(paramarg0: string, paramarg1: Object[]): string;
    static setLocale(paramarg0: Locale, paramarg1: string): ResourceBundle;
    constructor()
}