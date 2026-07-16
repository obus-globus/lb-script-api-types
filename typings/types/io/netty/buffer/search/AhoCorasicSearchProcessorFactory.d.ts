import type { AbstractMultiSearchProcessorFactory } from '../../../../io/netty/buffer/search/AbstractMultiSearchProcessorFactory.d.ts'
import type { AhoCorasicSearchProcessorFactory$Processor } from '../../../../io/netty/buffer/search/AhoCorasicSearchProcessorFactory$Processor.d.ts'
export class AhoCorasicSearchProcessorFactory extends AbstractMultiSearchProcessorFactory {
    static newAhoCorasicSearchProcessorFactory(...paramarg0: number[][]): AhoCorasicSearchProcessorFactory;
    constructor(...arg0: number[][])
    // private jumpTable: number[];
    // private matchForNeedleId: number[];
    // private linkSuffixes(): void;
    newSearchProcessor(): AhoCorasicSearchProcessorFactory$Processor;
}