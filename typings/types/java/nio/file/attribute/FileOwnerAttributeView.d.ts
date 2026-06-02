import type { FileAttributeView } from '../../../../java/nio/file/attribute/FileAttributeView.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FileOwnerAttributeView extends FileAttributeView, Object{
    getOwner(): UserPrincipal;
    name(): string;
    setOwner(arg0: UserPrincipal): void;
}