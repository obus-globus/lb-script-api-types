import type { TypeInfoUtil } from '../../../../../../../../com/sun/jna/platform/win32/COM/TypeInfoUtil.d.ts'
import type { TypeLibUtil } from '../../../../../../../../com/sun/jna/platform/win32/COM/TypeLibUtil.d.ts'
import type { TlbBase } from '../../../../../../../../com/sun/jna/platform/win32/COM/tlb/imp/TlbBase.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TlbCoClass extends TlbBase {
    static CR: string;
    static CRCR: string;
    static IDISPATCH_METHODS: (Object | null)[];
    static IUNKNOWN_METHODS: (Object | null)[];
    static TAB: string;
    static TABTAB: string;
    constructor(arg0: number, arg1: string, arg2: TypeLibUtil, arg3: string)
    createCLSID(arg0: string): void;
    createCLSIDName(arg0: string): void;
    createFunctions(arg0: TypeInfoUtil, arg1: string): void;
    createInterfaces(arg0: string): void;
    createJavaDocHeader(arg0: string, arg1: string, arg2: string): void;
    getClassTemplate(): string;
}