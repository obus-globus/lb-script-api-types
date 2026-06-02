import type { NbtDataSource } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/nbt/NbtDataSource.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class BlockNbtSource extends Object implements NbtDataSource {
    constructor(arg0: string)
    readonly pos: string;
    canEqual(arg0: Object): boolean;
    copy(): BlockNbtSource;
    equals(arg0: Object | null): boolean;
    getPos(): string;
    hashCode(): number;
    setPos(arg0: string): BlockNbtSource;
    toString(): string;
}