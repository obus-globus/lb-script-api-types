import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefDownloadItem extends Object{
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