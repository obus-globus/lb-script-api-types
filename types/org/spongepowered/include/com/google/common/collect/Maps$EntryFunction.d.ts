import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
export class Maps$EntryFunction extends Enum<Maps$EntryFunction> implements Function<Map$Entry<Object, Object>, Object> {
    static KEY: Maps$EntryFunction;
    static VALUE: Maps$EntryFunction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Maps$EntryFunction;
    static values(): (Object | null)[];
    private constructor()
    name(): "KEY" | "VALUE";
}