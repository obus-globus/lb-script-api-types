import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class TooltipDisplay extends Record {
    static CODEC: Codec<TooltipDisplay>;
    static DEFAULT: TooltipDisplay;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TooltipDisplay>;
    // private hiddenComponents: DataComponentType<Object>[];
    // private hideTooltip: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hiddenComponents(): DataComponentType<Object>[];
    hideTooltip(): boolean;
    shows(component: DataComponentType<Object>): boolean;
    toString(): string;
    withHidden(component: DataComponentType<Object>, hidden: boolean): TooltipDisplay;
}