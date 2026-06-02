import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Namespace } from '../../../../javax/xml/stream/events/Namespace.d.ts'
import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface EndElement extends XMLEvent, Object{
    getName(): QName;
    getNamespaces(): Iterator<Namespace>;
}