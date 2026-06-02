import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { DialogBody } from '../../../../../net/minecraft/server/dialog/body/DialogBody.d.ts'
export class PlainMessage extends Record implements DialogBody {
    static CODEC: Codec<PlainMessage>;
    static COMPACT_LIST_CODEC: Codec<Object>;
    static DEFAULT_WIDTH: number;
    static DIALOG_BODY_CODEC: Codec<DialogBody>;
    static MAP_CODEC: MapCodec<PlainMessage>;
    // private contents: Component;
    // private width: number;
    contents(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mapCodec(): MapCodec<PlainMessage>;
    toString(): string;
    width(): number;
}