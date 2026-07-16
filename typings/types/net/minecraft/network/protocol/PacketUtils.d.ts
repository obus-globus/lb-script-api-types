import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { ReportedException } from '../../../../net/minecraft/ReportedException.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { PacketProcessor } from '../../../../net/minecraft/network/PacketProcessor.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class PacketUtils extends Object {
    static ensureRunningOnSameThread<T extends PacketListener>(parampacket: Packet<T>, paramlistener: T, parampacketProcessor: PacketProcessor): void;
    static ensureRunningOnSameThread<T extends PacketListener>(parampacket: Packet<T>, paramlistener: T, paramlevel: ServerLevel): void;
    static fillCrashReport<T extends PacketListener>(paramreport: CrashReport, paramlistener: T, parampacket: Packet<T>): void;
    static makeReportedException<T extends PacketListener>(paramcause: Exception, parampacket: Packet<T>, paramlistener: T): ReportedException;
    constructor()
}