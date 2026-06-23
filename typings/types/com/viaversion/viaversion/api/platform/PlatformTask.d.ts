import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PlatformTask<T extends unknown> extends Object{
    cancel(): void;
}