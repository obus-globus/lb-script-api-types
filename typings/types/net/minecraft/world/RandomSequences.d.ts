import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { RandomSequence } from '../../../net/minecraft/world/RandomSequence.d.ts'
import type { SavedData } from '../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class RandomSequences extends SavedData {
    static CODEC: Codec<RandomSequences>;
    static TYPE: SavedDataType<RandomSequences>;
    constructor()
    // private includeSequenceId: boolean;
    // private includeWorldSeed: boolean;
    // private salt: number;
    // private sequences: Map<Identifier, RandomSequence>;
    clear(): number;
    // private createSequence(key: Identifier, worldSeed: number): RandomSequence;
    // private createSequence(key: Identifier, worldSeed: number, salt: number, includeWorldSeed: boolean, includeSequenceId: boolean): RandomSequence;
    forAllSequences(consumer: (param0: Identifier, param1: RandomSequence) => void): void;
    get(key: Identifier, worldSeed: number): RandomSource;
    // private includeSequenceId(): boolean;
    // private includeWorldSeed(): boolean;
    reset(id: Identifier, worldSeed: number): void;
    reset(id: Identifier, worldSeed: number, salt: number, includeWorldSeed: boolean, includeSequenceId: boolean): void;
    // private salt(): number;
    setSeedDefaults(salt: number, includeWorldSeed: boolean, includeSequenceId: boolean): void;
}