import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefFrame_N extends CefNativeAdapter implements CefFrame {
    constructor()
    // private N_Copy(arg0: number): void;
    // private N_Cut(arg0: number): void;
    // private N_Dispose(arg0: number): void;
    // private N_ExecuteJavaScript(arg0: number, arg1: string, arg2: string, arg3: number): void;
    // private N_GetIdentifier(arg0: number): string;
    // private N_GetName(arg0: number): string;
    // private N_GetParent(arg0: number): CefFrame;
    // private N_GetURL(arg0: number): string;
    // private N_IsFocused(arg0: number): boolean;
    // private N_IsMain(arg0: number): boolean;
    // private N_IsValid(arg0: number): boolean;
    // private N_Paste(arg0: number): void;
    // private N_Redo(arg0: number): void;
    // private N_SelectAll(arg0: number): void;
    // private N_Undo(arg0: number): void;
    copy(): void;
    cut(): void;
    dispose(): void;
    executeJavaScript(arg0: string, arg1: string, arg2: number): void;
    finalize(): void;
    getIdentifier(): string;
    getName(): string;
    getParent(): CefFrame;
    getURL(): string;
    isFocused(): boolean;
    isMain(): boolean;
    isValid(): boolean;
    paste(): void;
    redo(): void;
    selectAll(): void;
    undo(): void;
}