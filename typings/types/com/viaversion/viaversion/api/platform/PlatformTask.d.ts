import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PlatformTask<T extends Object | number | string | boolean> extends Object{
    cancel(): void;
}