import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefPageRange } from '../../../org/cef/misc/CefPageRange.d.ts'
import type { CefPrintSettings$ColorModel } from '../../../org/cef/misc/CefPrintSettings$ColorModel.d.ts'
import type { CefPrintSettings$DuplexMode } from '../../../org/cef/misc/CefPrintSettings$DuplexMode.d.ts'
export abstract class CefPrintSettings extends Object {
    static create(): CefPrintSettings;
    constructor()
    dispose(): void;
    finalize(): void;
    getColorModel(): CefPrintSettings$ColorModel;
    getCopies(): number;
    getDPI(): number;
    getDeviceName(): string;
    getDuplexMode(): CefPrintSettings$DuplexMode;
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
    setOrientation(arg0: boolean): void;
    setPageRanges(arg0: CefPageRange[]): void;
    setPrinterPrintableArea(arg0: Dimension, arg1: Rectangle, arg2: boolean): void;
    setSelectionOnly(arg0: boolean): void;
    willCollate(): boolean;
}