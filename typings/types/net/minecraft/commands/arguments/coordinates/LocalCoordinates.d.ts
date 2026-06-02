import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Coordinates } from '../../../../../net/minecraft/commands/arguments/coordinates/Coordinates.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LocalCoordinates extends Record implements Coordinates {
    static PREFIX_LOCAL_COORDINATE: string;
    static parse(paramreader: StringReader): LocalCoordinates;
    // private forwards: number;
    // private left: number;
    // private up: number;
    equals(o: Object | null): boolean;
    forwards(): number;
    getBlockPos(sender: CommandSourceStack): BlockPos;
    getPosition(sender: CommandSourceStack): Vec3;
    getRotation(sender: CommandSourceStack): Vec2;
    hashCode(): number;
    isXRelative(): boolean;
    isYRelative(): boolean;
    isZRelative(): boolean;
    left(): number;
    toString(): string;
    up(): number;
}