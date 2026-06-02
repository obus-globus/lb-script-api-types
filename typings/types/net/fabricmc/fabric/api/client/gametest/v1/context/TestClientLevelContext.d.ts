import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface TestClientLevelContext extends Object{
    waitForChunksDownload(): number;
    waitForChunksDownload(arg0: number): number;
    waitForChunksRender(): number;
    waitForChunksRender(arg0: boolean): number;
    waitForChunksRender(arg0: boolean, arg1: number): number;
    waitForChunksRender(arg0: number): number;
}