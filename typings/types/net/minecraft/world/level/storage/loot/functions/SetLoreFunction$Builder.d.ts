import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class SetLoreFunction$Builder extends LootItemConditionalFunction$Builder<SetLoreFunction$Builder> {
    constructor()
    // private lore: ImmutableList$Builder<Component>;
    // private mode: ListOperation;
    // private resolutionContext: Optional<LootContext$EntityTarget>;
    addLine(line: Component): SetLoreFunction$Builder;
    build(): LootItemFunction;
    getThis(): SetLoreFunction$Builder;
    setMode(mode: ListOperation): SetLoreFunction$Builder;
    setResolutionContext(resolutionContext: LootContext$EntityTarget): SetLoreFunction$Builder;
}