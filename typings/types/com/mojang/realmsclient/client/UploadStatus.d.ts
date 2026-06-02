import type { Object } from '../../../../java/lang/Object.d.ts'
export class UploadStatus extends Object {
    constructor()
    readonly bytesPerSecond: number;
    readonly bytesWritten: number;
    // private previousBytesWritten: number;
    // private previousTimeSnapshot: number;
    readonly totalBytes: number;
    getBytesPerSecond(): number;
    getBytesWritten(): number;
    getPercentage(): number;
    getTotalBytes(): number;
    onWrite(bytesWritten: number): void;
    refreshBytesPerSecond(): void;
    restart(): void;
    setTotalBytes(totalBytes: number): void;
    uploadCompleted(): boolean;
    uploadStarted(): boolean;
}