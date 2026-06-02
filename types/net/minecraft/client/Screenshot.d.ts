import type { RenderTarget } from '../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { NativeImage } from '../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class Screenshot extends Object {
    static SCREENSHOT_DIR: string;
    static grab(paramworkDir: File, paramtarget: RenderTarget, paramcallback: (param0: Component) => void): void;
    static grab(paramworkDir: File, paramforceName: string, paramtarget: RenderTarget, paramdownscaleFactor: number, paramcallback: (param0: Component) => void): void;
    static takeScreenshot(paramtarget: RenderTarget, paramdownscaleFactor: number, paramcallback: (param0: NativeImage) => void): void;
    static takeScreenshot(paramtarget: RenderTarget, paramcallback: (param0: NativeImage) => void): void;
    constructor()
}