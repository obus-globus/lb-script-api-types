import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricGameRuleType } from '../../../../../../net/fabricmc/fabric/impl/gamerule/rpc/FabricGameRuleType.d.ts'
export interface FabricTypedRule extends Object{
    getFabricType(): FabricGameRuleType;
    setFabricType(arg0: FabricGameRuleType): void;
}