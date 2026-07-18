import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { ConfigNumber } from '../../../../com/typesafe/config/impl/ConfigNumber.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigInt extends ConfigNumber implements Serializable {
    constructor(arg0: ConfigOrigin, arg1: number, arg2: string)
    // private value: number;
    doubleValue(): number;
    longValue(): number;
    newCopy(arg0: ConfigOrigin): ConfigInt;
    transformToString(): string;
    unwrapped(): number;
    valueType(): ConfigValueType;
    // private writeReplace(): Object;
}