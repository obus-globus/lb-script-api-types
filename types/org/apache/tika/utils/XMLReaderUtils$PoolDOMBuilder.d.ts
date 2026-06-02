import type { DocumentBuilder } from '../../../../javax/xml/parsers/DocumentBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class XMLReaderUtils$PoolDOMBuilder extends Object {
    constructor(arg0: number, arg1: DocumentBuilder)
    readonly documentBuilder: DocumentBuilder;
    // private numUses: number;
    readonly poolGeneration: number;
    getDocumentBuilder(): DocumentBuilder;
    getPoolGeneration(): number;
    incrementUses(): void;
    reset(): void;
}