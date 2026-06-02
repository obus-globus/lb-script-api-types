import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModelDispatcher } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelDispatcher.d.ts'
export class BlockStateModelLoader$LoadedBlockStateModelDispatcher extends Record {
    private constructor(source: string, contents: BlockStateModelDispatcher)
    // private contents: BlockStateModelDispatcher;
    // private source: string;
    contents(): BlockStateModelDispatcher;
    equals(o: Object | null): boolean;
    hashCode(): number;
    source(): string;
    toString(): string;
}