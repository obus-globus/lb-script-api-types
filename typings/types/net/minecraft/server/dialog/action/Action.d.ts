import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Action$ValueGetter } from '../../../../../net/minecraft/server/dialog/action/Action$ValueGetter.d.ts'
export interface Action extends Object{
    codec(): MapCodec<Action>;
    createAction(parameters: JavaMap<string, Action$ValueGetter>): Optional<ClickEvent>;
}