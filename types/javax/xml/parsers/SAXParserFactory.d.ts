import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { SAXParser } from '../../../javax/xml/parsers/SAXParser.d.ts'
import type { Schema } from '../../../javax/xml/validation/Schema.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SAXParserFactory extends Object {
    static newDefaultInstance(): SAXParserFactory;
    static newDefaultNSInstance(): SAXParserFactory;
    static newInstance(): SAXParserFactory;
    static newInstance(paramarg0: string, paramarg1: ClassLoader): SAXParserFactory;
    static newNSInstance(): SAXParserFactory;
    static newNSInstance(paramarg0: string, paramarg1: ClassLoader): SAXParserFactory;
    constructor()
    readonly namespaceAware: boolean;
    readonly validating: boolean;
    getFeature(arg0: string): boolean;
    getSchema(): Schema;
    isNamespaceAware(): boolean;
    isValidating(): boolean;
    isXIncludeAware(): boolean;
    newSAXParser(): SAXParser;
    setFeature(arg0: string, arg1: boolean): void;
    setNamespaceAware(arg0: boolean): void;
    setSchema(arg0: Schema): void;
    setValidating(arg0: boolean): void;
    setXIncludeAware(arg0: boolean): void;
}