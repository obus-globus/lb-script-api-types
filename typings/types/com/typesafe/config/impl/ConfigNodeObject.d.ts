import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigSyntax } from '../../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { AbstractConfigNodeValue } from '../../../../com/typesafe/config/impl/AbstractConfigNodeValue.d.ts'
import type { ConfigNodeComplexValue } from '../../../../com/typesafe/config/impl/ConfigNodeComplexValue.d.ts'
import type { ConfigNodePath } from '../../../../com/typesafe/config/impl/ConfigNodePath.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
export class ConfigNodeObject extends ConfigNodeComplexValue {
    constructor(arg0: AbstractConfigNode[])
    constructor(arg0: AbstractConfigNode[], arg1: ConfigOrigin)
    addValueOnPath(arg0: ConfigNodePath, arg1: AbstractConfigNodeValue, arg2: ConfigSyntax): ConfigNodeObject;
    changeValueOnPath(arg0: Path, arg1: AbstractConfigNodeValue, arg2: ConfigSyntax): ConfigNodeObject;
    hasValue(arg0: Path): boolean;
    // private indentation(): AbstractConfigNode[];
    newNode(arg0: AbstractConfigNode[]): ConfigNodeObject;
    removeValueOnPath(arg0: string, arg1: ConfigSyntax): ConfigNodeObject;
    // private setValueOnPath(arg0: ConfigNodePath, arg1: AbstractConfigNodeValue, arg2: ConfigSyntax): ConfigNodeObject;
    setValueOnPath(arg0: string, arg1: AbstractConfigNodeValue): ConfigNodeObject;
    setValueOnPath(arg0: string, arg1: AbstractConfigNodeValue, arg2: ConfigSyntax): ConfigNodeObject;
}