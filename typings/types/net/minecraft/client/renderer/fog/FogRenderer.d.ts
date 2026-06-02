import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FogParameters } from '../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { FogStorage } from '../../../../../net/caffeinemc/mods/sodium/client/util/FogStorage.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { MappableRingBuffer } from '../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
import type { FogData } from '../../../../../net/minecraft/client/renderer/fog/FogData.d.ts'
import type { FogRenderer$FogMode } from '../../../../../net/minecraft/client/renderer/fog/FogRenderer$FogMode.d.ts'
import type { FogType } from '../../../../../net/minecraft/world/level/material/FogType.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export class FogRenderer extends Object implements AutoCloseable, FogStorage {
    static FOG_UBO_SIZE: number;
    static toggleFog(): boolean;
    constructor()
    // private emptyBuffer: GpuBuffer;
    // private parameters: FogParameters;
    // private regularBuffer: MappableRingBuffer;
    close(): void;
    // private computeFogColor(camera: Camera, partialTicks: number, level: ClientLevel, renderDistance: number, darkenWorldAmount: number, dest: Vector4f): void;
    endFrame(): void;
    getBuffer(mode: FogRenderer$FogMode): GpuBufferSlice;
    // private getFogType(camera: Camera): FogType;
    setupFog(camera: Camera, renderDistanceInChunks: number, deltaTracker: DeltaTracker, darkenWorldAmount: number, level: ClientLevel): FogData;
    sodium$getFogParameters(): FogParameters;
    // private updateBuffer(byteBuffer: ByteBuffer, offset: number, fogColor: Vector4f, environmentalStart: number, environmentalEnd: number, renderDistanceStart: number, renderDistanceEnd: number, skyEnd: number, endClouds: number): void;
    updateBuffer(fog: FogData): void;
}