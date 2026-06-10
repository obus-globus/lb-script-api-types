import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DialogBody } from '../../../../../net/minecraft/server/dialog/body/DialogBody.d.ts'
import type { PlainMessage } from '../../../../../net/minecraft/server/dialog/body/PlainMessage.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export class ItemBody extends Record implements DialogBody {
    static COMPACT_LIST_CODEC: Codec<DialogBody[]>;
    static DIALOG_BODY_CODEC: Codec<DialogBody>;
    static MAP_CODEC: MapCodec<ItemBody>;
    // private description: Optional<PlainMessage>;
    // private height: number;
    // private item: ItemStackTemplate;
    // private showDecorations: boolean;
    // private showTooltip: boolean;
    // private width: number;
    description(): Optional<PlainMessage>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    item(): ItemStackTemplate;
    mapCodec(): MapCodec<ItemBody>;
    showDecorations(): boolean;
    showTooltip(): boolean;
    toString(): string;
    width(): number;
}