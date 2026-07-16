import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathWithAttributes } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathWithAttributes.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractScript } from '../../../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export class ScriptCondition extends Object {
    static createCondition(paramscript: AbstractScript, paramconfiguration: Configuration): ScriptCondition;
    constructor(script: AbstractScript, configuration: Configuration)
    // private configuration: Configuration;
    // private script: AbstractScript;
    selectFilesToDelete(basePath: Path, candidates: PathWithAttributes[]): PathWithAttributes[];
}