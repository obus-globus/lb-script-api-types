import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView$MetadataEntryView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MetadataEntryView.d.ts'
export interface MappingTree$MetadataEntry extends Object, MappingTreeView$MetadataEntryView{
    getKey(): string;
    getValue(): string;
}