import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
export class ElementMappingContentHandler$TargetElement extends Object {
    constructor(arg0: QName)
    constructor(arg0: QName, arg1: Map<QName, QName>)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Map<QName, QName>)
    readonly attributesMapping: Map<QName, QName>;
    readonly mappedTagName: QName;
    getAttributesMapping(): Map<QName, QName>;
    getMappedTagName(): QName;
    mapAttributes(arg0: Attributes): Attributes;
}