import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ElementMappingContentHandler$TargetElement } from '../../../../org/apache/tika/sax/ElementMappingContentHandler$TargetElement.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class ElementMappingContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler, arg1: Map<QName, ElementMappingContentHandler$TargetElement>)
    // private mappings: Map<QName, ElementMappingContentHandler$TargetElement>;
    endElement(arg0: string, arg1: string, arg2: string): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}