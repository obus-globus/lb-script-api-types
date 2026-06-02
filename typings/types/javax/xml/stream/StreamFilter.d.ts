import type { XMLStreamReader } from '../../../javax/xml/stream/XMLStreamReader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface StreamFilter extends Object{
    accept(arg0: XMLStreamReader): boolean;
}