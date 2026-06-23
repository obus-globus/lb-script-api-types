import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementRequirements } from '../../../net/minecraft/advancements/AdvancementRequirements.d.ts'
import type { AdvancementRewards } from '../../../net/minecraft/advancements/AdvancementRewards.d.ts'
import type { Criterion } from '../../../net/minecraft/advancements/Criterion.d.ts'
import type { DisplayInfo } from '../../../net/minecraft/advancements/DisplayInfo.d.ts'
import type { HolderGetter$Provider } from '../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ProblemReporter } from '../../../net/minecraft/util/ProblemReporter.d.ts'
export class Advancement extends Record {
    static CODEC: Codec<Advancement>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Advancement>;
    static name(paramholder: AdvancementHolder): Component;
    // private criteria: { [key: string]: Criterion<any> };
    // private display: Optional<DisplayInfo>;
    // private name: Optional<Component>;
    // private parent: Optional<Identifier>;
    // private requirements: AdvancementRequirements;
    // private rewards: AdvancementRewards;
    // private sendsTelemetryEvent: boolean;
    criteria(): { [key: string]: Criterion<any> };
    display(): Optional<DisplayInfo>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isRoot(): boolean;
    name(): Optional<Component>;
    parent(): Optional<Identifier>;
    requirements(): AdvancementRequirements;
    rewards(): AdvancementRewards;
    sendsTelemetryEvent(): boolean;
    toString(): string;
    validate(reporter: ProblemReporter, lootData: HolderGetter$Provider): void;
    // private write(output: RegistryFriendlyByteBuf): void;
}