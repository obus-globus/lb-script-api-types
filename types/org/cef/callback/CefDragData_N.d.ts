import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { CefDragData } from '../../../org/cef/callback/CefDragData.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
export class CefDragData_N extends CefDragData implements CefNative {
    static create(): CefDragData;
    static createNative(): CefDragData;
    constructor()
    // private N_CefHandle: number;
    // private N_AddFile(arg0: number, arg1: string, arg2: string): void;
    // private N_Clone(arg0: number): CefDragData_N;
    // private N_Dispose(arg0: number): void;
    // private N_GetFileContents(arg0: number, arg1: OutputStream): number;
    // private N_GetFileName(arg0: number): string;
    // private N_GetFileNames(arg0: number, arg1: string[]): boolean;
    // private N_GetFilePaths(arg0: number, arg1: string[]): boolean;
    // private N_GetFragmentBaseURL(arg0: number): string;
    // private N_GetFragmentHtml(arg0: number): string;
    // private N_GetFragmentText(arg0: number): string;
    // private N_GetLinkMetadata(arg0: number): string;
    // private N_GetLinkTitle(arg0: number): string;
    // private N_GetLinkURL(arg0: number): string;
    // private N_IsFile(arg0: number): boolean;
    // private N_IsFragment(arg0: number): boolean;
    // private N_IsLink(arg0: number): boolean;
    // private N_IsReadOnly(arg0: number): boolean;
    // private N_ResetFileContents(arg0: number): void;
    // private N_SetFragmentBaseURL(arg0: number, arg1: string): void;
    // private N_SetFragmentHtml(arg0: number, arg1: string): void;
    // private N_SetFragmentText(arg0: number, arg1: string): void;
    // private N_SetLinkMetadata(arg0: number, arg1: string): void;
    // private N_SetLinkTitle(arg0: number, arg1: string): void;
    // private N_SetLinkURL(arg0: number, arg1: string): void;
    addFile(arg0: string, arg1: string): void;
    clone(): CefDragData;
    dispose(): void;
    getFileContents(arg0: OutputStream): number;
    getFileName(): string;
    getFileNames(arg0: string[]): boolean;
    getFilePaths(arg0: string[]): boolean;
    getFragmentBaseURL(): string;
    getFragmentHtml(): string;
    getFragmentText(): string;
    getLinkMetadata(): string;
    getLinkTitle(): string;
    getLinkURL(): string;
    getNativeRef(arg0: string): number;
    isFile(): boolean;
    isFragment(): boolean;
    isLink(): boolean;
    isReadOnly(): boolean;
    resetFileContents(): void;
    setFragmentBaseURL(arg0: string): void;
    setFragmentHtml(arg0: string): void;
    setFragmentText(arg0: string): void;
    setLinkMetadata(arg0: string): void;
    setLinkTitle(arg0: string): void;
    setLinkURL(arg0: string): void;
    setNativeRef(arg0: string, arg1: number): void;
    toString(): string;
}