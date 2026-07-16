import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class PoolArena$SizeClass extends Enum<PoolArena$SizeClass> {
    static Normal: PoolArena$SizeClass;
    static Small: PoolArena$SizeClass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PoolArena$SizeClass;
    static values(): PoolArena$SizeClass[];
    private constructor()
    name(): "Small" | "Normal";
}