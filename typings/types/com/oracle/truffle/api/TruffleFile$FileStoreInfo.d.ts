import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleFile$FileStoreInfo extends Object {
    private constructor(null_: TruffleFile)
    getBlockSize(): number;
    getTotalSpace(): number;
    getUnallocatedSpace(): number;
    getUsableSpace(): number;
    isReadOnly(): boolean;
}