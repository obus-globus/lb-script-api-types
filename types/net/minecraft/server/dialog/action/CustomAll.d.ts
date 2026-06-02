import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Action } from '../../../../../net/minecraft/server/dialog/action/Action.d.ts'
import type { Action$ValueGetter } from '../../../../../net/minecraft/server/dialog/action/Action$ValueGetter.d.ts'
export class CustomAll extends Record implements Action {
    static CODEC: Codec<Action>;
    static MAP_CODEC: MapCodec<CustomAll>;
    constructor(id: Identifier, additions: Optional<CompoundTag>)
    // private additions: Optional<CompoundTag>;
    // private id: Identifier;
    additions(): Optional<CompoundTag>;
    codec(): MapCodec<CustomAll>;
    createAction(parameters: { [key: string]: Action$ValueGetter }): Optional<ClickEvent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}