import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ConfigState extends Object{
    readBooleanOption(arg0: Identifier): boolean;
    readEnumOption<E extends Enum<E>>(arg0: Identifier, arg1: Class<E>): E;
    readIntOption(arg0: Identifier): number;
}