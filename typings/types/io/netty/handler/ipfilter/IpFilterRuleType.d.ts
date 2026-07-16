import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class IpFilterRuleType extends Enum<IpFilterRuleType> {
    static ACCEPT: IpFilterRuleType;
    static REJECT: IpFilterRuleType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IpFilterRuleType;
    static values(): IpFilterRuleType[];
    private constructor()
    name(): "ACCEPT" | "REJECT";
}