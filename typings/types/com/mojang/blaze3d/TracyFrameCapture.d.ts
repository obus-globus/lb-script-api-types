import type { TracyFrameCapture$Status } from '../../../com/mojang/blaze3d/TracyFrameCapture$Status.d.ts'
import type { GpuBuffer } from '../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderTarget } from '../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GpuTexture } from '../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TracyFrameCapture extends Object implements AutoCloseable {
    constructor()
    // private capturedThisFrame: boolean;
    // private frameBuffer: GpuTexture;
    // private frameBufferView: GpuTextureView;
    // private height: number;
    // private lastCaptureDelay: number;
    // private pixelbuffer: GpuBuffer;
    // private status: TracyFrameCapture$Status;
    // private targetHeight: number;
    // private targetWidth: number;
    // private width: number;
    capture(captureTarget: RenderTarget): void;
    close(): void;
    endFrame(): void;
    // private resize(width: number, height: number): void;
    upload(): void;
}