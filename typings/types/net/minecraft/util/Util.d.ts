import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Function } from '../../../com/google/common/base/Function.d.ts'
import type { Ticker } from '../../../com/google/common/base/Ticker.d.ts'
import type { Escaper } from '../../../com/google/common/escape/Escaper.d.ts'
import type { DSL$TypeReference } from '../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { Typed } from '../../../com/mojang/datafixers/Typed.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ThreadInfo } from '../../../java/lang/management/ThreadInfo.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { CopyOption } from '../../../java/nio/file/CopyOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { FileSystemProvider } from '../../../java/nio/file/spi/FileSystemProvider.d.ts'
import type { DateTimeFormatter } from '../../../java/time/format/DateTimeFormatter.d.ts'
import type { FormatStyle } from '../../../java/time/format/FormatStyle.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function as Function_2 } from '../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Collector } from '../../../java/util/stream/Collector.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
import type { CharPredicate } from '../../../net/minecraft/CharPredicate.d.ts'
import type { TracingExecutor } from '../../../net/minecraft/TracingExecutor.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { SingleKeyCache } from '../../../net/minecraft/util/SingleKeyCache.d.ts'
import type { TimeSource$NanoTimeSource } from '../../../net/minecraft/util/TimeSource$NanoTimeSource.d.ts'
import type { Util$OS } from '../../../net/minecraft/util/Util$OS.d.ts'
import type { Property } from '../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class Util extends Object {
    static CONTROL_CHARACTER_ESCAPER: Escaper;
    static LINEAR_LOOKUP_THRESHOLD: number;
    static NANOS_PER_MILLI: number;
    static NIL_UUID: UUID;
    static TICKER: Ticker;
    static ZIP_FILE_SYSTEM_PROVIDER: FileSystemProvider;
    static allOf<T extends unknown>(): (param0: T) => boolean;
    static allOf<T extends unknown>(paramconditions: (param0: Object) => boolean[]): (param0: T) => boolean;
    static allOf<T extends unknown>(paramcondition: (param0: Object) => boolean): (param0: T) => boolean;
    static allOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean): (param0: T) => boolean;
    static allOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean): (param0: T) => boolean;
    static allOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean): (param0: T) => boolean;
    static allOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean, paramcondition5: (param0: Object) => boolean): (param0: T) => boolean;
    static allOfEnumExcept<T extends Enum<T>>(paramvalue: T): T[];
    static anyOf<T extends unknown>(): (param0: T) => boolean;
    static anyOf<T extends unknown>(paramconditions: (param0: Object) => boolean[]): (param0: T) => boolean;
    static anyOf<T extends unknown>(paramcondition1: (param0: Object) => boolean): (param0: T) => boolean;
    static anyOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean): (param0: T) => boolean;
    static anyOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean): (param0: T) => boolean;
    static anyOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean): (param0: T) => boolean;
    static anyOf<T extends unknown>(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean, paramcondition5: (param0: Object) => boolean): (param0: T) => boolean;
    static backgroundExecutor(): TracingExecutor;
    static blockUntilDone<T extends unknown>(paramtask: (param0: Executor) => T, paramcompletionCheck: (param0: T) => boolean): T;
    static blockUntilDone<T extends unknown>(paramtask: (param0: Executor) => CompletableFuture<T>): CompletableFuture<T>;
    static copyAndAdd<T extends unknown>(paramelement: T, paramlist: T[]): T[];
    static copyAndAdd<T extends unknown>(paramlist: T[], paramelement: T): T[];
    static copyAndAdd<T extends unknown>(paramlist: T[], ...paramelements: T[]): T[];
    static copyAndPut<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>, paramkey: K, paramvalue: V): JavaMap<K, V>;
    static copyBetweenDirs(paramsourceDir: Path, paramtargetDir: Path, paramsourcePath: Path): void;
    static createIndexIdentityLookup<T extends unknown>(paramvalues: T[]): (param0: T) => number;
    static createIndexLookup<T extends unknown>(paramvalues: T[]): (param0: T) => number;
    static describeError(paramerr: Throwable): string;
    static dumpThreadInfo(): ThreadInfo[];
    static fetchChoiceType(paramreference: DSL$TypeReference, paramname: string): Type<Object>;
    static findNextInIterable<T extends unknown>(paramcollection: T[], paramcurrent: T): T;
    static findPreviousInIterable<T extends unknown>(paramcollection: T[], paramcurrent: T): T;
    static fixedSize<T extends unknown>(paramlist: T[], paramsize: number): DataResult<T[]>;
    static fixedSize(paramstream: IntStream, paramsize: number): DataResult<number[]>;
    static fixedSize(paramstream: LongStream, paramsize: number): DataResult<number[]>;
    static getEpochMillis(): number;
    static getFilenameFormattedDateTime(): string;
    static getMillis(): number;
    static getNanos(): number;
    static getPlatform(): Util$OS;
    static getPropertyName<T extends Comparable<T>>(paramkey: Property<T>, paramvalue: Object): string;
    static getRandom<T extends unknown>(paramarray: T[], paramrandom: RandomSource): T;
    static getRandom<T extends unknown>(paramlist: T[], paramrandom: RandomSource): T;
    static getRandom(paramarray: number[], paramrandom: RandomSource): number;
    static getRandomSafe<T extends unknown>(paramlist: T[], paramrandom: RandomSource): Optional<T>;
    static getRegisteredName<T extends unknown>(paramregistry: T[], paramentry: T): string;
    static growByHalf(paramcurrentSize: number, paramminimalNewSize: number): number;
    static ifElse<T extends unknown>(paraminput: Optional<T>, paramonTrue: (param0: T) => void, paramonFalse: () => void): Optional<T>;
    static ioPool(): TracingExecutor;
    static isAarch64(): boolean;
    static isSymmetrical<T extends unknown>(paramwidth: number, paramheight: number, paramingredients: T[]): boolean;
    static join<T extends unknown>(paramfirst: T[], paramsecond: T[]): T[];
    static join<T extends unknown>(...paramlists: T[][]): T[];
    static localizedDateFormatter(paramformatStyle: FormatStyle): DateTimeFormatter;
    static logAndPauseIfInIde(parammessage: string): void;
    static logAndPauseIfInIde(parammessage: string, paramthrowable: Throwable): void;
    static make<T extends unknown>(paramt: T, paramconsumer: (param0: Object) => void): T;
    static make<T extends unknown>(paramfactory: () => T): T;
    static makeDescriptionId(paramprefix: string, paramlocation: Identifier): string;
    static makeEnumMap<K extends Enum<K>, V extends unknown>(paramkeyType: Class<K>, paramfunction: (param0: K) => V): JavaMap<K, V>;
    static mapValues<K extends unknown, V1 extends unknown, V2 extends unknown>(parammap: JavaMap<K, V1>, paramvalueMapper: (param0: Object) => V2): JavaMap<K, V2>;
    static mapValuesLazy<K extends unknown, V1 extends unknown, V2 extends unknown>(parammap: JavaMap<K, V1>, paramvalueMapper: (param0: V1) => V2): JavaMap<K, V2>;
    static maxAllowedExecutorThreads(): number;
    static memoize<T extends unknown, R extends unknown>(paramfunction: (param0: T) => R): (param0: T) => R;
    static memoize<T extends unknown, U extends unknown, R extends unknown>(paramfunction: (param0: T, param1: U) => R): (param0: T, param1: U) => R;
    static name<T extends unknown>(paramtask: () => T, paramnameGetter: () => string): () => T;
    static name(paramtask: () => void, paramnameGetter: () => string): () => void;
    static nonCriticalIoPool(): TracingExecutor;
    static offsetByCodepoints(paraminput: string, parampos: number, paramoffset: number): number;
    static parseAndValidateUntrustedUri(paramuri: string): URI;
    static pauseInIde<T extends Throwable>(paramt: T): T;
    static prefix(paramprefix: string, paramconsumer: (param0: string) => void): (param0: string) => void;
    static readTypedOrThrow<T extends unknown>(paramtype: Type<T>, paramdynamic: Dynamic<Object>): Typed<T>;
    static readTypedOrThrow<T extends unknown>(paramtype: Type<T>, paramdynamic: Dynamic<Object>, paramacceptPartial: boolean): Typed<T>;
    static runNamed(paramrunnable: () => void, paramname: string): void;
    static safeMoveFile(paramfromPath: Path, paramtoPath: Path, ...paramoptions: CopyOption[]): boolean;
    static safeReplaceFile(paramtargetPath: Path, paramnewPath: Path, parambackupPath: Path): void;
    static safeReplaceOrMoveFile(paramtargetPath: Path, paramnewPath: Path, parambackupPath: Path, paramnoRollback: boolean): boolean;
    static sanitizeName(paramvalue: string, paramisAllowedChar: (param0: string) => boolean): string;
    static sequence<V extends unknown>(paramfutures: CompletableFuture<V>[]): CompletableFuture<V[]>;
    static sequenceFailFast<V extends unknown>(paramfutures: CompletableFuture<V>[]): CompletableFuture<V[]>;
    static sequenceFailFastAndCancel<V extends unknown>(paramfutures: CompletableFuture<V>[]): CompletableFuture<V[]>;
    static setPause(parampauseFunction: (param0: string) => void): void;
    static setTimeSource(paramtimeSource: TimeSource$NanoTimeSource): void;
    static shuffle<T extends unknown>(paramlist: T[], paramrandom: RandomSource): void;
    static shuffledCopy<T extends unknown>(paramarray: T[], paramrandom: RandomSource): T[];
    static shuffledCopy<T extends unknown>(paramlist: T[], paramrandom: RandomSource): T[];
    static shutdownExecutors(): void;
    static shutdownTimeSource(): void;
    static singleKeyCache<K extends unknown, V extends unknown>(paramcomputeValueFunction: (param0: K) => V): SingleKeyCache<K, V>;
    static startTimerHackThread(): void;
    static throwAsRuntime(paramthrowable: Throwable): void;
    static timeSource(): TimeSource$NanoTimeSource;
    static toMap<K extends unknown, V extends unknown>(): Collector<Map$Entry<K, V>, Object, JavaMap<K, V>>;
    static toMutableList<T extends unknown>(): Collector<T, Object, T[]>;
    static toShuffledList<T extends unknown>(paramstream: Stream<T>, paramrandom: RandomSource): T[];
    static toShuffledList(paramstream: IntStream, paramrandom: RandomSource): (Object | null)[];
    static writeAndReadTypedOrThrow<A extends unknown, B extends unknown>(paramtyped: Typed<A>, paramnewType: Type<B>, paramfunction: (param0: Dynamic<Object>) => Dynamic<Object>): Typed<B>;
    constructor()
}