import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FileResourceType$AccessFactory<T extends unknown> extends Object{
    create(path: Path, dataVersion: number): T;
}