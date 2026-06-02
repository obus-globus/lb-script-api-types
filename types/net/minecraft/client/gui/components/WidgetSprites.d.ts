import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class WidgetSprites extends Record {
    constructor(sprite: Identifier)
    constructor(sprite: Identifier, focused: Identifier)
    constructor(enabled: Identifier, disabled: Identifier, focused: Identifier)
    constructor(enabled: Identifier, disabled: Identifier, enabledFocused: Identifier, disabledFocused: Identifier)
    // private disabled: Identifier;
    // private disabledFocused: Identifier;
    // private enabled: Identifier;
    // private enabledFocused: Identifier;
    disabled(): Identifier;
    disabledFocused(): Identifier;
    enabled(): Identifier;
    enabledFocused(): Identifier;
    equals(o: Object | null): boolean;
    get(enabled: boolean, focused: boolean): Identifier;
    hashCode(): number;
    toString(): string;
}