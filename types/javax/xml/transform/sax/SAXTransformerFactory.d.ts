import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Source } from '../../../../javax/xml/transform/Source.d.ts'
import type { Templates } from '../../../../javax/xml/transform/Templates.d.ts'
import type { TransformerFactory } from '../../../../javax/xml/transform/TransformerFactory.d.ts'
import type { TemplatesHandler } from '../../../../javax/xml/transform/sax/TemplatesHandler.d.ts'
import type { TransformerHandler } from '../../../../javax/xml/transform/sax/TransformerHandler.d.ts'
import type { XMLFilter } from '../../../../org/xml/sax/XMLFilter.d.ts'
export abstract class SAXTransformerFactory extends TransformerFactory {
    static FEATURE: string;
    static FEATURE_XMLFILTER: string;
    static newDefaultInstance(): TransformerFactory;
    static newInstance(): TransformerFactory;
    static newInstance(paramarg0: string, paramarg1: ClassLoader): TransformerFactory;
    constructor()
    newTemplatesHandler(): TemplatesHandler;
    newTransformerHandler(): TransformerHandler;
    newTransformerHandler(arg0: Source): TransformerHandler;
    newTransformerHandler(arg0: Templates): TransformerHandler;
    newXMLFilter(arg0: Source): XMLFilter;
    newXMLFilter(arg0: Templates): XMLFilter;
}