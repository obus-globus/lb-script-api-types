import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Arbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/Arbiter.d.ts'
import type { ScriptArbiter$Builder } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/ScriptArbiter$Builder.d.ts'
import type { AbstractScript } from '../../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export class ScriptArbiter extends Object implements Arbiter {
    static ELEMENT_TYPE: string;
    static newBuilder(): ScriptArbiter$Builder;
    private constructor(configuration: Configuration, script: AbstractScript)
    // private configuration: Configuration;
    // private script: AbstractScript;
    isCondition(): boolean;
}