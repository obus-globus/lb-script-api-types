import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefAudioHandler } from '../../../org/cef/handler/CefAudioHandler.d.ts'
import type { CefAudioParameters } from '../../../org/cef/misc/CefAudioParameters.d.ts'
import type { DataPointer } from '../../../org/cef/misc/DataPointer.d.ts'
export abstract class CefAudioHandlerAdapter extends Object implements CefAudioHandler {
    constructor()
    getAudioParameters(arg0: CefBrowser, arg1: CefAudioParameters): boolean;
    onAudioStreamError(arg0: CefBrowser, arg1: string): void;
    onAudioStreamPacket(arg0: CefBrowser, arg1: DataPointer, arg2: number, arg3: number): void;
    onAudioStreamStarted(arg0: CefBrowser, arg1: CefAudioParameters, arg2: number): void;
    onAudioStreamStopped(arg0: CefBrowser): void;
}