import type { SearchProcessor } from '../../../../io/netty/buffer/search/SearchProcessor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SearchProcessorFactory extends Object{
    newSearchProcessor(): SearchProcessor;
}