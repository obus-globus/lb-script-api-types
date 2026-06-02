import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
export class EnvironmentAttributeMap$Entry<Value extends Object | number | string | boolean, Argument extends Object | number | string | boolean> extends Record {
    constructor(argument: Argument, modifier: AttributeModifier<Value, Argument>)
    // private argument: Argument;
    // private modifier: AttributeModifier<Value, Argument>;
    applyModifier(subject: Value): Value;
    argument(): Argument;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifier(): AttributeModifier<Value, Argument>;
    toString(): string;
}