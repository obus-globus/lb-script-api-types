import type { PrintServiceAttributeEvent } from '../../../javax/print/event/PrintServiceAttributeEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrintServiceAttributeListener extends Object{
    attributeUpdate(arg0: PrintServiceAttributeEvent): void;
}