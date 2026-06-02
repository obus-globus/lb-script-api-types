import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RecipeBookSettings$TypeSettings } from '../../../net/minecraft/stats/RecipeBookSettings$TypeSettings.d.ts'
import type { RecipeBookType } from '../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
export class RecipeBookSettings extends Object {
    static MAP_CODEC: MapCodec<RecipeBookSettings>;
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, RecipeBookSettings>;
    constructor()
    private constructor(crafting: RecipeBookSettings$TypeSettings, furnace: RecipeBookSettings$TypeSettings, blastFurnace: RecipeBookSettings$TypeSettings, smoker: RecipeBookSettings$TypeSettings)
    // private blastFurnace: RecipeBookSettings$TypeSettings;
    // private crafting: RecipeBookSettings$TypeSettings;
    // private furnace: RecipeBookSettings$TypeSettings;
    // private smoker: RecipeBookSettings$TypeSettings;
    copy(): RecipeBookSettings;
    getSettings(type: RecipeBookType): RecipeBookSettings$TypeSettings;
    isFiltering(type: RecipeBookType): boolean;
    isOpen(type: RecipeBookType): boolean;
    replaceFrom(other: RecipeBookSettings): void;
    setFiltering(type: RecipeBookType, filtering: boolean): void;
    setOpen(type: RecipeBookType, open: boolean): void;
    // private updateSettings(recipeBookType: RecipeBookType, operator: (param0: RecipeBookSettings$TypeSettings) => unknown): void;
}