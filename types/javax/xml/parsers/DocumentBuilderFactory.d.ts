import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { DocumentBuilder } from '../../../javax/xml/parsers/DocumentBuilder.d.ts'
import type { Schema } from '../../../javax/xml/validation/Schema.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DocumentBuilderFactory extends Object {
    static newDefaultInstance(): DocumentBuilderFactory;
    static newDefaultNSInstance(): DocumentBuilderFactory;
    static newInstance(): DocumentBuilderFactory;
    static newInstance(paramarg0: string, paramarg1: ClassLoader): DocumentBuilderFactory;
    static newNSInstance(): DocumentBuilderFactory;
    static newNSInstance(paramarg0: string, paramarg1: ClassLoader): DocumentBuilderFactory;
    constructor()
    readonly coalescing: boolean;
    // private expandEntityRef: boolean;
    // private ignoreComments: boolean;
    readonly namespaceAware: boolean;
    readonly validating: boolean;
    // private whitespace: boolean;
    getAttribute(arg0: string): Object;
    getFeature(arg0: string): boolean;
    getSchema(): Schema;
    isCoalescing(): boolean;
    isExpandEntityReferences(): boolean;
    isIgnoringComments(): boolean;
    isIgnoringElementContentWhitespace(): boolean;
    isNamespaceAware(): boolean;
    isValidating(): boolean;
    isXIncludeAware(): boolean;
    newDocumentBuilder(): DocumentBuilder;
    setAttribute(arg0: string, arg1: Object): void;
    setCoalescing(arg0: boolean): void;
    setExpandEntityReferences(arg0: boolean): void;
    setFeature(arg0: string, arg1: boolean): void;
    setIgnoringComments(arg0: boolean): void;
    setIgnoringElementContentWhitespace(arg0: boolean): void;
    setNamespaceAware(arg0: boolean): void;
    setSchema(arg0: Schema): void;
    setValidating(arg0: boolean): void;
    setXIncludeAware(arg0: boolean): void;
}