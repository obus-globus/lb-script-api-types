import type { PlayerAttributesStorage$AttributeModifier } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/storage/PlayerAttributesStorage$AttributeModifier.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerAttributesStorage$Attribute extends Record {
    // private modifiers: PlayerAttributesStorage$AttributeModifier[];
    // private value: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modifiers(): PlayerAttributesStorage$AttributeModifier[];
    toString(): string;
    value(): number;
}