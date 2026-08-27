import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { TaggedArgumentType } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/TaggedArgumentType.d.ts'
export class TaggedArgumentType$Companion extends Object {
    invoke<T extends Enum<T> & Tagged>(parameterName: string, predicate: (param0: T) => boolean): TaggedArgumentType<T>;
}