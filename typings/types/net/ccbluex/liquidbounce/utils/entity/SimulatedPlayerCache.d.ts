import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../../kotlin/sequences/Sequence.d.ts'
import type { SimulatedPlayer } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { SimulatedPlayerSnapshot } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayerSnapshot.d.ts'
export class SimulatedPlayerCache extends Object {
    constructor(simulatedPlayer: SimulatedPlayer)
    // private currentSimulationStep: number;
    // private lock: ReentrantReadWriteLock;
    // private simulatedPlayer: SimulatedPlayer;
    /*not mapped: */ getSimulatedPlayer$liquidbounce(): SimulatedPlayer;
    // private simulationSteps: SimulatedPlayerSnapshot[];
    getSnapshotAt(ticks: number): SimulatedPlayerSnapshot;
    getSnapshotsBetween(tickRange: { start: number; endInclusive: number; step: number }): SimulatedPlayerSnapshot[];
    simulate(): Sequence<SimulatedPlayerSnapshot>;
    simulateBetween(tickRange: { start: number; endInclusive: number; step: number }): Sequence<SimulatedPlayerSnapshot>;
    simulateUntil(ticks: number): void;
}