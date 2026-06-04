import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LanguageAdapter } from '../../../../net/fabricmc/loader/language/LanguageAdapter.d.ts'
import type { LanguageAdapter$Options } from '../../../../net/fabricmc/loader/language/LanguageAdapter$Options.d.ts'
export class KotlinLanguageAdapter extends Object implements LanguageAdapter {
    constructor()
    createInstance(clazz: Class<Object>, options: LanguageAdapter$Options): Object;
    createInstance(arg0: string, arg1: LanguageAdapter$Options): Object;
}