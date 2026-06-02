import type { NbtDataSource } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/nbt/NbtDataSource.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class EntityNbtSource extends Object implements NbtDataSource {
    constructor(arg0: string)
    readonly selector: string;
    canEqual(arg0: Object): boolean;
    copy(): EntityNbtSource;
    equals(arg0: Object | null): boolean;
    getSelector(): string;
    hashCode(): number;
    setSelector(arg0: string): EntityNbtSource;
    toString(): string;
}