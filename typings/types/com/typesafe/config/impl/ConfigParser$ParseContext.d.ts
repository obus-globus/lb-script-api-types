import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConfigException } from '../../../../com/typesafe/config/ConfigException.d.ts'
import type { ConfigIncludeContext } from '../../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigSyntax } from '../../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { AbstractConfigNodeValue } from '../../../../com/typesafe/config/impl/AbstractConfigNodeValue.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { ConfigNodeArray } from '../../../../com/typesafe/config/impl/ConfigNodeArray.d.ts'
import type { ConfigNodeComplexValue } from '../../../../com/typesafe/config/impl/ConfigNodeComplexValue.d.ts'
import type { ConfigNodeConcatenation } from '../../../../com/typesafe/config/impl/ConfigNodeConcatenation.d.ts'
import type { ConfigNodeField } from '../../../../com/typesafe/config/impl/ConfigNodeField.d.ts'
import type { ConfigNodeInclude } from '../../../../com/typesafe/config/impl/ConfigNodeInclude.d.ts'
import type { ConfigNodeObject } from '../../../../com/typesafe/config/impl/ConfigNodeObject.d.ts'
import type { ConfigNodeRoot } from '../../../../com/typesafe/config/impl/ConfigNodeRoot.d.ts'
import type { FullIncluder } from '../../../../com/typesafe/config/impl/FullIncluder.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { SimpleConfigOrigin } from '../../../../com/typesafe/config/impl/SimpleConfigOrigin.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ConfigParser$ParseContext extends Object {
    constructor(arg0: ConfigSyntax, arg1: ConfigOrigin, arg2: ConfigNodeRoot, arg3: FullIncluder, arg4: ConfigIncludeContext)
    // private arrayCount: number;
    // private baseOrigin: ConfigOrigin;
    // private document: ConfigNodeRoot;
    // private flavor: ConfigSyntax;
    // private includeContext: ConfigIncludeContext;
    // private includer: FullIncluder;
    // private lineNumber: number;
    // private pathStack: Path[];
    // private advanceLineNumberBeforeValue(arg0: ConfigNodeField): void;
    // private fullCurrentPath(): Path;
    // private lineOrigin(): SimpleConfigOrigin;
    // private nodeOrigin(arg0: ConfigNodeComplexValue): SimpleConfigOrigin;
    parse(): AbstractConfigValue;
    // private parseArray(arg0: ConfigNodeArray): (Object | null)[];
    // private parseConcatenation(arg0: ConfigNodeConcatenation): AbstractConfigValue;
    // private parseError(arg0: string): ConfigException;
    // private parseError(arg0: string, arg1: Throwable): ConfigException;
    // private parseInclude(arg0: JavaMap<string, AbstractConfigValue>, arg1: ConfigNodeInclude): void;
    // private parseObject(arg0: ConfigNodeObject): JavaMap<any, any>;
    // private parseValue(arg0: AbstractConfigNodeValue, arg1: string[]): AbstractConfigValue;
}