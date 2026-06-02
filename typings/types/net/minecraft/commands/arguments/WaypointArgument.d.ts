import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { WaypointTransmitter } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter.d.ts'
export class WaypointArgument extends Object {
    static ERROR_NOT_A_WAYPOINT: SimpleCommandExceptionType;
    static getWaypoint(paramcontext: CommandContext<CommandSourceStack>, paramname: string): WaypointTransmitter;
    constructor()
}