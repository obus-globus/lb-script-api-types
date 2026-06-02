import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { FinalBitSet } from '../../../../../com/oracle/truffle/api/utilities/FinalBitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LibraryExport$DelegateExport extends Object{
    getDelegateExportLibrary(delegate: Object): Library;
    getDelegateExportMessages(): FinalBitSet;
    readDelegateExport(receiver: Object): Object;
}