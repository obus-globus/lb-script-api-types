import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
export class ClickEvent$ShowDialog extends Record implements ClickEvent {
    static CODEC: MapCodec<ClickEvent$ShowDialog>;
    constructor(dialog: Holder<Dialog>)
    // private dialog: Holder<Dialog>;
    action(): ClickEvent$Action;
    dialog(): Holder<Dialog>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}