import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { DefaultHandler } from '../../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export class XmlRootExtractor$ExtractorHandler extends DefaultHandler {
    private constructor()
    // private rootElement: QName;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}