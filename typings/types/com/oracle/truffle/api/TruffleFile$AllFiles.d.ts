import type { DirectoryStream$Filter } from '../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleFile$AllFiles extends Object implements DirectoryStream$Filter<Path[]> {
    private constructor()
    accept(entry: Path[]): boolean;
}