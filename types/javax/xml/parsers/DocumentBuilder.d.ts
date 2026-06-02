import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Schema } from '../../../javax/xml/validation/Schema.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DOMImplementation } from '../../../org/w3c/dom/DOMImplementation.d.ts'
import type { Document } from '../../../org/w3c/dom/Document.d.ts'
import type { EntityResolver } from '../../../org/xml/sax/EntityResolver.d.ts'
import type { ErrorHandler } from '../../../org/xml/sax/ErrorHandler.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
export abstract class DocumentBuilder extends Object {
    constructor()
    getDOMImplementation(): DOMImplementation;
    getSchema(): Schema;
    isNamespaceAware(): boolean;
    isValidating(): boolean;
    isXIncludeAware(): boolean;
    newDocument(): Document;
    parse(arg0: File): Document;
    parse(arg0: InputStream): Document;
    parse(arg0: InputStream, arg1: string): Document;
    parse(arg0: string): Document;
    parse(arg0: InputSource): Document;
    reset(): void;
    setEntityResolver(arg0: EntityResolver): void;
    setErrorHandler(arg0: ErrorHandler): void;
}