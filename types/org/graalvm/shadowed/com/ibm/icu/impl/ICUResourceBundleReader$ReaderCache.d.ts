import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { ICUResourceBundleReader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
import type { ICUResourceBundleReader$ReaderCacheKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$ReaderCacheKey.d.ts'
import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
export class ICUResourceBundleReader$ReaderCache extends SoftCache<ICUResourceBundleReader$ReaderCacheKey, ICUResourceBundleReader, ClassLoader> {
    private constructor()
    createInstance(key: ICUResourceBundleReader$ReaderCacheKey, loader: ClassLoader): ICUResourceBundleReader;
}