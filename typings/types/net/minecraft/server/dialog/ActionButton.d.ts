import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommonButtonData } from '../../../../net/minecraft/server/dialog/CommonButtonData.d.ts'
import type { Action } from '../../../../net/minecraft/server/dialog/action/Action.d.ts'
export class ActionButton extends Record {
    static CODEC: Codec<ActionButton>;
    constructor(button: CommonButtonData, action: Optional<Action>)
    // private action: Optional<Action>;
    // private button: CommonButtonData;
    action(): Optional<Action>;
    button(): CommonButtonData;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}