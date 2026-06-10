import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { DynamicCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { SimpleCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricEntitySelectorParser } from '../../../../../net/fabricmc/fabric/api/command/v2/FabricEntitySelectorParser.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
import type { MinMaxBounds$FloatDegrees } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$FloatDegrees.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { EntitySelector } from '../../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PermissionSetSupplier } from '../../../../../net/minecraft/server/permissions/PermissionSetSupplier.d.ts'
import type { ToFloatFunction } from '../../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntitySelectorParser extends Object implements FabricEntitySelectorParser {
    static ERROR_EXPECTED_END_OF_OPTIONS: SimpleCommandExceptionType;
    static ERROR_EXPECTED_OPTION_VALUE: DynamicCommandExceptionType;
    static ERROR_INVALID_NAME_OR_UUID: SimpleCommandExceptionType;
    static ERROR_MISSING_SELECTOR_TYPE: SimpleCommandExceptionType;
    static ERROR_SELECTORS_NOT_ALLOWED: SimpleCommandExceptionType;
    static ERROR_UNKNOWN_SELECTOR_TYPE: DynamicCommandExceptionType;
    static ORDER_FURTHEST: (param0: Vec3, param1: Entity[]) => void;
    static ORDER_NEAREST: (param0: Vec3, param1: Entity[]) => void;
    static ORDER_RANDOM: (param0: Vec3, param1: Entity[]) => void;
    static SUGGEST_NOTHING: (param0: SuggestionsBuilder, param1: (param0: SuggestionsBuilder) => void) => CompletableFuture<Suggestions>;
    static SYNTAX_NOT: string;
    static SYNTAX_OPTIONS_KEY_VALUE_SEPARATOR: string;
    static SYNTAX_SELECTOR_START: string;
    static SYNTAX_TAG: string;
    static allowSelectors(paramsource: Object | null): boolean;
    static allowSelectors(paramsource: PermissionSetSupplier): boolean;
    constructor(reader: StringReader, allowSelectors: boolean)
    // private allowSelectors: boolean;
    readonly currentEntity: boolean;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    readonly distance: MinMaxBounds$Doubles;
    // private entityUUID: UUID;
    // private flags: (Object | null)[];
    readonly includesEntities: boolean;
    // private isLimited: boolean;
    // private isSorted: boolean;
    readonly level: MinMaxBounds$Ints;
    readonly maxResults: number;
    readonly order: (param0: Vec3, param1: Entity[]) => void;
    // private playerName: string;
    // private predicates: (param0: Entity) => boolean[];
    readonly reader: StringReader;
    readonly rotX: MinMaxBounds$FloatDegrees;
    readonly rotY: MinMaxBounds$FloatDegrees;
    // private startPosition: number;
    readonly suggestions: (param0: SuggestionsBuilder, param1: (param0: SuggestionsBuilder) => void) => CompletableFuture<Suggestions>;
    // private type: EntityType<Object>;
    // private typeInverse: boolean;
    // private usesSelectors: boolean;
    // private worldLimited: boolean;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    addPredicate(predicate: (param0: Entity) => boolean): void;
    // private createAabb(x: number, y: number, z: number): AABB;
    // private createRotationPredicate(range: MinMaxBounds$FloatDegrees, function_: (param0: Entity) => number): (param0: Entity) => boolean;
    fillSuggestions(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private finalizePredicates(): void;
    getCustomFlag(arg0: Identifier): boolean;
    getDeltaX(): number;
    getDeltaY(): number;
    getDeltaZ(): number;
    getDistance(): MinMaxBounds$Doubles;
    getLevel(): MinMaxBounds$Ints;
    getOrder(): (param0: Vec3, param1: Entity[]) => void;
    getReader(): StringReader;
    getRotX(): MinMaxBounds$FloatDegrees;
    getRotY(): MinMaxBounds$FloatDegrees;
    getSelector(): EntitySelector;
    getX(): number;
    getY(): number;
    getZ(): number;
    hasAdvancements(): boolean;
    hasGamemodeEquals(): boolean;
    hasGamemodeNotEquals(): boolean;
    hasNameEquals(): boolean;
    hasNameNotEquals(): boolean;
    hasScores(): boolean;
    hasTeamEquals(): boolean;
    hasTeamNotEquals(): boolean;
    isCurrentEntity(): boolean;
    isLimited(): boolean;
    isSorted(): boolean;
    isTag(): boolean;
    isTypeLimited(): boolean;
    isTypeLimitedInversely(): boolean;
    limitToType(type: EntityType<Object>): void;
    parse(): EntitySelector;
    parseNameOrUUID(): void;
    parseOptions(): void;
    parseSelector(): void;
    setCustomFlag(arg0: Identifier, arg1: boolean): void;
    setDeltaX(deltaX: number): void;
    setDeltaY(deltaY: number): void;
    setDeltaZ(deltaZ: number): void;
    setDistance(distance: MinMaxBounds$Doubles): void;
    setHasAdvancements(hasAdvancements: boolean): void;
    setHasGamemodeEquals(hasGamemodeEquals: boolean): void;
    setHasGamemodeNotEquals(hasGamemodeNotEquals: boolean): void;
    setHasNameEquals(hasNameEquals: boolean): void;
    setHasNameNotEquals(hasNameNotEquals: boolean): void;
    setHasScores(hasScores: boolean): void;
    setHasTeamEquals(hasTeamEquals: boolean): void;
    setHasTeamNotEquals(hasTeamNotEquals: boolean): void;
    setIncludesEntities(includesEntities: boolean): void;
    setLevel(level: MinMaxBounds$Ints): void;
    setLimited(limited: boolean): void;
    setMaxResults(maxResults: number): void;
    setOrder(order: (param0: Vec3, param1: Entity[]) => void): void;
    setRotX(rotX: MinMaxBounds$FloatDegrees): void;
    setRotY(rotY: MinMaxBounds$FloatDegrees): void;
    setSorted(sorted: boolean): void;
    setSuggestions(suggestions: (param0: SuggestionsBuilder, param1: (param0: SuggestionsBuilder) => void) => CompletableFuture<Suggestions>): void;
    setTypeLimitedInversely(): void;
    setWorldLimited(): void;
    setX(x: number): void;
    setY(y: number): void;
    setZ(z: number): void;
    shouldInvertValue(): boolean;
    // private suggestEquals(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private suggestName(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private suggestNameOrSelector(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private suggestOpenOptions(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private suggestOptionsKey(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private suggestOptionsKeyOrClose(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private suggestOptionsNextOrClose(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
    // private suggestSelector(builder: SuggestionsBuilder, names: (param0: SuggestionsBuilder) => void): CompletableFuture<Suggestions>;
}