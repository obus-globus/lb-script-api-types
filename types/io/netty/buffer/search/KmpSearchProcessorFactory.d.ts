import type { AbstractSearchProcessorFactory } from '../../../../io/netty/buffer/search/AbstractSearchProcessorFactory.d.ts'
import type { BitapSearchProcessorFactory } from '../../../../io/netty/buffer/search/BitapSearchProcessorFactory.d.ts'
import type { KmpSearchProcessorFactory$Processor } from '../../../../io/netty/buffer/search/KmpSearchProcessorFactory$Processor.d.ts'
export class KmpSearchProcessorFactory extends AbstractSearchProcessorFactory {
    static newBitapSearchProcessorFactory(paramarg0: number[]): BitapSearchProcessorFactory;
    static newKmpSearchProcessorFactory(paramarg0: number[]): KmpSearchProcessorFactory;
    constructor(arg0: number[])
    // private jumpTable: number[];
    // private needle: number[];
    newSearchProcessor(): KmpSearchProcessorFactory$Processor;
}