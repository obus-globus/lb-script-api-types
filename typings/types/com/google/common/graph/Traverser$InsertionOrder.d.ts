import type { Traverser$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Traverser$InsertionOrder extends Enum<Traverser$InsertionOrder> {
    static BACK: Traverser$InsertionOrder;
    static FRONT: Traverser$InsertionOrder;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Traverser$InsertionOrder;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: Traverser$1)
    insertInto<T extends unknown>(deque: T[], value: T): void;
    name(): "FRONT" | "BACK";
}