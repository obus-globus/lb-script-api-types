import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Position3V } from '../../../../../org/cube/converter/util/element/Position3V.d.ts'
import type { UVMap } from '../../../../../org/cube/converter/util/element/UVMap.d.ts'
export class Cube extends Object {
    constructor(arg0: Position3V, arg1: Position3V, arg2: Position3V, arg3: Position3V, arg4: boolean, arg5: UVMap)
    readonly mirror: boolean;
    readonly parent: string;
    readonly pivot: Position3V;
    readonly position: Position3V;
    readonly rotation: Position3V;
    readonly size: Position3V;
    readonly uvMap: UVMap;
    clampToJavaLimitedAngle(arg0: boolean): void;
    clone(): Cube;
    getAxis(): string;
    getAxisIndex(): number;
    getInflate(): number;
    getParent(): string;
    getPivot(): Position3V;
    getPosition(): Position3V;
    getRotation(): Position3V;
    getSize(): Position3V;
    getUvMap(): UVMap;
    inflate(): void;
    isMirror(): boolean;
    isThereOneAngleOnly(): boolean;
    setInflate(arg0: number): void;
    setParent(arg0: string): void;
}