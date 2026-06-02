import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TaskQueueType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/TaskQueueType.d.ts'
export class ChunkUpdateTypes extends Object {
    static IMPORTANT: number;
    static INITIAL_BUILD: number;
    static REBUILD: number;
    static SORT: number;
    static getQueueType(paramarg0: number, paramarg1: TaskQueueType, paramarg2: TaskQueueType): TaskQueueType;
    static isImportant(paramarg0: number): boolean;
    static isInitialBuild(paramarg0: number): boolean;
    static isRebuild(paramarg0: number): boolean;
    static isRebuildWithSort(paramarg0: number): boolean;
    static isSort(paramarg0: number): boolean;
    static join(paramarg0: number, paramarg1: number): number;
    constructor()
}