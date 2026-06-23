import type { ImmutableMap$Builder } from '../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FabricAdvancementBuilder } from '../../../net/fabricmc/fabric/api/datagen/v1/advancement/FabricAdvancementBuilder.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementRequirements } from '../../../net/minecraft/advancements/AdvancementRequirements.d.ts'
import type { AdvancementRequirements$Strategy } from '../../../net/minecraft/advancements/AdvancementRequirements$Strategy.d.ts'
import type { AdvancementRewards } from '../../../net/minecraft/advancements/AdvancementRewards.d.ts'
import type { AdvancementRewards$Builder } from '../../../net/minecraft/advancements/AdvancementRewards$Builder.d.ts'
import type { AdvancementType } from '../../../net/minecraft/advancements/AdvancementType.d.ts'
import type { Criterion } from '../../../net/minecraft/advancements/Criterion.d.ts'
import type { DisplayInfo } from '../../../net/minecraft/advancements/DisplayInfo.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStackTemplate } from '../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { ItemLike } from '../../../net/minecraft/world/level/ItemLike.d.ts'
export class Advancement$Builder extends Object implements FabricAdvancementBuilder {
    static advancement(): Advancement$Builder;
    static recipeAdvancement(): Advancement$Builder;
    constructor()
    // private criteria: ImmutableMap$Builder<string, Criterion<any>>;
    // private display: Optional<DisplayInfo>;
    // private parent: Optional<Identifier>;
    // private requirements: Optional<AdvancementRequirements>;
    // private requirementsStrategy: AdvancementRequirements$Strategy;
    // private rewards: AdvancementRewards;
    // private sendsTelemetryEvent: boolean;
    addCriterion(name: string, criterion: Criterion<any>): Advancement$Builder;
    build(id: Identifier): AdvancementHolder;
    display(display: DisplayInfo): Advancement$Builder;
    display(icon: ItemStackTemplate, title: Component, description: Component, background: Identifier, frame: AdvancementType, showToast: boolean, announceChat: boolean, hidden: boolean): Advancement$Builder;
    display(icon: ItemLike, title: Component, description: Component, background: Identifier, frame: AdvancementType, showToast: boolean, announceChat: boolean, hidden: boolean): Advancement$Builder;
    parent(parent: AdvancementHolder): Advancement$Builder;
    parent(parent: Identifier): Advancement$Builder;
    requirements(requirements: AdvancementRequirements): Advancement$Builder;
    requirements(strategy: AdvancementRequirements$Strategy): Advancement$Builder;
    rewards(rewards: AdvancementRewards): Advancement$Builder;
    rewards(rewards: AdvancementRewards$Builder): Advancement$Builder;
    save(arg0: (param0: AdvancementHolder) => void, arg1: Identifier): AdvancementHolder;
    save(arg0: (param0: Object) => void, arg1: Identifier): AdvancementHolder;
    save(output: (param0: AdvancementHolder) => void, name: string): AdvancementHolder;
    sendsTelemetryEvent(): Advancement$Builder;
}