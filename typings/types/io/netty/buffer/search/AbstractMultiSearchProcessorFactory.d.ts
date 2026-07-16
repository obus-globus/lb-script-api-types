import type { AhoCorasicSearchProcessorFactory } from '../../../../io/netty/buffer/search/AhoCorasicSearchProcessorFactory.d.ts'
import type { MultiSearchProcessor } from '../../../../io/netty/buffer/search/MultiSearchProcessor.d.ts'
import type { MultiSearchProcessorFactory } from '../../../../io/netty/buffer/search/MultiSearchProcessorFactory.d.ts'
import type { SearchProcessor } from '../../../../io/netty/buffer/search/SearchProcessor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractMultiSearchProcessorFactory extends Object implements MultiSearchProcessorFactory {
    static newAhoCorasicSearchProcessorFactory(...paramarg0: number[][]): AhoCorasicSearchProcessorFactory;
    constructor()
    newSearchProcessor(): MultiSearchProcessor;
    newSearchProcessor(): SearchProcessor;
}