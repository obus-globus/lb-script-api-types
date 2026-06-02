import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
export class ClickEvent$CopyToClipboard extends Record implements ClickEvent {
    static CODEC: Codec<ClickEvent>;
    static CODEC: MapCodec<ClickEvent$CopyToClipboard>;
    constructor(value: string)
    // private value: string;
    action(): ClickEvent$Action;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): string;
}