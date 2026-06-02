import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Advapi32Util$EventLogType } from '../../../../../com/sun/jna/platform/win32/Advapi32Util$EventLogType.d.ts'
import type { WinNT$EVENTLOGRECORD } from '../../../../../com/sun/jna/platform/win32/WinNT$EVENTLOGRECORD.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Advapi32Util$EventLogRecord extends Object {
    constructor(arg0: Pointer)
    // private _data: number[];
    // private _record: WinNT$EVENTLOGRECORD;
    // private _source: string;
    // private _strings: string[];
    getData(): number[];
    getEventId(): number;
    getInstanceId(): number;
    getLength(): number;
    getRecord(): WinNT$EVENTLOGRECORD;
    getRecordNumber(): number;
    getSource(): string;
    getStatusCode(): number;
    getStrings(): string[];
    getType(): Advapi32Util$EventLogType;
}