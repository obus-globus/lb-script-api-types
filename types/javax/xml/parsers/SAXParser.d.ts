import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Schema } from '../../../javax/xml/validation/Schema.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HandlerBase } from '../../../org/xml/sax/HandlerBase.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
import type { Parser } from '../../../org/xml/sax/Parser.d.ts'
import type { XMLReader } from '../../../org/xml/sax/XMLReader.d.ts'
import type { DefaultHandler } from '../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export abstract class SAXParser extends Object {
    constructor()
    getParser(): Parser;
    getProperty(arg0: string): Object;
    getSchema(): Schema;
    getXMLReader(): XMLReader;
    isNamespaceAware(): boolean;
    isValidating(): boolean;
    isXIncludeAware(): boolean;
    parse(arg0: File, arg1: HandlerBase): void;
    parse(arg0: File, arg1: DefaultHandler): void;
    parse(arg0: InputStream, arg1: HandlerBase): void;
    parse(arg0: InputStream, arg1: HandlerBase, arg2: string): void;
    parse(arg0: InputStream, arg1: DefaultHandler): void;
    parse(arg0: InputStream, arg1: DefaultHandler, arg2: string): void;
    parse(arg0: string, arg1: HandlerBase): void;
    parse(arg0: string, arg1: DefaultHandler): void;
    parse(arg0: InputSource, arg1: HandlerBase): void;
    parse(arg0: InputSource, arg1: DefaultHandler): void;
    reset(): void;
    setProperty(arg0: string, arg1: Object): void;
}