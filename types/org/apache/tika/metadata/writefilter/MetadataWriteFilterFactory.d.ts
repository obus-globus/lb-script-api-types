import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataWriteFilter } from '../../../../../org/apache/tika/metadata/writefilter/MetadataWriteFilter.d.ts'
export interface MetadataWriteFilterFactory extends Object{
    newInstance(): MetadataWriteFilter;
}