import type { BitapSearchProcessorFactory } from '../../../../io/netty/buffer/search/BitapSearchProcessorFactory.d.ts'
import type { KmpSearchProcessorFactory } from '../../../../io/netty/buffer/search/KmpSearchProcessorFactory.d.ts'
import type { SearchProcessor } from '../../../../io/netty/buffer/search/SearchProcessor.d.ts'
import type { SearchProcessorFactory } from '../../../../io/netty/buffer/search/SearchProcessorFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSearchProcessorFactory extends Object implements SearchProcessorFactory {
    static newBitapSearchProcessorFactory(paramarg0: number[]): BitapSearchProcessorFactory;
    static newKmpSearchProcessorFactory(paramarg0: number[]): KmpSearchProcessorFactory;
    constructor()
    newSearchProcessor(): SearchProcessor;
}