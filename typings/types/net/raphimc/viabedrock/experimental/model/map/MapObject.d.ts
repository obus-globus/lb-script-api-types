import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MapDecoration } from '../../../../../../net/raphimc/viabedrock/experimental/model/map/MapDecoration.d.ts'
import type { MapTrackedObject } from '../../../../../../net/raphimc/viabedrock/experimental/model/map/MapTrackedObject.d.ts'
export class MapObject extends Object {
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: BlockPosition, arg4: (Object | null)[], arg5: number, arg6: MapTrackedObject[], arg7: MapDecoration[], arg8: number, arg9: number, arg10: number, arg11: number, arg12: number[], arg13: number)
    constructor(arg0: number, arg1: number)
    readonly colors: number[];
    readonly decorations: MapDecoration[];
    readonly dimension: number;
    readonly height: number;
    readonly id: number;
    // private java_id: number;
    readonly locked: boolean;
    readonly origin: BlockPosition;
    readonly scale: number;
    readonly trackedEntities: (Object | null)[];
    readonly trackedObjects: MapTrackedObject[];
    readonly width: number;
    // private xOffset: number;
    // private yOffset: number;
    getColors(): number[];
    getDecorations(): MapDecoration[];
    getDimension(): number;
    getHeight(): number;
    getId(): number;
    getJavaId(): number;
    getOrigin(): BlockPosition;
    getScale(): number;
    getTrackedEntities(): (Object | null)[];
    getTrackedObjects(): MapTrackedObject[];
    getWidth(): number;
    getXOffset(): number;
    getYOffset(): number;
    isLocked(): boolean;
    setColors(arg0: number[]): void;
    setDimension(arg0: number): void;
    setHeight(arg0: number): void;
    setId(arg0: number): void;
    setLocked(arg0: boolean): void;
    setOrigin(arg0: BlockPosition): void;
    setScale(arg0: number): void;
    setWidth(arg0: number): void;
    setXOffset(arg0: number): void;
    setYOffset(arg0: number): void;
}