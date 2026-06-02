import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefRunFileDialogCallback extends Object{
    onFileDialogDismissed(arg0: string[]): void;
}