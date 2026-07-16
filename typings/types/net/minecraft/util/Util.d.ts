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
import type { URI } from '../../../java/net/URI.d.ts'
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
    static allOf(): (param0: Object | null) => boolean;
    static allOf(paramconditions: (param0: Object) => boolean[]): (param0: Object | null) => boolean;
    static allOf(paramcondition: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static allOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static allOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static allOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static allOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean, paramcondition5: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static allOf(paramconditions: Object | null): (param0: Object | null) => boolean;
    static allOfEnumExcept(paramvalue: Object | null): (Object | null)[];
    static anyOf(): (param0: Object | null) => boolean;
    static anyOf(paramconditions: (param0: Object) => boolean[]): (param0: Object | null) => boolean;
    static anyOf(paramcondition1: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static anyOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static anyOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static anyOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static anyOf(paramcondition1: (param0: Object) => boolean, paramcondition2: (param0: Object) => boolean, paramcondition3: (param0: Object) => boolean, paramcondition4: (param0: Object) => boolean, paramcondition5: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static anyOf(paramconditions: Object | null): (param0: Object | null) => boolean;
    static backgroundExecutor(): TracingExecutor;
    static blockUntilDone(paramtask: (param0: Executor) => Object | null, paramcompletionCheck: (param0: Object | null) => boolean): Object | null;
    static blockUntilDone(paramtask: (param0: Executor) => CompletableFuture<Object>): CompletableFuture<Object>;
    static copyAndAdd(paramelement: Object | null, paramlist: (Object | null)[]): (Object | null)[];
    static copyAndAdd(paramlist: (Object | null)[], paramelement: Object | null): (Object | null)[];
    static copyAndAdd(paramlist: (Object | null)[], paramelements: Object | null): (Object | null)[];
    static copyAndPut(parammap: Map<Object | null, Object | null>, paramkey: Object | null, paramvalue: Object | null): Map<Object | null, Object | null>;
    static copyBetweenDirs(paramsourceDir: Path, paramtargetDir: Path, paramsourcePath: Path): void;
    static createIndexIdentityLookup(paramvalues: (Object | null)[]): (param0: Object | null) => number;
    static createIndexLookup(paramvalues: (Object | null)[]): (param0: Object | null) => number;
    static describeError(paramerr: Throwable): string;
    static dumpThreadInfo(): (Object | null)[];
    static fetchChoiceType(paramreference: DSL$TypeReference, paramname: string): Type<Object>;
    static findNextInIterable(paramcollection: (Object | null)[], paramcurrent: Object | null): Object | null;
    static findPreviousInIterable(paramcollection: (Object | null)[], paramcurrent: Object | null): Object | null;
    static fixedSize(paramlist: (Object | null)[], paramsize: number): DataResult<(Object | null)[]>;
    static fixedSize(paramstream: IntStream, paramsize: number): DataResult<number[]>;
    static fixedSize(paramstream: LongStream, paramsize: number): DataResult<number[]>;
    static getEpochMillis(): number;
    static getFilenameFormattedDateTime(): string;
    static getMillis(): number;
    static getNanos(): number;
    static getPlatform(): Util$OS;
    static getPropertyName(paramkey: Property<any>, paramvalue: Object): string;
    static getRandom(paramarray: Object | null, paramrandom: RandomSource): Object | null;
    static getRandom(paramlist: (Object | null)[], paramrandom: RandomSource): Object | null;
    static getRandom(paramarray: number[], paramrandom: RandomSource): number;
    static getRandomSafe(paramlist: (Object | null)[], paramrandom: RandomSource): Optional<Object>;
    static getRegisteredName(paramregistry: (Object | null)[], paramentry: Object | null): string;
    static growByHalf(paramcurrentSize: number, paramminimalNewSize: number): number;
    static ifElse(paraminput: Optional<Object>, paramonTrue: (param0: Object | null) => void, paramonFalse: () => void): Optional<Object>;
    static ioPool(): TracingExecutor;
    static isAarch64(): boolean;
    static isSymmetrical(paramwidth: number, paramheight: number, paramingredients: (Object | null)[]): boolean;
    static join(paramfirst: (Object | null)[], paramsecond: (Object | null)[]): (Object | null)[];
    static join(paramlists: Object | null): (Object | null)[];
    static localizedDateFormatter(paramformatStyle: FormatStyle): DateTimeFormatter;
    static logAndPauseIfInIde(parammessage: string): void;
    static logAndPauseIfInIde(parammessage: string, paramthrowable: Throwable): void;
    static make(paramt: Object | null, paramconsumer: (param0: Object) => void): Object | null;
    static make(paramfactory: () => Object | null): Object | null;
    static makeDescriptionId(paramprefix: string, paramlocation: Identifier): string;
    static makeEnumMap(paramkeyType: Class<Object>, paramfunction: (param0: Object | null) => Object | null): Map<Object | null, Object | null>;
    static mapValues(parammap: Map<Object | null, Object | null>, paramvalueMapper: (param0: Object) => Object | null): Map<Object | null, Object | null>;
    static mapValuesLazy(parammap: Map<Object | null, Object | null>, paramvalueMapper: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static maxAllowedExecutorThreads(): number;
    static memoize(paramfunction: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    static memoize(paramfunction: (param0: Object | null, param1: Object | null) => Object | null): (param0: Object | null, param1: Object | null) => Object | null;
    static name(paramtask: () => Object | null, paramnameGetter: () => string): () => Object | null;
    static name(paramtask: () => void, paramnameGetter: () => string): () => void;
    static nonCriticalIoPool(): TracingExecutor;
    static offsetByCodepoints(paraminput: string, parampos: number, paramoffset: number): number;
    static parseAndValidateUntrustedUri(paramuri: string): URI;
    static pauseInIde(paramt: Throwable | null): Throwable | null;
    static prefix(paramprefix: string, paramconsumer: (param0: string) => void): (param0: string) => void;
    static readTypedOrThrow(paramtype: Type<Object>, paramdynamic: Dynamic<Object>): Typed<Object>;
    static readTypedOrThrow(paramtype: Type<Object>, paramdynamic: Dynamic<Object>, paramacceptPartial: boolean): Typed<Object>;
    static runNamed(paramrunnable: () => void, paramname: string): void;
    static safeMoveFile(paramfromPath: Path, paramtoPath: Path, ...paramoptions: (Object | null)[]): boolean;
    static safeReplaceFile(paramtargetPath: Path, paramnewPath: Path, parambackupPath: Path): void;
    static safeReplaceOrMoveFile(paramtargetPath: Path, paramnewPath: Path, parambackupPath: Path, paramnoRollback: boolean): boolean;
    static sanitizeName(paramvalue: string, paramisAllowedChar: (param0: string) => boolean): string;
    static sequence(paramfutures: CompletableFuture<Object>[]): CompletableFuture<(Object | null)[]>;
    static sequenceFailFast(paramfutures: CompletableFuture<Object>[]): CompletableFuture<(Object | null)[]>;
    static sequenceFailFastAndCancel(paramfutures: CompletableFuture<Object>[]): CompletableFuture<(Object | null)[]>;
    static setPause(parampauseFunction: (param0: string) => void): void;
    static setTimeSource(paramtimeSource: TimeSource$NanoTimeSource): void;
    static shuffle(paramlist: (Object | null)[], paramrandom: RandomSource): void;
    static shuffledCopy(paramarray: Object | null, paramrandom: RandomSource): (Object | null)[];
    static shuffledCopy(paramlist: (Object | null)[], paramrandom: RandomSource): (Object | null)[];
    static shutdownExecutors(): void;
    static shutdownTimeSource(): void;
    static singleKeyCache(paramcomputeValueFunction: (param0: Object | null) => Object | null): SingleKeyCache<Object, Object>;
    static startTimerHackThread(): void;
    static throwAsRuntime(paramthrowable: Throwable): void;
    static timeSource(): TimeSource$NanoTimeSource;
    static toMap(): Collector<Map$Entry<Object, Object>, Object, Map<Object | null, Object | null>>;
    static toMutableList(): Collector<Object, Object, (Object | null)[]>;
    static toShuffledList(paramstream: Stream<Object>, paramrandom: RandomSource): (Object | null)[];
    static toShuffledList(paramstream: IntStream, paramrandom: RandomSource): (Object | null)[];
    static writeAndReadTypedOrThrow(paramtyped: Typed<Object>, paramnewType: Type<Object>, paramfunction: (param0: Dynamic<Object>) => Object | null): Typed<Object>;
    constructor()
}