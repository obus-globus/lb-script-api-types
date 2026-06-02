import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
export class ScriptCommandBuilder extends Object {
    constructor(commandObject: Value)
    // private commandObject: Value;
    build(): Command;
    // private createCommand(commandObject: Value): Command;
    // private createParameter(parameterObject: Value): Parameter<Object>;
    // private toObject<T extends Object | number | string | boolean>(v: Value): T;
}