import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Tlhelp32$MODULEENTRY32W } from '../../../../../com/sun/jna/platform/win32/Tlhelp32$MODULEENTRY32W.d.ts'
import type { WinDef } from '../../../../../com/sun/jna/platform/win32/WinDef.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinNT$HANDLEByReference } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLEByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION } from '../../../../../com/sun/jna/platform/win32/WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION.d.ts'
import type { WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX } from '../../../../../com/sun/jna/platform/win32/WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Kernel32Util extends Object implements WinDef {
    static MAX_PATH: number;
    static VOLUME_GUID_PATH_PREFIX: string;
    static VOLUME_GUID_PATH_SUFFIX: string;
    static QueryFullProcessImageName(paramarg0: WinNT$HANDLE, paramarg1: number): string;
    static QueryFullProcessImageName(paramarg0: number, paramarg1: number): string;
    static closeHandle(paramarg0: WinNT$HANDLE): void;
    static closeHandleRef(paramarg0: WinNT$HANDLEByReference): void;
    static closeHandleRefs(...paramarg0: WinNT$HANDLEByReference[]): void;
    static closeHandles(...paramarg0: WinNT$HANDLE[]): void;
    static deleteFile(paramarg0: string): void;
    static expandEnvironmentStrings(paramarg0: string): string;
    static extractVolumeGUID(paramarg0: string): string;
    static findEnvironmentStringBlockEntryEnd(paramarg0: Pointer, paramarg1: number, paramarg2: boolean): number;
    static formatMessage(paramarg0: WinNT$HRESULT): string;
    static formatMessage(paramarg0: WinNT$HRESULT, paramarg1: number, paramarg2: number): string;
    static formatMessage(paramarg0: number): string;
    static formatMessage(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static formatMessageFromLastErrorCode(paramarg0: number): string;
    static formatMessageFromLastErrorCode(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static freeGlobalMemory(paramarg0: Pointer): void;
    static freeLocalMemory(paramarg0: Pointer): void;
    static getComputerName(): string;
    static getCurrentProcessPriority(): WinDef$DWORD;
    static getCurrentThreadPriority(): number;
    static getDriveType(paramarg0: string): number;
    static getEnvironmentVariable(paramarg0: string): string;
    static getEnvironmentVariables(): JavaMap<string, string>;
    static getEnvironmentVariables(paramarg0: Pointer, paramarg1: number): JavaMap<string, string>;
    static getFileAttributes(paramarg0: string): number;
    static getFileType(paramarg0: string): number;
    static getLastErrorMessage(): string;
    static getLastErrorMessage(paramarg0: number, paramarg1: number): string;
    static getLogicalDriveStrings(): string[];
    static getLogicalProcessorInformation(): WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION[];
    static getLogicalProcessorInformationEx(paramarg0: number): WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX[];
    static getModules(paramarg0: number): Tlhelp32$MODULEENTRY32W[];
    static getPrivateProfileInt(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: string): number;
    static getPrivateProfileSection(paramarg0: string, paramarg1: string): string[];
    static getPrivateProfileSectionNames(paramarg0: string): string[];
    static getPrivateProfileString(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static getProcessPriority(paramarg0: number): WinDef$DWORD;
    static getResource(paramarg0: string, paramarg1: string, paramarg2: string): number[];
    static getResourceNames(paramarg0: string): JavaMap<string, string[]>;
    static getTempPath(): string;
    static getThreadPriority(paramarg0: number): number;
    static getVolumePathNamesForVolumeName(paramarg0: string): string[];
    static isValidPriorityClass(paramarg0: WinDef$DWORD): boolean;
    static isValidThreadPriority(paramarg0: number): boolean;
    static isWideCharEnvironmentStringBlock(paramarg0: Pointer, paramarg1: number): boolean;
    static queryDosDevice(paramarg0: string, paramarg1: number): string[];
    static readEnvironmentStringBlockEntry(paramarg0: Pointer, paramarg1: number, paramarg2: boolean): string;
    static setCurrentProcessBackgroundMode(paramarg0: boolean): void;
    static setCurrentProcessPriority(paramarg0: WinDef$DWORD): void;
    static setCurrentThreadBackgroundMode(paramarg0: boolean): void;
    static setCurrentThreadPriority(paramarg0: number): void;
    static setProcessPriority(paramarg0: number, paramarg1: WinDef$DWORD): void;
    static setThreadPriority(paramarg0: number, paramarg1: number): void;
    static writePrivateProfileSection(paramarg0: string, paramarg1: string[], paramarg2: string): void;
    static writePrivateProfileString(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): void;
    constructor()
}