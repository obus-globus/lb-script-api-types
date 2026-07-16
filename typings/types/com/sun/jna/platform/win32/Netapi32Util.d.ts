import type { Netapi32Util$DomainController } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$DomainController.d.ts'
import type { Netapi32Util$DomainTrust } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$DomainTrust.d.ts'
import type { Netapi32Util$Group } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$Group.d.ts'
import type { Netapi32Util$LocalGroup } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$LocalGroup.d.ts'
import type { Netapi32Util$User } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$User.d.ts'
import type { Netapi32Util$UserInfo } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$UserInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Netapi32Util extends Object {
    static getCurrentUserLocalGroups(): Netapi32Util$Group[];
    static getDC(): Netapi32Util$DomainController;
    static getDCName(): string;
    static getDCName(paramarg0: string, paramarg1: string): string;
    static getDomainName(paramarg0: string): string;
    static getDomainTrusts(): Netapi32Util$DomainTrust[];
    static getDomainTrusts(paramarg0: string): Netapi32Util$DomainTrust[];
    static getGlobalGroups(): Netapi32Util$Group[];
    static getGlobalGroups(paramarg0: string): Netapi32Util$Group[];
    static getJoinStatus(): number;
    static getJoinStatus(paramarg0: string): number;
    static getLocalGroups(): Netapi32Util$LocalGroup[];
    static getLocalGroups(paramarg0: string): Netapi32Util$LocalGroup[];
    static getUserGroups(paramarg0: string): Netapi32Util$Group[];
    static getUserGroups(paramarg0: string, paramarg1: string): Netapi32Util$Group[];
    static getUserInfo(paramarg0: string): Netapi32Util$UserInfo;
    static getUserInfo(paramarg0: string, paramarg1: string): Netapi32Util$UserInfo;
    static getUserLocalGroups(paramarg0: string): Netapi32Util$Group[];
    static getUserLocalGroups(paramarg0: string, paramarg1: string): Netapi32Util$Group[];
    static getUsers(): Netapi32Util$User[];
    static getUsers(paramarg0: string): Netapi32Util$User[];
    constructor()
}