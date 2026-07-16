import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$ACL } from '../../../../../com/sun/jna/platform/win32/WinNT$ACL.d.ts'
import type { WinNT$PSID } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinNT$SECURITY_DESCRIPTOR_RELATIVE extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: number[])
    constructor(arg0: number)
    Control: number;
    // private DACL: WinNT$ACL;
    Dacl: number;
    // private GROUP: WinNT$PSID;
    Group: number;
    // private OWNER: WinNT$PSID;
    Owner: number;
    Revision: number;
    // private SACL: WinNT$ACL;
    Sacl: number;
    Sbz1: number;
    getDiscretionaryACL(): WinNT$ACL;
    getGroup(): WinNT$PSID;
    getOwner(): WinNT$PSID;
    getSystemACL(): WinNT$ACL;
    // private setMembers(): void;
}