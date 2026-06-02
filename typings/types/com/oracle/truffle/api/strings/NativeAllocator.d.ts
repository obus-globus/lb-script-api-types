import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface NativeAllocator extends Object{
    allocate(byteSize: number): Object;
}