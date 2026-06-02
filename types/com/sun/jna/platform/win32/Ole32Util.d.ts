import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Ole32Util extends Object {
    static generateGUID(): Guid$GUID;
    static getGUIDFromString(paramarg0: string): Guid$GUID;
    static getStringFromGUID(paramarg0: Guid$GUID): string;
    constructor()
}