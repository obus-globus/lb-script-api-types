import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
export class LegacyStructureFileFix$LegacyStructureData extends Record {
    constructor()
    constructor(starts: JavaMap<string, Dynamic<Object>>, indexes: JavaMap<string, (Object | null)[]>)
    // private indexes: JavaMap<string, (Object | null)[]>;
    // private starts: JavaMap<string, Dynamic<Object>>;
    addIndex(id: string, sourcePos: number): void;
    addStart(id: string, data: Dynamic<Tag>): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    indexes(): JavaMap<string, (Object | null)[]>;
    starts(): JavaMap<string, Dynamic<Object>>;
    toString(): string;
}