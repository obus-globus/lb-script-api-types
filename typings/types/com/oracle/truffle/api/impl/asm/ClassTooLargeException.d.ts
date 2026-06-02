import type { IndexOutOfBoundsException } from '../../../../../../java/lang/IndexOutOfBoundsException.d.ts'
export class ClassTooLargeException extends IndexOutOfBoundsException {
    constructor(className: string, constantPoolCount: number)
    readonly className: string;
    readonly constantPoolCount: number;
    getClassName(): string;
    getConstantPoolCount(): number;
}