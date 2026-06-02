import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeRegistry$ArgumentTypeMapping } from '../../../../../net/raphimc/viabedrock/protocol/data/ArgumentTypeRegistry$ArgumentTypeMapping.d.ts'
export class ArgumentTypeRegistry extends Object {
    static getArgumentTypeMapping(paramarg0: ArgumentType<Object>): ArgumentTypeRegistry$ArgumentTypeMapping;
    static init(): void;
    constructor()
}