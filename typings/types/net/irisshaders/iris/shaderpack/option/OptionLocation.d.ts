import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbsolutePackPath } from '../../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
export class OptionLocation extends Record {
    constructor(filePath: AbsolutePackPath, lineIndex: number)
    // private filePath: AbsolutePackPath;
    // private lineIndex: number;
    equals(arg0: Object | null): boolean;
    filePath(): AbsolutePackPath;
    hashCode(): number;
    lineIndex(): number;
    toString(): string;
}