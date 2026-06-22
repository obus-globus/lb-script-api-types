import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { CloudRendererAccessor } from '../../../../net/irisshaders/iris/mixin/CloudRendererAccessor.d.ts'
import type { CloudStatus } from '../../../../net/minecraft/client/CloudStatus.d.ts'
import type { CloudRenderer$RelativeCameraPos } from '../../../../net/minecraft/client/renderer/CloudRenderer$RelativeCameraPos.d.ts'
import type { CloudRenderer$TextureData } from '../../../../net/minecraft/client/renderer/CloudRenderer$TextureData.d.ts'
import type { MappableRingBuffer } from '../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CloudRenderer extends SimplePreparableReloadListener<Optional<CloudRenderer$TextureData>> implements AutoCloseable, FabricResourceReloader, CloudRendererAccessor {
    constructor()
    // private fabric$id: Identifier;
    // private needsRebuild: boolean;
    // private prevCellX: number;
    // private prevCellZ: number;
    // private prevCloudStatus: CloudStatus;
    // private prevRelativeCameraPos: CloudRenderer$RelativeCameraPos;
    // private quadCount: number;
    readonly texture: CloudRenderer$TextureData;
    // private ubo: MappableRingBuffer;
    // private utb: MappableRingBuffer;
    apply(preparations: Optional<CloudRenderer$TextureData>, manager: ResourceManager, profiler: ProfilerFiller): void;
    // private buildExtrudedCell(relativePos: CloudRenderer$RelativeCameraPos, faceBuffer: ByteBuffer, x: number, z: number, cellData: number): void;
    // private buildFlatCell(faceBuffer: ByteBuffer, x: number, z: number): void;
    // private buildMesh(arg0: CloudRenderer$RelativeCameraPos, arg1: ByteBuffer, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
    close(): void;
    // private encodeFace(faceBuffer: ByteBuffer, x: number, z: number, direction: Direction, flags: number): void;
    endFrame(): void;
    fabric$getId(): Identifier;
    getName(): string;
    getTexture(): CloudRenderer$TextureData;
    markForRebuild(): void;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): Optional<CloudRenderer$TextureData>;
    render(color: number, cloudStatus: CloudStatus, bottomY: number, range: number, cameraPosition: Vec3, gameTime: number, partialTicks: number): void;
    // private tryBuildCell(relativePos: CloudRenderer$RelativeCameraPos, faceBuffer: ByteBuffer, cellX: number, cellZ: number, extrude: boolean, relativeCellX: number, textureWidth: number, relativeCellZ: number, textureHeight: number, cells: number[]): void;
}