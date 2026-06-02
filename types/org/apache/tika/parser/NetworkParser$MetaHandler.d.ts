import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { DefaultHandler } from '../../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export class NetworkParser$MetaHandler extends DefaultHandler {
    constructor(arg0: Metadata)
    // private metadata: Metadata;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}