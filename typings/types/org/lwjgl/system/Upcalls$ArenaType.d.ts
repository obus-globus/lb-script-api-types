import type { Class } from '../../../java/lang/Class.d.ts'
import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Upcalls$ArenaType extends Enum<Upcalls$ArenaType> {
    static AUTO: Upcalls$ArenaType;
    static CONFINED: Upcalls$ArenaType;
    static SHARED: Upcalls$ArenaType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Upcalls$ArenaType;
    static values(): Upcalls$ArenaType[];
    private constructor()
    create(): Arena;
    isCloseable(): boolean;
    name(): "AUTO" | "CONFINED" | "SHARED";
}