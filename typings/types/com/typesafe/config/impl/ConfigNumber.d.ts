import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export abstract class ConfigNumber extends AbstractConfigValue implements Serializable {
    constructor(arg0: ConfigOrigin, arg1: string)
    // private originalText: string;
    canEqual(arg0: Object): boolean;
    doubleValue(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    intValueRangeChecked(arg0: string): number;
    // private isWhole(): boolean;
    longValue(): number;
    transformToString(): string;
    unwrapped(): Number;
    // private writeReplace(): Object;
}