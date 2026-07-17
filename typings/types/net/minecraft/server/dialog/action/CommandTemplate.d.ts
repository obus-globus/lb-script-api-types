import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Action } from '../../../../../net/minecraft/server/dialog/action/Action.d.ts'
import type { Action$ValueGetter } from '../../../../../net/minecraft/server/dialog/action/Action$ValueGetter.d.ts'
import type { ParsedTemplate } from '../../../../../net/minecraft/server/dialog/action/ParsedTemplate.d.ts'
export class CommandTemplate extends Record implements Action {
    static CODEC: Codec<Action>;
    static MAP_CODEC: MapCodec<CommandTemplate>;
    constructor(template: ParsedTemplate)
    // private template: ParsedTemplate;
    codec(): MapCodec<CommandTemplate>;
    createAction(parameters: JavaMap<string, Action$ValueGetter>): Optional<ClickEvent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    template(): ParsedTemplate;
    toString(): string;
}