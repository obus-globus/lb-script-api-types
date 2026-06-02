import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MCEFProgressListener extends Object{
    onComplete(): void;
    onFileEnd(arg0: string): void;
    onFileProgress(arg0: string, arg1: number, arg2: number, arg3: boolean): void;
    onFileStart(arg0: string): void;
    onProgressUpdate(arg0: string, arg1: number): void;
}