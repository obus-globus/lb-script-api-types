import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
import type { Node } from '../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { ScriptArbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/ScriptArbiter.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class ScriptArbiter$Builder extends Object implements Builder<ScriptArbiter> {
    constructor()
    // private configuration: AbstractConfiguration;
    // private node: Node;
    asBuilder(): ScriptArbiter$Builder;
    build(): ScriptArbiter;
    getErrorPrefix(): string;
    isValid(): boolean;
    setConfiguration(configuration: AbstractConfiguration): ScriptArbiter$Builder;
    setNode(node: Node): ScriptArbiter$Builder;
}