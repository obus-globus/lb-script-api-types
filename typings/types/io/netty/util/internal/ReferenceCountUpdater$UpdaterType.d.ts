import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ReferenceCountUpdater$UpdaterType extends Enum<ReferenceCountUpdater$UpdaterType> {
    static Atomic: ReferenceCountUpdater$UpdaterType;
    static Unsafe: ReferenceCountUpdater$UpdaterType;
    static VarHandle: ReferenceCountUpdater$UpdaterType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ReferenceCountUpdater$UpdaterType;
    static values(): ReferenceCountUpdater$UpdaterType[];
    private constructor()
    name(): "Unsafe" | "VarHandle" | "Atomic";
}