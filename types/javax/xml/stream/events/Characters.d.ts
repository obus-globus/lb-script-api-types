import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Characters extends XMLEvent, Object{
    getData(): string;
    isCData(): boolean;
    isIgnorableWhiteSpace(): boolean;
    isWhiteSpace(): boolean;
}