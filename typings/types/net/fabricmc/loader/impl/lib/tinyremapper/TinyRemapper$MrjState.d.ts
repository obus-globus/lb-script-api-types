import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { ClassInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/ClassInstance.d.ts'
import type { TinyRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper.d.ts'
import type { TrEnvironment } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrEnvironment.d.ts'
import type { TrLogger } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { TrMember } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
export class TinyRemapper$MrjState extends Object implements TrEnvironment {
    constructor(arg0: TinyRemapper, arg1: number)
    // private classes: JavaMap<string, ClassInstance>;
    // private dirty: boolean;
    readonly remapper: AsmRemapper;
    // private tr: TinyRemapper;
    // private version: number;
    getClass(arg0: string): ClassInstance;
    getLogger(): TrLogger;
    getMrjVersion(): number;
    getRemapper(): AsmRemapper;
    propagate(arg0: TrMember, arg1: string): void;
}