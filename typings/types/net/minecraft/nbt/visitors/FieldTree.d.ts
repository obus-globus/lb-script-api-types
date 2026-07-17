import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagType } from '../../../../net/minecraft/nbt/TagType.d.ts'
import type { FieldSelector } from '../../../../net/minecraft/nbt/visitors/FieldSelector.d.ts'
export class FieldTree extends Record {
    static createRoot(): FieldTree;
    constructor(depth: number, selectedFields: JavaMap<string, TagType<any>>, fieldsToRecurse: JavaMap<string, FieldTree>)
    // private depth: number;
    // private fieldsToRecurse: JavaMap<string, FieldTree>;
    // private selectedFields: JavaMap<string, TagType<any>>;
    addEntry(field: FieldSelector): void;
    depth(): number;
    equals(o: Object | null): boolean;
    fieldsToRecurse(): JavaMap<string, FieldTree>;
    hashCode(): number;
    isSelected(type: TagType<any>, id: string): boolean;
    selectedFields(): JavaMap<string, TagType<any>>;
    toString(): string;
}