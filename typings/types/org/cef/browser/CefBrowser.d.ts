import type { Point } from '../../../java/awt/Point.d.ts'
import type { BufferedImage } from '../../../java/awt/image/BufferedImage.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefClient } from '../../../org/cef/CefClient.d.ts'
import type { CefDevToolsClient } from '../../../org/cef/browser/CefDevToolsClient.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefRequestContext } from '../../../org/cef/browser/CefRequestContext.d.ts'
import type { CefPdfPrintCallback } from '../../../org/cef/callback/CefPdfPrintCallback.d.ts'
import type { CefRunFileDialogCallback } from '../../../org/cef/callback/CefRunFileDialogCallback.d.ts'
import type { CefStringVisitor } from '../../../org/cef/callback/CefStringVisitor.d.ts'
import type { CefDialogHandler$FileDialogMode } from '../../../org/cef/handler/CefDialogHandler$FileDialogMode.d.ts'
import type { CefRenderHandler } from '../../../org/cef/handler/CefRenderHandler.d.ts'
import type { CefWindowHandler } from '../../../org/cef/handler/CefWindowHandler.d.ts'
import type { CefPdfPrintSettings } from '../../../org/cef/misc/CefPdfPrintSettings.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
export interface CefBrowser extends Object{
    canGoBack(): boolean;
    canGoForward(): boolean;
    close(arg0: boolean): void;
    closeDevTools(): void;
    createImmediately(): void;
    createScreenshot(arg0: boolean): CompletableFuture<BufferedImage>;
    doClose(): boolean;
    executeJavaScript(arg0: string, arg1: string, arg2: number): void;
    find(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean): void;
    getClient(): CefClient;
    getDevToolsClient(): CefDevToolsClient;
    getFocusedFrame(): CefFrame;
    getFrameByIdentifier(arg0: string): CefFrame;
    getFrameByName(arg0: string): CefFrame;
    getFrameCount(): number;
    getFrameIdentifiers(): string[];
    getFrameNames(): string[];
    getIdentifier(): number;
    getMainFrame(): CefFrame;
    getRenderHandler(): CefRenderHandler;
    getRequestContext(): CefRequestContext;
    getSource(arg0: CefStringVisitor): void;
    getText(arg0: CefStringVisitor): void;
    getURL(): string;
    getWindowHandler(): CefWindowHandler;
    getWindowlessFrameRate(): CompletableFuture<number>;
    getZoomLevel(): number;
    goBack(): void;
    goForward(): void;
    hasDocument(): boolean;
    isLoading(): boolean;
    isPopup(): boolean;
    loadRequest(arg0: CefRequest): void;
    loadURL(arg0: string): void;
    onBeforeClose(): void;
    openDevTools(): void;
    openDevTools(arg0: Point): void;
    print(): void;
    printToPDF(arg0: string, arg1: CefPdfPrintSettings, arg2: CefPdfPrintCallback): void;
    reload(): void;
    reloadIgnoreCache(): void;
    replaceMisspelling(arg0: string): void;
    runFileDialog(arg0: CefDialogHandler$FileDialogMode, arg1: string, arg2: string, arg3: string[], arg4: number, arg5: CefRunFileDialogCallback): void;
    sendExternalBeginFrame(): void;
    setCloseAllowed(): void;
    setFocus(arg0: boolean): void;
    setWindowVisibility(arg0: boolean): void;
    setWindowlessFrameRate(arg0: number): void;
    setZoomLevel(arg0: number): void;
    startDownload(arg0: string): void;
    stopFinding(arg0: boolean): void;
    stopLoad(): void;
    viewSource(): void;
}