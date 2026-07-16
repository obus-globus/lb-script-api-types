import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
import type { Action } from '../../../../../net/minecraft/server/dialog/action/Action.d.ts'
import type { Action$ValueGetter } from '../../../../../net/minecraft/server/dialog/action/Action$ValueGetter.d.ts'
export class StaticAction extends Record implements Action {
    static CODEC: Codec<Action>;
    static WRAPPED_CODECS: Map<ClickEvent$Action, MapCodec<StaticAction>>;
    constructor(value: ClickEvent)
    // private value: ClickEvent;
    codec(): MapCodec<StaticAction>;
    createAction(parameters: { [key: string]: Action$ValueGetter }): Optional<ClickEvent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): ClickEvent;
}