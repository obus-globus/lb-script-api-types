import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Coordinates } from '../../../../../net/minecraft/commands/arguments/coordinates/Coordinates.d.ts'
import type { WorldCoordinate } from '../../../../../net/minecraft/commands/arguments/coordinates/WorldCoordinate.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WorldCoordinates extends Record implements Coordinates {
    static ZERO_ROTATION: WorldCoordinates;
    static absolute(paramx: number, paramy: number, paramz: number): WorldCoordinates;
    static absolute(paramrotation: Vec2): WorldCoordinates;
    static parseDouble(paramreader: StringReader, paramcenterCorrect: boolean): WorldCoordinates;
    static parseInt(paramreader: StringReader): WorldCoordinates;
    constructor(x: WorldCoordinate, y: WorldCoordinate, z: WorldCoordinate)
    // private x: WorldCoordinate;
    // private y: WorldCoordinate;
    // private z: WorldCoordinate;
    equals(o: Object | null): boolean;
    getBlockPos(sender: CommandSourceStack): BlockPos;
    getPosition(sender: CommandSourceStack): Vec3;
    getRotation(sender: CommandSourceStack): Vec2;
    hashCode(): number;
    isXRelative(): boolean;
    isYRelative(): boolean;
    isZRelative(): boolean;
    toString(): string;
    x(): WorldCoordinate;
    y(): WorldCoordinate;
    z(): WorldCoordinate;
}