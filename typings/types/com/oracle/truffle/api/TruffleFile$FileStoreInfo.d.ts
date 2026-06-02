import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleFile$FileStoreInfo extends Object {
    private constructor(null_: TruffleFile$FileStoreInfo)
    getBlockSize(): number;
    getTotalSpace(): number;
    getUnallocatedSpace(): number;
    getUsableSpace(): number;
    isReadOnly(): boolean;
}