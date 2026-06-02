import type { Object } from '../../../java/lang/Object.d.ts'
export interface ResourceLeakDetector$LeakListener extends Object{
    onLeak(arg0: string, arg1: string): void;
}