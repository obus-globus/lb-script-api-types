import type { Netapi32Util$User } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$User.d.ts'
import type { WinNT$PSID } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID.d.ts'
export class Netapi32Util$UserInfo extends Netapi32Util$User {
    constructor()
    flags: number;
    fullName: string;
    sid: WinNT$PSID;
    sidString: string;
}