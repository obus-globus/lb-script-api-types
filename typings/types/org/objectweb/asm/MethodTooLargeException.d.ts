import type { IndexOutOfBoundsException } from '../../../java/lang/IndexOutOfBoundsException.d.ts'
export class MethodTooLargeException extends IndexOutOfBoundsException {
    constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    readonly className: string;
    readonly codeSize: number;
    readonly descriptor: string;
    readonly methodName: string;
    getClassName(): string;
    getCodeSize(): number;
    getDescriptor(): string;
    getMethodName(): string;
}