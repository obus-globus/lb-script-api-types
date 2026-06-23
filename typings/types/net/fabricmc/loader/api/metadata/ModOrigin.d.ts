import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModOrigin$Kind } from '../../../../../net/fabricmc/loader/api/metadata/ModOrigin$Kind.d.ts'
export interface ModOrigin extends Object{
    getKind(): ModOrigin$Kind;
    getParentModId(): string;
    getParentSubLocation(): string;
    getPaths(): Path[][];
}