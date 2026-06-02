import type { Netapi32Util$DomainController } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$DomainController.d.ts'
import type { Netapi32Util$UserInfo } from '../../../../../com/sun/jna/platform/win32/Netapi32Util$UserInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Netapi32Util extends Object {
    static getCurrentUserLocalGroups(): (Object | null)[];
    static getDC(): Netapi32Util$DomainController;
    static getDCName(): string;
    static getDCName(paramarg0: string, paramarg1: string): string;
    static getDomainName(paramarg0: string): string;
    static getDomainTrusts(): (Object | null)[];
    static getDomainTrusts(paramarg0: string): (Object | null)[];
    static getGlobalGroups(): (Object | null)[];
    static getGlobalGroups(paramarg0: string): (Object | null)[];
    static getJoinStatus(): number;
    static getJoinStatus(paramarg0: string): number;
    static getLocalGroups(): (Object | null)[];
    static getLocalGroups(paramarg0: string): (Object | null)[];
    static getUserGroups(paramarg0: string): (Object | null)[];
    static getUserGroups(paramarg0: string, paramarg1: string): (Object | null)[];
    static getUserInfo(paramarg0: string): Netapi32Util$UserInfo;
    static getUserInfo(paramarg0: string, paramarg1: string): Netapi32Util$UserInfo;
    static getUserLocalGroups(paramarg0: string): (Object | null)[];
    static getUserLocalGroups(paramarg0: string, paramarg1: string): (Object | null)[];
    static getUsers(): (Object | null)[];
    static getUsers(paramarg0: string): (Object | null)[];
    constructor()
}