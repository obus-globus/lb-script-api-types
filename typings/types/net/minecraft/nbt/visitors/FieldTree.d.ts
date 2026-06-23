import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagType } from '../../../../net/minecraft/nbt/TagType.d.ts'
import type { FieldSelector } from '../../../../net/minecraft/nbt/visitors/FieldSelector.d.ts'
export class FieldTree extends Record {
    static createRoot(): FieldTree;
    // private depth: number;
    // private fieldsToRecurse: { [key: string]: FieldTree };
    // private selectedFields: { [key: string]: TagType<any> };
    addEntry(field: FieldSelector): void;
    depth(): number;
    equals(o: Object | null): boolean;
    fieldsToRecurse(): { [key: string]: FieldTree };
    hashCode(): number;
    isSelected(type: TagType<any>, id: string): boolean;
    selectedFields(): { [key: string]: TagType<any> };
    toString(): string;
}