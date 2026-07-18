import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigRenderOptions } from '../../../../com/typesafe/config/ConfigRenderOptions.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
export abstract class ConfigString extends AbstractConfigValue implements Serializable {
    constructor(arg0: ConfigOrigin, arg1: string)
    // private value: string;
    render(): string;
    render(arg0: ConfigRenderOptions): string;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: ConfigRenderOptions): void;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: string, arg4: ConfigRenderOptions): void;
    transformToString(): string;
    unwrapped(): string;
    valueType(): ConfigValueType;
    wasQuoted(): boolean;
}