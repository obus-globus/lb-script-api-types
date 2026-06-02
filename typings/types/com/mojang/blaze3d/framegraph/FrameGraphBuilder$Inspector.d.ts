import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FrameGraphBuilder$Inspector extends Object{
    acquireResource(name: string): void;
    afterExecutePass(name: string): void;
    beforeExecutePass(name: string): void;
    releaseResource(name: string): void;
}