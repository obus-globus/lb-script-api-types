import type { ResourceBundle } from '../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Localization extends Object {
    static BUNDLE: ResourceBundle;
    static ROOT_LOCALE_BUNDLE: ResourceBundle;
    static format(paramarg0: string, paramarg1: (Object | null)[]): string;
    static formatRoot(paramarg0: string, paramarg1: (Object | null)[]): string;
    constructor()
}