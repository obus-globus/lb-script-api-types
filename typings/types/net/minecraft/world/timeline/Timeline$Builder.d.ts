import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { KeyframeTrack$Builder } from '../../../../net/minecraft/util/KeyframeTrack$Builder.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { ClockTimeMarker } from '../../../../net/minecraft/world/clock/ClockTimeMarker.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { AttributeTrack } from '../../../../net/minecraft/world/timeline/AttributeTrack.d.ts'
import type { Timeline } from '../../../../net/minecraft/world/timeline/Timeline.d.ts'
import type { Timeline$TimeMarkerInfo } from '../../../../net/minecraft/world/timeline/Timeline$TimeMarkerInfo.d.ts'
export class Timeline$Builder extends Object {
    private constructor(clock: Holder<WorldClock>)
    // private clock: Holder<WorldClock>;
    // private periodTicks: Optional<number>;
    // private timeMarkers: ImmutableMap$Builder<ResourceKey<ClockTimeMarker>, Timeline$TimeMarkerInfo>;
    // private tracks: ImmutableMap$Builder<EnvironmentAttribute<Object>, AttributeTrack<Object, Object>>;
    addModifierTrack<Value extends Object | number | string | boolean, Argument extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, modifier: AttributeModifier<Value, Argument>, builder: (param0: KeyframeTrack$Builder<Argument>) => void): Timeline$Builder;
    addTimeMarker(id: ResourceKey<ClockTimeMarker>, ticks: number): Timeline$Builder;
    addTimeMarker(id: ResourceKey<ClockTimeMarker>, ticks: number, showInCommands: boolean): Timeline$Builder;
    addTrack<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, builder: (param0: KeyframeTrack$Builder<Value>) => void): Timeline$Builder;
    build(): Timeline;
    setPeriodTicks(periodTicks: number): Timeline$Builder;
}