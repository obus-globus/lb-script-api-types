import type { CommandEncoderBackend } from '../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { GpuSurface$Configuration } from '../../../../com/mojang/blaze3d/systems/GpuSurface$Configuration.d.ts'
import type { GpuSurface$PresentMode } from '../../../../com/mojang/blaze3d/systems/GpuSurface$PresentMode.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GpuSurfaceBackend extends AutoCloseable, Object{
    acquireNextTexture(): void;
    blitFromTexture(commandEncoder: CommandEncoderBackend, textureView: GpuTextureView): void;
    close(): void;
    configure(config: GpuSurface$Configuration): void;
    isSuboptimal(): boolean;
    present(): void;
    supportedPresentModes(): GpuSurface$PresentMode[];
}