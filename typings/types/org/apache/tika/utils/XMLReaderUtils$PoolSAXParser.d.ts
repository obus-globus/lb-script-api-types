import type { SAXParser } from '../../../../javax/xml/parsers/SAXParser.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class XMLReaderUtils$PoolSAXParser extends Object {
    constructor(arg0: number, arg1: SAXParser)
    // private numUses: number;
    // private poolGeneration: number;
    // private saxParser: SAXParser;
    getGeneration(): number;
    getSAXParser(): SAXParser;
    incrementUses(): void;
    reset(): void;
}