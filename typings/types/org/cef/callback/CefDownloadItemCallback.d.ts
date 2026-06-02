import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefDownloadItemCallback extends Object{
    cancel(): void;
    pause(): void;
    resume(): void;
}