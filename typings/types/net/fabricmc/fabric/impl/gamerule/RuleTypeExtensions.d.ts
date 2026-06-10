import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { FabricGameRuleType } from '../../../../../net/fabricmc/fabric/impl/gamerule/rpc/FabricGameRuleType.d.ts'
export interface RuleTypeExtensions extends Object{
    fabric_enumCycle<E extends Enum<E>>(arg0: E): E;
    fabric_getSupportedEnumValues<E extends Enum<E>>(): E[];
    fabric_getType(): FabricGameRuleType;
    fabric_setSupportedEnumValues<E extends Enum<E>>(arg0: E[]): void;
    fabric_setType(arg0: FabricGameRuleType): void;
}