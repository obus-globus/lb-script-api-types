import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModOrigin } from '../../../../../net/fabricmc/loader/api/metadata/ModOrigin.d.ts'
import type { ModOrigin$Kind } from '../../../../../net/fabricmc/loader/api/metadata/ModOrigin$Kind.d.ts'
export class ModOriginImpl extends Object implements ModOrigin {
    constructor()
    constructor(arg0: string, arg1: string)
    constructor(arg0: Path[][])
    readonly kind: ModOrigin$Kind;
    readonly parentModId: string;
    readonly parentSubLocation: string;
    readonly paths: Path[][];
    getKind(): ModOrigin$Kind;
    getParentModId(): string;
    getParentSubLocation(): string;
    getPaths(): Path[][];
    toString(): string;
}