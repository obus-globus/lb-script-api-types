import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigBoolean extends AbstractConfigValue implements Serializable {
    constructor(arg0: ConfigOrigin, arg1: boolean)
    // private value: boolean;
    newCopy(arg0: ConfigOrigin): ConfigBoolean;
    transformToString(): string;
    unwrapped(): boolean;
    valueType(): ConfigValueType;
    // private writeReplace(): Object;
}