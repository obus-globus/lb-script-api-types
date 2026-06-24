import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuSurface$Configuration } from '../../../../com/mojang/blaze3d/systems/GpuSurface$Configuration.d.ts'
import type { GpuSurface$PresentMode } from '../../../../com/mojang/blaze3d/systems/GpuSurface$PresentMode.d.ts'
import type { GpuSurfaceBackend } from '../../../../com/mojang/blaze3d/systems/GpuSurfaceBackend.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuSurface extends Object implements AutoCloseable {
    constructor(backend: GpuSurfaceBackend)
    // private backend: GpuSurfaceBackend;
    // private currentConfiguration: Optional<GpuSurface$Configuration>;
    // private hasBlittedTexture: boolean;
    // private hasImageAcquired: boolean;
    acquireNextTexture(): void;
    blitFromTexture(commandEncoder: CommandEncoder, textureView: GpuTextureView): void;
    close(): void;
    configure(config: GpuSurface$Configuration): void;
    currentConfiguration(): Optional<GpuSurface$Configuration>;
    isAcquired(): boolean;
    isSuboptimal(): boolean;
    present(): void;
    supportedPresentModes(): GpuSurface$PresentMode[];
}