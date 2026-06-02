import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UberGpuBuffer$UploadCallback<T extends Object | number | string | boolean> extends Object{
    bufferHasBeenUploaded(key: T): void;
}