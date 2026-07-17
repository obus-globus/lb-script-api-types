import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { ClockManager } from '../../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { ClockTimeMarker } from '../../../../net/minecraft/world/clock/ClockTimeMarker.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { AttributeTrack } from '../../../../net/minecraft/world/timeline/AttributeTrack.d.ts'
import type { AttributeTrackSampler } from '../../../../net/minecraft/world/timeline/AttributeTrackSampler.d.ts'
import type { Timeline$Builder } from '../../../../net/minecraft/world/timeline/Timeline$Builder.d.ts'
import type { Timeline$TimeMarkerInfo } from '../../../../net/minecraft/world/timeline/Timeline$TimeMarkerInfo.d.ts'
export class Timeline extends Object {
    static CODEC: Codec<Holder<Timeline>>;
    static DIRECT_CODEC: Codec<Timeline>;
    static NETWORK_CODEC: Codec<Timeline>;
    static builder(paramclock: Holder<WorldClock>): Timeline$Builder;
    static validateRegistry(paramtimelines: Timeline[], paramloadingErrors: JavaMap<ResourceKey<Object>, Exception>): void;
    private constructor(clock: Holder<WorldClock>, periodTicks: Optional<number>, tracks: JavaMap<EnvironmentAttribute<Object>, AttributeTrack<Object, Object>>, timeMarkers: JavaMap<ResourceKey<ClockTimeMarker>, Timeline$TimeMarkerInfo>)
    // private clock: Holder<WorldClock>;
    // private periodTicks: Optional<number>;
    // private timeMarkers: JavaMap<ResourceKey<ClockTimeMarker>, Timeline$TimeMarkerInfo>;
    // private tracks: JavaMap<EnvironmentAttribute<Object>, AttributeTrack<Object, Object>>;
    attributes(): EnvironmentAttribute<Object>[];
    clock(): Holder<WorldClock>;
    createTrackSampler<Value extends unknown>(attribute: EnvironmentAttribute<Value>, clockManager: ClockManager): AttributeTrackSampler<Value, Object>;
    getCurrentTicks(clockManager: ClockManager): number;
    getPeriodCount(clockManager: ClockManager): number;
    getTotalTicks(clockManager: ClockManager): number;
    periodTicks(): Optional<number>;
    registerTimeMarkers(output: (param0: ResourceKey<ClockTimeMarker>, param1: ClockTimeMarker) => void): void;
}