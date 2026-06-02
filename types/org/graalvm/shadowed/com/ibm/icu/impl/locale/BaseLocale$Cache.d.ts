import type { BaseLocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { BaseLocale$Key } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/BaseLocale$Key.d.ts'
import type { LocaleObjectCache } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LocaleObjectCache.d.ts'
export class BaseLocale$Cache extends LocaleObjectCache<BaseLocale$Key, BaseLocale> {
    constructor()
    createObject(key: BaseLocale$Key): BaseLocale;
    normalizeKey(key: BaseLocale$Key): BaseLocale$Key;
}