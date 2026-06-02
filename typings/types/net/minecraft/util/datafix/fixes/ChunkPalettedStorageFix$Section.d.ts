import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChunkPalettedStorageFix$Section extends Object {
    constructor(section: Dynamic<Object>)
    // private buffer: number[];
    // private hasData: boolean;
    // private listTag: Dynamic<Object>[];
    // private palette: Dynamic<Object>[];
    // private section: Dynamic<Object>;
    // private seen: Dynamic<Object>[];
    // private toFix: Int2ObjectMap<(Object | null)[]>;
    // private update: (Object | null)[];
    y: number;
    // private addFix(id: number, position: number): void;
    getBlock(pos: number): Dynamic<Object>;
    setBlock(idx: number, blockState: Dynamic<Object>): void;
    upgrade(sides: number): number;
    write(): Dynamic<Object>;
}