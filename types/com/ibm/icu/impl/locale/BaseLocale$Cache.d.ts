import type { BaseLocale } from '../../../../../com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { BaseLocale$Key } from '../../../../../com/ibm/icu/impl/locale/BaseLocale$Key.d.ts'
import type { LocaleObjectCache } from '../../../../../com/ibm/icu/impl/locale/LocaleObjectCache.d.ts'
export class BaseLocale$Cache extends LocaleObjectCache<BaseLocale$Key, BaseLocale> {
    constructor()
    createObject(arg0: BaseLocale$Key): BaseLocale;
    normalizeKey(arg0: BaseLocale$Key): BaseLocale$Key;
}