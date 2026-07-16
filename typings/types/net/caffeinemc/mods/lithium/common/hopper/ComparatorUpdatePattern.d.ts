import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class ComparatorUpdatePattern extends Enum<ComparatorUpdatePattern> {
    static DECREMENT_UPDATE_INCREMENT_UPDATE: ComparatorUpdatePattern;
    static NO_UPDATE: ComparatorUpdatePattern;
    static UPDATE: ComparatorUpdatePattern;
    static UPDATE_DECREMENT_UPDATE_INCREMENT_UPDATE: ComparatorUpdatePattern;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ComparatorUpdatePattern;
    static values(): ComparatorUpdatePattern[];
    private constructor()
    apply(arg0: BlockEntity, arg1: (Object | null)[]): void;
    isChainable(): boolean;
    thenDecrementUpdateIncrementUpdate(): ComparatorUpdatePattern;
    thenUpdate(): ComparatorUpdatePattern;
    name(): "NO_UPDATE" | "UPDATE" | "DECREMENT_UPDATE_INCREMENT_UPDATE" | "UPDATE_DECREMENT_UPDATE_INCREMENT_UPDATE";
}