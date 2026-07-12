import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface DebugHandler extends Object{
    addPacketTypeNameToLog(arg0: string): void;
    addPacketTypeToLog(arg0: PacketType): void;
    clearPacketTypesToLog(): void;
    enableAndLogTypes(...arg0: PacketType[]): void;
    enabled(): boolean;
    error(arg0: string, arg1: Throwable): void;
    logPostPacketTransform(): boolean;
    logPrePacketTransform(): boolean;
    removePacketTypeNameToLog(arg0: string): boolean;
    removePacketTypeToLog(arg0: PacketType): boolean;
    setEnabled(arg0: boolean): void;
    setLogPacketTransform(arg0: boolean): void;
    setLogPostPacketTransform(arg0: boolean): void;
    setLogPrePacketTransform(arg0: boolean): void;
    shouldLog(arg0: PacketWrapper, arg1: Direction): boolean;
}