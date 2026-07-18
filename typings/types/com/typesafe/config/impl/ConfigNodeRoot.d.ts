import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigSyntax } from '../../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { AbstractConfigNodeValue } from '../../../../com/typesafe/config/impl/AbstractConfigNodeValue.d.ts'
import type { ConfigNodeComplexValue } from '../../../../com/typesafe/config/impl/ConfigNodeComplexValue.d.ts'
export class ConfigNodeRoot extends ConfigNodeComplexValue {
    constructor(arg0: AbstractConfigNode[], arg1: ConfigOrigin)
    // private origin: ConfigOrigin;
    hasValue(arg0: string): boolean;
    newNode(arg0: AbstractConfigNode[]): ConfigNodeRoot;
    setValue(arg0: string, arg1: AbstractConfigNodeValue, arg2: ConfigSyntax): ConfigNodeRoot;
    value(): ConfigNodeComplexValue;
}