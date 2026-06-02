import type { FileVisitOption } from '../../../java/nio/file/FileVisitOption.d.ts'
import type { LinkOption } from '../../../java/nio/file/LinkOption.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LinkFollowing extends Object {
    static INSTANCE: LinkFollowing;
    // private followLinkOption: LinkOption[];
    // private followVisitOption: FileVisitOption[];
    // private nofollowLinkOption: LinkOption[];
    // private nofollowVisitOption: FileVisitOption[];
    toLinkOptions(followLinks: boolean): LinkOption[];
    toVisitOptions(followLinks: boolean): FileVisitOption[];
}