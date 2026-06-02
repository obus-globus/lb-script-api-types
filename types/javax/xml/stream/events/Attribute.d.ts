import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Attribute extends XMLEvent, Object{
    getDTDType(): string;
    getName(): QName;
    getValue(): string;
    isSpecified(): boolean;
}