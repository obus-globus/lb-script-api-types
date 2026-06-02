import type { YAMLException } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/YAMLException.d.ts'
export class ReaderException extends YAMLException {
    constructor(arg0: string, arg1: number, arg2: number, arg3: string)
    readonly codePoint: number;
    readonly name: string;
    readonly position: number;
    getCodePoint(): number;
    getName(): string;
    getPosition(): number;
    toString(): string;
}