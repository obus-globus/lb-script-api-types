import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SubstitutionExpression extends Object {
    constructor(arg0: Path, arg1: boolean)
    constructor(arg0: Path, arg1: boolean, arg2: boolean)
    // private listExpansion: boolean;
    // private optional: boolean;
    // private path: Path;
    changeListExpansion(arg0: boolean): SubstitutionExpression;
    changePath(arg0: Path): SubstitutionExpression;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    listExpansion(): boolean;
    optional(): boolean;
    path(): Path;
    toString(): string;
}