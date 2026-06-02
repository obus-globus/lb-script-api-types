import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefPostData } from '../../../org/cef/network/CefPostData.d.ts'
import type { CefPostDataElement } from '../../../org/cef/network/CefPostDataElement.d.ts'
export class CefPostData_N extends CefPostData implements CefNative {
    static create(): CefPostData;
    static createNative(): CefPostData;
    constructor()
    // private N_CefHandle: number;
    // private N_AddElement(arg0: number, arg1: CefPostDataElement): boolean;
    // private N_Dispose(arg0: number): void;
    // private N_GetElementCount(arg0: number): number;
    // private N_GetElements(arg0: number, arg1: CefPostDataElement[]): void;
    // private N_IsReadOnly(arg0: number): boolean;
    // private N_RemoveElement(arg0: number, arg1: CefPostDataElement): boolean;
    // private N_RemoveElements(arg0: number): void;
    addElement(arg0: CefPostDataElement): boolean;
    dispose(): void;
    getElementCount(): number;
    getElements(arg0: CefPostDataElement[]): void;
    getNativeRef(arg0: string): number;
    isReadOnly(): boolean;
    removeElement(arg0: CefPostDataElement): boolean;
    removeElements(): void;
    setNativeRef(arg0: string, arg1: number): void;
}