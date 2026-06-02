import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AcceleratedPaintBackend } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintBackend.d.ts'
import type { AcceleratedPaintFrame } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintFrame.d.ts'
import type { MCEFDirectTexture } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFDirectTexture.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export class MCEFRenderer extends Object implements Closeable {
    constructor(arg0: boolean)
    // private acceleratedPaintBackends: AcceleratedPaintBackend[];
    // private acceleratedTexture: GpuTexture;
    // private directAcceleratedTexture: MCEFDirectTexture;
    // private directTexture: MCEFDirectTexture;
    readonly identifier: Identifier;
    // private isAccelerated: boolean;
    // private isBGRA: boolean;
    readonly texture: GpuTexture;
    readonly textureHeight: number;
    // private textureRegistered: boolean;
    readonly textureWidth: number;
    readonly transparent: boolean;
    readonly unpainted: boolean;
    close(): void;
    // private copyAcceleratedFrame(arg0: AcceleratedPaintBackend, arg1: CefAcceleratedPaintInfo, arg2: number, arg3: number): void;
    // private copyAcceleratedFrame(arg0: AcceleratedPaintFrame, arg1: number, arg2: number): void;
    // private ensureAcceleratedTargetTexture(arg0: number, arg1: number): GpuTexture;
    // private getDirectTexture(): MCEFDirectTexture;
    getIdentifier(): Identifier;
    getSampler(): GpuSampler;
    getTexture(): GpuTexture;
    getTextureHeight(): number;
    getTextureId(): number;
    getTextureSetup(): TextureSetup;
    getTextureView(): GpuTextureView;
    getTextureWidth(): number;
    initialize(): void;
    isAccelerated(): boolean;
    isBGRA(): boolean;
    isTextureReady(): boolean;
    isTransparent(): boolean;
    isUnpainted(): boolean;
    onAcceleratedPaint(arg0: CefAcceleratedPaintInfo, arg1: number, arg2: number): void;
    onPaint(arg0: ByteBuffer, arg1: number, arg2: number): void;
    onPaint(arg0: ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
}