import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
export class ElementMappingContentHandler$TargetElement extends Object {
    constructor(arg0: QName)
    constructor(arg0: QName, arg1: JavaMap<QName, QName>)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: JavaMap<QName, QName>)
    readonly attributesMapping: JavaMap<QName, QName>;
    readonly mappedTagName: QName;
    getAttributesMapping(): JavaMap<QName, QName>;
    getMappedTagName(): QName;
    mapAttributes(arg0: Attributes): Attributes;
}