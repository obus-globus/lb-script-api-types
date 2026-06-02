import type { Identifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { NbtDataSource } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/nbt/NbtDataSource.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StorageNbtSource extends Object implements NbtDataSource {
    constructor(arg0: Identifier)
    readonly id: Identifier;
    canEqual(arg0: Object): boolean;
    copy(): StorageNbtSource;
    equals(arg0: Object | null): boolean;
    getId(): Identifier;
    hashCode(): number;
    setId(arg0: Identifier): StorageNbtSource;
    toString(): string;
}