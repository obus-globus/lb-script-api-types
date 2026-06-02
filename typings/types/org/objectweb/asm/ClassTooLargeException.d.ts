import type { IndexOutOfBoundsException } from '../../../java/lang/IndexOutOfBoundsException.d.ts'
export class ClassTooLargeException extends IndexOutOfBoundsException {
    constructor(arg0: string, arg1: number)
    readonly className: string;
    readonly constantPoolCount: number;
    getClassName(): string;
    getConstantPoolCount(): number;
}