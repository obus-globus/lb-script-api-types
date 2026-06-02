import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefPostDataElement } from '../../../org/cef/network/CefPostDataElement.d.ts'
import type { CefPostDataElement$Type } from '../../../org/cef/network/CefPostDataElement$Type.d.ts'
export class CefPostDataElement_N extends CefPostDataElement implements CefNative {
    static create(): CefPostDataElement;
    static createNative(): CefPostDataElement;
    constructor()
    // private N_CefHandle: number;
    // private N_Dispose(arg0: number): void;
    // private N_GetBytes(arg0: number, arg1: number, arg2: number[]): number;
    // private N_GetBytesCount(arg0: number): number;
    // private N_GetFile(arg0: number): string;
    // private N_GetType(arg0: number): CefPostDataElement$Type;
    // private N_IsReadOnly(arg0: number): boolean;
    // private N_SetToBytes(arg0: number, arg1: number, arg2: number[]): void;
    // private N_SetToEmpty(arg0: number): void;
    // private N_SetToFile(arg0: number, arg1: string): void;
    dispose(): void;
    getBytes(arg0: number, arg1: number[]): number;
    getBytesCount(): number;
    getFile(): string;
    getNativeRef(arg0: string): number;
    getType(): CefPostDataElement$Type;
    isReadOnly(): boolean;
    setNativeRef(arg0: string, arg1: number): void;
    setToBytes(arg0: number, arg1: number[]): void;
    setToEmpty(): void;
    setToFile(arg0: string): void;
}