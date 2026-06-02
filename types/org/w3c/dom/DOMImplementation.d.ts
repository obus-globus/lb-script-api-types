import type { Object } from '../../../java/lang/Object.d.ts'
import type { Document } from '../../../org/w3c/dom/Document.d.ts'
import type { DocumentType } from '../../../org/w3c/dom/DocumentType.d.ts'
export interface DOMImplementation extends Object{
    createDocument(arg0: string, arg1: string, arg2: DocumentType): Document;
    createDocumentType(arg0: string, arg1: string, arg2: string): DocumentType;
    getFeature(arg0: string, arg1: string): Object;
    hasFeature(arg0: string, arg1: string): boolean;
}