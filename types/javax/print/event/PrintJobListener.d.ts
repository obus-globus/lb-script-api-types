import type { PrintJobEvent } from '../../../javax/print/event/PrintJobEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrintJobListener extends Object{
    printDataTransferCompleted(arg0: PrintJobEvent): void;
    printJobCanceled(arg0: PrintJobEvent): void;
    printJobCompleted(arg0: PrintJobEvent): void;
    printJobFailed(arg0: PrintJobEvent): void;
    printJobNoMoreEvents(arg0: PrintJobEvent): void;
    printJobRequiresAttention(arg0: PrintJobEvent): void;
}