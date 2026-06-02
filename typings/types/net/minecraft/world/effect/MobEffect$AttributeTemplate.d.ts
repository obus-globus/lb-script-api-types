import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeModifier$Operation } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
export class MobEffect$AttributeTemplate extends Record {
    // private amount: number;
    // private id: Identifier;
    // private operation: AttributeModifier$Operation;
    amount(): number;
    create(amplifier: number): AttributeModifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    operation(): AttributeModifier$Operation;
    toString(): string;
}