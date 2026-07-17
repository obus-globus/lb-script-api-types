import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { BooleanFunction } from '../../../../../net/fabricmc/fabric/api/util/BooleanFunction.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class TriState extends Enum<TriState> implements StringRepresentable {
    static CODEC: Codec<TriState>;
    static DEFAULT: TriState;
    static FALSE: TriState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TRUE: TriState;
    static fromSystemProperty(paramarg0: string): TriState;
    static of(paramarg0: boolean): TriState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TriState;
    static values(): TriState[];
    private constructor(arg2: string)
    // private name: string;
    get(): boolean;
    getBoxed(): boolean;
    getSerializedName(): string;
    map<T extends unknown>(arg0: (param0: boolean) => T): Optional<T>;
    orElse(arg0: boolean): boolean;
    orElseGet(arg0: () => boolean): boolean;
    orElseThrow<X extends Throwable>(arg0: () => X): boolean;
    name(): "FALSE" | "DEFAULT" | "TRUE";
}