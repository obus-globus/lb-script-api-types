import type { PrintJobAttributeEvent } from '../../../javax/print/event/PrintJobAttributeEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrintJobAttributeListener extends Object{
    attributeUpdate(arg0: PrintJobAttributeEvent): void;
}