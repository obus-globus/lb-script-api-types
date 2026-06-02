import type { DateFormat } from '../../../../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { TimeZone } from '../../../../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalTime$Data } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/LocalTime$Data.d.ts'
import type { SelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
import type { SelectItemModelProperty$Type } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty$Type.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class LocalTime extends Object implements SelectItemModelProperty<string> {
    static ROOT_LOCALE: string;
    static TYPE: SelectItemModelProperty$Type<LocalTime, string>;
    static VALUE_CODEC: Codec<string>;
    static create(paramformat: string, paramlocaleId: string, paramtimeZone: Optional<TimeZone>): LocalTime;
    private constructor(data: LocalTime$Data, parsedFormat: DateFormat)
    // private data: LocalTime$Data;
    // private lastResult: string;
    // private nextUpdateTimeMs: number;
    // private parsedFormat: DateFormat;
    get(itemStack: ItemStack, level: ClientLevel, owner: LivingEntity, seed: number, displayContext: ItemDisplayContext): string;
    type(): SelectItemModelProperty$Type<LocalTime, string>;
    // private update(): string;
    valueCodec(): Codec<string>;
}