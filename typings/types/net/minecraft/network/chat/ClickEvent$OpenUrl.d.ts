import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
export class ClickEvent$OpenUrl extends Record implements ClickEvent {
    static CODEC: MapCodec<ClickEvent$OpenUrl>;
    constructor(uri: URI)
    // private uri: URI;
    action(): ClickEvent$Action;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    uri(): URI;
}