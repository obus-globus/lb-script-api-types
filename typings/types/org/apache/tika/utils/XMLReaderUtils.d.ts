import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { DocumentBuilder } from '../../../../javax/xml/parsers/DocumentBuilder.d.ts'
import type { DocumentBuilderFactory } from '../../../../javax/xml/parsers/DocumentBuilderFactory.d.ts'
import type { SAXParser } from '../../../../javax/xml/parsers/SAXParser.d.ts'
import type { SAXParserFactory } from '../../../../javax/xml/parsers/SAXParserFactory.d.ts'
import type { XMLInputFactory } from '../../../../javax/xml/stream/XMLInputFactory.d.ts'
import type { Transformer } from '../../../../javax/xml/transform/Transformer.d.ts'
import type { TransformerFactory } from '../../../../javax/xml/transform/TransformerFactory.d.ts'
import type { SAXTransformerFactory } from '../../../../javax/xml/transform/sax/SAXTransformerFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { XMLReader } from '../../../../org/xml/sax/XMLReader.d.ts'
export class XMLReaderUtils extends Object implements Serializable {
    static DEFAULT_MAX_ENTITY_EXPANSIONS: number;
    static DEFAULT_NUM_REUSES: number;
    static DEFAULT_POOL_SIZE: number;
    static buildDOM(paramarg0: InputStream): Document;
    static buildDOM(paramarg0: InputStream, paramarg1: ParseContext): Document;
    static buildDOM(paramarg0: Reader, paramarg1: ParseContext): Document;
    static buildDOM(paramarg0: string): Document;
    static buildDOM(paramarg0: Path): Document;
    static getAttrValue(paramarg0: string, paramarg1: Attributes): string;
    static getDocumentBuilder(): DocumentBuilder;
    static getDocumentBuilder(paramarg0: ParseContext): DocumentBuilder;
    static getDocumentBuilderFactory(): DocumentBuilderFactory;
    static getMaxEntityExpansions(): number;
    static getMaxNumReuses(): number;
    static getPoolSize(): number;
    static getSAXParser(): SAXParser;
    static getSAXParserFactory(): SAXParserFactory;
    static getSAXTransformerFactory(): SAXTransformerFactory;
    static getTransformer(): Transformer;
    static getTransformer(paramarg0: ParseContext): Transformer;
    static getTransformerFactory(): TransformerFactory;
    static getXMLInputFactory(): XMLInputFactory;
    static getXMLInputFactory(paramarg0: ParseContext): XMLInputFactory;
    static getXMLReader(): XMLReader;
    static parseSAX(paramarg0: InputStream, paramarg1: ContentHandler, paramarg2: ParseContext): void;
    static parseSAX(paramarg0: Reader, paramarg1: ContentHandler, paramarg2: ParseContext): void;
    static setMaxEntityExpansions(paramarg0: number): void;
    static setMaxNumReuses(paramarg0: number): void;
    static setPoolSize(paramarg0: number): void;
    constructor()
}