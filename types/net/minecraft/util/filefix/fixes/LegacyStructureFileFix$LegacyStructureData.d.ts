import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
export class LegacyStructureFileFix$LegacyStructureData extends Record {
    constructor()
    constructor(starts: { [key: string]: Dynamic<Object> }, indexes: { [key: string]: (Object | null)[] })
    // private indexes: { [key: string]: (Object | null)[] };
    // private starts: { [key: string]: Dynamic<Object> };
    addIndex(id: string, sourcePos: number): void;
    addStart(id: string, data: Dynamic<Tag>): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    indexes(): { [key: string]: (Object | null)[] };
    starts(): { [key: string]: Dynamic<Object> };
    toString(): string;
}