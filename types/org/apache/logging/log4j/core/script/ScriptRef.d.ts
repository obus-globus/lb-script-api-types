import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { ScriptManager } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager.d.ts'
export class ScriptRef extends AbstractScript {
    static createReference(paramname: string, paramconfiguration: Configuration): ScriptRef;
    constructor(name: string, scriptManager: ScriptManager)
    // private scriptManager: ScriptManager;
    getLanguage(): string;
    getScriptText(): string;
    toString(): string;
}