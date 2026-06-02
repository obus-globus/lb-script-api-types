import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class OverlayTexture extends Object implements AutoCloseable {
    static NO_OVERLAY: number;
    static NO_WHITE_U: number;
    static RED_OVERLAY_V: number;
    static WHITE_OVERLAY_V: number;
    static pack(paramwhiteOverlayProgress: number, paramredOverlay: boolean): number;
    static pack(paramu: number, paramv: number): number;
    static u(paramwhiteOverlayProgress: number): number;
    static v(paramhurtOverlay: boolean): number;
    constructor()
    // private texture: DynamicTexture;
    close(): void;
    getTextureView(): GpuTextureView;
}