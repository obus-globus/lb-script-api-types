import type { DocPrintJob } from '../../../javax/print/DocPrintJob.d.ts'
import type { PrintJobAttributeSet } from '../../../javax/print/attribute/PrintJobAttributeSet.d.ts'
import type { PrintEvent } from '../../../javax/print/event/PrintEvent.d.ts'
export class PrintJobAttributeEvent extends PrintEvent {
    constructor(arg0: DocPrintJob, arg1: PrintJobAttributeSet)
    readonly attributes: PrintJobAttributeSet;
    getAttributes(): PrintJobAttributeSet;
    getPrintJob(): DocPrintJob;
}