import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { SetAttributesFunction$Modifier } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetAttributesFunction$Modifier.d.ts'
import type { SetAttributesFunction$ModifierBuilder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetAttributesFunction$ModifierBuilder.d.ts'
export class SetAttributesFunction$Builder extends LootItemConditionalFunction$Builder<SetAttributesFunction$Builder> {
    constructor()
    constructor(replace: boolean)
    // private modifiers: SetAttributesFunction$Modifier[];
    // private replace: boolean;
    build(): LootItemFunction;
    getThis(): SetAttributesFunction$Builder;
    withModifier(modifier: SetAttributesFunction$ModifierBuilder): SetAttributesFunction$Builder;
}