import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketListener } from '../../../../../net/minecraft/network/PacketListener.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { ServerboundPingRequestPacket } from '../../../../../net/minecraft/network/protocol/ping/ServerboundPingRequestPacket.d.ts'
export interface ServerPingPacketListener extends Object, PacketListener{
    createDisconnectionInfo(reason: Component, cause: Throwable): DisconnectionDetails;
    fillCrashReport(crashReport: CrashReport): void;
    fillListenerSpecificCrashDetails(report: CrashReport, connectionDetails: CrashReportCategory): void;
    flow(): PacketFlow;
    handlePingRequest(packet: ServerboundPingRequestPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    onPacketError(packet: Packet<PacketListener>, cause: Exception): void;
    protocol(): ConnectionProtocol;
    shouldHandleMessage(packet: Packet<any>): boolean;
}