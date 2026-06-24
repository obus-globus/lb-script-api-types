import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttributeModifierOperation } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/AttributeModifierOperation.d.ts'
import type { AttributeOperands } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/AttributeOperands.d.ts'
export class EntityAttribute$Modifier extends Record {
    constructor(id: string, name: string, amount: number, operation: AttributeModifierOperation, operand: AttributeOperands, isSerializable: boolean)
    // private amount: number;
    // private id: string;
    // private isSerializable: boolean;
    // private name: string;
    // private operand: AttributeOperands;
    // private operation: AttributeModifierOperation;
    amount(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): string;
    isSerializable(): boolean;
    name(): string;
    operand(): AttributeOperands;
    operation(): AttributeModifierOperation;
    toString(): string;
}