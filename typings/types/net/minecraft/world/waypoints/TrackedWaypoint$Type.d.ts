import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { TrackedWaypoint } from '../../../../net/minecraft/world/waypoints/TrackedWaypoint.d.ts'
import type { Waypoint$Icon } from '../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
import type { TriFunction } from '../../../../org/apache/commons/lang3/function/TriFunction.d.ts'
export class TrackedWaypoint$Type extends Enum<TrackedWaypoint$Type> {
    static AZIMUTH: TrackedWaypoint$Type;
    static CHUNK: TrackedWaypoint$Type;
    static EMPTY: TrackedWaypoint$Type;
    static VEC3I: TrackedWaypoint$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TrackedWaypoint$Type;
    static values(): TrackedWaypoint$Type[];
    private constructor(constructor: (param0: Either<UUID, string>, param1: Waypoint$Icon, param2: FriendlyByteBuf) => TrackedWaypoint)
    // private constructor: (param0: Either<UUID, string>, param1: Waypoint$Icon, param2: FriendlyByteBuf) => TrackedWaypoint;
    name(): "EMPTY" | "VEC3I" | "CHUNK" | "AZIMUTH";
}