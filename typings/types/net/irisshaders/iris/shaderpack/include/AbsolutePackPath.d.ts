import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbsolutePackPath extends Object {
    static fromAbsolutePath(paramarg0: string): AbsolutePackPath;
    private constructor(arg0: string)
    // private path: string;
    equals(arg0: Object | null): boolean;
    getPathString(): string;
    hashCode(): number;
    parent(): Optional<AbsolutePackPath>;
    resolve(arg0: string): AbsolutePackPath;
    resolved(arg0: Path[]): Path[];
    toString(): string;
}