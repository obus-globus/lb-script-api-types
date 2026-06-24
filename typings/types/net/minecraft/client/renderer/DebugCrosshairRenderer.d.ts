import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderSystem$AutoStorageIndexBuffer } from '../../../../com/mojang/blaze3d/systems/RenderSystem$AutoStorageIndexBuffer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
export class DebugCrosshairRenderer extends Object implements AutoCloseable {
    constructor()
    // private crosshairBuffer: GpuBuffer;
    // private crosshairIndicies: RenderSystem$AutoStorageIndexBuffer;
    close(): void;
    render(cameraState: CameraRenderState, guiScale: number): void;
}