import type { File } from '../../../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { SongData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/SongData.d.ts'
export class NbsLoader extends Object {
    static INSTANCE: NbsLoader;
    load(nbsFile: File): SongData | null;
}