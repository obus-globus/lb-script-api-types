import type { AttributeView } from '../../../../java/nio/file/attribute/AttributeView.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FileStoreAttributeView extends AttributeView, Object{
    name(): string;
}