import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CefBrowserSettings } from '../../org/cef/CefBrowserSettings.d.ts'
import type { CefSettings$LogSeverity } from '../../org/cef/CefSettings$LogSeverity.d.ts'
import type { CefAcceleratedPaintEvent } from '../../org/cef/browser/CefAcceleratedPaintEvent.d.ts'
import type { CefBrowser } from '../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../org/cef/browser/CefFrame.d.ts'
import type { CefMessageRouter } from '../../org/cef/browser/CefMessageRouter.d.ts'
import type { CefPaintEvent } from '../../org/cef/browser/CefPaintEvent.d.ts'
import type { CefRequestContext } from '../../org/cef/browser/CefRequestContext.d.ts'
import type { CefAuthCallback } from '../../org/cef/callback/CefAuthCallback.d.ts'
import type { CefBeforeDownloadCallback } from '../../org/cef/callback/CefBeforeDownloadCallback.d.ts'
import type { CefCallback } from '../../org/cef/callback/CefCallback.d.ts'
import type { CefContextMenuParams } from '../../org/cef/callback/CefContextMenuParams.d.ts'
import type { CefDownloadItem } from '../../org/cef/callback/CefDownloadItem.d.ts'
import type { CefDownloadItemCallback } from '../../org/cef/callback/CefDownloadItemCallback.d.ts'
import type { CefDragData } from '../../org/cef/callback/CefDragData.d.ts'
import type { CefFileDialogCallback } from '../../org/cef/callback/CefFileDialogCallback.d.ts'
import type { CefJSDialogCallback } from '../../org/cef/callback/CefJSDialogCallback.d.ts'
import type { CefMenuModel } from '../../org/cef/callback/CefMenuModel.d.ts'
import type { CefPrintDialogCallback } from '../../org/cef/callback/CefPrintDialogCallback.d.ts'
import type { CefPrintJobCallback } from '../../org/cef/callback/CefPrintJobCallback.d.ts'
import type { CefAcceleratedPaintInfo } from '../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
import type { CefAudioHandler } from '../../org/cef/handler/CefAudioHandler.d.ts'
import type { CefClientHandler } from '../../org/cef/handler/CefClientHandler.d.ts'
import type { CefContextMenuHandler } from '../../org/cef/handler/CefContextMenuHandler.d.ts'
import type { CefDialogHandler } from '../../org/cef/handler/CefDialogHandler.d.ts'
import type { CefDialogHandler$FileDialogMode } from '../../org/cef/handler/CefDialogHandler$FileDialogMode.d.ts'
import type { CefDisplayHandler } from '../../org/cef/handler/CefDisplayHandler.d.ts'
import type { CefDownloadHandler } from '../../org/cef/handler/CefDownloadHandler.d.ts'
import type { CefDragHandler } from '../../org/cef/handler/CefDragHandler.d.ts'
import type { CefFocusHandler } from '../../org/cef/handler/CefFocusHandler.d.ts'
import type { CefFocusHandler$FocusSource } from '../../org/cef/handler/CefFocusHandler$FocusSource.d.ts'
import type { CefJSDialogHandler } from '../../org/cef/handler/CefJSDialogHandler.d.ts'
import type { CefJSDialogHandler$JSDialogType } from '../../org/cef/handler/CefJSDialogHandler$JSDialogType.d.ts'
import type { CefKeyboardHandler } from '../../org/cef/handler/CefKeyboardHandler.d.ts'
import type { CefKeyboardHandler$CefKeyEvent } from '../../org/cef/handler/CefKeyboardHandler$CefKeyEvent.d.ts'
import type { CefLifeSpanHandler } from '../../org/cef/handler/CefLifeSpanHandler.d.ts'
import type { CefLoadHandler } from '../../org/cef/handler/CefLoadHandler.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
import type { CefPrintHandler } from '../../org/cef/handler/CefPrintHandler.d.ts'
import type { CefRenderHandler } from '../../org/cef/handler/CefRenderHandler.d.ts'
import type { CefRequestHandler } from '../../org/cef/handler/CefRequestHandler.d.ts'
import type { CefRequestHandler$TerminationStatus } from '../../org/cef/handler/CefRequestHandler$TerminationStatus.d.ts'
import type { CefResourceRequestHandler } from '../../org/cef/handler/CefResourceRequestHandler.d.ts'
import type { CefScreenInfo } from '../../org/cef/handler/CefScreenInfo.d.ts'
import type { CefWindowHandler } from '../../org/cef/handler/CefWindowHandler.d.ts'
import type { BoolRef } from '../../org/cef/misc/BoolRef.d.ts'
import type { CefAudioParameters } from '../../org/cef/misc/CefAudioParameters.d.ts'
import type { CefPrintSettings } from '../../org/cef/misc/CefPrintSettings.d.ts'
import type { DataPointer } from '../../org/cef/misc/DataPointer.d.ts'
import type { CefRequest } from '../../org/cef/network/CefRequest.d.ts'
import type { CefRequest$TransitionType } from '../../org/cef/network/CefRequest$TransitionType.d.ts'
export class CefClient extends CefClientHandler implements CefAudioHandler, CefContextMenuHandler, CefDialogHandler, CefDisplayHandler, CefDownloadHandler, CefDragHandler, CefFocusHandler, CefJSDialogHandler, CefKeyboardHandler, CefLifeSpanHandler, CefLoadHandler, CefPrintHandler, CefRenderHandler, CefRequestHandler, CefWindowHandler {
    constructor()
    // private audioHandler_: CefAudioHandler;
    // private browser_: { [key: number]: CefBrowser };
    // private contextMenuHandler_: CefContextMenuHandler;
    // private dialogHandler_: CefDialogHandler;
    // private displayHandler_: CefDisplayHandler;
    // private downloadHandler_: CefDownloadHandler;
    // private dragHandler_: CefDragHandler;
    // private focusHandler_: CefFocusHandler;
    // private isDisposed_: boolean;
    // private jsDialogHandler_: CefJSDialogHandler;
    // private keyboardHandler_: CefKeyboardHandler;
    // private lifeSpanHandler_: CefLifeSpanHandler;
    // private loadHandler_: CefLoadHandler;
    // private printHandler_: CefPrintHandler;
    // private requestHandler_: CefRequestHandler;
    addAudioHandler(arg0: CefAudioHandler): CefClient;
    addContextMenuHandler(arg0: CefContextMenuHandler): CefClient;
    addDialogHandler(arg0: CefDialogHandler): CefClient;
    addDisplayHandler(arg0: CefDisplayHandler): CefClient;
    addDownloadHandler(arg0: CefDownloadHandler): CefClient;
    addDragHandler(arg0: CefDragHandler): CefClient;
    addFocusHandler(arg0: CefFocusHandler): CefClient;
    addJSDialogHandler(arg0: CefJSDialogHandler): CefClient;
    addKeyboardHandler(arg0: CefKeyboardHandler): CefClient;
    addLifeSpanHandler(arg0: CefLifeSpanHandler): CefClient;
    addLoadHandler(arg0: CefLoadHandler): CefClient;
    addMessageRouter(arg0: CefMessageRouter): void;
    addOnAcceleratedPaintListener(arg0: (param0: CefAcceleratedPaintEvent) => void): void;
    addOnPaintListener(arg0: (param0: CefPaintEvent) => void): void;
    addPrintHandler(arg0: CefPrintHandler): CefClient;
    addRequestHandler(arg0: CefRequestHandler): CefClient;
    // private cleanupBrowser(arg0: number): void;
    createBrowser(arg0: string, arg1: boolean): CefBrowser;
    createBrowser(arg0: string, arg1: boolean, arg2: CefRequestContext): CefBrowser;
    createBrowser(arg0: string, arg1: boolean, arg2: CefRequestContext, arg3: CefBrowserSettings): CefBrowser;
    dispose(): void;
    doClose(arg0: CefBrowser): boolean;
    getAllBrowser(): Object[];
    getAudioHandler(): CefAudioHandler;
    getAudioParameters(arg0: CefBrowser, arg1: CefAudioParameters): boolean;
    getAuthCredentials(arg0: CefBrowser, arg1: string, arg2: boolean, arg3: string, arg4: number, arg5: string, arg6: string, arg7: CefAuthCallback): boolean;
    getBrowser(arg0: number): CefBrowser;
    getContextMenuHandler(): CefContextMenuHandler;
    getDialogHandler(): CefDialogHandler;
    getDisplayHandler(): CefDisplayHandler;
    getDownloadHandler(): CefDownloadHandler;
    getDragHandler(): CefDragHandler;
    getFocusHandler(): CefFocusHandler;
    getJSDialogHandler(): CefJSDialogHandler;
    getKeyboardHandler(): CefKeyboardHandler;
    getLifeSpanHandler(): CefLifeSpanHandler;
    getLoadHandler(): CefLoadHandler;
    getPdfPaperSize(arg0: CefBrowser, arg1: number): Dimension;
    getPrintHandler(): CefPrintHandler;
    getRect(arg0: CefBrowser): Rectangle;
    getRenderHandler(): CefRenderHandler;
    getRequestHandler(): CefRequestHandler;
    getResourceRequestHandler(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: boolean, arg4: boolean, arg5: string, arg6: BoolRef): CefResourceRequestHandler;
    getScreenInfo(arg0: CefBrowser, arg1: CefScreenInfo): boolean;
    getScreenPoint(arg0: CefBrowser, arg1: Point): Point;
    getViewRect(arg0: CefBrowser): Rectangle;
    getWindowHandler(): CefWindowHandler;
    onAcceleratedPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: CefAcceleratedPaintInfo): void;
    onAddressChange(arg0: CefBrowser, arg1: CefFrame, arg2: string): void;
    onAfterCreated(arg0: CefBrowser): void;
    onAfterParentChanged(arg0: CefBrowser): void;
    onAudioStreamError(arg0: CefBrowser, arg1: string): void;
    onAudioStreamPacket(arg0: CefBrowser, arg1: DataPointer, arg2: number, arg3: number): void;
    onAudioStreamStarted(arg0: CefBrowser, arg1: CefAudioParameters, arg2: number): void;
    onAudioStreamStopped(arg0: CefBrowser): void;
    onBeforeBrowse(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: boolean, arg4: boolean): boolean;
    onBeforeClose(arg0: CefBrowser): void;
    onBeforeContextMenu(arg0: CefBrowser, arg1: CefFrame, arg2: CefContextMenuParams, arg3: CefMenuModel): void;
    onBeforeDownload(arg0: CefBrowser, arg1: CefDownloadItem, arg2: string, arg3: CefBeforeDownloadCallback): boolean;
    onBeforePopup(arg0: CefBrowser, arg1: CefFrame, arg2: string, arg3: string): boolean;
    onBeforeUnloadDialog(arg0: CefBrowser, arg1: string, arg2: boolean, arg3: CefJSDialogCallback): boolean;
    onCertificateError(arg0: CefBrowser, arg1: CefLoadHandler$ErrorCode, arg2: string, arg3: CefCallback): boolean;
    onConsoleMessage(arg0: CefBrowser, arg1: CefSettings$LogSeverity, arg2: string, arg3: string, arg4: number): boolean;
    onContextMenuCommand(arg0: CefBrowser, arg1: CefFrame, arg2: CefContextMenuParams, arg3: number, arg4: number): boolean;
    onContextMenuDismissed(arg0: CefBrowser, arg1: CefFrame): void;
    onCursorChange(arg0: CefBrowser, arg1: number): boolean;
    onDialogClosed(arg0: CefBrowser): void;
    onDownloadUpdated(arg0: CefBrowser, arg1: CefDownloadItem, arg2: CefDownloadItemCallback): void;
    onDragEnter(arg0: CefBrowser, arg1: CefDragData, arg2: number): boolean;
    onFileDialog(arg0: CefBrowser, arg1: CefDialogHandler$FileDialogMode, arg2: string, arg3: string, arg4: string[], arg5: string[], arg6: string[], arg7: CefFileDialogCallback): boolean;
    onFullscreenModeChange(arg0: CefBrowser, arg1: boolean): void;
    onGotFocus(arg0: CefBrowser): void;
    onJSDialog(arg0: CefBrowser, arg1: string, arg2: CefJSDialogHandler$JSDialogType, arg3: string, arg4: string, arg5: CefJSDialogCallback, arg6: BoolRef): boolean;
    onKeyEvent(arg0: CefBrowser, arg1: CefKeyboardHandler$CefKeyEvent): boolean;
    onLoadEnd(arg0: CefBrowser, arg1: CefFrame, arg2: number): void;
    onLoadError(arg0: CefBrowser, arg1: CefFrame, arg2: CefLoadHandler$ErrorCode, arg3: string, arg4: string): void;
    onLoadStart(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest$TransitionType): void;
    onLoadingStateChange(arg0: CefBrowser, arg1: boolean, arg2: boolean, arg3: boolean): void;
    onMouseEvent(arg0: CefBrowser, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    onOpenURLFromTab(arg0: CefBrowser, arg1: CefFrame, arg2: string, arg3: boolean): boolean;
    onPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: ByteBuffer, arg4: number, arg5: number): void;
    onPopupShow(arg0: CefBrowser, arg1: boolean): void;
    onPopupSize(arg0: CefBrowser, arg1: Rectangle): void;
    onPreKeyEvent(arg0: CefBrowser, arg1: CefKeyboardHandler$CefKeyEvent, arg2: BoolRef): boolean;
    onPrintDialog(arg0: CefBrowser, arg1: boolean, arg2: CefPrintDialogCallback): boolean;
    onPrintJob(arg0: CefBrowser, arg1: string, arg2: string, arg3: CefPrintJobCallback): boolean;
    onPrintReset(arg0: CefBrowser): void;
    onPrintSettings(arg0: CefBrowser, arg1: CefPrintSettings, arg2: boolean): void;
    onPrintStart(arg0: CefBrowser): void;
    onRenderProcessTerminated(arg0: CefBrowser, arg1: CefRequestHandler$TerminationStatus, arg2: number, arg3: string): void;
    onResetDialogState(arg0: CefBrowser): void;
    onSetFocus(arg0: CefBrowser, arg1: CefFocusHandler$FocusSource): boolean;
    onStatusMessage(arg0: CefBrowser, arg1: string): void;
    onTakeFocus(arg0: CefBrowser, arg1: boolean): void;
    onTitleChange(arg0: CefBrowser, arg1: string): void;
    onTooltip(arg0: CefBrowser, arg1: string): boolean;
    removeAudioHandler(): void;
    removeAudioHandler(arg0: CefAudioHandler): void;
    removeContextMenuHandler(): void;
    removeContextMenuHandler(arg0: CefContextMenuHandler): void;
    removeDialogHandler(): void;
    removeDialogHandler(arg0: CefDialogHandler): void;
    removeDisplayHandler(): void;
    removeDisplayHandler(arg0: CefDisplayHandler): void;
    removeDownloadHandler(): void;
    removeDownloadHandler(arg0: CefDownloadHandler): void;
    removeDragHandler(): void;
    removeDragHandler(arg0: CefDragHandler): void;
    removeFocusHandler(): void;
    removeFocusHandler(arg0: CefFocusHandler): void;
    removeJSDialogHandler(): void;
    removeJSDialogHandler(arg0: CefJSDialogHandler): void;
    removeKeyboardHandler(): void;
    removeKeyboardHandler(arg0: CefKeyboardHandler): void;
    removeLifeSpanHandler(): void;
    removeLifeSpanHandler(arg0: CefLifeSpanHandler): void;
    removeLoadHandler(): void;
    removeLoadHandler(arg0: CefLoadHandler): void;
    removeMessageRouter(arg0: CefMessageRouter): void;
    removeOnAcceleratedPaintListener(arg0: (param0: CefAcceleratedPaintEvent) => void): void;
    removeOnPaintListener(arg0: (param0: CefPaintEvent) => void): void;
    removePrintHandler(): void;
    removePrintHandler(arg0: CefPrintHandler): void;
    removeRequestHandler(): void;
    removeRequestHandler(arg0: CefRequestHandler): void;
    setOnAcceleratedPaintListener(arg0: (param0: CefAcceleratedPaintEvent) => void): void;
    setOnPaintListener(arg0: (param0: CefPaintEvent) => void): void;
    startDragging(arg0: CefBrowser, arg1: CefDragData, arg2: number, arg3: number, arg4: number): boolean;
    updateDragCursor(arg0: CefBrowser, arg1: number): void;
}