import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MimeType } from '../../../../org/apache/tika/mime/MimeType.d.ts'
export class MimeType$RootXML extends Object implements Serializable {
    constructor(arg0: MimeType, arg1: string, arg2: string)
    // private localName: string;
    // private namespaceURI: string;
    // private type: MimeType;
    getLocalName(): string;
    getNameSpaceURI(): string;
    getType(): MimeType;
    // private isEmpty(arg0: string): boolean;
    matches(arg0: string, arg1: string): boolean;
    toString(): string;
}