import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefPdfPrintCallback extends Object{
    onPdfPrintFinished(arg0: string, arg1: boolean): void;
}