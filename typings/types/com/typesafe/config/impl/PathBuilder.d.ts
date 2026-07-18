import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PathBuilder extends Object {
    constructor()
    // private keys: string[];
    // private result: Path;
    appendKey(arg0: string): void;
    appendPath(arg0: Path): void;
    // private checkCanAppend(): void;
    result(): Path;
}