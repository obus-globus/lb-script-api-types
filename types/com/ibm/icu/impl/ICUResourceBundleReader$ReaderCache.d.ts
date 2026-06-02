import type { ICUResourceBundleReader } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader.d.ts'
import type { ICUResourceBundleReader$ReaderCacheKey } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader$ReaderCacheKey.d.ts'
import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
export class ICUResourceBundleReader$ReaderCache extends SoftCache<ICUResourceBundleReader$ReaderCacheKey, ICUResourceBundleReader, ClassLoader> {
    private constructor()
    createInstance(arg0: ICUResourceBundleReader$ReaderCacheKey, arg1: ClassLoader): ICUResourceBundleReader;
}