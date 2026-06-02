import type { BlockPalette } from '../../../../com/seedfinding/mccore/block/BlockPalette.d.ts'
import type { Tile } from '../../../../com/seedfinding/mccore/block/Tile.d.ts'
import type { PieceInfo$TileView } from '../../../../com/seedfinding/mccore/gen/PieceInfo$TileView.d.ts'
import type { NBTCompound } from '../../../../com/seedfinding/mccore/nbt/tag/NBTCompound.d.ts'
import type { Vec3i } from '../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PieceInfo extends Object {
    static TILE_SORTER: (param0: Tile) => kotlin.Boolean;
    constructor(arg0: MCVersion)
    blockEntities: Map<BPos, NBTCompound>;
    blockIDs: Map<BPos, number>;
    dataVersion: number;
    palettes: BlockPalette[];
    size: Vec3i;
    readonly version: MCVersion;
    fromTag(arg0: NBTCompound): PieceInfo;
    getBlockEntities(): Map<BPos, NBTCompound>;
    getBlockIDs(): Map<BPos, number>;
    getDataVersion(): number;
    getPalette(): BlockPalette;
    getPalettes(): BlockPalette[];
    getSize(): Vec3i;
    getTiles(): PieceInfo$TileView[];
    getVersion(): MCVersion;
    setDataVersion(arg0: number): void;
    setSize(arg0: Vec3i): void;
    setSize(arg0: number, arg1: number, arg2: number): void;
    toTag(): NBTCompound;
}