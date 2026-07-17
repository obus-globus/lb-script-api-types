import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Identifier } from '../../../../com/seedfinding/mccore/util/data/Identifier.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { BiPredicate } from '../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Block extends Object {
    static IS_AIR: (param0: MCVersion, param1: Block) => boolean;
    static IS_RANDOM_TICKING: (param0: MCVersion, param1: Block) => boolean;
    static RANDOM_TICKING: JavaMap<any, any>;
    constructor(arg0: MCVersion, arg1: number, arg2: string, arg3: MCVersion)
    constructor(arg0: MCVersion, arg1: number, arg2: string, arg3: MCVersion, arg4: number)
    readonly id: number;
    readonly implementedVersion: MCVersion;
    readonly meta: number;
    readonly name: Identifier;
    readonly version: MCVersion;
    getId(): number;
    getIdentifier(): Identifier;
    getImplementedVersion(): MCVersion;
    getMeta(): number;
    getName(): string;
    getRegistryName(): string;
    getVersion(): MCVersion;
    hashCode(): number;
    toString(): string;
}