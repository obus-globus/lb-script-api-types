import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefBeforeDownloadCallback extends Object{
    Continue(arg0: string, arg1: boolean): void;
}