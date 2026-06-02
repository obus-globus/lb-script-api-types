import type { AclEntry } from '../../../../java/nio/file/attribute/AclEntry.d.ts'
import type { FileOwnerAttributeView } from '../../../../java/nio/file/attribute/FileOwnerAttributeView.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AclFileAttributeView extends FileOwnerAttributeView, Object{
    getAcl(): AclEntry[];
    name(): string;
    setAcl(arg0: AclEntry[]): void;
}