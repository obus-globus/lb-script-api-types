import type { Class } from '../../../java/lang/Class.d.ts'
import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Upcalls$ArenaType extends Enum<Upcalls$ArenaType> {
    static AUTO: Upcalls$ArenaType;
    static CONFINED: Upcalls$ArenaType;
    static SHARED: Upcalls$ArenaType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Upcalls$ArenaType;
    static values(): (Object | null)[];
    private constructor()
    create(): Arena;
    isCloseable(): boolean;
    name(): "AUTO" | "CONFINED" | "SHARED";
}