import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MappedLegacyBlockItem$Type extends Enum<MappedLegacyBlockItem$Type> {
    static BLOCK: MappedLegacyBlockItem$Type;
    static BLOCK_ITEM: MappedLegacyBlockItem$Type;
    static ITEM: MappedLegacyBlockItem$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MappedLegacyBlockItem$Type;
    static values(): MappedLegacyBlockItem$Type[];
    private constructor(arg2: string)
    getName(): string;
    name(): "ITEM" | "BLOCK_ITEM" | "BLOCK";
}