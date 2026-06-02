import type { AhoCorasicSearchProcessorFactory } from '../../../../io/netty/buffer/search/AhoCorasicSearchProcessorFactory.d.ts'
import type { MultiSearchProcessorFactory } from '../../../../io/netty/buffer/search/MultiSearchProcessorFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractMultiSearchProcessorFactory extends Object implements MultiSearchProcessorFactory {
    static newAhoCorasicSearchProcessorFactory(paramarg0: (Object | null)[]): AhoCorasicSearchProcessorFactory;
    constructor()
}