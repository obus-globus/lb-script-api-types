import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { TypeLibUtil } from '../../../../../../../com/sun/jna/platform/win32/COM/TypeLibUtil.d.ts'
import type { TlbBase } from '../../../../../../../com/sun/jna/platform/win32/COM/tlb/imp/TlbBase.d.ts'
import type { TlbConst } from '../../../../../../../com/sun/jna/platform/win32/COM/tlb/imp/TlbConst.d.ts'
import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TlbImp extends Object implements TlbConst {
    static BINDING_MODE_DISPID: string;
    static BINDING_MODE_VTABLE: string;
    static CMD_ARG_BINDING_MODE: string;
    static CMD_ARG_OUTPUT_DIR: string;
    static CMD_ARG_TYPELIB_FILE: string;
    static CMD_ARG_TYPELIB_ID: string;
    static CMD_ARG_TYPELIB_MAJOR_VERSION: string;
    static CMD_ARG_TYPELIB_MINOR_VERSION: string;
    static CR: string;
    static CRCR: string;
    static TYPELIB_ID_OFFICE: string;
    static TYPELIB_ID_SHELL: string;
    static TYPELIB_ID_WORD: string;
    static TYPELIB_MAJOR_VERSION_OFFICE: string;
    static TYPELIB_MAJOR_VERSION_SHELL: string;
    static TYPELIB_MAJOR_VERSION_WORD: string;
    static TYPELIB_MINOR_VERSION_OFFICE: string;
    static TYPELIB_MINOR_VERSION_SHELL: string;
    static TYPELIB_MINOR_VERSION_WORD: string;
    static logInfo(paramarg0: string): void;
    static main(paramarg0: string[]): void;
    constructor(arg0: string[])
    // private cmdlineArgs: JavaMap<any, any>;
    // private comRootDir: File;
    // private outputDir: File;
    // private typeLibUtil: TypeLibUtil;
    // private createCOMCoClass(arg0: number, arg1: string, arg2: TypeLibUtil, arg3: string): void;
    // private createCOMDispInterface(arg0: number, arg1: string, arg2: TypeLibUtil): void;
    // private createCOMEnum(arg0: number, arg1: string, arg2: TypeLibUtil): void;
    // private createCOMInterface(arg0: number, arg1: string, arg2: TypeLibUtil): void;
    // private createDir(): void;
    // private getPackageName(): string;
    startCOM2Java(): void;
    // private writeTextFile(arg0: string, arg1: string): void;
    // private writeTlbClass(arg0: TlbBase): void;
}