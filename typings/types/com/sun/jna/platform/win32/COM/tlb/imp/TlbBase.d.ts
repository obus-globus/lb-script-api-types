import type { TypeInfoUtil } from '../../../../../../../../com/sun/jna/platform/win32/COM/TypeInfoUtil.d.ts'
import type { TypeLibUtil } from '../../../../../../../../com/sun/jna/platform/win32/COM/TypeLibUtil.d.ts'
import type { StringBuffer } from '../../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class TlbBase extends Object {
    static CR: string;
    static CRCR: string;
    static IDISPATCH_METHODS: string[];
    static IUNKNOWN_METHODS: string[];
    static TAB: string;
    static TABTAB: string;
    constructor(arg0: number, arg1: TypeLibUtil, arg2: TypeInfoUtil)
    constructor(arg0: number, arg1: TypeLibUtil, arg2: TypeInfoUtil, arg3: string)
    // private bindingMode: string;
    classBuffer: StringBuffer;
    // private content: string;
    filename: string;
    // private index: number;
    name: string;
    // private templateBuffer: StringBuffer;
    // private typeInfoUtil: TypeInfoUtil;
    // private typeLibUtil: TypeLibUtil;
    createClassName(arg0: string): void;
    createContent(arg0: string): void;
    createPackageName(arg0: string): void;
    getClassBuffer(): StringBuffer;
    getClassTemplate(): string;
    getFilename(): string;
    getName(): string;
    // private getTime(): string;
    isDispIdMode(): boolean;
    isReservedMethod(arg0: string): boolean;
    isVTableMode(): boolean;
    log(arg0: string, arg1: string): void;
    logError(arg0: string): void;
    logInfo(arg0: string): void;
    readTemplateFile(arg0: string): void;
    replaceVariable(arg0: string, arg1: string): void;
    setFilename(arg0: string): void;
    setName(arg0: string): void;
}