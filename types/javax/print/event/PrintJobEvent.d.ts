import type { DocPrintJob } from '../../../javax/print/DocPrintJob.d.ts'
import type { PrintEvent } from '../../../javax/print/event/PrintEvent.d.ts'
export class PrintJobEvent extends PrintEvent {
    static DATA_TRANSFER_COMPLETE: number;
    static JOB_CANCELED: number;
    static JOB_COMPLETE: number;
    static JOB_FAILED: number;
    static NO_MORE_EVENTS: number;
    static REQUIRES_ATTENTION: number;
    constructor(arg0: DocPrintJob, arg1: number)
    // private reason: number;
    getPrintEventType(): number;
    getPrintJob(): DocPrintJob;
}