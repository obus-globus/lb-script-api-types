import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MapIcon } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/model/MapIcon.d.ts'
export class MapData extends Object {
    constructor()
    readonly mapIcons: MapIcon[];
    readonly scale: number;
    getMapIcons(): MapIcon[];
    getScale(): number;
    setMapIcons(arg0: MapIcon[]): void;
    setScale(arg0: number): void;
}