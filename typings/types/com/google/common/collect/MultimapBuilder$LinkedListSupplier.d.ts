import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MultimapBuilder$LinkedListSupplier extends Enum<MultimapBuilder$LinkedListSupplier> implements Supplier<Object[]> {
    static INSTANCE: MultimapBuilder$LinkedListSupplier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MultimapBuilder$LinkedListSupplier;
    static values(): (Object | null)[];
    private constructor()
    get(): (Object | null)[];
    name(): "INSTANCE";
}