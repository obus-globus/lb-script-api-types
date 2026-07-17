import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { Ticket } from '../../../../net/minecraft/server/level/Ticket.d.ts'
import type { TicketType } from '../../../../net/minecraft/server/level/TicketType.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { TicketStorage$ChunkUpdated } from '../../../../net/minecraft/world/level/TicketStorage$ChunkUpdated.d.ts'
import type { TicketStorage$TicketPredicate } from '../../../../net/minecraft/world/level/TicketStorage$TicketPredicate.d.ts'
import type { SavedData } from '../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class TicketStorage extends SavedData {
    static CODEC: Codec<TicketStorage>;
    static TYPE: SavedDataType<TicketStorage>;
    constructor()
    // private chunksWithForcedTickets: (Object | null)[];
    // private deactivatedTickets: JavaMap<any, any>;
    readonly loadingChunkUpdatedListener: (param0: number, param1: number, param2: boolean) => void;
    // private positionsWithExpiringTicket: JavaMap<any, any>;
    readonly simulationChunkUpdatedListener: (param0: number, param1: number, param2: boolean) => void;
    // private tickets: JavaMap<any, any>;
    activateAllDeactivatedTickets(): void;
    addTicket(key: number, ticket: Ticket): boolean;
    addTicket(ticket: Ticket, chunkPos: ChunkPos): void;
    addTicketWithRadius(type: TicketType, chunkPos: ChunkPos, radius: number): void;
    // private canTicketExpire(chunkMap: ChunkMap, ticket: Ticket, chunkPos: number): boolean;
    deactivateTicketsOnClosing(): void;
    // private forEachTicket(output: (param0: ChunkPos, param1: Ticket) => void): void;
    // private getAllChunksWithTicketThat(ticketCheck: (param0: Ticket) => boolean): (Object | null)[];
    getForceLoadedChunks(): (Object | null)[];
    // private getOrCreateTickets(key: number): Ticket[];
    getTicketDebugString(key: number, simulation: boolean): string;
    getTicketLevelAt(key: number, simulation: boolean): number;
    getTickets(key: number): Ticket[];
    hasTickets(): boolean;
    // private packTickets(): Pair<ChunkPos, Ticket>[];
    purgeStaleTickets(chunkMap: ChunkMap): void;
    removeTicket(key: number, ticket: Ticket): boolean;
    removeTicket(ticket: Ticket, chunkPos: ChunkPos): void;
    removeTicketIf(predicate: TicketStorage$TicketPredicate, removedTickets: JavaMap<any, any>): void;
    removeTicketWithRadius(type: TicketType, chunkPos: ChunkPos, radius: number): void;
    replaceTicketLevelOfType(newLevel: number, ticketType: TicketType): void;
    setLoadingChunkUpdatedListener(loadingChunkUpdatedListener: (param0: number, param1: number, param2: boolean) => void): void;
    setSimulationChunkUpdatedListener(simulationChunkUpdatedListener: (param0: number, param1: number, param2: boolean) => void): void;
    shouldKeepDimensionActive(): boolean;
    updateChunkForced(chunkPos: ChunkPos, forced: boolean): boolean;
    // private updateForcedChunks(): void;
}