import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AcceleratedPaintBackend } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintBackend.d.ts'
import type { AcceleratedPaintFrame } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintFrame.d.ts'
import type { MCEFDirectTexture } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFDirectTexture.d.ts'
import type { WindowsAcceleratedPaintBackend$SharedTextureEntry } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/WindowsAcceleratedPaintBackend$SharedTextureEntry.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export class WindowsAcceleratedPaintBackend extends Object implements AcceleratedPaintBackend {
    constructor()
    // private activeSourceTexture: MCEFDirectTexture;
    // private sharedTextureCache: { [key: string]: any };
    accepts(arg0: CefAcceleratedPaintInfo): boolean;
    close(): void;
    importFrame(arg0: CefAcceleratedPaintInfo, arg1: number, arg2: number): AcceleratedPaintFrame;
    // private importSharedTexture(arg0: number, arg1: number, arg2: number): WindowsAcceleratedPaintBackend$SharedTextureEntry;
    // private trimSharedTextureCache(): void;
}