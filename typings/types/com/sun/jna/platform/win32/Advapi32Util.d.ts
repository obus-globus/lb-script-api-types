import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Memory } from '../../../../../com/sun/jna/Memory.d.ts'
import type { Advapi32Util$AccessCheckPermission } from '../../../../../com/sun/jna/platform/win32/Advapi32Util$AccessCheckPermission.d.ts'
import type { Advapi32Util$Account } from '../../../../../com/sun/jna/platform/win32/Advapi32Util$Account.d.ts'
import type { Advapi32Util$EnumKey } from '../../../../../com/sun/jna/platform/win32/Advapi32Util$EnumKey.d.ts'
import type { Advapi32Util$InfoKey } from '../../../../../com/sun/jna/platform/win32/Advapi32Util$InfoKey.d.ts'
import type { WinNT$ACE_HEADER } from '../../../../../com/sun/jna/platform/win32/WinNT$ACE_HEADER.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinNT$PSID } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID.d.ts'
import type { WinNT$SECURITY_DESCRIPTOR_RELATIVE } from '../../../../../com/sun/jna/platform/win32/WinNT$SECURITY_DESCRIPTOR_RELATIVE.d.ts'
import type { WinReg$HKEY } from '../../../../../com/sun/jna/platform/win32/WinReg$HKEY.d.ts'
import type { WinReg$HKEYByReference } from '../../../../../com/sun/jna/platform/win32/WinReg$HKEYByReference.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Advapi32Util extends Object {
    static accessCheck(paramarg0: File, paramarg1: Advapi32Util$AccessCheckPermission): boolean;
    static alignOnDWORD(paramarg0: number): number;
    static backupEncryptedFile(paramarg0: File, paramarg1: File): void;
    static convertSidToStringSid(paramarg0: WinNT$PSID): string;
    static convertStringSidToSid(paramarg0: string): number[];
    static decryptFile(paramarg0: File): void;
    static disableEncryption(paramarg0: File, paramarg1: boolean): void;
    static encryptFile(paramarg0: File): void;
    static fileEncryptionStatus(paramarg0: File): number;
    static getAccountByName(paramarg0: string): Advapi32Util$Account;
    static getAccountByName(paramarg0: string, paramarg1: string): Advapi32Util$Account;
    static getAccountBySid(paramarg0: WinNT$PSID): Advapi32Util$Account;
    static getAccountBySid(paramarg0: string): Advapi32Util$Account;
    static getAccountBySid(paramarg0: string, paramarg1: WinNT$PSID): Advapi32Util$Account;
    static getAccountBySid(paramarg0: string, paramarg1: string): Advapi32Util$Account;
    static getAceSize(paramarg0: number): number;
    static getCurrentUserGroups(): Advapi32Util$Account[];
    static getEnvironmentBlock(paramarg0: JavaMap<string, string>): string;
    static getFileSecurity(paramarg0: string, paramarg1: boolean): WinNT$ACE_HEADER[];
    static getFileSecurityDescriptor(paramarg0: File, paramarg1: boolean): WinNT$SECURITY_DESCRIPTOR_RELATIVE;
    static getSecurityDescriptorForObject(paramarg0: string, paramarg1: number, paramarg2: boolean): Memory;
    static getTokenAccount(paramarg0: WinNT$HANDLE): Advapi32Util$Account;
    static getTokenGroups(paramarg0: WinNT$HANDLE): Advapi32Util$Account[];
    static getTokenPrimaryGroup(paramarg0: WinNT$HANDLE): Advapi32Util$Account;
    static getUserName(): string;
    static isCurrentProcessElevated(): boolean;
    static isWellKnownSid(paramarg0: number[], paramarg1: number): boolean;
    static isWellKnownSid(paramarg0: string, paramarg1: number): boolean;
    static registryCloseKey(paramarg0: WinReg$HKEY): void;
    static registryCreateKey(paramarg0: WinReg$HKEY, paramarg1: string): boolean;
    static registryCreateKey(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number): boolean;
    static registryCreateKey(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): boolean;
    static registryCreateKey(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): boolean;
    static registryDeleteKey(paramarg0: WinReg$HKEY, paramarg1: string): void;
    static registryDeleteKey(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): void;
    static registryDeleteKey(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): void;
    static registryDeleteValue(paramarg0: WinReg$HKEY, paramarg1: string): void;
    static registryDeleteValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): void;
    static registryDeleteValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): void;
    static registryGetBinaryValue(paramarg0: WinReg$HKEY, paramarg1: string): number[];
    static registryGetBinaryValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): number[];
    static registryGetBinaryValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): number[];
    static registryGetExpandableStringValue(paramarg0: WinReg$HKEY, paramarg1: string): string;
    static registryGetExpandableStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): string;
    static registryGetExpandableStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): string;
    static registryGetIntValue(paramarg0: WinReg$HKEY, paramarg1: string): number;
    static registryGetIntValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): number;
    static registryGetIntValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): number;
    static registryGetKey(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number): WinReg$HKEYByReference;
    static registryGetKeys(paramarg0: WinReg$HKEY): string[];
    static registryGetKeys(paramarg0: WinReg$HKEY, paramarg1: string): string[];
    static registryGetKeys(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number): string[];
    static registryGetLongValue(paramarg0: WinReg$HKEY, paramarg1: string): number;
    static registryGetLongValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): number;
    static registryGetLongValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): number;
    static registryGetStringArray(paramarg0: WinReg$HKEY, paramarg1: string): string[];
    static registryGetStringArray(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): string[];
    static registryGetStringArray(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): string[];
    static registryGetStringValue(paramarg0: WinReg$HKEY, paramarg1: string): string;
    static registryGetStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): string;
    static registryGetStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): string;
    static registryGetValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): Object;
    static registryGetValues(paramarg0: WinReg$HKEY): JavaMap<string, Object>;
    static registryGetValues(paramarg0: WinReg$HKEY, paramarg1: string): JavaMap<string, Object>;
    static registryGetValues(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number): JavaMap<string, Object>;
    static registryKeyExists(paramarg0: WinReg$HKEY, paramarg1: string): boolean;
    static registryKeyExists(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number): boolean;
    static registryLoadAppKey(paramarg0: string, paramarg1: number, paramarg2: number): WinReg$HKEYByReference;
    static registryQueryInfoKey(paramarg0: WinReg$HKEY, paramarg1: number): Advapi32Util$InfoKey;
    static registryRegEnumKey(paramarg0: WinReg$HKEY, paramarg1: number): Advapi32Util$EnumKey;
    static registrySetBinaryValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number[]): void;
    static registrySetBinaryValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number[]): void;
    static registrySetBinaryValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number[], paramarg4: number): void;
    static registrySetExpandableStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): void;
    static registrySetExpandableStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: string): void;
    static registrySetExpandableStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: number): void;
    static registrySetIntValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number): void;
    static registrySetIntValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): void;
    static registrySetIntValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number, paramarg4: number): void;
    static registrySetLongValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): void;
    static registrySetLongValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number, paramarg4: number): void;
    static registrySetLongValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: number): void;
    static registrySetStringArray(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: string[]): void;
    static registrySetStringArray(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: string[], paramarg4: number): void;
    static registrySetStringArray(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string[]): void;
    static registrySetStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): void;
    static registrySetStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: string): void;
    static registrySetStringValue(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: number): void;
    static registryValueExists(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string): boolean;
    static registryValueExists(paramarg0: WinReg$HKEY, paramarg1: string, paramarg2: string, paramarg3: number): boolean;
    static setFileSecurityDescriptor(paramarg0: File, paramarg1: WinNT$SECURITY_DESCRIPTOR_RELATIVE, paramarg2: boolean, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean, paramarg6: boolean, paramarg7: boolean): void;
    static setSecurityDescriptorForObject(paramarg0: string, paramarg1: number, paramarg2: WinNT$SECURITY_DESCRIPTOR_RELATIVE, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean, paramarg6: boolean, paramarg7: boolean, paramarg8: boolean): void;
    constructor()
}