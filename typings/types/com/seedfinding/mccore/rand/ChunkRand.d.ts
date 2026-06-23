import type { ChunkRand$Debugger } from '../../../../com/seedfinding/mccore/rand/ChunkRand$Debugger.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkRand extends JRand {
    static getInt(paramarg0: ChunkRand, paramarg1: number, paramarg2: number): number;
    static getRandom(paramarg0: Object | null, paramarg1: ChunkRand): Object | null;
    static nextBoolean(paramarg0: number): boolean;
    static nextDouble(paramarg0: number): number;
    static nextFloat(paramarg0: number): number;
    static nextInt(paramarg0: number): number;
    static nextInt(paramarg0: number, paramarg1: number): number;
    static nextLong(paramarg0: number): number;
    static ofInternalSeed(paramarg0: number): JRand;
    static ofScrambledSeed(paramarg0: number): JRand;
    static shuffle(paramarg0: Object[], paramarg1: JRand): void;
    static swap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static swap(paramarg0: Object[], paramarg1: number, paramarg2: number): void;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    asChunkRandDebugger(): ChunkRand$Debugger;
    getInt(arg0: number, arg1: number): number;
    getRandom<T extends unknown>(arg0: T[]): T;
    setBaseStoneSeed(arg0: number, arg1: number, arg2: number, arg3: number): number;
    setCarverSeed(arg0: number, arg1: number, arg2: number, arg3: MCVersion): number;
    setDecoratorSeed(arg0: number, arg1: number, arg2: MCVersion): number;
    setDecoratorSeed(arg0: number, arg1: number, arg2: number, arg3: MCVersion): number;
    setDecoratorSeed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MCVersion): number;
    setDecoratorSeed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: MCVersion): number;
    setPopulationSeed(arg0: number, arg1: number, arg2: number, arg3: MCVersion): number;
    setPositionSeed(arg0: BPos, arg1: MCVersion): number;
    setPositionSeed(arg0: number, arg1: number, arg2: number, arg3: MCVersion): number;
    setRegionSeed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MCVersion): number;
    setSlimeSeed(arg0: number, arg1: number, arg2: number, arg3: MCVersion): number;
    setSlimeSeed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MCVersion): number;
    setTerrainSeed(arg0: number, arg1: number, arg2: MCVersion): number;
    setWeakSeed(arg0: number, arg1: number, arg2: number, arg3: MCVersion): number;
}