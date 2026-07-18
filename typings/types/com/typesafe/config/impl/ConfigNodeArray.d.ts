import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { ConfigNodeComplexValue } from '../../../../com/typesafe/config/impl/ConfigNodeComplexValue.d.ts'
export class ConfigNodeArray extends ConfigNodeComplexValue {
    constructor(arg0: AbstractConfigNode[])
    constructor(arg0: AbstractConfigNode[], arg1: ConfigOrigin)
    newNode(arg0: AbstractConfigNode[]): ConfigNodeArray;
}