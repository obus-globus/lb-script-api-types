import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GLFWErrorCallbackI } from '../../../../org/lwjgl/glfw/GLFWErrorCallbackI.d.ts'
export class ClipboardManager extends Object {
    static FORMAT_UNAVAILABLE: number;
    constructor()
    // private clipboardScratchBuffer: ByteBuffer;
    getClipboard(window: Window, errorCallback: (param0: number, param1: number) => void): string;
    setClipboard(window: Window, clipboard: string): void;
}