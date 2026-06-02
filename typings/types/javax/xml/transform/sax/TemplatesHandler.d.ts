import type { Templates } from '../../../../javax/xml/transform/Templates.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export interface TemplatesHandler extends Object, ContentHandler{
    declaration(arg0: string, arg1: string, arg2: string): void;
    getSystemId(): string;
    getTemplates(): Templates;
    setSystemId(arg0: string): void;
}