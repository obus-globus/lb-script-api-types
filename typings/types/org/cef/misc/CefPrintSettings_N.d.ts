import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefPageRange } from '../../../org/cef/misc/CefPageRange.d.ts'
import type { CefPrintSettings } from '../../../org/cef/misc/CefPrintSettings.d.ts'
import type { CefPrintSettings$ColorModel } from '../../../org/cef/misc/CefPrintSettings$ColorModel.d.ts'
import type { CefPrintSettings$DuplexMode } from '../../../org/cef/misc/CefPrintSettings$DuplexMode.d.ts'
export class CefPrintSettings_N extends CefPrintSettings implements CefNative {
    static create(): CefPrintSettings;
    static createNative(): CefPrintSettings;
    constructor()
    // private N_CefHandle: number;
    // private N_Dispose(arg0: number): void;
    // private N_GetColorModel(arg0: number): CefPrintSettings$ColorModel;
    // private N_GetCopies(arg0: number): number;
    // private N_GetDPI(arg0: number): number;
    // private N_GetDeviceName(arg0: number): string;
    // private N_GetDuplexMode(arg0: number): CefPrintSettings$DuplexMode;
    // private N_GetPageRanges(arg0: number, arg1: CefPageRange[]): void;
    // private N_GetPageRangesCount(arg0: number): number;
    // private N_IsLandscape(arg0: number): boolean;
    // private N_IsReadOnly(arg0: number): boolean;
    // private N_IsSelectionOnly(arg0: number): boolean;
    // private N_IsValid(arg0: number): boolean;
    // private N_SetCollate(arg0: number, arg1: boolean): void;
    // private N_SetColorModel(arg0: number, arg1: CefPrintSettings$ColorModel): void;
    // private N_SetCopies(arg0: number, arg1: number): void;
    // private N_SetDPI(arg0: number, arg1: number): void;
    // private N_SetDeviceName(arg0: number, arg1: string): void;
    // private N_SetDuplexMode(arg0: number, arg1: CefPrintSettings$DuplexMode): void;
    // private N_SetOrientation(arg0: number, arg1: boolean): void;
    // private N_SetPageRanges(arg0: number, arg1: CefPageRange[]): void;
    // private N_SetPrinterPrintableArea(arg0: number, arg1: Dimension, arg2: Rectangle, arg3: boolean): void;
    // private N_SetSelectionOnly(arg0: number, arg1: boolean): void;
    // private N_WillCollate(arg0: number): boolean;
    dispose(): void;
    getColorModel(): CefPrintSettings$ColorModel;
    getCopies(): number;
    getDPI(): number;
    getDeviceName(): string;
    getDuplexMode(): CefPrintSettings$DuplexMode;
    getNativeRef(arg0: string): number;
    getPageRanges(arg0: CefPageRange[]): void;
    getPageRangesCount(): number;
    isLandscape(): boolean;
    isReadOnly(): boolean;
    isSelectionOnly(): boolean;
    isValid(): boolean;
    setCollate(arg0: boolean): void;
    setColorModel(arg0: CefPrintSettings$ColorModel): void;
    setCopies(arg0: number): void;
    setDPI(arg0: number): void;
    setDeviceName(arg0: string): void;
    setDuplexMode(arg0: CefPrintSettings$DuplexMode): void;
    setNativeRef(arg0: string, arg1: number): void;
    setOrientation(arg0: boolean): void;
    setPageRanges(arg0: CefPageRange[]): void;
    setPrinterPrintableArea(arg0: Dimension, arg1: Rectangle, arg2: boolean): void;
    setSelectionOnly(arg0: boolean): void;
    willCollate(): boolean;
}