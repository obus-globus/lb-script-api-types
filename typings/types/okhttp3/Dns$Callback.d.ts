import type { IOException } from '../java/io/IOException.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Dns$Call } from '../okhttp3/Dns$Call.d.ts'
import type { Dns$Record } from '../okhttp3/Dns$Record.d.ts'
export interface Dns$Callback extends Object{
    onFailure(call: Dns$Call, e: IOException): void;
    onRecords(call: Dns$Call, last: boolean, records: Dns$Record[]): void;
}