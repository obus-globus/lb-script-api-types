import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { CefBrowserSettings } from '../../../org/cef/CefBrowserSettings.d.ts'
import type { CefClient } from '../../../org/cef/CefClient.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefBrowser_N$IntCallback } from '../../../org/cef/browser/CefBrowser_N$IntCallback.d.ts'
import type { CefDevToolsClient } from '../../../org/cef/browser/CefDevToolsClient.d.ts'
import type { CefDevToolsMessageObserver } from '../../../org/cef/browser/CefDevToolsMessageObserver.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefRegistration } from '../../../org/cef/browser/CefRegistration.d.ts'
import type { CefRequestContext } from '../../../org/cef/browser/CefRequestContext.d.ts'
import type { CefDragData } from '../../../org/cef/callback/CefDragData.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
import type { CefPdfPrintCallback } from '../../../org/cef/callback/CefPdfPrintCallback.d.ts'
import type { CefRunFileDialogCallback } from '../../../org/cef/callback/CefRunFileDialogCallback.d.ts'
import type { CefStringVisitor } from '../../../org/cef/callback/CefStringVisitor.d.ts'
import type { CefKeyEvent } from '../../../org/cef/event/CefKeyEvent.d.ts'
import type { CefMouseEvent } from '../../../org/cef/event/CefMouseEvent.d.ts'
import type { CefMouseWheelEvent } from '../../../org/cef/event/CefMouseWheelEvent.d.ts'
import type { CefClientHandler } from '../../../org/cef/handler/CefClientHandler.d.ts'
import type { CefDialogHandler$FileDialogMode } from '../../../org/cef/handler/CefDialogHandler$FileDialogMode.d.ts'
import type { CefRenderHandler } from '../../../org/cef/handler/CefRenderHandler.d.ts'
import type { CefWindowHandler } from '../../../org/cef/handler/CefWindowHandler.d.ts'
import type { CefPdfPrintSettings } from '../../../org/cef/misc/CefPdfPrintSettings.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
export abstract class CefBrowser_N extends CefNativeAdapter implements CefBrowser {
    constructor(arg0: CefClient, arg1: string, arg2: CefRequestContext, arg3: CefBrowser_N, arg4: Point, arg5: CefBrowserSettings)
    // private client_: CefClient;
    // private closeAllowed_: boolean;
    // private devToolsClient_: CefDevToolsClient;
    // private inspectAt_: Point;
    // private isClosed_: boolean;
    // private isClosing_: boolean;
    // private isPending_: boolean;
    // private parent_: CefBrowser_N;
    // private request_context_: CefRequestContext;
    // private settings_: CefBrowserSettings;
    // private url_: string;
    // private N_AddDevToolsMessageObserver(arg0: CefDevToolsMessageObserver): CefRegistration;
    // private N_CanGoBack(): boolean;
    // private N_CanGoForward(): boolean;
    // private N_Close(arg0: boolean): void;
    // private N_CloseDevTools(): void;
    // private N_CreateBrowser(arg0: CefClientHandler, arg1: number, arg2: string, arg3: boolean, arg4: boolean, arg5: CefRequestContext, arg6: CefBrowserSettings): boolean;
    // private N_CreateDevTools(arg0: CefBrowser, arg1: CefClientHandler, arg2: number, arg3: boolean, arg4: boolean, arg5: Point): boolean;
    // private N_DragSourceEndedAt(arg0: Point, arg1: number): void;
    // private N_DragSourceSystemDragEnded(): void;
    // private N_DragTargetDragEnter(arg0: CefDragData, arg1: Point, arg2: number, arg3: number): void;
    // private N_DragTargetDragLeave(): void;
    // private N_DragTargetDragOver(arg0: Point, arg1: number, arg2: number): void;
    // private N_DragTargetDrop(arg0: Point, arg1: number): void;
    // private N_ExecuteDevToolsMethod(arg0: string, arg1: string, arg2: CefBrowser_N$IntCallback): void;
    // private N_ExecuteJavaScript(arg0: string, arg1: string, arg2: number): void;
    // private N_Find(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean): void;
    // private N_GetFocusedFrame(): CefFrame;
    // private N_GetFrameByIdentifier(arg0: string): CefFrame;
    // private N_GetFrameByName(arg0: string): CefFrame;
    // private N_GetFrameCount(): number;
    // private N_GetFrameIdentifiers(): string[];
    // private N_GetFrameNames(): string[];
    // private N_GetIdentifier(): number;
    // private N_GetMainFrame(): CefFrame;
    // private N_GetSource(arg0: CefStringVisitor): void;
    // private N_GetText(arg0: CefStringVisitor): void;
    // private N_GetURL(): string;
    // private N_GetWindowHandle(arg0: number): number;
    // private N_GetWindowlessFrameRate(arg0: CefBrowser_N$IntCallback): void;
    // private N_GetZoomLevel(): number;
    // private N_GoBack(): void;
    // private N_GoForward(): void;
    // private N_HasDocument(): boolean;
    // private N_Invalidate(): void;
    // private N_IsLoading(): boolean;
    // private N_IsPopup(): boolean;
    // private N_LoadRequest(arg0: CefRequest): void;
    // private N_LoadURL(arg0: string): void;
    // private N_NotifyMoveOrResizeStarted(): void;
    // private N_Print(): void;
    // private N_PrintToPDF(arg0: string, arg1: CefPdfPrintSettings, arg2: CefPdfPrintCallback): void;
    // private N_Reload(): void;
    // private N_ReloadIgnoreCache(): void;
    // private N_ReplaceMisspelling(arg0: string): void;
    // private N_RunFileDialog(arg0: CefDialogHandler$FileDialogMode, arg1: string, arg2: string, arg3: string[], arg4: number, arg5: CefRunFileDialogCallback): void;
    // private N_SendExternalBeginFrame(): void;
    // private N_SendKeyEvent(arg0: CefKeyEvent): void;
    // private N_SendMouseEvent(arg0: CefMouseEvent): void;
    // private N_SendMouseWheelEvent(arg0: CefMouseWheelEvent): void;
    // private N_SetFocus(arg0: boolean): void;
    // private N_SetWindowVisibility(arg0: boolean): void;
    // private N_SetWindowlessFrameRate(arg0: number): void;
    // private N_SetZoomLevel(arg0: number): void;
    // private N_StartDownload(arg0: string): void;
    // private N_StopFinding(arg0: boolean): void;
    // private N_StopLoad(): void;
    // private N_UpdateUI(arg0: Rectangle, arg1: Rectangle): void;
    // private N_ViewSource(): void;
    // private N_WasResized(arg0: number, arg1: number): void;
    addDevToolsMessageObserver(arg0: CefDevToolsMessageObserver): CefRegistration;
    canGoBack(): boolean;
    canGoForward(): boolean;
    close(arg0: boolean): void;
    closeDevTools(): void;
    createBrowser(arg0: CefClientHandler, arg1: number, arg2: string, arg3: boolean, arg4: boolean, arg5: CefRequestContext): void;
    createDevTools(arg0: CefBrowser_N, arg1: CefClientHandler, arg2: number, arg3: boolean, arg4: boolean, arg5: Point): void;
    createDevToolsBrowser(arg0: CefClient, arg1: string, arg2: CefRequestContext, arg3: CefBrowser_N, arg4: Point): CefBrowser_N;
    doClose(): boolean;
    dragSourceEndedAt(arg0: Point, arg1: number): void;
    dragSourceSystemDragEnded(): void;
    dragTargetDragEnter(arg0: CefDragData, arg1: Point, arg2: number, arg3: number): void;
    dragTargetDragLeave(): void;
    dragTargetDragOver(arg0: Point, arg1: number, arg2: number): void;
    dragTargetDrop(arg0: Point, arg1: number): void;
    executeDevToolsMethod(arg0: string, arg1: string): CompletableFuture<number>;
    executeJavaScript(arg0: string, arg1: string, arg2: number): void;
    finalize(): void;
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
    getInspectAt(): Point;
    getMainFrame(): CefFrame;
    getParentBrowser(): CefBrowser_N;
    getRenderHandler(): CefRenderHandler;
    getRequestContext(): CefRequestContext;
    getSource(arg0: CefStringVisitor): void;
    getText(arg0: CefStringVisitor): void;
    getURL(): string;
    getUrl(): string;
    getWindowHandle(arg0: number): number;
    getWindowHandler(): CefWindowHandler;
    getWindowlessFrameRate(): CompletableFuture<number>;
    getZoomLevel(): number;
    goBack(): void;
    goForward(): void;
    hasDocument(): boolean;
    invalidate(): void;
    isClosed(): boolean;
    isLoading(): boolean;
    isPopup(): boolean;
    loadRequest(arg0: CefRequest): void;
    loadURL(arg0: string): void;
    // private notifyBrowserCreated(): void;
    notifyMoveOrResizeStarted(): void;
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
    sendKeyEvent(arg0: CefKeyEvent): void;
    sendMouseEvent(arg0: CefMouseEvent): void;
    sendMouseWheelEvent(arg0: CefMouseWheelEvent): void;
    setCloseAllowed(): void;
    setFocus(arg0: boolean): void;
    setWindowVisibility(arg0: boolean): void;
    setWindowlessFrameRate(arg0: number): void;
    setZoomLevel(arg0: number): void;
    startDownload(arg0: string): void;
    stopFinding(arg0: boolean): void;
    stopLoad(): void;
    updateUI(arg0: Rectangle, arg1: Rectangle): void;
    viewSource(): void;
    wasResized(arg0: number, arg1: number): void;
}