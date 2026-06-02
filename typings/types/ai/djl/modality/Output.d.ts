import type { Input } from '../../../ai/djl/modality/Input.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Output extends Input {
    static decode(paramarg0: InputStream): Input;
    static decode(paramarg0: InputStream): Output;
    constructor()
    constructor(arg0: number, arg1: string)
    readonly code: number;
    readonly message: string;
    deepEquals(arg0: Object): boolean;
    encode(): number[];
    getCode(): number;
    getMessage(): string;
    setCode(arg0: number): void;
    setMessage(arg0: string): void;
}