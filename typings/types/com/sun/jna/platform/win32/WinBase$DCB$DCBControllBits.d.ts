import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
export class WinBase$DCB$DCBControllBits extends WinDef$DWORD {
    static SIZE: number;
    static compare<T extends IntegerType>(paramarg0: T, paramarg1: T): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    getfAbortOnError(): boolean;
    getfBinary(): boolean;
    getfDsrSensitivity(): boolean;
    getfDtrControl(): number;
    getfDummy2(): number;
    getfErrorChar(): boolean;
    getfInX(): boolean;
    getfNull(): boolean;
    getfOutX(): boolean;
    getfOutxCtsFlow(): boolean;
    getfOutxDsrFlow(): boolean;
    getfParity(): boolean;
    getfRtsControl(): number;
    getfTXContinueOnXoff(): boolean;
    setfAbortOnError(arg0: boolean): void;
    setfBinary(arg0: boolean): void;
    setfDsrSensitivity(arg0: boolean): void;
    setfDtrControl(arg0: number): void;
    setfErrorChar(arg0: boolean): void;
    setfInX(arg0: boolean): void;
    setfNull(arg0: boolean): void;
    setfOutX(arg0: boolean): void;
    setfOutxCtsFlow(arg0: boolean): void;
    setfOutxDsrFlow(arg0: boolean): void;
    setfParity(arg0: boolean): void;
    setfRtsControl(arg0: number): void;
    setfTXContinueOnXoff(arg0: boolean): void;
    toString(): string;
}