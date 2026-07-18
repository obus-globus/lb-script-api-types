import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { ConfigNodeComplexValue } from '../../../../com/typesafe/config/impl/ConfigNodeComplexValue.d.ts'
export class ConfigNodeConcatenation extends ConfigNodeComplexValue {
    constructor(arg0: AbstractConfigNode[])
    newNode(arg0: AbstractConfigNode[]): ConfigNodeConcatenation;
}