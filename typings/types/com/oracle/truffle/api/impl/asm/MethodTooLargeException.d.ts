import type { IndexOutOfBoundsException } from '../../../../../../java/lang/IndexOutOfBoundsException.d.ts'
export class MethodTooLargeException extends IndexOutOfBoundsException {
    constructor(className: string, methodName: string, descriptor: string, codeSize: number)
    readonly className: string;
    readonly codeSize: number;
    readonly descriptor: string;
    readonly methodName: string;
    getClassName(): string;
    getCodeSize(): number;
    getDescriptor(): string;
    getMethodName(): string;
}