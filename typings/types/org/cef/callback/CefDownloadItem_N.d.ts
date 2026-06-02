import type { Date } from '../../../java/util/Date.d.ts'
import type { CefDownloadItem } from '../../../org/cef/callback/CefDownloadItem.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefDownloadItem_N extends CefNativeAdapter implements CefDownloadItem {
    constructor()
    // private N_GetContentDisposition(arg0: number): string;
    // private N_GetCurrentSpeed(arg0: number): number;
    // private N_GetEndTime(arg0: number): Date;
    // private N_GetFullPath(arg0: number): string;
    // private N_GetId(arg0: number): number;
    // private N_GetMimeType(arg0: number): string;
    // private N_GetPercentComplete(arg0: number): number;
    // private N_GetReceivedBytes(arg0: number): number;
    // private N_GetStartTime(arg0: number): Date;
    // private N_GetSuggestedFileName(arg0: number): string;
    // private N_GetTotalBytes(arg0: number): number;
    // private N_GetURL(arg0: number): string;
    // private N_IsCanceled(arg0: number): boolean;
    // private N_IsComplete(arg0: number): boolean;
    // private N_IsInProgress(arg0: number): boolean;
    // private N_IsValid(arg0: number): boolean;
    getContentDisposition(): string;
    getCurrentSpeed(): number;
    getEndTime(): Date;
    getFullPath(): string;
    getId(): number;
    getMimeType(): string;
    getPercentComplete(): number;
    getReceivedBytes(): number;
    getStartTime(): Date;
    getSuggestedFileName(): string;
    getTotalBytes(): number;
    getURL(): string;
    isCanceled(): boolean;
    isComplete(): boolean;
    isInProgress(): boolean;
    isValid(): boolean;
}