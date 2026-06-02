import type { MultiSearchProcessor } from '../../../../io/netty/buffer/search/MultiSearchProcessor.d.ts'
import type { SearchProcessorFactory } from '../../../../io/netty/buffer/search/SearchProcessorFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MultiSearchProcessorFactory extends SearchProcessorFactory, Object{
    newSearchProcessor(): MultiSearchProcessor;
}