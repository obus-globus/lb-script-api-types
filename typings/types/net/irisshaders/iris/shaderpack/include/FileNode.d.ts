import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbsolutePackPath } from '../../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
import type { LineTransform } from '../../../../../net/irisshaders/iris/shaderpack/transform/line/LineTransform.d.ts'
export class FileNode extends Object {
    constructor(arg0: AbsolutePackPath, arg1: string[])
    private constructor(arg0: AbsolutePackPath, arg1: string[], arg2: { [key: number]: AbsolutePackPath })
    readonly includes: { [key: number]: AbsolutePackPath };
    readonly lines: string[];
    readonly path: AbsolutePackPath;
    getIncludes(): { [key: number]: AbsolutePackPath };
    getLines(): string[];
    getPath(): AbsolutePackPath;
    map(arg0: LineTransform): FileNode;
}