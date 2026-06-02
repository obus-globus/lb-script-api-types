import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ActionButton } from '../../../../net/minecraft/server/dialog/ActionButton.d.ts'
import type { ButtonListDialog } from '../../../../net/minecraft/server/dialog/ButtonListDialog.d.ts'
import type { CommonDialogData } from '../../../../net/minecraft/server/dialog/CommonDialogData.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { Action } from '../../../../net/minecraft/server/dialog/action/Action.d.ts'
export class ServerLinksDialog extends Record implements ButtonListDialog {
    static CODEC: Codec<Object>;
    static CONTEXT_FREE_STREAM_CODEC: StreamCodec<ByteBuf, Dialog>;
    static DIRECT_CODEC: Codec<Dialog>;
    static LIST_CODEC: Codec<Object>;
    static MAP_CODEC: MapCodec<ServerLinksDialog>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static WIDTH_CODEC: Codec<number>;
    // private buttonWidth: number;
    // private columns: number;
    // private common: CommonDialogData;
    // private exitAction: Optional<ActionButton>;
    buttonWidth(): number;
    codec(): MapCodec<ServerLinksDialog>;
    columns(): number;
    common(): CommonDialogData;
    equals(o: Object | null): boolean;
    exitAction(): Optional<ActionButton>;
    hashCode(): number;
    onCancel(): Optional<Action>;
    toString(): string;
}