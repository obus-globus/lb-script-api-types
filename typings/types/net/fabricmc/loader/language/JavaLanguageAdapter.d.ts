import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LanguageAdapter } from '../../../../net/fabricmc/loader/language/LanguageAdapter.d.ts'
import type { LanguageAdapter$Options } from '../../../../net/fabricmc/loader/language/LanguageAdapter$Options.d.ts'
export class JavaLanguageAdapter extends Object implements LanguageAdapter {
    static getClass(paramarg0: string, paramarg1: LanguageAdapter$Options): Class<Object>;
    constructor()
    createInstance(arg0: Class<Object>, arg1: LanguageAdapter$Options): Object;
    createInstance(arg0: string, arg1: LanguageAdapter$Options): Object;
}