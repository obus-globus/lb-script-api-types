import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { PointerType } from '../../../../../com/sun/jna/PointerType.d.ts'
import type { Guid$IID } from '../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Guid$REFIID extends PointerType {
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: Guid$IID)
    equals(arg0: Object | null): boolean;
    getValue(): Guid$IID;
    hashCode(): number;
    setValue(arg0: Guid$IID): void;
}