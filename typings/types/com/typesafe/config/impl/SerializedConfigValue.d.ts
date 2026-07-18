import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Externalizable } from '../../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SerializedConfigValue extends AbstractConfigValue implements Externalizable {
    constructor()
    constructor(arg0: Config)
    constructor(arg0: ConfigValue)
    // private value: ConfigValue;
    // private wasConfig: boolean;
    equals(arg0: Object | null): boolean;
    // private fieldIn(arg0: ObjectInput): DataInput;
    hashCode(): number;
    newCopy(arg0: ConfigOrigin): SerializedConfigValue;
    readExternal(arg0: ObjectInput): void;
    // private readResolve(): Object;
    toString(): string;
    unwrapped(): Object;
    valueType(): ConfigValueType;
    writeExternal(arg0: ObjectOutput): void;
}