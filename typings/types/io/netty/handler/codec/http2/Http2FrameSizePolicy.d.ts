import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2FrameSizePolicy extends Object{
    maxFrameSize(): number;
    maxFrameSize(arg0: number): void;
}