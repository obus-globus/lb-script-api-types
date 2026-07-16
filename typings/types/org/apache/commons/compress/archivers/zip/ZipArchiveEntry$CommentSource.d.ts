import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ZipArchiveEntry$CommentSource extends Enum<ZipArchiveEntry$CommentSource> {
    static COMMENT: ZipArchiveEntry$CommentSource;
    static UNICODE_EXTRA_FIELD: ZipArchiveEntry$CommentSource;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ZipArchiveEntry$CommentSource;
    static values(): ZipArchiveEntry$CommentSource[];
    private constructor()
    name(): "COMMENT" | "UNICODE_EXTRA_FIELD";
}