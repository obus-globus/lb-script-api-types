import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { TrackedWaypoint } from '../../../../../net/minecraft/world/waypoints/TrackedWaypoint.d.ts'
import type { TrackedWaypointManager } from '../../../../../net/minecraft/world/waypoints/TrackedWaypointManager.d.ts'
export class ClientboundTrackedWaypointPacket$Operation extends Enum<ClientboundTrackedWaypointPacket$Operation> {
    static BY_ID: (param0: number) => ClientboundTrackedWaypointPacket$Operation;
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundTrackedWaypointPacket$Operation>;
    static TRACK: ClientboundTrackedWaypointPacket$Operation;
    static UNTRACK: ClientboundTrackedWaypointPacket$Operation;
    static UPDATE: ClientboundTrackedWaypointPacket$Operation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClientboundTrackedWaypointPacket$Operation;
    static values(): ClientboundTrackedWaypointPacket$Operation[];
    private constructor(action: (param0: TrackedWaypointManager, param1: TrackedWaypoint) => void)
    // private action: (param0: TrackedWaypointManager, param1: TrackedWaypoint) => void;
    name(): "TRACK" | "UNTRACK" | "UPDATE";
}