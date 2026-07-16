import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MultimapBuilder$LinkedListSupplier extends Enum<MultimapBuilder$LinkedListSupplier> implements Supplier<(Object | null)[]> {
    static INSTANCE: MultimapBuilder$LinkedListSupplier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MultimapBuilder$LinkedListSupplier;
    static values(): MultimapBuilder$LinkedListSupplier[];
    private constructor()
    get(): (Object | null)[];
    name(): "INSTANCE";
}