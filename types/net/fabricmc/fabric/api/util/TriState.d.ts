import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BooleanFunction } from '../../../../../net/fabricmc/fabric/api/util/BooleanFunction.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class TriState extends Enum<TriState> implements StringRepresentable {
    static CODEC: Codec<TriState>;
    static DEFAULT: TriState;
    static FALSE: TriState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TRUE: TriState;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromSystemProperty(paramarg0: string): TriState;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static of(paramarg0: boolean): TriState;
    static of(paramarg0: boolean): TriState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TriState;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private name: string;
    get(): boolean;
    getBoxed(): boolean;
    getSerializedName(): string;
    map(arg0: (param0: T) => unknown): Optional<T>;
    orElse(arg0: boolean): boolean;
    orElseGet(arg0: () => kotlin.Boolean): boolean;
    orElseThrow(arg0: () => X): boolean;
    name(): "FALSE" | "DEFAULT" | "TRUE";
}