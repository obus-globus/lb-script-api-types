import type { Doc } from '../../javax/print/Doc.d.ts'
import type { PrintService } from '../../javax/print/PrintService.d.ts'
import type { PrintJobAttributeSet } from '../../javax/print/attribute/PrintJobAttributeSet.d.ts'
import type { PrintRequestAttributeSet } from '../../javax/print/attribute/PrintRequestAttributeSet.d.ts'
import type { PrintJobAttributeListener } from '../../javax/print/event/PrintJobAttributeListener.d.ts'
import type { PrintJobListener } from '../../javax/print/event/PrintJobListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface DocPrintJob extends Object{
    addPrintJobAttributeListener(arg0: PrintJobAttributeListener, arg1: PrintJobAttributeSet): void;
    addPrintJobListener(arg0: PrintJobListener): void;
    getAttributes(): PrintJobAttributeSet;
    getPrintService(): PrintService;
    print(arg0: Doc, arg1: PrintRequestAttributeSet): void;
    removePrintJobAttributeListener(arg0: PrintJobAttributeListener): void;
    removePrintJobListener(arg0: PrintJobListener): void;
}