import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefFileDialogCallback extends Object{
    Cancel(): void;
    Continue(arg0: string[]): void;
}