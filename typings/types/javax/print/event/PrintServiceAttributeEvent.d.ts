import type { PrintService } from '../../../javax/print/PrintService.d.ts'
import type { PrintServiceAttributeSet } from '../../../javax/print/attribute/PrintServiceAttributeSet.d.ts'
import type { PrintEvent } from '../../../javax/print/event/PrintEvent.d.ts'
export class PrintServiceAttributeEvent extends PrintEvent {
    constructor(arg0: PrintService, arg1: PrintServiceAttributeSet)
    readonly attributes: PrintServiceAttributeSet;
    getAttributes(): PrintServiceAttributeSet;
    getPrintService(): PrintService;
}