import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
export class ModuleFastPlace$ApplyTo extends Enum<ModuleFastPlace$ApplyTo> implements Tagged {
    static BLOCKS: ModuleFastPlace$ApplyTo;
    static Companion: Tagged$Companion;
    static PROJECTILES: ModuleFastPlace$ApplyTo;
    static getEntries(): ModuleFastPlace$ApplyTo[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleFastPlace$ApplyTo;
    static values(): (Object | null)[];
    private constructor(tag: string, condition: (param0: Item) => boolean)
    readonly condition: (param0: Item) => boolean;
    readonly tag: string;
    name(): "PROJECTILES" | "BLOCKS";
}