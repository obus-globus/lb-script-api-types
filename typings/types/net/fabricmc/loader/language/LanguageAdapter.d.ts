import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LanguageAdapter$Options } from '../../../../net/fabricmc/loader/language/LanguageAdapter$Options.d.ts'
export interface LanguageAdapter extends Object{
    createInstance(arg0: Class<Object>, arg1: LanguageAdapter$Options): Object;
    createInstance(arg0: string, arg1: LanguageAdapter$Options): Object;
}