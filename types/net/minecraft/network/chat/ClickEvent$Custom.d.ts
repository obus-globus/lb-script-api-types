import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ClickEvent$Custom extends Record implements ClickEvent {
    static CODEC: Codec<ClickEvent>;
    static CODEC: MapCodec<ClickEvent$Custom>;
    constructor(id: Identifier, payload: Optional<Tag>)
    // private id: Identifier;
    // private payload: Optional<Tag>;
    action(): ClickEvent$Action;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    payload(): Optional<Tag>;
    toString(): string;
}