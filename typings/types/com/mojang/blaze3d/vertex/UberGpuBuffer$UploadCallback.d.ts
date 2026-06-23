import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UberGpuBuffer$UploadCallback<T extends unknown> extends Object{
    bufferHasBeenUploaded(key: T): void;
}