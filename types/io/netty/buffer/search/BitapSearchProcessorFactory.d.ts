import type { AbstractSearchProcessorFactory } from '../../../../io/netty/buffer/search/AbstractSearchProcessorFactory.d.ts'
import type { BitapSearchProcessorFactory$Processor } from '../../../../io/netty/buffer/search/BitapSearchProcessorFactory$Processor.d.ts'
import type { KmpSearchProcessorFactory } from '../../../../io/netty/buffer/search/KmpSearchProcessorFactory.d.ts'
export class BitapSearchProcessorFactory extends AbstractSearchProcessorFactory {
    static newBitapSearchProcessorFactory(paramarg0: number[]): BitapSearchProcessorFactory;
    static newKmpSearchProcessorFactory(paramarg0: number[]): KmpSearchProcessorFactory;
    constructor(arg0: number[])
    // private bitMasks: number[];
    // private successBit: number;
    newSearchProcessor(): BitapSearchProcessorFactory$Processor;
}